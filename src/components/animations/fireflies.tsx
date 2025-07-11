import React from 'react';

const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const Fireflies = ({ count = 25 }) => {
  const fireflies = Array.from({ length: count }, (_, i) => {
    const size = getRandom(3, 6);
    const delay = getRandom(0, 8000);
    const duration = getRandom(8000, 14000);
    const top = getRandom(0, 100);
    const left = getRandom(0, 100);
    const blur = getRandom(1, 4);

    return (
      <div
        key={i}
        className={`absolute rounded-full animate-fly transition-colors bg-[var(--accent-color)]`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          filter: `blur(${blur}px)`,
          animationDelay: `${delay}ms`,
          animationDuration: `${duration}ms`,
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {fireflies}
    </div>
  );
};

export default Fireflies;
