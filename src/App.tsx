import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Film, Send, Popcorn, Clapperboard, Star, Heart, 
  Search, Clock, Award, TrendingUp, ThumbsUp, User, Calendar, Coffee
} from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { generateResponse } from './data/movieData';

function App() {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hello! I'm Swetha Talkies, your cinema expert. Ask me about movies, directors, or request recommendations!", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile viewport on load and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simulate initial app loading
  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(false);
    }, 2000); // Reduced loading time for mobile
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setLoading(true);

    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
      setLoading(false);
    }, 800); // Faster response for mobile
  };

  // Compact suggestions for mobile
  const suggestions = [
    { text: isMobile ? "Action movies" : "Recommend action movies", icon: <Clapperboard className="w-3 h-3 md:w-4 md:h-4" /> },
    { text: isMobile ? "Drama films" : "Best drama films", icon: <Star className="w-3 h-3 md:w-4 md:h-4" /> },
    { text: isMobile ? "2010 movies" : "Movies from 2010", icon: <Calendar className="w-3 h-3 md:w-4 md:h-4" /> },
    { text: isMobile ? "Nolan films" : "Christopher Nolan films", icon: <Award className="w-3 h-3 md:w-4 md:h-4" /> },
    { text: isMobile ? "Tamil movies" : "Popular Tamil movies", icon: <Film className="w-3 h-3 md:w-4 md:h-4" /> },
    { text: isMobile ? "Bollywood" : "Bollywood recommendations", icon: <TrendingUp className="w-3 h-3 md:w-4 md:h-4" /> },
  ];

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center">
        <motion.div 
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2 
          }}
          className="relative"
        >
          <Clapperboard className="w-10 h-10 md:w-16 md:h-16 text-white" />
          <motion.div 
            animate={{ rotate: [-45, 0, -45] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute top-0 w-10 h-1 md:w-16 md:h-1 bg-white/80 rounded origin-left"
          />
        </motion.div>
        <motion.p 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="ml-3 text-base md:text-xl text-white font-semibold"
        >
          Loading Swetha Talkies...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-1 sm:px-4 py-2 sm:py-8 max-w-4xl h-screen flex flex-col">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-3xl shadow-2xl overflow-hidden flex-1 flex flex-col"
        >
          {/* Header - Compact for mobile */}
          <motion.div 
            className="bg-blue-700 p-3 sm:p-6"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <motion.div 
                className="p-1.5 sm:p-3 bg-blue-600 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Film className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-xl sm:text-3xl font-bold text-white">Swetha Talkies</h1>
                <div className="flex items-center gap-1 sm:gap-2">
                  <p className="text-xs sm:text-base text-blue-100">Your Cinema Expert</p>
                  <Popcorn className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-300" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chat Container - Flex-grow to use available space */}
          <div className="flex-1 overflow-y-auto p-2 sm:p-6 space-y-3 sm:space-y-6 bg-gray-50/5">
            <AnimatePresence>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChatMessage message={msg.text} isBot={msg.isBot} />
                </motion.div>
              ))}
            </AnimatePresence>
            {loading && (
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ 
                      rotate: [0, 180, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2 
                    }}
                  >
                    <Clapperboard className="w-4 h-4 text-blue-200" />
                  </motion.div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-200 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-1.5 h-1.5 bg-blue-200 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-1.5 h-1.5 bg-blue-200 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions - Scrollable on mobile */}
          <div className="p-2 sm:p-4 bg-blue-800/30">
            <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap sm:justify-center">
              {suggestions.map((suggestion, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-blue-600/30 rounded-full text-xs sm:text-sm text-blue-100 hover:bg-blue-600/50 transition-colors whitespace-nowrap"
                  onClick={() => setInput(suggestion.text)}
                >
                  {suggestion.icon}
                  <span>{suggestion.text}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Input Form - Better Mobile UI */}
          <form onSubmit={handleSubmit} className="p-2 sm:p-4 bg-white/5 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about movies..."
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                className="p-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 sm:gap-2 disabled:opacity-50 min-w-10"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Send</span>
              </motion.button>
            </div>
          </form>

          {/* Stats Bar - Simplified for mobile */}
          <div className="hidden sm:block bg-blue-800/40 border-t border-white/5 p-2 sm:p-3">
            <div className="flex justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-blue-200">
              <div className="flex items-center gap-1">
                <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>200+ Movies</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>20+ Directors</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
                <span>Cinema Expert</span>
              </div>
            </div>
          </div>

          {/* Footer - Compact for mobile */}
          <motion.div 
            className="p-2 sm:p-4 bg-blue-900/50 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-1 text-blue-100 text-xs">
              <span>By</span>
              <motion.span 
                className="font-semibold bg-gradient-to-r from-blue-200 to-blue-100 text-transparent bg-clip-text flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
              >
                Sanjay Panneerselvan
                <Coffee className="w-3 h-3 text-yellow-300" />
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Background Elements - Optimized for mobile */}
        <div className="fixed inset-0 -z-10">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("/api/placeholder/1920/1080")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/50 to-blue-900/50 backdrop-blur-sm" />
          
          {/* Fewer floating icons for mobile */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(isMobile ? 4 : 8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white/10"
                initial={{ 
                  x: Math.random() * 100 - 50 + '%', 
                  y: Math.random() * 100 + '%',
                  scale: Math.random() * 0.3 + 0.2
                }}
                animate={{ 
                  y: [null, Math.random() * -50 - 10 + '%'],
                  rotate: Math.random() * 360
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: Math.random() * 20 + 20,
                  repeatType: 'reverse'
                }}
              >
                {[<Film size={16} />, <Clapperboard size={16} />, <Star size={16} />, <Popcorn size={16} />][i % 4]}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;