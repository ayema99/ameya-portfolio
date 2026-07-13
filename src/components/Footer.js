import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import site from '../data/site';

const Footer = () => (
  <footer className="border-t border-ink/10 dark:border-white/10">
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl italic text-ink dark:text-white sm:text-4xl">
            Let&apos;s build something people need.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block border-b-2 border-accent font-medium text-accent dark:border-accent-dark dark:text-accent-dark"
          >
            Get in touch ↗
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-ink/60 transition-colors hover:text-accent dark:text-stone-400 dark:hover:text-accent-dark">
            <Github size={20} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-ink/60 transition-colors hover:text-accent dark:text-stone-400 dark:hover:text-accent-dark">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email"
            className="text-ink/60 transition-colors hover:text-accent dark:text-stone-400 dark:hover:text-accent-dark">
            <Mail size={20} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="rounded-full border border-ink/15 p-2 text-ink/60 transition-colors hover:border-accent hover:text-accent dark:border-white/15 dark:text-stone-400 dark:hover:border-accent-dark dark:hover:text-accent-dark"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2 text-sm text-ink/50 dark:text-stone-500 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>{site.location} · Built with React</p>
      </div>
    </div>
  </footer>
);

export default Footer;
