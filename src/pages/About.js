import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../PageTransition';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';

const process = [
  {
    step: '01',
    title: 'Understand',
    body: 'Talk to users, read the data, map the landscape. I don\u2019t write a line of a spec until I can explain the problem better than the person who reported it.',
  },
  {
    step: '02',
    title: 'Frame',
    body: 'Turn the mess into a decision: what are we solving, for whom, and how will we know it worked? Success metrics come before solutions.',
  },
  {
    step: '03',
    title: 'Prototype',
    body: 'Build the smallest thing that tests the riskiest assumption. Because I code, this is often a working product rather than a mockup.',
  },
  {
    step: '04',
    title: 'Ship & Learn',
    body: 'Get it in front of real people, measure honestly, and iterate. A shipped v1 teaches more than a perfect roadmap.',
  },
];

const toolkit = {
  'Product': ['Product Strategy', 'User Research', 'Roadmapping', 'A/B Testing', 'Stakeholder Management', 'Agile/Scrum'],
  'Data': ['SQL', 'Python', 'Pandas', 'Exploratory Analysis', 'Data Storytelling', 'Visualisation'],
  'Build': ['React', 'APIs', 'Machine Learning', 'Deep Learning', 'Vercel', 'Git'],
};

const About = () => (
  <PageTransition>
    <section className="px-5 pb-24 pt-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent dark:text-accent-dark">
            About me
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-medium leading-tight text-ink dark:text-white sm:text-5xl">
            I got into product the long way round — by building things and watching people use
            them.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-ink/70 dark:text-stone-400">
            <p>
              I&apos;m an aspiring Associate Product Manager based in the {`UK`}, with a technical
              background spanning machine learning, data analysis and web development. That mix
              means I don&apos;t just write requirements — I&apos;ve sat on the other side,
              estimating them, building them, and living with the trade-offs.
            </p>
            <p>
              What pulls me toward product is the translation work: taking a vague frustration
              from a user, a business goal from a stakeholder, and a technical constraint from an
              engineer, and finding the one thing worth building that serves all three.
            </p>
            <p>
              I&apos;m particularly drawn to fintech, energy and AI-powered products — domains
              where good data work directly changes what everyday people can do.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <Marquee
      items={[
        'Evidence over opinion',
        'Ship early',
        'Users first',
        'Measure honestly',
        'Speak engineer',
      ]}
    />

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
