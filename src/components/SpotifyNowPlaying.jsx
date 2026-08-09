import { useState, useEffect } from 'react';

const POLL_INTERVAL = 30000; // 30 seconds

export default function SpotifyNowPlaying() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch('/.netlify/functions/now-playing');
        const data = await res.json();
        setNowPlaying(data);
      } catch {
        setNowPlaying({ isPlaying: false });
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // The widget now lives in its own pin on the board, so it can no longer
  // return null — an empty tile reads as a broken card rather than as "nothing
  // is playing". Every branch below renders something.
  if (loading) {
    return (
      <div className="spotify-now-playing">
        <p className="spotify-idle-text">checking spotify…</p>
      </div>
    );
  }

  const spotifySearchUrl = nowPlaying?.title
    ? `https://open.spotify.com/search/${encodeURIComponent(
        `${nowPlaying.artist} ${nowPlaying.title}`
      )}`
    : 'https://open.spotify.com';

  return (
    <div className="spotify-now-playing">
      {nowPlaying?.isPlaying ? (
        <a
          href={spotifySearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="spotify-link"
        >
          <span className="spotify-icon" aria-hidden="true"></span>
          <span className="spotify-text">
            currently listening to {nowPlaying.artist.toLowerCase()} —{' '}
            {nowPlaying.title.toLowerCase()}
          </span>
        </a>
      ) : nowPlaying?.title ? (
        <a
          href={spotifySearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="spotify-link spotify-idle"
        >
          <span className="spotify-icon-muted" aria-hidden="true"></span>
          <span className="spotify-text">
            last listened to {nowPlaying.artist.toLowerCase()} —{' '}
            {nowPlaying.title.toLowerCase()}
          </span>
        </a>
      ) : (
        <p className="spotify-idle-text">
          nothing playing right now — the speakers are resting.
        </p>
      )}
    </div>
  );
}
