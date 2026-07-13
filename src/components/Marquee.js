import React from 'react';

// Infinite horizontal scroll strip, inspired by editorial portfolio sites.
const Marquee = ({ items }) => {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/10 dark:border-white/10 py-4 select-none">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-lg italic text-ink/60 dark:text-stone-400"
          >
            {item}
            <span className="text-accent dark:text-accent-dark not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
