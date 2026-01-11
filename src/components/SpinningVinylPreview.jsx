import { useState } from "react";
import purpleRain from '../assets/purple_rain.jpg';

export default function SpinningVinylPreview() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open('https://open.spotify.com/track/1uvyZBs4IZYRebHIB1747m?si=9ae4fb879e984b0f', '_blank');
  };

  return (
    <div
      style={{
        width: '220px',
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        position: 'relative',
      }}
    >
      {/* The vinyl record */}
      <div
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          cursor: 'pointer',
          background: `
            repeating-radial-gradient(
              circle at 50% 50%, 
              #1a1a1a 0px, 
              #1a1a1a 1px, 
              #141414 1px, 
              #141414 2px,
              #1a1a1a 2px,
              #1a1a1a 3px,
              #0f0f0f 3px,
              #0f0f0f 4px
            )
          `,
          boxShadow: isHovered 
            ? '0 0 30px rgba(138, 43, 226, 0.6), 0 0 60px rgba(138, 43, 226, 0.3)' 
            : 'none',
          animation: isHovered ? 'vinylSpin 1.5s linear infinite' : 'none',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          position: 'relative',
        }}
      >
        {/* Vinyl shine effect */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)',
            pointerEvents: 'none',
          }}
        />
        
        {/* Center album art label */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '55px',
            height: '55px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
            border: '2px solid #2a2a2a',
          }}
        >
          <img 
            src={purpleRain} 
            alt="Now playing"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Center hole */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '6px',
              height: '6px',
              background: '#0a0a0a',
              borderRadius: '50%',
              border: '1px solid #333',
            }}
          />
        </div>
      </div>

      {/* Click hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '0px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '10px',
          color: isHovered ? 'rgba(138, 43, 226, 0.9)' : 'var(--color-text-secondary)',
          letterSpacing: '0.05em',
          whiteSpace: 'nowrap',
          fontWeight: '500',
        }}
      >
        {isHovered ? '▶ PLAY ON SPOTIFY' : 'HOVER TO SPIN'}
      </div>
      
      <style>{`
        @keyframes vinylSpin {
          from { transform: scale(1.05) rotate(0deg); }
          to { transform: scale(1.05) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
