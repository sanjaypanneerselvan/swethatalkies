import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Bot, Star } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
  const isMovieRecommendation = message.includes('recommend watching');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-4 ${isBot ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div 
        className={`p-3 rounded-full ${
          isBot ? 'bg-gradient-to-br from-blue-600 to-blue-700' : 'bg-gradient-to-br from-gray-700 to-gray-800'
        } shadow-lg`}
      >
        {isBot ? (
          <Bot className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </div>
      <div
        className={`max-w-[80%] p-4 rounded-2xl shadow-md ${
          isBot 
            ? 'bg-gradient-to-br from-blue-100 to-blue-50' 
            : 'bg-white'
        } ${isMovieRecommendation ? 'border-2 border-blue-200' : ''}`}
      >
        {isMovieRecommendation && (
          <div className="flex items-center gap-2 mb-2 text-blue-600">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">Recommended Movie</span>
          </div>
        )}
        <p className="text-gray-800 leading-relaxed">{message}</p>
      </div>
    </motion.div>
  );
};