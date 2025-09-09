import React from 'react'
import water from '../Assets/water.mp4'
import { useNavigate } from 'react-router-dom'
import { FaRobot, FaArrowRight, FaAnchor, FaFish, FaSearch, FaWater, FaCompass, FaShip, FaShieldAlt } from 'react-icons/fa'
import { Header } from '../Components/Header'

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleAsk = () => {
    navigate('/chatbot');
  }

  const handleModuleNavigation = (moduleId) => {
    navigate(`/module/${moduleId}`);
  }

  return (
    <>
      <Header />
      <div className="relative w-full min-h-screen bg-slate-900">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={water} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900"></div>

        {/* Content Section */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 px-4">
          <div className="space-y-8 text-center max-w-4xl">
            {/* Logo and Title */}
            <div className="flex items-center justify-center space-x-4 ">
              <FaRobot className="text-4xl text-cyan-400" />
              <h1 className="text-white text-5xl md:text-6xl font-bold font-Poppins tracking-tight">
                Float Chat
              </h1>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Dive into the future of ocean exploration with our AI-powered chatbot
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={handleAsk}
                className="group relative inline-flex items-center justify-center px-8 py-3 font-Poppins text-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25"
              >
                Start Exploring
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className='w-full bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-20'>
        
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Ocean Intelligence Modules</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions for marine navigation, coastal development, and ocean research
          </p>
        </div>

        {/* Marine Navigation Module */}
        <section id="marine-navigation" className="mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6 shadow-lg">
                  <FaAnchor className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Marine Navigation & Sea Travel Intelligence</h3>
                <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  AI-powered navigation system serving fishers, cargo ships, and coast guard with intelligent routing, 
                  real-time weather integration, and comprehensive maritime domain awareness.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <ModuleFeature 
                  icon={<FaCompass />}
                  title="Fisheries Support"
                  description="AI Navigation Assistant with PFZ integration, border alerts, and storm warnings"
                  color="cyan"
                />
                <ModuleFeature 
                  icon={<FaShip />}
                  title="Cargo Operations"
                  description="Route optimization, traffic control, and emission reduction for green shipping"
                  color="blue"
                />
                <ModuleFeature 
                  icon={<FaShieldAlt />}
                  title="Coast Guard Intelligence"
                  description="Maritime domain awareness with dark vessel detection and enforcement tools"
                  color="indigo"
                />
              </div>
              
              <div className="text-center">
                <button 
                  onClick={() => handleModuleNavigation('marine-navigation')}
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Explore Module
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Coastal Livelihood Module */}
        <section id="coastal-livelihood" className="mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6 shadow-lg">
                  <FaFish className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Coastal Livelihood & Community Development</h3>
                <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  Sustainable development solutions for coastal communities including aquaculture optimization, 
                  eco-tourism planning, and resource management systems.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <ModuleFeature 
                  icon={<FaFish />}
                  title="Sustainable Fisheries"
                  description="Smart fishing zones, quota management, and ecosystem preservation"
                  color="blue"
                />
                <ModuleFeature 
                  icon={<FaWater />}
                  title="Aquaculture Systems"
                  description="AI-driven fish farming and seaweed cultivation optimization"
                  color="teal"
                />
                <ModuleFeature 
                  icon={<FaCompass />}
                  title="Eco-Tourism"
                  description="Community-based tourism with environmental impact monitoring"
                  color="purple"
                />
              </div>
              
              <div className="text-center">
                <button 
                  onClick={() => handleModuleNavigation('coastal-livelihood')}
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Explore Module
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Marine Research Module */}
        <section id="research" className="mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mb-6 shadow-lg">
                  <FaSearch className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Marine Research & Ocean Analytics</h3>
                <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  Advanced oceanographic research tools with AI-powered data analysis, climate monitoring, 
                  and biodiversity assessment for scientific discovery.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <ModuleFeature 
                  icon={<FaSearch />}
                  title="Data Collection"
                  description="Automated sensor networks and satellite data integration"
                  color="purple"
                />
                <ModuleFeature 
                  icon={<FaWater />}
                  title="Marine Biology"
                  description="Species tracking, migration analysis, and ecosystem health monitoring"
                  color="indigo"
                />
                <ModuleFeature 
                  icon={<FaShieldAlt />}
                  title="Climate Impact"
                  description="Ocean acidification tracking and sea level rise prediction"
                  color="violet"
                />
              </div>
              
              <div className="text-center">
                <button 
                  onClick={() => handleModuleNavigation('research')}
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Explore Module
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* All Modules Overview */}
        <section id="modules" className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <FaWater className="text-5xl text-teal-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">Complete Ocean Intelligence Suite</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Integrated solutions for comprehensive ocean management and exploration
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <QuickAccessCard 
                icon={<FaAnchor />}
                title="Marine Navigation"
                description="Smart navigation for all maritime sectors"
                color="cyan"
                onClick={() => handleModuleNavigation('marine-navigation')}
              />
              <QuickAccessCard 
                icon={<FaFish />}
                title="Coastal Livelihood"
                description="Sustainable coastal development"
                color="blue"
                onClick={() => handleModuleNavigation('coastal-livelihood')}
              />
              <QuickAccessCard 
                icon={<FaSearch />}
                title="Marine Research"
                description="Advanced ocean analytics"
                color="purple"
                onClick={() => handleModuleNavigation('research')}
              />
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

// Enhanced Module Feature Component
const ModuleFeature = ({ icon, title, description, color }) => {
  const colorClasses = {
    cyan: 'text-cyan-400 border-cyan-500/30 hover:border-cyan-400',
    blue: 'text-blue-400 border-blue-500/30 hover:border-blue-400',
    indigo: 'text-indigo-400 border-indigo-500/30 hover:border-indigo-400',
    purple: 'text-purple-400 border-purple-500/30 hover:border-purple-400',
    teal: 'text-teal-400 border-teal-500/30 hover:border-teal-400',
    violet: 'text-violet-400 border-violet-500/30 hover:border-violet-400'
  };

  return (
    <div className={`p-6 rounded-xl bg-slate-800/50 border ${colorClasses[color]} transition-all duration-300 hover:transform hover:scale-105`}>
      <div className={`text-2xl ${colorClasses[color].split(' ')[0]} mb-3`}>
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

// Quick Access Card Component - FIXED
const QuickAccessCard = ({ icon, title, description, color, onClick }) => {
  const getColorClasses = (color) => {
    switch(color) {
      case 'cyan':
        return {
          background: 'from-cyan-900/50 to-cyan-900/20',
          border: 'border-cyan-500/30 hover:border-cyan-400',
          iconColor: 'text-cyan-400',
          hoverColor: 'hover:text-cyan-300'
        };
      case 'blue':
        return {
          background: 'from-blue-900/50 to-blue-900/20',
          border: 'border-blue-500/30 hover:border-blue-400',
          iconColor: 'text-blue-400',
          hoverColor: 'hover:text-blue-300'
        };
      case 'purple':
        return {
          background: 'from-purple-900/50 to-purple-900/20',
          border: 'border-purple-500/30 hover:border-purple-400',
          iconColor: 'text-purple-400',
          hoverColor: 'hover:text-purple-300'
        };
      default:
        return {
          background: 'from-slate-900/50 to-slate-900/20',
          border: 'border-slate-500/30 hover:border-slate-400',
          iconColor: 'text-slate-400',
          hoverColor: 'hover:text-slate-300'
        };
    }
  };

  const colors = getColorClasses(color);

  return (
    <div 
      className={`text-center p-8 rounded-2xl bg-gradient-to-b ${colors.background} border ${colors.border} transition-all duration-300 hover:transform hover:scale-105 cursor-pointer`} 
      onClick={onClick}
    >
      <div className={`text-4xl ${colors.iconColor} mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>
      <button className={`${colors.iconColor} ${colors.hoverColor} font-medium transition-colors`}>
        Learn More →
      </button>
    </div>
  );
};
