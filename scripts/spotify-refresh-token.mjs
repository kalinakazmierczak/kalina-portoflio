/**
 * Mint a new Spotify refresh token.
 *
 * Spotify revokes the user-scoped refresh token whenever you change your
 * account password, remove the app under Account -> Apps, or edit the app in
 * the developer dashboard. When that happens the "on repeat" widget silently
 * falls back to its quiet state. Run this to get a new one.
 *
 * Prerequisite (one time): in https://developer.spotify.com/dashboard open the
 * app -> Settings and add this exact Redirect URI:
 *
 *     http://127.0.0.1:8888/callback
 *
 * Spotify rejects "localhost"; it must be 127.0.0.1.
 *
 * Usage:  node scripts/spotify-refresh-token.mjs
 */
import http from 'node:http';
import { exec } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const envPath = path.join(repoRoot, '.env');

let env;
try {
  env = Object.fromEntries(
    readFileSync(envPath, 'utf8')
      .split('\n')
      .filter((l) => l.trim() && !l.trim().startsWith('#'))
      .map((l) => {
        const i = l.indexOf('=');
        return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
      })
  );
} catch {
  console.error(`Could not read ${envPath}`);
  process.exit(1);
}

const CLIENT_ID = env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = 'http://127.0.0.1:8888/callback';
const SCOPES = 'user-read-currently-playing user-read-recently-played';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET in .env');
  process.exit(1);
}

const state = Math.random().toString(36).slice(2);
const authUrl =
  'https://accounts.spotify.com/authorize?' +
  new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    scope: SCOPES,
    redirect_uri: REDIRECT_URI,
    state,
    show_dialog: 'true',
  });

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1:8888');
  if (url.pathname !== '/callback') {
    res.writeHead(404).end();
    return;
  }

  const code = url.searchParams.get('code');
  const err = url.searchParams.get('error');

  if (err || url.searchParams.get('state') !== state) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end(`Authorization failed: ${err ?? 'state mismatch'}`);
    console.error(`\n[x] Authorization failed: ${err ?? 'state mismatch'}`);
    server.close();
    process.exit(1);
  }

  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });
  const data = await tokenRes.json();

  if (!tokenRes.ok) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Token exchange failed. Check the terminal.');
    console.error('\n[x] Token exchange failed:', data);
    server.close();
    process.exit(1);
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(
    '<h1>Done.</h1><p>Refresh token printed in your terminal. You can close this tab.</p>'
  );

  console.log('\n[ok] New refresh token:\n');
  console.log(data.refresh_token);
  console.log('\nNext: put it in .env as SPOTIFY_REFRESH_TOKEN=... and set the');
  console.log('same value in Netlify (Site configuration -> Environment');
  console.log('variables), then redeploy.\n');

  server.close();
  process.exit(0);
});

server.listen(8888, '127.0.0.1', () => {
  console.log('Opening Spotify authorization in your browser...');
  console.log(`If it does not open, visit:\n${authUrl}\n`);
  exec(`open "${authUrl}"`);
});
