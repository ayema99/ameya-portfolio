import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, Sparkles, X } from 'lucide-react';
import site from '../data/site';
import { suggestedPrompts } from '../data/chatPrompts';
import usePortfolioChat from '../hooks/usePortfolioChat';

function toPlainText(text) {
  return text.replace(/\*\*/g, '');
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-1 py-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 animate-bounce rounded-full bg-accent/70 dark:bg-accent-dark/70"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

const ChatPanel = ({
  variant = 'widget',
  onClose,
  initialMessage,
  showHeader = true,
  className = '',
}) => {
  const { messages, isLoading, error, sendMessage, clearChat } = usePortfolioChat();
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);
  const initialSentRef = useRef(false);

  useEffect(() => {
    if (messages.length === 0 && !isLoading) return;

    const container = scrollRef.current;
    if (!container) return;

    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialMessage && !initialSentRef.current) {
      initialSentRef.current = true;
      sendMessage(initialMessage);
    }
  }, [initialMessage, sendMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  const handlePromptClick = (prompt) => {
    if (isLoading) return;
    sendMessage(prompt);
  };

  const isCompact = variant === 'hero';

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-2xl shadow-ink/10 dark:border-white/10 dark:bg-night dark:shadow-black/40 ${className}`}
    >
      {showHeader && (
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 font-display text-sm font-semibold text-accent dark:bg-accent-dark/15 dark:text-accent-dark">
              {site.firstName.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="font-display text-base font-semibold text-ink dark:text-white">
                {site.firstName}&apos;s AI
              </p>
              <p className="flex items-center gap-1.5 text-xs text-ink/50 dark:text-stone-500">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Trained on his real work
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {messages.length > 0 && (
              <button
                type="button"
                onClick={clearChat}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink dark:text-stone-500 dark:hover:bg-white/10 dark:hover:text-white"
              >
                Clear
              </button>
            )}
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close chat"
                className="rounded-full p-2 text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink dark:text-stone-500 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      )}

      <div
        ref={scrollRef}
        className={`flex-1 overflow-y-auto ${isCompact ? 'px-4 py-4' : 'px-5 py-5'}`}
      >
        {messages.length === 0 && !isLoading && (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Sparkles size={18} className="mt-0.5 shrink-0 text-accent dark:text-accent-dark" />
              <p className="text-sm leading-relaxed text-ink/70 dark:text-stone-400">
                Ask me anything about {site.firstName}&apos;s projects, skills, or whether he&apos;d
                be a fit for your team.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handlePromptClick(prompt)}
                  className="rounded-full border border-ink/15 px-3 py-1.5 text-left text-xs font-medium text-ink/70 transition-colors hover:border-accent/40 hover:text-accent dark:border-white/15 dark:text-stone-400 dark:hover:border-accent-dark/40 dark:hover:text-accent-dark"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          {messages.map((msg, i) => (
            <div
              key={`${msg.role}-${i}`}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-ink text-paper dark:bg-white dark:text-night'
                    : 'bg-ink/5 text-ink dark:bg-white/10 dark:text-stone-200'
                }`}
              >
                {msg.role === 'assistant' && msg.content
                  ? toPlainText(msg.content)
                  : msg.content || (isLoading && i === messages.length - 1 ? <TypingIndicator /> : null)}
              </div>
            </div>
          ))}
          {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-ink/5 px-4 py-2 dark:bg-white/10">
                <TypingIndicator />
              </div>
            </div>
          )}
        </div>
      </div>

      {error && (
        <p className="px-5 pb-2 text-xs text-red-600 dark:text-red-400">{error}</p>
      )}

      <form
        onSubmit={handleSubmit}
        className={`border-t border-ink/10 dark:border-white/10 ${isCompact ? 'p-3' : 'p-4'}`}
      >
        <div className="flex items-center gap-2 rounded-full border border-ink/15 bg-white/80 px-4 py-2 dark:border-white/15 dark:bg-white/5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything…"
            disabled={isLoading}
            className="min-w-0 flex-1 bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none dark:text-white dark:placeholder:text-stone-500"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-opacity disabled:opacity-40 dark:bg-accent-dark"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatPanel;
