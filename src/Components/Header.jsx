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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-blue-900/95 backdrop-blur-lg shadow-lg border-b border-blue-700/50' 
        : 'bg-transparent backdrop-blur-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Side - Logo and Heading */}
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Float Chat Logo" 
              className="h-14 w-14 object-contain filter brightness-110 drop-shadow-lg"
            />
            <h1 className="text-3xl font-bold text-white font-sans tracking-wide drop-shadow-md">
              FloatChat
            </h1>
          </div>

          {/* Right Side - Navigation Items */}
          <div className="flex items-center space-x-6">
            
            {/* Modules Dropdown */}
            <div className="relative">
              <select 
                name="modules" 
                id="modules"
                defaultValue="modules"
                className={`appearance-none text-white px-4 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/20 cursor-pointer ${
                  isScrolled ? 'bg-white/15' : 'bg-white/10'
                }`}
              >
                <option value="modules" className="bg-blue-900 text-white">Modules</option>
                <option value="marine-navigation" className="bg-blue-900 text-white">Marine Navigation</option>
                <option value="coastal-livelihood" className="bg-blue-900 text-white">Coastal Livelihood</option>
                <option value="research" className="bg-blue-900 text-white">Research</option>
              </select>
              
              {/* Custom Dropdown Arrow */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* About Us Button */}
            <button className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
              isScrolled 
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg' 
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50'
            } backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent`}>
              About Us
            </button>

          </div>
        </div>
      </div>
    </nav>
  )
}
