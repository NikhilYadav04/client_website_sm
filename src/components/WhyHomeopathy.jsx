import React from 'react'
import { motion } from 'framer-motion'

const pillars = [
    { icon: '🧠', title: 'Advanced Homeopathy Approach', desc: 'Modern mind-method techniques targeting root cause, not just symptoms' },
    { icon: '✦', title: 'No Side Effects', desc: 'Natural medicines, completely safe for all ages including children' },
    { icon: '🎯', title: 'Root Cause Treatment', desc: 'Deep case analysis to address the origin of disease permanently' },
    { icon: '🕐', title: 'Detailed Case Study', desc: '2–3 hour first consultation for thorough understanding of your case' },
    { icon: '📋', title: 'Personalized Treatment Plan', desc: 'Every medicine and plan crafted specifically for you as an individual' },
    { icon: '⭐', title: '25+ Years Experienced Doctor', desc: 'Over 25 years of clinical expertise with 10,000+ patients treated' },
    { icon: '🌍', title: 'Worldwide Online Consultation', desc: 'Consult via Zoom, Google Meet, WhatsApp or phone call from anywhere' },
]

const WhyHomeopathy = () => (
    <section className="py-16 px-4 sm:px-8" style={{ background: 'linear-gradient(135deg, #006978 0%, #0097a7 100%)' }}>
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <span className="text-[#b2ebf2] text-xs uppercase tracking-widest font-semibold">Why Choose Us</span>
                <h2 className="text-3xl font-bold text-white mt-2">
                    Why Choose <span style={{ color: '#80deea' }}>Dr. Smrity Joshi Sharma</span>?
                </h2>
                <p className="text-white/70 mt-3 text-sm max-w-xl mx-auto">
                    Specialist in <strong className="text-white">ADVANCED HOMEOPATHY</strong> — a modern approach treating the mind, body and root cause
                </p>
                <div className="w-16 h-0.5 mx-auto mt-5" style={{ backgroundColor: '#80deea' }} />
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                {pillars.map((p, i) => (
                    <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="flex flex-col items-center text-center gap-3 rounded-2xl p-5 transition-all duration-200"
                        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                    >
                        <span className="text-3xl mb-1">{p.icon}</span>
                        <h3 className="text-sm font-bold text-white leading-tight">{p.title}</h3>
                        <p className="text-white/65 text-xs leading-relaxed">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default WhyHomeopathy
