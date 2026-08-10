import { useEffect, useRef } from 'react';
import { TRAIL_POOL } from '../stickers';

/**
 * Sticker trail — the cursor drops cut-outs as it travels.
 *
 * Deliberately NOT a cursor-follower dot: nothing lags behind the pointer,
 * nothing replaces the native cursor. The pointer stays exactly where the OS
 * put it (a replaced cursor is an accessibility problem and reads as a 2015
 * portfolio tic); what changes is that the page remembers where the pointer
 * has been for about a second.
 *
 * Spawning is keyed to *distance travelled*, not to time or to event count —
 * so the density is the same whether you flick across the page or drag slowly,
 * and a stationary pointer emits nothing at all.
 *
 * Nodes are created and removed directly rather than held in React state: at
 * ~8 spawns/second a state update per sticker would re-render the tree for a
 * purely decorative layer.
 */

const SPAWN_DISTANCE = 90; // px of travel between drops
const LIFETIME = 950; // ms, matches the CSS animation
const MAX_LIVE = 12; // hard cap; oldest is evicted first
// Small on purpose: at 34–58px the trail sat on top of body copy and you
// couldn't read through it. These read as confetti beside the pointer rather
// than as objects covering the page.
const MIN_SIZE = 18;
const MAX_SIZE = 30;

export default function StickerTrail() {
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return undefined;

    const fine = window.matchMedia('(pointer: fine)');
    const still = window.matchMedia('(prefers-reduced-motion: reduce)');

    let lastX = null;
    let lastY = null;
    let travelled = 0;
    let lastIndex = -1;
    const live = [];

    const clear = () => {
      live.splice(0).forEach(({ node, timer }) => {
        clearTimeout(timer);
        node.remove();
      });
    };

    const drop = (x, y) => {
      // Never the same sticker twice running — a repeat reads as a bug.
      let i = Math.floor(Math.random() * TRAIL_POOL.length);
      if (i === lastIndex) i = (i + 1) % TRAIL_POOL.length;
      lastIndex = i;
      const pick = TRAIL_POOL[i];

      const size = MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE);
      const node = document.createElement('img');
      node.className = 'trail__sticker';
      node.src = pick.src;
      node.alt = '';
      node.decoding = 'async';
      // Landscape cut-outs get sized on width, portrait ones on height, so a
      // wide sticker (the eyes, the horses) doesn't dwarf a tall one.
      const ratio = pick.w / pick.h;
      const w = ratio >= 1 ? size : size * ratio;
      const h = ratio >= 1 ? size / ratio : size;
      node.style.width = `${w}px`;
      node.style.height = `${h}px`;
      node.style.left = `${x - w / 2}px`;
      node.style.top = `${y - h / 2}px`;
      node.style.setProperty('--tilt', `${(Math.random() * 50 - 25).toFixed(1)}deg`);

      layer.appendChild(node);

      const entry = {
        node,
        timer: setTimeout(() => {
          node.remove();
          const at = live.indexOf(entry);
          if (at !== -1) live.splice(at, 1);
        }, LIFETIME),
      };
      live.push(entry);

      while (live.length > MAX_LIVE) {
        const oldest = live.shift();
        clearTimeout(oldest.timer);
        oldest.node.remove();
      }
    };

    const onMove = (e) => {
      if (lastX === null) {
        lastX = e.clientX;
        lastY = e.clientY;
        return;
      }
      travelled += Math.hypot(e.clientX - lastX, e.clientY - lastY);
      lastX = e.clientX;
      lastY = e.clientY;
      if (travelled >= SPAWN_DISTANCE) {
        travelled = 0;
        drop(e.clientX, e.clientY);
      }
    };

    // A pointer that leaves the window shouldn't resume mid-stride when it
    // comes back — that produces one giant jump and a burst of stickers.
    const onLeave = () => {
      lastX = null;
      lastY = null;
      travelled = 0;
    };

    const sync = () => {
      const on = fine.matches && !still.matches;
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      if (on) {
        window.addEventListener('pointermove', onMove, { passive: true });
        document.addEventListener('pointerleave', onLeave);
      } else {
        clear();
      }
    };

    sync();
    fine.addEventListener('change', sync);
    still.addEventListener('change', sync);

    return () => {
      fine.removeEventListener('change', sync);
      still.removeEventListener('change', sync);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      clear();
    };
  }, []);

  return <div className="trail" ref={layerRef} aria-hidden="true" />;
}
