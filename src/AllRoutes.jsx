import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Launch } from './Pages/Launch'
import { Dashboard } from './Pages/Dashboard'
import { Chatbot } from './Pages/Chatbot'
import { MarineNavigationModule } from './Pages/MarineNavigationModule'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Launch />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/chatbot' element={<Chatbot />} />
        <Route path='/module/marine-navigation' element={<MarineNavigationModule />} />
        <Route path='/module/coastal-livelihood' element={<Dashboard />} />
        <Route path='/module/research' element={<Dashboard />} />
    </Routes>
  )
}