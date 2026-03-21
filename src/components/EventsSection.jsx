import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

// Event images
import event1 from '../assets/events/Preeti Bhopal School Detailed case study + root cause treatment + personalized medicines.jpg'
import event2 from '../assets/events/cervical-cancer-awareness-seminar.jpg'
import event3 from '../assets/events/hahnnenia homep forum.jpg'
import event4 from '../assets/events/organizing-camp-1.jpg'
import event5 from '../assets/events/organizing-camp-2.jpg'

const events = [
    { img: event1, title: 'School Health Camp', sub: 'Detailed Case Study & Root Cause Treatment', desc: 'Dr. Smrity Joshi conducted an extensive health camp at school, focusing on detailed case studies, identifying root causes of illness, and providing personalized homeopathic medicine plans for affected students and staff.' },
    { img: event2, title: 'Cancer Awareness Seminar', sub: 'Cervical Cancer Awareness Program', desc: 'A special awareness seminar on cervical cancer prevention and the role of Advanced Homeopathy in supporting patients through treatment. Dr. Smrity discussed natural, safe approaches to strengthening immunity and overall health.' },
    { img: event3, title: 'Hahnemann Forum', sub: 'Homeopathy Forum & Knowledge Session', desc: 'Dr. Smrity represented at the Hahnemannian Homoeo Forum — a prestigious knowledge-sharing platform for homeopathic practitioners. Topics covered included advanced case-taking techniques and the mind-method approach.' },
    { img: event4, title: 'Medical Camp (Session 1)', sub: 'Organizing Free Health Camp', desc: 'A free community health camp organized by Dr. Smrity Joshi, providing complimentary consultations and homeopathic medicines to underprivileged patients. Root cause analysis and personalized treatment plans were provided.' },
    { img: event5, title: 'Medical Camp (Session 2)', sub: 'Organizing Free Health Camp', desc: 'Second session of the free community health camp offering in-depth case evaluations, awareness about homeopathic treatment for chronic diseases, and distributing medicines at no cost to patients in need.' },
]

const EventsSection = () => {
    const [selected, setSelected] = useState(null)

    return (
        <section className="py-20 px-2 sm:px-4 bg-[#f5f9fa] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 px-4"
                >
                    <span className="section-tag">Community Impact</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">
                        Activities &amp; <span style={{ color: '#0097a7' }}>Events</span>
                    </h2>
                    <p className="text-gray-500 mt-3 text-sm max-w-lg mx-auto">
                        Dr. Smrity Joshi actively participates in health camps, awareness seminars, and medical forums to spread the benefits of Advanced Homeopathy
                    </p>
                    <div className="w-14 h-0.5 bg-[#0097a7] mx-auto mt-5" />
                </motion.div>

                {/* Horizontal scroll gallery */}
                <div
                    className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'thin', scrollbarColor: '#b2ebf2 #e0f7fa' }}
                >
                    {events.map((ev, i) => (
                        <motion.button
                            key={i}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            onClick={() => setSelected(ev)}
                            className="flex-none w-80 sm:w-96 rounded-2xl overflow-hidden shadow-md border border-[#e0f7fa] snap-start bg-white text-left cursor-pointer"
                            style={{ transition: 'transform 0.2s, box-shadow 0.2s' }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-4px)'
                                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,151,167,0.18)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = ''
                            }}
                        >
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={ev.img}
                                    alt={ev.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{ background: 'linear-gradient(to top, rgba(0,80,95,0.55) 0%, transparent 55%)' }}
                                />
                                {/* Click hint badge */}
                                <span
                                    className="absolute top-3 right-3 text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full"
                                    style={{ background: 'rgba(0,151,167,0.85)', backdropFilter: 'blur(4px)' }}
                                >
                                    Click to view
                                </span>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-gray-800 text-sm">{ev.title}</h3>
                                <p className="text-gray-500 text-xs mt-1 leading-relaxed">{ev.sub}</p>
                            </div>
                        </motion.button>
                    ))}
                </div>

                <p className="text-center text-gray-400 text-xs mt-4">← Scroll to see all events →</p>
            </div>

            {/* ── Lightbox Modal ── */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
                        style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full"
                            initial={{ scale: 0.85, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.85, y: 30 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Full image — no crop */}
                            <div
                                className="relative flex items-center justify-center overflow-hidden"
                                style={{ background: '#001a20', maxHeight: '420px', minHeight: '260px' }}
                            >
                                <img
                                    src={selected.img}
                                    alt={selected.title}
                                    className="w-full h-auto max-h-[420px] object-contain"
                                />
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{ background: 'linear-gradient(to top, rgba(0,60,75,0.5) 0%, transparent 50%)' }}
                                />
                                {/* Close button */}
                                <button
                                    onClick={() => setSelected(null)}
                                    className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all"
                                    style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)' }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.45)'}
                                >
                                    <X size={16} color="#fff" />
                                </button>
                            </div>

                            {/* Text content */}
                            <div className="p-7">
                                <span
                                    className="text-xs font-bold uppercase tracking-widest mb-2 inline-block"
                                    style={{ color: '#0097a7' }}
                                >
                                    Community Outreach
                                </span>
                                <h3 className="text-2xl font-bold text-gray-800">{selected.title}</h3>
                                <p className="text-[#0097a7] font-semibold text-sm mt-1">{selected.sub}</p>
                                <div className="w-10 h-0.5 bg-[#0097a7] my-4" />
                                <p className="text-gray-600 text-sm leading-relaxed">{selected.desc}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default EventsSection
