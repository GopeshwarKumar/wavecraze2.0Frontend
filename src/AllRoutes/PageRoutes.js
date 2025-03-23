import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import EventsSection from '../Me/EventsSection'
import WavecrazeSponser from '../Me/WavecrazeSponser'
import AboutUs from '../Me/AboutUs'
import RNTeam from '../Me/RNTeam'

function PageRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/events" element={<EventsSection />} />
        <Route path="/sponsers" element={<WavecrazeSponser/>}/>
        <Route path="/team" element={<RNTeam />} />
        <Route path="/response" element={<EventsSection />} />
    </Routes>
    </>
  )
}

export default PageRoutes