import React from 'react';
import { Github, ExternalLink, Star, GitBranch } from 'lucide-react';
import Reveal from './Reveal';

// A PM-style case study card: headline, problem/approach, outcomes, and the
// live GitHub repo data (language, stars, last update) when available.
const CaseStudyCard = ({ study, repo, index = 0 }) => {
  const lastUpdated = repo?.updatedAt
    ? new Date(repo.updatedAt).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
    : null;

  return (
    <Reveal delay={Math.min(index * 0.05, 0.2)}>
      <article
        id={study.repo}
        className="scroll-mt-24 group rounded-3xl border border-ink/10 bg-white/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-accent-dark/40 sm:p-9"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">
          {study.category}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-ink dark:text-white sm:text-3xl">
          {study.title}
        </h3>
        <p className="mt-4 text-ink/70 dark:text-stone-400">{study.summary}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-ink/[0.03] p-5 dark:bg-white/[0.04]">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink/50 dark:text-stone-500">
              The problem
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/80 dark:text-stone-300">
              {study.problem}
            </p>
          </div>
          <div className="rounded-2xl bg-ink/[0.03] p-5 dark:bg-white/[0.04]">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink/50 dark:text-stone-500">
              My approach
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/80 dark:text-stone-300">
              {study.approach}
            </p>
          </div>
        </div>

        <ul className="mt-6 space-y-2">
          {study.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-2 text-sm text-ink/80 dark:text-stone-300">
              <span className="mt-0.5 text-accent dark:text-accent-dark">✦</span>
              {o}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink/70 dark:border-white/15 dark:text-stone-400"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-ink/10 pt-5 dark:border-white/10">
          {repo && (
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent dark:text-white dark:hover:text-accent-dark"
            >
              <Github size={16} /> View code
            </a>
          )}
          {study.live && (
            <a
              href={study.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent dark:text-white dark:hover:text-accent-dark"
            >
              <ExternalLink size={16} /> Live demo
            </a>
          )}
          {repo && (
            <span className="ml-auto flex items-center gap-4 text-xs text-ink/50 dark:text-stone-500">
              {repo.language && (
                <span className="flex items-center gap-1.5">
                  <GitBranch size={13} /> {repo.language}
                </span>
              )}
              {repo.stars > 0 && (
                <span className="flex items-center gap-1.5">
                  <Star size={13} /> {repo.stars}
                </span>
              )}
              {lastUpdated && <span>Updated {lastUpdated}</span>}
            </span>
          )}
        </div>
      </article>
    </Reveal>
  );
};

export default CaseStudyCard;
