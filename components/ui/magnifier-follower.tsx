'use client';

import { useEffect, useState } from 'react';

export function MagnifierFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x - 35, // changed from 60
        top: pos.y - 35,  // changed from 60
        width: 70,        // changed from 120
        height: 70,       // changed from 120
        pointerEvents: 'none',
        zIndex: 9998,
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: '0 0 24px 4px #38bdf8, 0 0 48px 8px #a21caf', // softer shadow
        border: '2px solid #38bdf8',
        transition: 'box-shadow 0.2s',
        mixBlendMode: 'multiply',
      }}
      className="magnifier-follower"
    >
      <div
        style={{
          width: '100vw',
          height: '100vh',
          transform: `translate(-${pos.x - 35}px, -${pos.y - 35}px) scale(1.18)`, // scale reduced
          transition: 'transform 0.1s',
          pointerEvents: 'none',
        }}
      >
        {/* This div overlays the whole page and magnifies the area under the cursor */}
      </div>
    </div>
  );
}