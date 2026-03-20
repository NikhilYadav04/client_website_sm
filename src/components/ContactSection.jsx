import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Calendar, Globe } from 'lucide-react'
import ConsultationModal from './ConsultationModal'

const WHATSAPP_NUMBER = '919321953605'

const ContactSection = () => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <>
            <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            <section className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

                    {/* Left: Teal info panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="px-10 py-14 flex flex-col justify-center gap-7"
                        style={{ backgroundColor: '#006978' }}
                    >
                        <div>
                            <span className="text-[#b2ebf2] text-xs uppercase tracking-widest font-semibold">Find Us</span>
                            <h2 className="text-3xl font-bold text-white mt-2 leading-tight">
                                Visit Our Clinic
                            </h2>
                            <p className="text-white/60 mt-2 text-sm leading-relaxed">
                                Walk-in or book ahead. Advanced Homeopathy consultations also available online worldwide.
                            </p>
                        </div>

                        <div className="space-y-5">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-2.5 rounded-lg shrink-0">
                                    <MapPin size={18} className="text-[#b2ebf2]" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Clinic Address</p>
                                    <p className="text-white text-sm leading-relaxed">
                                        Nishant Dental Polyclinic,<br />
                                        Opposite Ankur Hospital, Shop No. 7,<br />
                                        Kanjurmarg East, Mumbai – 400042<br />
                                        Maharashtra, India
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-2.5 rounded-lg shrink-0">
                                    <Phone size={18} className="text-[#b2ebf2]" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Phone &amp; WhatsApp</p>
                                    <a
                                        href="tel:+919321953605"
                                        className="text-white text-sm hover:text-[#b2ebf2] transition-colors font-semibold"
                                    >
                                        +91 93219 53605
                                    </a>
                                    <p className="text-white/50 text-xs mt-0.5">Available for Call &amp; WhatsApp</p>
                                </div>
                            </div>

                            {/* Timings */}
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-2.5 rounded-lg shrink-0">
                                    <Clock size={18} className="text-[#b2ebf2]" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Consultation Timings</p>
                                    <div>
                                        <p className="text-[#b2ebf2] text-xs font-semibold uppercase tracking-wide">🇮🇳 Indian Patients (IST)</p>
                                        <p className="text-white text-sm">Morning: 10:00 AM – 12:00 PM</p>
                                        <p className="text-white text-sm">Evening: 05:30 PM – 08:00 PM</p>
                                    </div>
                                    <div>
                                        <p className="text-[#b2ebf2] text-xs font-semibold uppercase tracking-wide">🌍 International Patients</p>
                                        <p className="text-white/70 text-sm">Available via Zoom / Google Meet / WhatsApp</p>
                                        <button
                                            onClick={() => {
                                                const el = document.getElementById('international')
                                                if (el) {
                                                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                                } else {
                                                    // On /contact page, navigate to home and scroll
                                                    window.location.href = '/#international'
                                                }
                                            }}
                                            className="text-[#80deea] text-xs font-semibold underline underline-offset-2 hover:text-white transition-colors text-left"
                                        >
                                            View timezone slots ↓
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Online mention */}
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-2.5 rounded-lg shrink-0">
                                    <Globe size={18} className="text-[#b2ebf2]" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Online Consultation</p>
                                    <p className="text-white text-sm">Zoom · Google Meet · WhatsApp · Phone Call</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 flex-wrap">
                            <button
                                onClick={() => setModalOpen(true)}
                                className="inline-flex items-center gap-2 bg-white text-[#006978] font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:bg-[#e0f7fa] text-sm"
                            >
                                <Calendar size={16} />
                                Book Appointment
                            </button>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
                                style={{ background: '#25D366', color: '#fff' }}
                            >
                                💬 WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Google Map — Kanjurmarg East, Mumbai */}
                    <div className="bg-[#f5f9fa] flex items-center justify-center p-6 lg:p-8 min-h-[380px]">
                        <div className="w-full h-full min-h-[340px] rounded-2xl overflow-hidden shadow-lg border border-[#e0f7fa]">
                            <iframe
                                src="https://maps.google.com/maps?q=Nishant+Dental+Polyclinic+Kanjurmarg+East+Mumbai&z=16&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '340px', display: 'block' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Clinic Location - Kanjurmarg East, Mumbai"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection
