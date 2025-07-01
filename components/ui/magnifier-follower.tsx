'use client';

import { useEffect, useState } from 'react';

export function MagnifierFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Simple soft grey fade ring, no magnification
  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x - 28,
        top: pos.y - 28,
        width: 56,
        height: 56,
        pointerEvents: 'none',
        zIndex: 9998,
        borderRadius: '50%',
        boxShadow: '0 0 16px 8px #8884', // soft grey shadow
        border: '2px solid #d1d5db', // Tailwind gray-300
        background: 'transparent',
        transition: 'box-shadow 0.2s, border 0.2s',
      }}
    />
  );
}