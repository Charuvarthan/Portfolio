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
        left: pos.x - 60,
        top: pos.y - 60,
        width: 120,
        height: 120,
        pointerEvents: 'none',
        zIndex: 9998,
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: '0 0 32px 8px #38bdf8, 0 0 64px 16px #a21caf',
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
          transform: `translate(-${pos.x - 60}px, -${pos.y - 60}px) scale(1.25)`,
          transition: 'transform 0.1s',
          pointerEvents: 'none',
        }}
      >
        {/* This div overlays the whole page and magnifies the area under the cursor */}
      </div>
    </div>
  );
}