import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Calendar, Globe } from 'lucide-react'
import ConsultationModal from './ConsultationModal'

const WHATSAPP_NUMBER = '919321953605'

const clinics = [
    {
        name: 'Lupin Diagnostics',
        label: 'DIAGNOSTIC CENTRE',
        address: 'Health Nexa, Shop No.2, Ground Floor Prasad Sco., Opp. Kapil Kiran, Chafekar Marg, Mulund (E), Mumbai – 400081',
        phones: ['9341100600', '9321953605'],
    },
    {
        name: 'Health Nexa Clinic',
        label: 'MAIN CLINIC',
        address: 'Health Nexa, Shop 1, Francis Misquitta Chawl, Near Kalpataru Bldg., Kanjur Marg East, Mumbai – 400042',
        phones: ['9892739945', '9321953605'],
    },
]

const ContactSection = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [activeMap, setActiveMap] = useState(1)
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
                                Visit Our Clinics
                            </h2>
                            <p className="text-white/60 mt-2 text-sm leading-relaxed">
                                Walk-in or book ahead. Advanced Homeopathy consultations also available online worldwide.
                            </p>
                        </div>

                        {/* Two clinic address blocks */}
                        <div className="space-y-5">
                            {clinics.map((clinic, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="bg-white/10 p-2.5 rounded-lg shrink-0 mt-0.5">
                                        <MapPin size={18} className="text-[#b2ebf2]" />
                                    </div>
                                    <div>
                                        <p className="text-[#80deea] text-[10px] uppercase tracking-widest font-bold mb-0.5">{clinic.label}</p>
                                        <p className="text-white text-sm font-semibold mb-0.5">{clinic.name}</p>
                                        <p className="text-white/70 text-sm leading-relaxed mb-1">{clinic.address}</p>
                                        <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                                            {clinic.phones.map(ph => (
                                                <a key={ph} href={`tel:+91${ph}`} className="text-[#b2ebf2] text-xs font-semibold hover:text-white transition-colors">
                                                    📞 {ph}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
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

                    {/* Right: Switchable Google Maps */}
                    <div className="bg-[#f5f9fa] flex flex-col p-6 lg:p-8 min-h-[380px]">
                        {/* Tab switcher */}
                        <div className="flex gap-2 mb-4">
                            {[
                                { label: '🏥 Lupin Diagnostics · Mulund', key: 0 },
                                { label: '🏥 Clinic · Kanjur Marg', key: 1 },
                            ].map(tab => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveMap(tab.key)}
                                    className="flex-1 text-xs font-semibold px-3 py-2 rounded-full transition-all duration-200"
                                    style={
                                        activeMap === tab.key
                                            ? { background: '#0097a7', color: '#fff', boxShadow: '0 4px 12px rgba(0,151,167,0.3)' }
                                            : { background: '#e0f7fa', color: '#006978', border: '1px solid #b2ebf2' }
                                    }
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        {/* Map */}
                        <div className="flex-1 min-h-[300px] rounded-2xl overflow-hidden shadow-lg border border-[#e0f7fa]">
                            {activeMap === 0 ? (
                                <iframe
                                    key="map-mulund"
                                    src="https://maps.google.com/maps?q=Chafekar+Marg+Mulund+East+Mumbai&z=16&output=embed"
                                    width="100%" height="100%"
                                    style={{ border: 0, minHeight: '300px', display: 'block' }}
                                    allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Lupin Diagnostics - Mulund East, Mumbai"
                                />
                            ) : (
                                <iframe
                                    key="map-kanjur"
                                    src="https://maps.google.com/maps?q=Health+Nexa+Kanjur+Marg+East+Mumbai&z=16&output=embed"
                                    width="100%" height="100%"
                                    style={{ border: 0, minHeight: '300px', display: 'block' }}
                                    allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Health Nexa Clinic - Kanjur Marg East, Mumbai"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection
