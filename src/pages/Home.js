import React, { useCallback } from "react";
import { MessageSquare, Zap, Shield, Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  const scrollToBottom = useCallback(() => {
    window.scrollTo({ 
      top: document.body.scrollHeight, 
      behavior: "smooth" 
    });
  }, []);

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Context-Aware",
      description: "Understands which page you're on and provides relevant assistance"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Response",
      description: "Get immediate answers to your questions with AI-powered responses"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Always Available",
      description: "24/7 assistance across all pages with persistent chat history"
    }
  ];

  return (
    <div className="flex flex-col items-center text-center py-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300">AI-Powered Assistant</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Welcome to the Future
          </span>
          <br />
          <span className="text-white">of Site Assistance</span>
        </h1>
        
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Experience a revolutionary chatbot that adapts to your needs. Navigate through pages 
          and watch as your AI assistant provides{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">context-aware responses</span> tailored 
          to each section.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              // Find and click the floating chatbot button
              const chatButton = document.querySelector('button[aria-label="Open chat assistant"]');
              if (chatButton) {
                chatButton.click();
              } else {
                // Fallback: scroll to bottom if chatbot button not found
                scrollToBottom();
              }
            }}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 font-semibold flex items-center gap-2 hover:scale-105"
          >
            Start Chatting
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToBottom}
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold border border-white/20"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 w-full mb-16">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
          >
            <div className="inline-flex p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-slate-300 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="w-full p-10 bg-gradient-to-r from-blue-900/40 via-cyan-900/40 to-indigo-900/40 backdrop-blur-md rounded-3xl border border-cyan-500/30 shadow-2xl">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to Experience the Magic?</h2>
        <p className="text-slate-300 mb-6 text-lg max-w-2xl mx-auto">
          Try navigating to the <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">About</span> or{" "}
          <span className="font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Contact</span> page and ask the assistant anything!
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full text-sm text-cyan-300 border border-cyan-500/30">React 19</span>
          <span className="px-4 py-2 bg-gradient-to-r from-slate-600/20 to-slate-700/20 rounded-full text-sm text-slate-300 border border-slate-500/30">Tailwind CSS</span>
          <span className="px-4 py-2 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-full text-sm text-white border border-indigo-500/30">Modern UI/UX</span>
          <span className="px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full text-sm text-cyan-300 border border-blue-500/30">AI-Powered</span>
        </div>
      </div>
    </div>
  );
}
