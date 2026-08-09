import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const art = [
  '%c',
  '╔══════════════════════════════════════╗',
  '║                                      ║',
  '║   █▄▀ ▄▀█ █   █ █▄ █ ▄▀█            ║',
  '║   █ █ █▀█ █▄▄ █ █ ▀█ █▀█            ║',
  '║                                      ║',
  '║   software engineer                  ║',
  '║   design engineer                    ║',
  '║   looking to move to nyc             ║',
  '║                                      ║',
  '╠══════════════════════════════════════╣',
  '║                                      ║',
  '║   hiiii snooping around?? nice.      ║',
  '║   if you found this i think...      ║',
  '║   we should talk.                    ║',
  '║                                      ║',
  '║   ✉  kalinakazmie@gmail.com          ║',
  '║   ◆  github.com/kalinakazmierczak   ║',
  '║   ●  linkedin.com/in/kalina...       ║',
  '║                                      ║',
  '╚══════════════════════════════════════╝',
].join('\n');

console.log(art, 'color: #D4739A; font-family: monospace; font-size: 12px;');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
