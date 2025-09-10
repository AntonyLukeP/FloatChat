import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Launch } from '../Pages/Launch.jsx'
import { Dashboard } from '../Pages/Dashboard.jsx'
import { ChatBot } from '../Pages/ChatBot.jsx'
import { div } from 'framer-motion/client'

export const AllRoutes = () => {
  return (
    <div className="min-h-screen bg-blue-900">
      <Routes>
      <Route path="/" element={<Launch/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path='/chatbot' element={<ChatBot />} />
    </Routes>

    </div>
    
  )
}
