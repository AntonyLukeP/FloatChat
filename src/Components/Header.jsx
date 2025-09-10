import React, { useState, useEffect } from 'react'
import logo from "../assets/FloatChat.png"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleModuleChange = (event) => {
    const selectedModule = event.target.value;
    
    if (selectedModule && selectedModule !== 'modules') {
      const element = document.getElementById(selectedModule);
      if (element) {
        // Add offset for fixed header (64px = h-16)
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else if (selectedModule === 'modules') {
      // Scroll to the modules overview section
      const element = document.getElementById('modules');
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-xl border-b border-slate-700/50' 
        : 'bg-transparent backdrop-blur-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Side - Logo and Brand */}
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="FloatChat Logo" 
              className="h-12 w-12 object-contain filter brightness-110 drop-shadow-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-white font-sans tracking-wide drop-shadow-md">
                FloatChat
              </h1>
              <p className="text-xs text-slate-300 font-light">
                Ocean Intelligence AI
              </p>
            </div>
          </div>

          {/* Center - Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#modules" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
              Solutions
            </a>
            <div className="relative group">
              <button className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center">
                Ecosystems
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-600/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#marine-navigation" className="block px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">Marine Navigation</a>
                <a href="#coastal-livelihood" className="block px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">Coastal Development</a>
                <a href="#research" className="block px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">Research & Analytics</a>
              </div>
            </div>
            <a href="#blog" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
              Blog
            </a>
            <a href="#contact" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
              Contacts
            </a>
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex items-center space-x-4">
            <button className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              isScrolled 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl' 
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50'
            } backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent`}>
              Explore Now
            </button>
            
            {/* Mobile menu button */}
            <button className="lg:hidden text-white hover:text-cyan-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
