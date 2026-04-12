import { useState, useRef, useEffect } from 'react';

const COMMANDS = {
  help: () => [
    { text: 'available commands:', type: 'highlight' },
    { text: '  about      — who is kalina?', type: 'output' },
    { text: '  skills     — technical toolkit', type: 'output' },
    { text: '  links      — connect & resume', type: 'output' },
    { text: '  fun        — a fun fact', type: 'output' },
    { text: '  clear      — reset terminal', type: 'output' },
    { text: '  help       — show this menu', type: 'output' },
  ],
  about: () => [
    { text: 'kalina kazmierczak', type: 'highlight' },
    { text: '  software engineer & design engineer based in dc.', type: 'output' },
    { text: '', type: 'output' },
    { text: '  i focus on building interfaces that are as thoughtful', type: 'output' },
    { text: '  as they are functional — the details that make software', type: 'output' },
    { text: '  feel intentional and polished.', type: 'output' },
    { text: '', type: 'output' },
    { text: '  outside of work, i enjoy thrifting, curating spotify', type: 'output' },
    { text: '  playlists, and exploring wikipedia rabbit holes.', type: 'output' },
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
      'i taught coding in rwanda using scratch & storytelling',
      'i revived a 10-year-old kinetic art sculpture with raspberry pi',
      'i\'ve presented research at supercomputing conferences twice',
      'i placed first for a gamified food journaling app at vturcs',
      'i practice hot yoga regularly',
      'i am obsessed with pokopia',
    ];
    const fact = facts[Math.floor(Math.random() * facts.length)];
    return [{ text: `→ ${fact}`, type: 'highlight' }];
  },
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