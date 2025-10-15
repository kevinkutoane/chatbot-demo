import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const linkClasses = useMemo(() => (path) =>
    `px-5 py-2.5 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 relative group ${
      location.pathname === path
        ? "bg-blue-600 text-white backdrop-blur-md shadow-lg shadow-blue-500/20"
        : "text-slate-300 hover:text-white hover:bg-white/10"
    }`, [location.pathname]);

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-lg">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="relative">
          <Sparkles className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
          <div className="absolute inset-0 bg-blue-400 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        </div>
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Site Assistant
          </h1>
          <p className="text-xs text-cyan-300">Demo v1.0</p>
        </div>
      </Link>
      <div className="flex gap-3" role="navigation" aria-label="Main navigation">
        <Link to="/" className={linkClasses("/")}>
          <span className="relative z-10">Home</span>
        </Link>
        <Link to="/about" className={linkClasses("/about")}>
          <span className="relative z-10">About</span>
        </Link>
        <Link to="/contact" className={linkClasses("/contact")}>
          <span className="relative z-10">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
