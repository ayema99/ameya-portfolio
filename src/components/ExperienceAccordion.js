import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const HighlightPill = ({ children }) => (
  <span className="whitespace-nowrap rounded-full border border-accent/30 px-3 py-1 text-xs font-medium text-accent dark:border-accent-dark/30 dark:text-accent-dark">
    {children}
  </span>
);

const BulletList = ({ bullets }) => (
  <ul className="mt-4 space-y-2.5">
    {bullets.map((b) => (
      <li key={b} className="flex items-start gap-2 text-sm leading-relaxed text-ink/80 dark:text-stone-300">
        <span className="mt-0.5 text-accent dark:text-accent-dark">✦</span>
        {b}
      </li>
    ))}
  </ul>
);

// Expandable work-experience list. One entry open at a time; entries with
// multiple roles (e.g. a promotion) render each role as a sub-block.
const ExperienceAccordion = ({ items }) => {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  return (
    <div className="space-y-5">
      {items.map((item, i) => {
        const isOpen = openId === item.id;
        return (
          <Reveal key={item.id} delay={i * 0.08}>
            <article
              className={`overflow-hidden rounded-3xl border transition-colors duration-300 ${
                isOpen
                  ? 'border-accent/40 bg-white/70 dark:border-accent-dark/40 dark:bg-white/5'
                  : 'border-ink/10 hover:border-accent/40 dark:border-white/10 dark:hover:border-accent-dark/40'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 p-6 text-left sm:gap-6 sm:p-7"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl font-semibold text-ink dark:text-white sm:text-2xl">
                      {item.company}
                    </h3>
                    <span className="text-sm text-ink/50 dark:text-stone-500">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-ink/70 dark:text-stone-400">
                    {item.title}
                  </p>
                </div>
                <HighlightPill>{item.highlight}</HighlightPill>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-ink/40 transition-transform duration-300 dark:text-stone-500 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <div className="border-t border-ink/10 px-6 pb-7 pt-5 dark:border-white/10 sm:px-7">
                      {item.summary && (
                        <p className="max-w-3xl leading-relaxed text-ink/70 dark:text-stone-400">
                          {item.summary}
                        </p>
                      )}

                      {item.roles ? (
                        <div className="mt-6 space-y-8">
                          {item.roles.map((role) => (
                            <div key={role.title}>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                <h4 className="font-display text-lg font-semibold text-ink dark:text-white">
                                  {role.title}
                                </h4>
                                <span className="text-sm text-ink/50 dark:text-stone-500">
                                  {role.period}
                                </span>
                                <HighlightPill>{role.highlight}</HighlightPill>
                              </div>
                              <BulletList bullets={role.bullets} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <BulletList bullets={item.bullets} />
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
};

export default ExperienceAccordion;
