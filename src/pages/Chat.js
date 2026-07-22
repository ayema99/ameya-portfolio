import React from 'react';
import PageTransition from '../PageTransition';
import Reveal from '../components/Reveal';
import ChatPanel from '../components/ChatPanel';
import site from '../data/site';

const Chat = () => (
  <PageTransition>
    <section className="flex min-h-[calc(100vh-8rem)] flex-col px-5 pb-24 pt-20 sm:px-8">
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent dark:text-accent-dark">
            AI assistant
          </p>
          <h1 className="mt-4 font-display text-5xl font-medium leading-[1.1] text-ink dark:text-white sm:text-6xl">
            Talk to {site.firstName}&apos;s <em className="text-accent dark:text-accent-dark">AI</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70 dark:text-stone-400">
            Ask about projects, skills, or whether he&apos;d be a fit for your team — trained on his
            real work.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex min-h-0 flex-1 flex-col">
          <ChatPanel className="h-[min(720px,calc(100vh-14rem))] min-h-[560px] shadow-xl shadow-ink/10 dark:shadow-black/30" />
        </Reveal>
      </div>
    </section>
  </PageTransition>
);

export default Chat;
