import React from 'react';
import { Github, ExternalLink, Star, GitBranch } from 'lucide-react';
import PageTransition from '../PageTransition';
import Reveal from '../components/Reveal';
import CaseStudyCard from '../components/CaseStudyCard';
import useGithubRepos from '../hooks/useGithubRepos';
import caseStudies from '../data/caseStudies';
import site from '../data/site';

const Projects = () => {
  const { repos, loading, error } = useGithubRepos();

  const repoByName = Object.fromEntries(repos.map((r) => [r.name.toLowerCase(), r]));
  const curatedNames = new Set(caseStudies.map((c) => c.repo.toLowerCase()));

  // Repos on GitHub that don't have a written case study yet.
  const otherRepos = repos.filter(
    (r) => !curatedNames.has(r.name.toLowerCase()) && r.name !== 'ameya-portfolio'
  );

  return (
    <PageTransition>
      <section className="px-5 pb-24 pt-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent dark:text-accent-dark">
              Projects
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight text-ink dark:text-white sm:text-5xl">
              Case studies, not just repositories.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70 dark:text-stone-400">
              Every project below is framed the way I&apos;d frame it as a PM — the problem, the
              approach, and what came out of it. The code, stars and last-updated dates are pulled
              live from my GitHub.
            </p>
            {error && (
              <p className="mt-4 text-sm text-ink/50 dark:text-stone-500">
                Live GitHub stats are unavailable right now — repo links below still work via my{' '}
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  GitHub profile
                </a>
                .
              </p>
            )}
          </Reveal>

          <div className="mt-14 space-y-8">
            {caseStudies.map((study, i) => (
              <CaseStudyCard
                key={study.repo}
                study={study}
                repo={repoByName[study.repo.toLowerCase()]}
                index={i}
              />
            ))}
          </div>

          {/* Everything else on GitHub */}
          {(loading || otherRepos.length > 0) && (
            <div className="mt-24">
              <Reveal>
                <h2 className="font-display text-3xl font-medium text-ink dark:text-white">
                  More on GitHub
                </h2>
                <p className="mt-3 max-w-2xl text-ink/60 dark:text-stone-400">
                  Experiments and works-in-progress, straight from my public repositories.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {loading &&
                  Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-44 animate-pulse rounded-2xl border border-ink/10 bg-ink/5 dark:border-white/10 dark:bg-white/5"
                    />
                  ))}
                {otherRepos.map((repo, i) => (
                  <Reveal key={repo.name} delay={(i % 3) * 0.06}>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 dark:border-white/10 dark:bg-white/5 dark:hover:border-accent-dark/40"
                    >
                      <div className="flex items-center justify-between">
                        <Github size={18} className="text-ink/50 dark:text-stone-500" />
                        <ExternalLink
                          size={15}
                          className="text-ink/30 transition-colors group-hover:text-accent dark:text-stone-600 dark:group-hover:text-accent-dark"
                        />
                      </div>
                      <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-white">
                        {repo.name.replace(/-/g, ' ')}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-ink/60 dark:text-stone-400">
                        {repo.description || 'No description yet — the code speaks for itself.'}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-ink/50 dark:text-stone-500">
                        {repo.language && (
                          <span className="flex items-center gap-1.5">
                            <GitBranch size={12} /> {repo.language}
                          </span>
                        )}
                        {repo.stars > 0 && (
                          <span className="flex items-center gap-1.5">
                            <Star size={12} /> {repo.stars}
                          </span>
                        )}
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
