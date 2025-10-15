import React from "react";
import { Code, Palette, Cpu, Globe, Rocket, Users } from "lucide-react";

export default function About() {
  const technologies = [
    { icon: <Code className="w-6 h-6" />, name: "React 19.2", color: "from-cyan-400 to-blue-600" },
    { icon: <Palette className="w-6 h-6" />, name: "Tailwind CSS", color: "from-blue-400 to-indigo-600" },
    { icon: <Cpu className="w-6 h-6" />, name: "React Router", color: "from-indigo-400 to-cyan-600" },
    { icon: <Globe className="w-6 h-6" />, name: "Lucide Icons", color: "from-cyan-500 to-blue-700" },
  ];

  const capabilities = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Built with modern React for optimal performance and smooth interactions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric",
      description: "Designed with accessibility and user experience as top priorities"
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 backdrop-blur-sm">
          <Code className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300">About This Project</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Built with Passion
          </span>
        </h1>
        
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          This demo showcases a cutting-edge chatbot widget with context-aware intelligence, 
          built using the latest web technologies and modern design principles.
        </p>
      </div>

      {/* Main Content Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-md rounded-3xl border border-cyan-500/20 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-white">🎯 Project Overview</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            This demonstration site features a persistent chatbot widget that intelligently adapts 
            its responses based on the current page context. Navigate between pages and experience 
            how the assistant provides relevant, contextual information.
          </p>
          <p className="text-slate-400 text-sm">
            Perfect for showcasing AI-powered customer support, knowledge bases, or interactive guides.
          </p>
        </div>

        <div className="p-8 bg-gradient-to-br from-indigo-900/40 to-blue-900/40 backdrop-blur-md rounded-3xl border border-indigo-500/20 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-white">🚀 Real-World Applications</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            In production environments, this chatbot architecture can integrate seamlessly with:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">▸</span>
              <span>Firebase for real-time data and authentication</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">▸</span>
              <span>OpenAI/Gemini for advanced AI responses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">▸</span>
              <span>Your organization's knowledge base</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 text-center hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className={`inline-flex p-3 bg-gradient-to-br ${tech.color} rounded-xl mb-3 text-white`}>
                {tech.icon}
              </div>
              <p className="font-semibold text-white">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {capabilities.map((capability, index) => (
          <div 
            key={index}
            className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-4 text-cyan-400">
              {capability.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{capability.title}</h3>
            <p className="text-slate-300 leading-relaxed">{capability.description}</p>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center p-8 bg-gradient-to-r from-blue-900/40 via-cyan-900/40 to-indigo-900/40 backdrop-blur-md rounded-3xl border border-cyan-500/30">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Want to Learn More?</h3>
        <p className="text-slate-300 mb-6">
          Try interacting with the chatbot to see context-aware responses in action!
        </p>
        <button 
          onClick={() => {
            // Find and click the floating chatbot button
            const chatButton = document.querySelector('button[aria-label="Open chat assistant"]');
            if (chatButton) chatButton.click();
          }}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white rounded-xl hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 font-semibold hover:scale-105"
        >
          Open Chatbot
        </button>
      </div>
    </main>
  );
}
