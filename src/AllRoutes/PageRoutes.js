import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import EventsSection from '../Me/EventsSection'
import WavecrazeSponser from '../Me/WavecrazeSponser'
import RNTeam from '../Me/RNTeam'
import Footer from '../Me/Footer'
import RegisterTalent from '../Me/RegisterTalent'
import RegisterGlam from '../Me/RegisterGlam'

function PageRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<EventsSection />} />
        <Route path="/events" element={<EventsSection />} />
        <Route path="/sponsers" element={<WavecrazeSponser/>}/>
        <Route path="/team" element={<RNTeam />} />
        <Route path="/contact" element={<Footer />} />

        {/* registr routes */}
        {/* <Route path="/talentXregister" element={<Register />} /> */}
    </Routes>

    <Routes>
      <Route path="/talentXregister" element={<RegisterTalent />} />
      <Route path="/glamItUpRegister" element={<RegisterGlam />} />
    </Routes>
    </>
  )
}

export default PageRoutes