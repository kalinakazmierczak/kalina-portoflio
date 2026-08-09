import { useEffect, useState } from 'react';

/**
 * Light / dark toggle.
 *
 * Three states exist, not two: "light", "dark", and *unset* — unset means the
 * OS decides via prefers-color-scheme. The toggle only ever moves between the
 * two explicit values; the initial read is done by the inline script in
 * index.html so there is no flash before React mounts.
 */

const read = () => {
  if (typeof document === 'undefined') return 'light';
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'light' || attr === 'dark') return attr;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(read);

  // Track the OS while the visitor hasn't made an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      if (!document.documentElement.getAttribute('data-theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage disabled — the attribute still holds for this session */
    }
    setTheme(next);
  };

  const nextLabel = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      className="themetoggle"
      onClick={toggle}
      aria-label={`Switch to ${nextLabel} mode`}
      title={`Switch to ${nextLabel} mode`}
    >
      <span className="themetoggle__mark" aria-hidden="true" />
      <span className="themetoggle__label">{nextLabel}</span>
    </button>
  );
}
