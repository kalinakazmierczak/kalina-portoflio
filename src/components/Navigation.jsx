import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Sticker from './Sticker';

/**
 * N3 · Side-rail — a fixed vertical strip of section links, each tagged with
 * one of Kalina's cut-outs.
 *
 * The rail is 9.5rem wide rather than icon-width on purpose: a sticker-only
 * rail would put every destination's name behind a hover, and hover-only
 * affordances give touch and keyboard users nothing.
 *
 * Below 64rem there is no margin to park a rail in, so it becomes a sticky
 * top bar with the links in a horizontal scroller.
 */

const SECTIONS = [
  { id: 'hello', label: 'hello', sticker: 'kitty' },
  { id: 'now', label: 'now', sticker: 'bee' },
  { id: 'work', label: 'work', sticker: 'ctrl' },
  { id: 'projects', label: 'projects', sticker: 'horses' },
  { id: 'writing', label: 'writing', sticker: 'reader' },
  { id: 'ask', label: 'ask', sticker: 'snoopy' },
  { id: 'contact', label: 'contact', sticker: 'lotus' },
];

export default function Navigation() {
  const [active, setActive] = useState('hello');

  useEffect(() => {
    // A band across the middle of the viewport decides what's "current".
    // Watching intersection rather than scroll position keeps this off the
    // main thread and means it stays correct when sections change height.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="rail" aria-label="Sections">
      <a className="rail__brand" href="#hello">
        kalina kazmierczak<span className="dot">.</span>
      </a>

      <ul className="rail__list">
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              className="rail__link"
              href={`#${section.id}`}
              aria-current={active === section.id ? 'true' : undefined}
            >
              <Sticker of={section.sticker} className="rail__sticker" />
              <span className="rail__label">{section.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="rail__foot">
        <ThemeToggle />
      </div>
    </nav>
  );
}
