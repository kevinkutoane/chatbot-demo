import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
              {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float delay-2000"></div>
      </div>
        
        <Navbar />
        <main className="flex-1 relative z-10" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="mt-auto py-8 text-center border-t border-white/10 relative z-10">
          <div className="max-w-4xl mx-auto px-6">
            <p className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent font-bold text-lg mb-2">
              Built with React & Tailwind CSS
            </p>
            <p className="text-slate-400 text-sm">
              Created with ❤️ by <span className="text-cyan-400 font-semibold">Kevin</span>
              <span className="mx-2">•</span>
              Full-Stack Software Developer
            </p>
            <p className="text-slate-500 text-xs mt-2">
              © {new Date().getFullYear()} Site Assistant Demo. All rights reserved.
            </p>
          </div>
        </footer>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
