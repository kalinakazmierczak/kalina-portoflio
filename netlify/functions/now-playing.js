const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT =
  'https://api.spotify.com/v1/me/player/recently-played?limit=1';

const getAccessToken = async () => {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  const data = await response.json();
  
  if (!response.ok) {
    console.error('Token refresh failed:', data);
    throw new Error(`Failed to refresh token: ${data.error_description || data.error}`);
  }
  
  return data;
};

export const handler = async () => {
  try {
    // Verify env vars are set (without logging the actual values)
    if (!process.env.SPOTIFY_CLIENT_ID) {
      throw new Error('SPOTIFY_CLIENT_ID not set');
    }
    if (!process.env.SPOTIFY_CLIENT_SECRET) {
      throw new Error('SPOTIFY_CLIENT_SECRET not set');
    }
    if (!process.env.SPOTIFY_REFRESH_TOKEN) {
      throw new Error('SPOTIFY_REFRESH_TOKEN not set');
    }

    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    // 204 = no content (nothing playing), fetch last played instead
    if (response.status === 204 || response.status > 400) {
      const recentResponse = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      if (recentResponse.ok) {
        const recentData = await recentResponse.json();
        if (recentData.items && recentData.items.length > 0) {
          const lastTrack = recentData.items[0].track;
          return {
            statusCode: 200,
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
            },
            body: JSON.stringify({
              isPlaying: false,
              title: lastTrack.name,
              artist: lastTrack.artists.map((a) => a.name).join(', '),
              // Smallest image that still resolves on the record label (~64px
              // rendered). Spotify sorts images largest-first.
              albumArt: lastTrack.album?.images?.at(-1)?.url ?? null,
              album: lastTrack.album?.name ?? null,
              songUrl: lastTrack.external_urls?.spotify ?? null,
            }),
          };
        }
      }

      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=15',
        },
        body: JSON.stringify({ isPlaying: false }),
      };
    }

    const data = await response.json();

    if (!data.item) {
      // Try to get recently played
      const recentResponse = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      if (recentResponse.ok) {
        const recentData = await recentResponse.json();
        if (recentData.items && recentData.items.length > 0) {
          const lastTrack = recentData.items[0].track;
          return {
            statusCode: 200,
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
            },
            body: JSON.stringify({
              isPlaying: false,
              title: lastTrack.name,
              artist: lastTrack.artists.map((a) => a.name).join(', '),
              // Smallest image that still resolves on the record label (~64px
              // rendered). Spotify sorts images largest-first.
              albumArt: lastTrack.album?.images?.at(-1)?.url ?? null,
              album: lastTrack.album?.name ?? null,
              songUrl: lastTrack.external_urls?.spotify ?? null,
            }),
          };
        }
      }

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPlaying: false }),
      };
    }

    const track = {
      isPlaying: data.is_playing,
      title: data.item.name,
      artist: data.item.artists.map((a) => a.name).join(', '),
      albumArt: data.item.album?.images?.at(-1)?.url ?? null,
      album: data.item.album?.name ?? null,
      songUrl: data.item.external_urls?.spotify ?? null,
    };

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=15',
      },
      body: JSON.stringify(track),
    };
  } catch (error) {
    console.error('Spotify now-playing error:', error);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isPlaying: false }),
    };
  }
};
