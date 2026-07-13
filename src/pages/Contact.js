import React from 'react';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';
import PageTransition from '../PageTransition';
import Reveal from '../components/Reveal';
import site from '../data/site';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    note: 'Best for role opportunities — I reply within a day.',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'ameya-kulkarni10',
    href: site.linkedin,
    note: 'For a proper look at my experience and background.',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: `@${site.githubUser}`,
    href: site.github,
    note: 'Everything on this site, with commit history to prove it.',
  },
];

const Contact = () => (
  <PageTransition>
    <section className="px-5 pb-24 pt-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent dark:text-accent-dark">
            Contact
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.1] text-ink dark:text-white sm:text-6xl">
            Let&apos;s grab a <em className="text-accent dark:text-accent-dark">coffee</em> and
            talk product.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 dark:text-stone-400">
            I&apos;m actively looking for Associate Product Manager roles in the UK. If you&apos;re
            hiring, or just want a second pair of eyes on a product problem, I&apos;d genuinely
            love to hear from you.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-ink/50 dark:text-stone-500">
            <MapPin size={15} /> {site.location} · open to hybrid and remote
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-accent-dark/40"
              >
                <div className="flex items-center justify-between">
                  <c.icon size={22} className="text-accent dark:text-accent-dark" />
                  <ArrowUpRight
                    size={18}
                    className="text-ink/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent dark:text-stone-600 dark:group-hover:text-accent-dark"
                  />
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold text-ink dark:text-white">
                  {c.label}
                </h2>
                <p className="mt-1 text-sm font-medium text-accent dark:text-accent-dark">
                  {c.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-stone-400">
                  {c.note}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 rounded-3xl bg-ink p-10 text-center dark:bg-white/5 dark:ring-1 dark:ring-white/10 sm:p-14">
            <p className="font-display text-2xl italic text-paper dark:text-white sm:text-3xl">
              &ldquo;The best way to predict what I&apos;d be like on your team is to look at what
              I&apos;ve already shipped.&rdquo;
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block rounded-full bg-accent px-8 py-4 font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Email me — {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </PageTransition>
);

export default Contact;
