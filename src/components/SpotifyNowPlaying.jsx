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

  if (loading) return null;

  return (
    <div className="spotify-now-playing">
      {nowPlaying?.isPlaying ? (
        <p className="spotify-status">
          <span className="spotify-dot" aria-hidden="true">
            ⟡
          </span>{' '}
          {nowPlaying.artist.toLowerCase()} —{' '}
          {nowPlaying.title.toLowerCase()}
        </p>
      ) : nowPlaying?.title ? (
        <p className="spotify-status spotify-idle">
          last listened to {nowPlaying.artist.toLowerCase()} —{' '}
          {nowPlaying.title.toLowerCase()}
        </p>
      ) : null}
    </div>
  );
}
