import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import PageTransition from '../PageTransition';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
import site from '../data/site';
import caseStudies from '../data/caseStudies';

const strengths = [
  {
    title: 'Product Discovery',
    body: 'I start with the problem, not the feature. Research, user conversations and data decide what gets built — assumptions don\u2019t.',
  },
  {
    title: 'Data-Driven Decisions',
    body: 'SQL, Python and analytics are part of my toolkit, so I can pull the evidence myself instead of waiting for a report.',
  },
  {
    title: 'AI & Emerging Tech',
    body: 'From speech interfaces to deep learning models, I\u2019ve built with AI hands-on — which means I can scope it realistically.',
  },
  {
    title: 'Prototyping & Shipping',
    body: 'I take ideas to deployed products myself. A live link beats a slide deck in every stakeholder conversation.',
  },
  {
    title: 'Storytelling',
    body: 'The same insight lands differently in a boardroom and a sprint room. I package analysis for the audience in front of me.',
  },
  {
    title: 'Technical Fluency',
    body: 'I speak engineer. APIs, models and trade-offs are conversations I can hold, which keeps estimates honest and scope tight.',
  },
];

const Home = () => {
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] flex-col justify-center px-5 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent dark:text-accent-dark">
              {site.location} · Open to APM / PM roles
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.08] text-ink dark:text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m {site.firstName} —<br />
              a <em className="text-accent dark:text-accent-dark">{site.role.toLowerCase()}</em>{' '}
              {site.tagline}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 dark:text-stone-400">
              I combine user research, data analysis and hands-on technical skills to take products
              from ambiguous idea to shipped reality. Everything below is real, built by me, and
              live on GitHub.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="group flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-medium text-paper transition-all hover:bg-accent dark:bg-white dark:text-night dark:hover:bg-accent-dark"
              >
                See my work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-ink/20 px-7 py-3.5 font-medium text-ink transition-colors hover:border-accent hover:text-accent dark:border-white/20 dark:text-white dark:hover:border-accent-dark dark:hover:text-accent-dark"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/40 dark:text-stone-600">
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </section>

      <Marquee
        items={[
          'Product strategy',
          'User research',
          'Ships real code',
          'SQL & Python',
          'AI products',
          'Data storytelling',
        ]}
      />

      {/* Featured work */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent dark:text-accent-dark">
                  Selected work
                </p>
                <h2 className="mt-3 font-display text-4xl font-medium text-ink dark:text-white sm:text-5xl">
                  Projects with a point.
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden shrink-0 border-b-2 border-accent pb-0.5 font-medium text-accent dark:border-accent-dark dark:text-accent-dark sm:block"
              >
                All projects ↗
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 space-y-6">
            {featured.map((study, i) => (
              <Reveal key={study.repo} delay={i * 0.08}>
                <Link
                  to="/projects"
                  className="group grid gap-4 rounded-3xl border border-ink/10 p-7 transition-all duration-300 hover:border-accent/40 hover:bg-white/70 dark:border-white/10 dark:hover:border-accent-dark/40 dark:hover:bg-white/5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:p-9"
                >
                  <span className="font-display text-4xl italic text-ink/20 dark:text-stone-700">
                    0{i + 1}
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">
                      {study.category}
                    </span>
                    <span className="mt-2 block font-display text-2xl font-semibold leading-snug text-ink dark:text-white sm:text-3xl">
                      {study.title}
                    </span>
                    <span className="mt-3 block max-w-2xl text-ink/60 dark:text-stone-400">
                      {study.summary}
                    </span>
                  </span>
                  <ArrowRight
                    size={24}
                    className="hidden text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-accent dark:text-stone-600 dark:group-hover:text-accent-dark sm:block"
                  />
                </Link>
              </Reveal>
            ))}
          </div>

          <Link
            to="/projects"
            className="mt-10 inline-block border-b-2 border-accent pb-0.5 font-medium text-accent dark:border-accent-dark dark:text-accent-dark sm:hidden"
          >
            All projects ↗
          </Link>
        </div>
      </section>

      {/* Strengths */}
      <section className="border-t border-ink/10 px-5 py-24 dark:border-white/10 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent dark:text-accent-dark">
              What I bring to the table
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-medium text-ink dark:text-white sm:text-5xl">
              A PM who can research it, analyse it, and build it.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink dark:text-white">
                    <span className="mr-2 text-accent dark:text-accent-dark">✦</span>
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink/65 dark:text-stone-400">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/10 px-5 py-24 dark:border-white/10 sm:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-medium italic text-ink dark:text-white sm:text-5xl">
              Curious what I&apos;d do with your product?
            </h2>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-white transition-all hover:bg-ink dark:hover:bg-white dark:hover:text-night"
            >
              Let&apos;s talk
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
