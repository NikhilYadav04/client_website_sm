import React from 'react'
import Hero from '../components/Hero'
import WhyHomeopathy from '../components/WhyHomeopathy'
import AboutPreview from '../components/AboutPreview'
import ConsultationProcess from '../components/ConsultationProcess'
import HomeopathySection from '../components/HomeopathySection'
import TreatmentGrid from '../components/TreatmentGrid'
import MidBanner from '../components/MidBanner'
import BeforeAfterSection from '../components/BeforeAfterSection'
import EventsSection from '../components/EventsSection'
import ClinicGallery from '../components/ClinicGallery'
import TestimonialsPreview from '../components/TestimonialsPreview'
import InternationalSection from '../components/InternationalSection'
import ContactSection from '../components/ContactSection'

const Home = () => (
    <main>
        <Hero />
        <WhyHomeopathy />
        <AboutPreview />
        <ConsultationProcess />
        <HomeopathySection />
        <TreatmentGrid />
        <MidBanner />
        <BeforeAfterSection />
        <EventsSection />
        <ClinicGallery />
        <TestimonialsPreview />
        <InternationalSection />
        <ContactSection />
    </main>
)

export default Home
