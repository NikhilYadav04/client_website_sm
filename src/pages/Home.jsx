import React from 'react'
import Hero from '../components/Hero'
import WhyHomeopathy from '../components/WhyHomeopathy'
import AboutPreview from '../components/AboutPreview'
import HomeopathySection from '../components/HomeopathySection'
import TreatmentGrid from '../components/TreatmentGrid'
import MidBanner from '../components/MidBanner'
import ClinicGallery from '../components/ClinicGallery'
import TestimonialsPreview from '../components/TestimonialsPreview'
import ContactSection from '../components/ContactSection'

const Home = () => (
    <main>
        <Hero />
        <WhyHomeopathy />
        <AboutPreview />
        <HomeopathySection />
        <TreatmentGrid />
        <MidBanner />
        <ClinicGallery />
        <TestimonialsPreview />
        <ContactSection />
    </main>
)

export default Home
