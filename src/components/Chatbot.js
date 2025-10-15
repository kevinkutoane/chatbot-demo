import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your AI assistant. Ask me anything about this demo site. 🚀" },
  ]);
  const messagesEndRef = useRef(null);
  const location = useLocation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getPageContext = () => {
    switch (location.pathname) {
      case "/about":
        return "about page";
      case "/contact":
        return "contact page";
      default:
        return "home page";
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulated contextual response with better intelligence
    setTimeout(() => {
      const pageContext = getPageContext();
      let botResponse = "";
      
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        botResponse = `Hello! 👋 I see you're on the ${pageContext}. How can I assist you today?`;
      } else if (lowerInput.includes("page")) {
        botResponse = `You're currently viewing the ${pageContext}. This demo showcases context-aware AI assistance!`;
      } else if (lowerInput.includes("feature") || lowerInput.includes("what can")) {
        botResponse = `I'm a context-aware chatbot that adapts responses based on which page you're viewing. Try navigating to different pages and asking me questions! ✨`;
      } else if (lowerInput.includes("build") || lowerInput.includes("made")) {
        botResponse = `This site was built with React 19, Tailwind CSS, and modern web technologies. It demonstrates intelligent, page-aware assistance!`;
      } else {
        botResponse = `That's a great question! On the ${pageContext}, I can provide relevant information and help you navigate. What would you like to know? 🤔`;
      }

      setMessages(prev => [...prev, { sender: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-slate-900 shadow-2xl rounded-3xl flex flex-col overflow-hidden z-[9999] border border-cyan-500/30">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-900"></div>
              </div>
              <div>
                <h3 className="font-bold text-white">AI Assistant</h3>
                <p className="text-xs text-blue-100">Always here to help</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 text-white"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                      <Bot size={16} className="text-white" />
                    </div>
                  </div>
                )}
                <div
                  className={`px-4 py-3 rounded-2xl text-sm max-w-[75%] shadow-lg ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-br-sm"
                      : "bg-slate-800 text-slate-100 border border-slate-700 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-xl">
                      <User size={16} className="text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                    <Bot size={16} className="text-white" />
                  </div>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-slate-800 border border-slate-700">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-800 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                autoFocus
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            console.log('Opening chatbot...');
            setIsOpen(true);
          }}
          type="button"
          className="fixed bottom-6 right-6 p-5 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 z-[9999] hover:scale-110 group animate-pulse cursor-pointer"
          aria-label="Open chat assistant"
          title="Click to open chat assistant"
        >
          <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
        </button>
      )}
    </>
  );
}
