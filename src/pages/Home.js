import React, { useCallback, useEffect, useState } from "react";
import { MessageSquare, Zap, Shield, Sparkles, ArrowRight, Cpu, Brain, Rocket } from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
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
    <div className="flex flex-col items-center text-center py-20 px-6 max-w-7xl mx-auto relative">
      {/* 3D Floating Shapes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="mb-16 relative z-10" style={{ transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)` }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 backdrop-blur-xl shadow-lg shadow-cyan-500/10 hover:scale-105 transition-transform duration-300">
          <Sparkles className="w-4 h-4 text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-sm text-blue-300 font-semibold">AI-Powered Assistant</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Welcome to the Future
          </span>
          <br />
          <span className="text-white drop-shadow-[0_0_30px_rgba(100,200,255,0.3)]">of Site Assistance</span>
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

      {/* 3D Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full mb-16 relative z-10" style={{ perspective: '1000px' }}>
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group relative"
            style={{
              transform: `translateZ(${index * 20}px)`,
              animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
              animationDelay: `${index * 0.2}s`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:scale-110 hover:rotate-1 shadow-2xl group-hover:shadow-cyan-500/30 transform-gpu"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(20px)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative" style={{ transform: 'translateZ(30px)' }}>
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl mb-4 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-cyan-500/50">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
              {/* 3D Edge Highlight */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* New 3D Stats Section */}
      <div className="grid grid-cols-3 gap-6 w-full mb-16 max-w-4xl">
        {[
          { icon: <Brain className="w-8 h-8" />, value: "99%", label: "Accuracy", color: "from-cyan-500 to-blue-500" },
          { icon: <Zap className="w-8 h-8" />, value: "<1s", label: "Response Time", color: "from-blue-500 to-indigo-500" },
          { icon: <Rocket className="w-8 h-8" />, value: "24/7", label: "Availability", color: "from-indigo-500 to-purple-500" }
        ].map((stat, index) => (
          <div 
            key={index}
            className="group relative p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 transform-gpu"
            style={{
              transform: `perspective(1000px) rotateY(${index === 1 ? 0 : index === 0 ? -5 : 5}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-xl mb-3 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
              {stat.icon}
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* 3D Call to Action Card */}
      <div 
        className="w-full relative group"
        style={{ perspective: '1500px' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700 opacity-50 group-hover:opacity-100"></div>
        <div 
          className="relative p-10 bg-gradient-to-br from-slate-900/90 via-blue-900/50 to-slate-900/90 backdrop-blur-2xl rounded-3xl border border-cyan-500/30 shadow-2xl transform-gpu transition-all duration-700 hover:scale-[1.02] hover:border-cyan-400/60"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(2deg)',
          }}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient bg-[length:200%_auto]"></div>
          
          <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
            <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Ready to Experience the Magic?</h2>
            <p className="text-slate-300 mb-6 text-lg max-w-2xl mx-auto">
              Try navigating to the <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">About</span> or{" "}
              <span className="font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Contact</span> page and ask the assistant anything!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: "React 19", color: "from-blue-600/30 to-cyan-600/30 border-cyan-500/50" },
                { label: "Tailwind CSS", color: "from-slate-600/30 to-slate-700/30 border-slate-500/50" },
                { label: "Modern UI/UX", color: "from-indigo-600/30 to-blue-600/30 border-indigo-500/50" },
                { label: "AI-Powered", color: "from-cyan-600/30 to-blue-600/30 border-blue-500/50" }
              ].map((tag, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 bg-gradient-to-r ${tag.color} rounded-full text-sm font-semibold text-white border backdrop-blur-sm hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-default`}
                  style={{
                    transform: `translateZ(${20 + index * 5}px)`,
                    animation: `float ${2 + index * 0.3}s ease-in-out infinite`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
          
          {/* 3D Corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-indigo-500/50 rounded-br-3xl"></div>
        </div>
      </div>
    </div>
  );
}
