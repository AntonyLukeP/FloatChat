import React from 'react'
import water from '../Assets/water.mp4'
import { useNavigate } from 'react-router-dom'
import { FaRobot, FaArrowRight } from 'react-icons/fa'
import { Header } from '../Components/Header'

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleAsk = () => {
    navigate('/chatbot');
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

        {/* Wave Divider */}

      </div>

      {/* Features Section */}
      <div className='w-full min-h-screen bg-slate-900 px-4 py-16'>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <FeatureCard 
            title="Ocean Data"
            description="Access real-time ocean data and insights powered by SYNTAX SQUAD"
          />
          <FeatureCard 
            title="Marine Life"
            description="Learn about diverse marine species and their ecosystems"
          />
          <FeatureCard 
            title="Conservation"
            description="Discover how to contribute to ocean conservation efforts"
          />
        </div>
      </div>
    </>
  )
}

// Feature Card Component
const FeatureCard = ({ title, description }) => (
  <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
      {title}
    </h3>
    <p className="text-slate-400">
      {description}
    </p>
  </div>
)
