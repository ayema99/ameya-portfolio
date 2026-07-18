import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ChatPanel from './ChatPanel';
import { useChatContext } from '../context/ChatContext';
import { suggestedPrompts } from '../data/chatPrompts';
import site from '../data/site';

const HeroChat = () => {
  const { openChat } = useChatContext();
  const [demoPrompt, setDemoPrompt] = useState(null);

  const handlePromptClick = (prompt) => {
    setDemoPrompt(prompt);
  };

  const handleOpenFullChat = () => {
    openChat();
  };

  return (
    <div className="relative">
      <ChatPanel
        key={demoPrompt || 'default'}
        variant="hero"
        showHeader={true}
        initialMessage={demoPrompt}
        className="h-[420px] w-full max-w-md shadow-xl shadow-ink/10 dark:shadow-black/30"
      />

      <div className="mt-4 flex flex-wrap gap-2">
        {suggestedPrompts.slice(0, 3).map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => handlePromptClick(prompt)}
            className="rounded-full border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink/60 transition-colors hover:border-accent/40 hover:text-accent dark:border-white/15 dark:text-stone-400 dark:hover:border-accent-dark/40 dark:hover:text-accent-dark"
          >
            {prompt}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={handleOpenFullChat}
        className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-ink dark:text-accent-dark dark:hover:text-white"
      >
        Open full chat
        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </button>

      <p className="mt-2 text-xs text-ink/40 dark:text-stone-600">
        Powered by AI · trained on {site.firstName}&apos;s portfolio
      </p>
    </div>
  );
};

export default HeroChat;
