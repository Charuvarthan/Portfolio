'use client';

import { useEffect, useState } from 'react';

// Minimal, professional custom cursor with pointer feedback
export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Hide system cursor
    document.body.classList.add('cursor-hidden');

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handlePointerEnter = () => setIsPointer(true);
    const handlePointerLeave = () => setIsPointer(false);

    window.addEventListener('mousemove', updateMousePosition);
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .magnetic-element'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handlePointerEnter);
      el.addEventListener('mouseleave', handlePointerLeave);
    });

    return () => {
      document.body.classList.remove('cursor-hidden');
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handlePointerEnter);
        el.removeEventListener('mouseleave', handlePointerLeave);
      });
    };
  }, []);

  // Always a subtle grey dot, slightly darker on pointer
  const dotColor = isPointer ? '#6b7280' : '#9ca3af'; // Tailwind gray-500/400
  const borderColor = isPointer ? '#4b5563' : '#d1d5db'; // Tailwind gray-600/300

  // Minimal cursor: small dot with subtle border and shadow, color changes on pointer
  return (
    <div
      style={{
        position: 'fixed',
        left: mousePosition.x - 8,
        top: mousePosition.y - 8,
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: dotColor,
        border: `2px solid ${borderColor}`,
        boxShadow: isPointer
          ? '0 0 8px 2px #6b728055, 0 0 2px 0 #4b556355'
          : '0 1px 4px 0 #9ca3af22',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'background 0.18s, border 0.18s, box-shadow 0.18s',
        mixBlendMode: 'normal',
      }}
    />
  );
}

export default CursorFollower;