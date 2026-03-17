import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import HomeopathySubPage from './pages/HomeopathySubPage'
import DiseaseDetailPage from './pages/DiseaseDetailPage'
import DiseasesPage from './pages/DiseasesPage'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

// Scrolls to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* About Homeopathy sub-pages */}
        <Route path="/homeopathy/:slug" element={<HomeopathySubPage />} />

        {/* Diseases – listing page + detail pages */}
        <Route path="/diseases" element={<DiseasesPage />} />
        <Route path="/diseases/:slug" element={<DiseaseDetailPage />} />

        {/* Legacy redirect support */}
        <Route path="/treatments" element={<DiseasesPage />} />

        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
