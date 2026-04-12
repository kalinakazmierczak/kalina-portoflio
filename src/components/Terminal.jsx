import { useState, useRef, useEffect } from 'react';

const COMMANDS = {
  help: () => [
    { text: 'available commands:', type: 'highlight' },
    { text: '  about      — who is kalina?', type: 'output' },
    { text: '  skills     — what i work with', type: 'output' },
    { text: '  links      — socials & resume', type: 'output' },
    { text: '  fun        — a fun fact', type: 'output' },
    { text: '  nyc        — why new york?', type: 'output' },
    { text: '  clear      — fresh start', type: 'output' },
    { text: '  help       — show this menu', type: 'output' },
  ],
  about: () => [
    { text: '✿ kalina kazmierczak ✿', type: 'highlight' },
    { text: '  hey! i\'m kalina — a software engineer & design engineer', type: 'output' },
    { text: '  based in dc, manifesting my move to nyc.', type: 'output' },
    { text: '', type: 'output' },
    { text: '  i love building things that feel good to use. i care', type: 'output' },
    { text: '  deeply about the intersection of design and engineering —', type: 'output' },
    { text: '  the little details that make software feel intentional.', type: 'output' },
    { text: '', type: 'output' },
    { text: '  when i\'m not coding, you\'ll find me thrifting, making', type: 'output' },
    { text: '  spotify playlists that go unreasonably hard, or deep in', type: 'output' },
    { text: '  a wikipedia rabbit hole.', type: 'output' },
  ],
  skills: () => [
    { text: '→ frontend:  react · next.js · typescript · tailwind · framer motion', type: 'highlight' },
    { text: '→ backend:   c# · .net · node.js · python', type: 'output' },
    { text: '→ tools:     figma · git · aws · vite', type: 'output' },
    { text: '→ vibes:     design systems · hci · a11y · creative coding', type: 'output' },
  ],
  links: () => [
    { text: '♡ email     kalinakazmie@gmail.com', type: 'highlight' },
    { text: '♡ github    github.com/kalinakazmierczak', type: 'output' },
    { text: '♡ linkedin  linkedin.com/in/kalinakazmierczak', type: 'output' },
    { text: '', type: 'output' },
    { text: '  always down to chat about cool projects,', type: 'output' },
    { text: '  design engineering, or your spotify recs ♡', type: 'output' },
  ],
  fun: () => {
    const facts = [
      'i taught coding in rwanda using scratch & storytelling 🇷🇼',
      'i revived a 10-year-old kinetic art sculpture with raspberry pi',
      'i\'ve presented research at supercomputing conferences twice',
      'i won 1st place for a gamified food journaling app',
      'my go-to coding music is 100% lo-fi or hyperpop, no in between',
      'i\'m really into hot yoga right now',
      'personality type: the one who refactors code at 2am because "it could be cleaner"',
    ];
    const fact = facts[Math.floor(Math.random() * facts.length)];
    return [{ text: `✿ ${fact}`, type: 'highlight' }];
  },
  nyc: () => [
    { text: '✿ why nyc?', type: 'highlight' },
    { text: '  the energy, the ambition, the people.', type: 'output' },
    { text: '  i want to be somewhere that moves as fast as i think.', type: 'output' },
    { text: '  also the food scene is unmatched.', type: 'output' },
    { text: '  dreaming of a west village apartment ♡', type: 'output' },
  ],
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { text: 'welcome to kalina\'s terminal. type "help" to get started.', type: 'output' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    const newHistory = [...history, { text: `$ ${cmd}`, type: 'command' }];

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const handler = COMMANDS[cmd];
    if (handler) {
      const result = handler();
      newHistory.push(...result);
    } else {
      newHistory.push({ text: `command not found: ${cmd}. try "help"`, type: 'error' });
    }

    setHistory(newHistory);
    setInput('');
  };

  const getLineColor = (type) => {
    switch (type) {
      case 'command': return 'var(--color-text)';
      case 'highlight': return 'var(--color-accent-tertiary)';
      case 'error': return 'var(--color-accent-secondary)';
      default: return 'var(--color-text-muted)';
    }
  };

  return (
    <div className="terminal-widget" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="terminal-title">kalina@portfolio ~ </span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {history.map((line, i) => (
          <div key={i} className="terminal-line" style={{ color: getLineColor(line.type) }}>
            {line.text}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="terminal-input-line">
          <span className="prompt" style={{ color: 'var(--color-accent)' }}>$</span>
          <input
            ref={inputRef}
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            autoComplete="off"
            placeholder="type a command..."
          />
        </form>
      </div>
    </div>
  );
}