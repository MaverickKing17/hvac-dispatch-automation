
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Phone } from 'lucide-react';
import { getDispatcherResponse } from '../services/geminiService';
import { ChatMessage, MessageRole } from '../types';

const AIDispatcherChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "Hello! I'm Omega's Instant Dispatcher. Don't freeze tonight—how can I help you right now?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: MessageRole.USER, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getDispatcherResponse(input, messages.map(m => ({ role: m.role, text: m.text })));
    
    setMessages(prev => [...prev, { role: MessageRole.MODEL, text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col border border-gray-200 overflow-hidden mb-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-blue-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold text-sm">24/7 AI Dispatcher</h3>
                <span className="text-[10px] text-blue-200 uppercase tracking-widest font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Active Now
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-800 p-1 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === MessageRole.USER 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Describe your emergency..."
                className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-all shadow-md active:scale-95 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-3">
              Fastest dispatch in Toronto. No wait times.
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95 border-4 border-white"
        >
          <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold">1</span>
          <div className="absolute right-20 bg-white text-blue-900 font-bold px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-sm">
            Talk to AI Dispatcher
          </div>
        </button>
      )}
    </div>
  );
};

export default AIDispatcherChat;
