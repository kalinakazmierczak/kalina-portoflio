import { useState, useEffect } from 'react';
import { STICKERS } from '../stickers';

const POLL_INTERVAL = 30000; // 30 seconds

/**
 * "on repeat" — the turntable.
 *
 * The record is a status indicator, not an ornament: it spins only while
 * something is actually playing, and the tonearm rests on the disc in that
 * state and parks off to the side otherwise. That is why it is allowed to be an
 * infinite animation at all — it reports live state, the way a progress
 * indicator does, and it stops on its own the moment the state changes.
 *
 * Built in CSS rather than pulled from a library: a disc, a label and an arm are
 * three rounded boxes and a gradient, and a Lottie for that would be 50-500 KB
 * for something CSS does in bytes.
 *
 * Fetch and poll logic is unchanged from the original widget.
 */
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

  const playing = Boolean(nowPlaying?.isPlaying);
  const hasTrack = Boolean(nowPlaying?.title);

  // `albumArt` / `songUrl` are newer fields. Guard both so a stale deployed
  // function degrades to a bare label and a search link instead of breaking.
  const art = nowPlaying?.albumArt ?? null;
  const href =
    nowPlaying?.songUrl ??
    (hasTrack
      ? `https://open.spotify.com/search/${encodeURIComponent(
          `${nowPlaying.artist} ${nowPlaying.title}`
        )}`
      : 'https://open.spotify.com');

  const turntable = (
    <span
      className="tt"
      data-playing={playing ? 'true' : 'false'}
      data-idle={loading || !hasTrack ? 'true' : 'false'}
      aria-hidden="true"
    >
      <span className="tt__platter">
        <span className="tt__grooves" />
        <span className="tt__label">
          {/* No album art (nothing loaded, or a deployed function that predates
              the field) falls back to Kalina's own Kitty Records label — which
              is, conveniently, an actual record label. */}
          <img
            className="tt__art"
            src={art ?? STICKERS.kittyRecords.src}
            alt=""
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <span className="tt__spindle" />
        </span>
      </span>
      <span className="tt__arm">
        <span className="tt__head" />
      </span>
    </span>
  );

  if (loading) {
    return (
      <div className="spotify">
        {turntable}
        <span className="spotify__text">
          <span className="spotify__state">on the platter</span>
          <span className="spotify__title spotify__title--quiet">checking spotify…</span>
        </span>
      </div>
    );
  }

  if (!hasTrack) {
    return (
      <div className="spotify">
        {turntable}
        <span className="spotify__text">
          <span className="spotify__state">quiet right now</span>
          <span className="spotify__title spotify__title--quiet">
            suprisingly nothing on right now!
          </span>
        </span>
      </div>
    );
  }

  return (
    <a
      className="spotify spotify--link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {turntable}
      <span className="spotify__text">
        <span className="spotify__state">
          <span className="spotify__pip" aria-hidden="true" />
          {playing ? 'currently listening to' : 'last listened to'}
        </span>
        <span className="spotify__title">{nowPlaying.title.toLowerCase()}</span>
        <span className="spotify__artist">
          {nowPlaying.artist.toLowerCase()}
          {/* Newer field — absent if the deployed function predates it. */}
          {nowPlaying.album ? (
            <span className="spotify__album"> · {nowPlaying.album.toLowerCase()}</span>
          ) : null}
        </span>
      </span>
    </a>
  );
}
