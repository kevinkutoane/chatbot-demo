import React from "react";
import { Mail, MessageCircle, Github, Linkedin, Twitter, Sparkles } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant responses via our AI chatbot",
      action: "Start Chatting",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "kevinkutoane@ymail.com",
      action: "Send Email",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", color: "hover:text-blue-400" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", color: "hover:text-blue-400" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 backdrop-blur-sm">
          <Mail className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300">Get in Touch</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h1>
        
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Have questions about the chatbot demo? Want to discuss implementation? 
          We're here to help you bring intelligent assistance to your projects.
        </p>
      </div>

      {/* Chatbot Alert */}
      <div className="mb-12 p-8 bg-gradient-to-r from-amber-900/40 to-orange-900/40 backdrop-blur-md rounded-3xl border border-amber-500/20 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl">
              <Sparkles className="w-10 h-10 text-amber-400" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2 text-white">💡 Try the Chatbot!</h2>
            <p className="text-amber-200">
              The chatbot knows you're on the Contact page and can provide relevant information. 
              Click the chat icon in the bottom right to start a conversation!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {contactMethods.map((method, index) => (
          <div 
            key={index}
            className="group p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            <div className={`inline-flex p-4 bg-gradient-to-br ${method.color} rounded-2xl mb-4 text-white shadow-lg`}>
              {method.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">{method.title}</h3>
            <p className="text-slate-300 mb-6">{method.description}</p>
            <button 
              onClick={() => {
                if (method.title === "Live Chat") {
                  // Find and click the floating chatbot button
                  const chatButton = document.querySelector('button[aria-label="Open chat assistant"]');
                  if (chatButton) chatButton.click();
                }
              }}
              className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 font-semibold border border-white/20 group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
            >
              {method.action}
            </button>
          </div>
        ))}
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-md rounded-3xl border border-cyan-500/20">
          <h3 className="text-xl font-bold mb-4 text-white">🎯 Demo Information</h3>
          <p className="text-slate-300 leading-relaxed">
            This chatbot demonstrates context-aware AI responses that adapt based on the page you're viewing. 
            Perfect for customer support, FAQs, and interactive guides.
          </p>
        </div>

        <div className="p-8 bg-gradient-to-br from-indigo-900/40 to-blue-900/40 backdrop-blur-md rounded-3xl border border-indigo-500/20">
          <h3 className="text-xl font-bold mb-4 text-white">🛠️ Built With Excellence</h3>
          <p className="text-slate-300 leading-relaxed">
            Crafted using modern React patterns, Tailwind CSS for stunning visuals, 
            and responsive design principles to ensure a seamless experience across all devices.
          </p>
        </div>
      </div>

      {/* Social Links & Footer */}
      <div className="text-center p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
        <h3 className="text-2xl font-bold mb-4 text-white">Connect on Social Media</h3>
        <p className="text-slate-300 mb-6">Follow for updates and more projects</p>
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((social, index) => (
            <button
              key={index}
              className={`p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 text-slate-300 ${social.color} hover:scale-110 border border-white/10`}
              aria-label={social.label}
            >
              {social.icon}
            </button>
          ))}
        </div>
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-cyan-500/30">
          <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-semibold">Built by Kevin</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-400">Full-Stack Software Developer</span>
        </div>
      </div>
    </main>
  );
}
