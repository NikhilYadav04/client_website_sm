import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Calendar } from 'lucide-react'
import ConsultationModal from './ConsultationModal'

const ContactSection = () => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <>
            <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            <section className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">

                    {/* Left: Teal info panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="px-10 py-14 flex flex-col justify-center gap-8"
                        style={{ backgroundColor: '#006978' }}
                    >
                        <div>
                            <span className="text-[#b2ebf2] text-xs uppercase tracking-widest font-semibold">Visit Us</span>
                            <h2 className="text-3xl font-bold text-white mt-2 leading-tight">
                                Come Visit Our Clinic
                            </h2>
                            <p className="text-white/60 mt-3 text-sm leading-relaxed">
                                We are accepting new patients. Experience personalized, holistic care in a calm and welcoming environment.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-2.5 rounded-lg shrink-0">
                                    <MapPin size={18} className="text-[#b2ebf2]" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Address</p>
                                    <p className="text-white text-sm leading-relaxed">
                                        12, Wellness Avenue, Sector 4,<br />Green Park, New Delhi – 110016
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-2.5 rounded-lg shrink-0">
                                    <Phone size={18} className="text-[#b2ebf2]" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Phone</p>
                                    <a href="tel:+919309971261" className="text-white text-sm hover:text-[#b2ebf2] transition-colors">
                                        +91 93099 71261
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-2.5 rounded-lg shrink-0">
                                    <Clock size={18} className="text-[#b2ebf2]" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Mon – Sat</p>
                                    <p className="text-white text-sm">10:30 AM – 1:30 PM</p>
                                    <p className="text-white text-sm">4:30 PM – 8:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setModalOpen(true)}
                            className="inline-flex items-center gap-2 bg-white text-[#006978] font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:bg-[#e0f7fa] w-fit text-sm"
                        >
                            <Calendar size={16} />
                            Book a Consultation
                        </button>
                    </motion.div>

                    {/* Right: Google Map */}
                    <div className="bg-[#f5f9fa] flex items-center justify-center p-6 lg:p-8 min-h-[380px]">
                        <div className="w-full h-full min-h-[340px] rounded-2xl overflow-hidden shadow-lg border border-[#e0f7fa]">
                            <iframe
                                src="https://maps.google.com/maps?q=Green+Park,+New+Delhi&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '340px', display: 'block' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Clinic Location"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection
