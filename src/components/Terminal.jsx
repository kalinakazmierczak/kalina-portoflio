import { useState, useRef, useEffect } from 'react';

/**
 * "ask me things" — the command widget.
 *
 * Reskinned from the old terminal: the fake window chrome (traffic-light dots +
 * title bar) is gone, the commands and behaviour are unchanged. Chrome the user
 * already has doesn't need re-drawing; the typographic frame does the same job.
 */

const COMMANDS = {
  help: () => [
    { text: 'available commands:', type: 'highlight' },
    { text: '  about      — who is kalina?', type: 'output' },
    { text: '  skills     — technical toolkit', type: 'output' },
    { text: '  links      — connect & resume', type: 'output' },
    { text: '  fun        — a fun fact', type: 'output' },
    { text: '  clear      — reset', type: 'output' },
    { text: '  help       — show this menu', type: 'output' },
  ],
  about: () => [
    { text: 'kalina kazmierczak', type: 'highlight' },
    { text: '  software engineer based in dc.', type: 'output' },
    { text: '', type: 'output' },
    { text: '  i focus on building interfaces that are as thoughtful', type: 'output' },
    { text: '  as they are functional. the details that make software', type: 'output' },
    { text: '  feel intentional and polished.', type: 'output' },
  ],
  skills: () => [
    { text: '→ frontend:  react · next.js · typescript · tailwind · framer motion', type: 'highlight' },
    { text: '→ backend:   c# · .net · node.js · python', type: 'output' },
    { text: '→ tools:     figma · git · aws · vite', type: 'output' },
    { text: '→ focus:     design systems · hci · accessibility · creative coding', type: 'output' },
  ],
  links: () => [
    { text: '→ email     kalinakazmie@gmail.com', type: 'highlight' },
    { text: '→ github    github.com/kalinakazmierczak', type: 'output' },
    { text: '→ linkedin  linkedin.com/in/kalinakazmierczak', type: 'output' },
    { text: '', type: 'output' },
    { text: '  open to opportunities, collaborations, and conversations.', type: 'output' },
  ],
  fun: () => {
    const facts = [
      'i taught coding fundamentals to children in rwanda',
      'i’ve presented research at sc23 and sc24 supercomputing conferences',
      `i am currently working with aws bedrock to build an ai chatbot that helps devs at my company`,
      'i love calico critters and jellycats',
      'i lift weights and do pilates (best of both worlds!)',
      `i love to draw`,
      `i am from poland and speak it fluently`,
      `i love to travel and have been to over 15 countries`,
      `i go to music festivals and love live music`,
    ];
    const fact = facts[Math.floor(Math.random() * facts.length)];
    return [{ text: `→ ${fact}`, type: 'highlight' }];
  },
};

const HINTS = ['about', 'skills', 'links', 'fun'];

const WELCOME = [
  { text: 'type “help” to get started.', type: 'output' },
];

export default function Ask() {
  const [history, setHistory] = useState(WELCOME);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [history]);

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const next = [...history, { text: `$ ${cmd}`, type: 'command' }];
    const handler = COMMANDS[cmd];
    if (handler) next.push(...handler());
    else next.push({ text: `command not found: ${cmd}. try “help”`, type: 'error' });

    setHistory(next);
    setInput('');
  }

  return (
    <div className="ask">
      <div className="ask__log" ref={logRef} aria-live="polite">
        {history.map((line, i) => (
          <div key={i} className={`ask__line ask__line--${line.type}`}>
            {line.text || ' '}
          </div>
        ))}
      </div>

      <form
        className="ask__form"
        onSubmit={(e) => {
          e.preventDefault();
          runCommand(input);
        }}
      >
        <span className="ask__prompt" aria-hidden="true">
          $
        </span>
        <input
          ref={inputRef}
          className="ask__input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          spellCheck={false}
          autoComplete="off"
          aria-label="Type a command"
          placeholder="type a command…"
        />
      </form>

      <div className="ask__hints">
        {HINTS.map((hint) => (
          <button
            key={hint}
            type="button"
            className="ask__hint"
            onClick={() => {
              runCommand(hint);
              inputRef.current?.focus();
            }}
          >
            {hint}
          </button>
        ))}
      </div>
    </div>
  );
}
