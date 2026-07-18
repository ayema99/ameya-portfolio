import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../PageTransition';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
import ExperienceAccordion from '../components/ExperienceAccordion';
import about from '../data/about';
import { experience, education } from '../data/experience';

const { process, toolkit } = about;

const About = () => (
  <PageTransition>
    <section className="px-5 pb-24 pt-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent dark:text-accent-dark">
            About me
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-medium leading-tight text-ink dark:text-white sm:text-5xl">
            {about.headline}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-ink/70 dark:text-stone-400">
            {about.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <Marquee items={about.values} />

    {/* Process */}
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-ink dark:text-white sm:text-4xl">
            How I work
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={(i % 2) * 0.08}>
              <div className="flex gap-6">
                <span className="font-display text-3xl italic text-accent dark:text-accent-dark">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/65 dark:text-stone-400">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Experience */}
    <section className="border-t border-ink/10 px-5 py-24 dark:border-white/10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent dark:text-accent-dark">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink dark:text-white sm:text-4xl">
            From QA foundations to product ownership.
          </h2>
          <p className="mt-4 text-sm text-ink/50 dark:text-stone-500">
            Click a role to expand ↓
          </p>
        </Reveal>
        <div className="mt-12">
          <ExperienceAccordion items={experience} />
        </div>
      </div>
    </section>

    {/* Education */}
    <section className="border-t border-ink/10 px-5 py-24 dark:border-white/10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent dark:text-accent-dark">
            Education
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink dark:text-white sm:text-4xl">
            Where the analytical toolkit comes from.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-3xl border border-ink/10 p-7 transition-colors hover:border-accent/40 dark:border-white/10 dark:hover:border-accent-dark/40">
                <p className="text-sm text-ink/50 dark:text-stone-500">{e.period}</p>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink dark:text-white">
                  {e.degree}
                </h3>
                <p className="mt-2 text-ink/65 dark:text-stone-400">{e.institution}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Toolkit */}
    <section className="border-t border-ink/10 px-5 py-24 dark:border-white/10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-ink dark:text-white sm:text-4xl">
            The toolkit
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {Object.entries(toolkit).map(([group, skills], i) => (
            <Reveal key={group} delay={i * 0.08}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">
                  {group}
                </h3>
                <ul className="mt-5 space-y-3">
                  {skills.map((s) => (
                    <li
                      key={s}
                      className="border-b border-ink/10 pb-3 text-ink/80 dark:border-white/10 dark:text-stone-300"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            to="/projects"
            className="group mt-16 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-medium text-paper transition-all hover:bg-accent dark:bg-white dark:text-night dark:hover:bg-accent-dark"
          >
            See the toolkit in action
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  </PageTransition>
);

export default About;
