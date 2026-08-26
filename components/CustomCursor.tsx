'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [dotPosition, setDotPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setDotPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const render = () => {
      setPosition((prev) => ({
        x: prev.x + (dotPosition.x - prev.x) * 0.15,
        y: prev.y + (dotPosition.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, select, textarea, [role="button"], .interactive-card'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [dotPosition.x, dotPosition.y]);

  if (isTouch) return null;

  return (
    <>
      {/* Trailing Outer Ring */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full border border-indigo-500/60 transition-[width,height,background-color] duration-200 -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? 'w-12 h-12 bg-indigo-500/15 border-purple-400'
            : 'w-8 h-8 bg-transparent'
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none z-[10000] w-1.5 h-1.5 bg-indigo-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#6366f1]"
        style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }}
      />
    </>
  );
}
