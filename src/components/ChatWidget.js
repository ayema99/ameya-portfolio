import React, { useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ChatPanel from './ChatPanel';
import { useChatContext } from '../context/ChatContext';

const ChatWidget = () => {
  const { isOpen, closeChat, toggleChat } = useChatContext();

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) closeChat();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeChat]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeChat}
              className="fixed inset-0 z-[60] bg-ink/20 backdrop-blur-sm dark:bg-black/40 md:hidden"
              aria-label="Close chat overlay"
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className="fixed bottom-24 right-5 z-[70] flex h-[min(560px,calc(100vh-7rem))] w-[min(400px,calc(100vw-2.5rem))] flex-col sm:bottom-28 sm:right-8"
            >
              <ChatPanel variant="widget" onClose={closeChat} className="h-full" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Chat with AI'}
        className="fixed bottom-6 right-5 z-[70] flex items-center gap-2 rounded-full bg-ink px-5 py-3.5 font-medium text-paper shadow-xl shadow-ink/20 transition-colors hover:bg-accent dark:bg-white dark:text-night dark:shadow-black/30 dark:hover:bg-accent-dark sm:bottom-8 sm:right-8"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        <span className="hidden sm:inline">{isOpen ? 'Close' : 'Chat with AI'}</span>
      </motion.button>
    </>
  );
};

export default ChatWidget;
