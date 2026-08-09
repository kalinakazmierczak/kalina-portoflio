import { useState, useEffect } from 'react';

/**
 * "what i've been pinning" — recent Pinterest pins in a masonry grid.
 *
 * Same architecture as SpotifyNowPlaying: hits a Netlify function, degrades
 * quietly. The function always answers 200 with a usable body, so the only
 * failure this handles is the network itself.
 *
 * Provider selection lives entirely server-side in netlify/functions/pinning.js
 * — this component never knows whether it rendered live pins or mock ones,
 * beyond the small source note it prints under the grid.
 */

// Washes cycle in a fixed order so the rhythm is deterministic, not random.
const WASHES = ['olive', 'rust', 'cherry', 'slate'];

export default function PinBoard() {
  const [pins, setPins] = useState([]);
  const [source, setSource] = useState(null);
  const [state, setState] = useState('loading');

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch('/.netlify/functions/pinning');
        const data = await res.json();
        if (cancelled) return;
        setPins(data.pins || []);
        setSource(data.source || null);
        setState((data.pins || []).length ? 'ready' : 'empty');
      } catch {
        if (!cancelled) setState('empty');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (state === 'loading') {
    return (
      <div className="pins__grid" aria-busy="true">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className={`pin pin--skeleton wash-${WASHES[i % WASHES.length]}`}
            style={{ aspectRatio: i % 3 === 1 ? '2 / 3' : '4 / 3' }}
          />
        ))}
      </div>
    );
  }

  if (state === 'empty') {
    return (
      <p className="pins__fallback">
        the board&rsquo;s not loading right now — it&rsquo;s all over on{' '}
        <a
          className="link"
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pinterest
        </a>
        .
      </p>
    );
  }

  return (
    <>
      <ul className="pins__grid">
        {pins.map((pin, i) => (
          <li key={pin.id} className={`pin wash-${WASHES[i % WASHES.length]}`}>
            <a
              className="pin__link"
              href={pin.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="pin__img"
                src={pin.image}
                alt={pin.title}
                width={pin.width || 900}
                height={pin.height || 700}
                /* The first row is visible as soon as the module is reached —
                   lazy-loading it just buys a blank-then-pop. */
                loading={i < 4 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <span className="pin__meta">
                <span className="pin__title">{pin.title}</span>
                <span className="pin__board">{pin.board}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      {source === 'mock' && (
        <p className="pins__note">
          placeholder board — live pins land here once the feed is connected.
        </p>
      )}
    </>
  );
}
