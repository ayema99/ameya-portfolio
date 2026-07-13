import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import site from '../data/site';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors ${
      isActive
        ? 'text-accent dark:text-accent-dark'
        : 'text-ink/70 hover:text-ink dark:text-stone-400 dark:hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-xl dark:border-white/10 dark:bg-night/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="font-display text-xl font-semibold italic text-ink dark:text-white"
          onClick={() => setOpen(false)}
        >
          {site.firstName}
          <span className="text-accent dark:text-accent-dark">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-ink/15 px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent dark:border-white/15 dark:text-stone-200 dark:hover:border-accent-dark dark:hover:text-accent-dark md:block"
          >
            GitHub ↗
          </a>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink dark:text-stone-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="p-2 text-ink dark:text-stone-200 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="space-y-1 border-t border-ink/10 px-5 py-4 dark:border-white/10 md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 font-display text-lg ${
                  isActive
                    ? 'bg-accent-soft text-accent dark:bg-white/10 dark:text-accent-dark'
                    : 'text-ink/80 dark:text-stone-300'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
