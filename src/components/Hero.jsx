import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import ConsultationModal from './ConsultationModal'
import homeo1 from '../assets/homeopathy/1.jpg'
import homeo2 from '../assets/homeopathy/2.jpg'
import homeo3 from '../assets/homeopathy/3.jpg'
import doctorCard from '../assets/doctor/2.jpg'

const WHATSAPP_NUMBER = '919321953605'

const slides = [
    {
        img: homeo1,
        headline: 'ADVANCED HOMEOPATHY',
        accent: 'SPECIALIST',
        sub: 'Safe | Natural | Root Cause Treatment | 20+ Years Experience',
    },
    {
        img: homeo2,
        headline: 'Heal From Within,',
        accent: 'Naturally',
        sub: 'Detailed Case Study · Personalized Treatment · Zero Side Effects',
    },
    {
        img: homeo3,
        headline: 'Your Health,',
        accent: 'Our Mission.',
        sub: 'Worldwide Online Consultation Available — Zoom · WhatsApp · Call',
    },
]

const Hero = () => {
    const [current, setCurrent] = useState(0)
    const [modalOpen, setModalOpen] = useState(false)

    const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
    const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), [])

    useEffect(() => {
        const t = setInterval(next, 6000)
        return () => clearInterval(t)
    }, [next])

    const slide = slides[current]

    return (
        <>
            <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

                {/* ── Background Images with crossfade ── */}
                <AnimatePresence mode="sync">
                    <motion.img
                        key={current}
                        src={slide.img}
                        alt=""
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ zIndex: 0 }}
                    />
                </AnimatePresence>

                {/* ── Overlay ── */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,80,95,0.60) 0%, rgba(0,50,65,0.75) 100%)',
                        zIndex: 1,
                    }}
                />

                {/* ── Left arrow ── */}
                <button
                    onClick={prev}
                    aria-label="Previous slide"
                    className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.3)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.32)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
                >
                    <ChevronLeft size={22} color="#fff" />
                </button>

                {/* ── Right arrow ── */}
                <button
                    onClick={next}
                    aria-label="Next slide"
                    className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.3)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.32)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
                >
                    <ChevronRight size={22} color="#fff" />
                </button>

                {/* ── Content ── */}
                <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">

                    {/* Worldwide tag — click scrolls to international section */}
                    <motion.button
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        onClick={() => {
                            const el = document.getElementById('international')
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                        className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase cursor-pointer transition-all duration-200 hover:scale-105"
                        style={{ background: 'rgba(0,151,167,0.35)', border: '1px solid rgba(178,235,242,0.4)', color: '#b2ebf2' }}
                    >
                        🌍 Worldwide Consultation Available
                    </motion.button>

                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`h-${current}`}
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -14 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg"
                        >
                            {slide.headline}{' '}
                            <span style={{ color: '#80deea' }}>{slide.accent}</span>
                        </motion.h1>
                    </AnimatePresence>

                    <div className="w-20 h-0.5 mx-auto my-5" style={{ backgroundColor: '#80deea' }} />

                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`p-${current}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="text-white/90 text-lg font-light tracking-wide mb-2"
                        >
                            {slide.sub}
                        </motion.p>
                    </AnimatePresence>

                    {/* Doctor name */}
                    <p className="text-white/80 text-base font-semibold tracking-wide mb-1">Dr. Smrity Joshi</p>
                    <p className="text-white/50 text-xs tracking-widest uppercase font-medium mb-10">BHMS · Advanced Homeopathy Specialist</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setModalOpen(true)}
                            className="bg-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-[#e0f7fa] hover:shadow-xl hover:-translate-y-0.5"
                            style={{ color: '#006978' }}
                        >
                            📅 Book Appointment
                        </button>
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
                        >
                            <MessageCircle size={18} />
                            WhatsApp Now
                        </a>
                    </div>
                </div>

                {/* ── Doctor floating card ── */}
                <div
                    className="absolute bottom-20 left-6 z-20 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl"
                    style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                    <img
                        src={doctorCard}
                        alt="Dr. Smrity Joshi"
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/50"
                    />
                    <div>
                        <p className="text-white text-xs font-bold leading-tight">Dr. Smrity Joshi</p>
                        <p className="text-[#80deea] text-[10px] font-semibold uppercase tracking-wide">Advanced Homeopathy</p>
                    </div>
                </div>

                {/* ── Dot indicators ── */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className="transition-all duration-300"
                            style={{
                                width: i === current ? 28 : 8,
                                height: 8,
                                borderRadius: 999,
                                background: i === current ? '#fff' : 'rgba(255,255,255,0.45)',
                            }}
                        />
                    ))}
                </div>

                {/* ── Scroll Indicator ── */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow z-20">
                    <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
                </div>
            </section>
        </>
    )
}

export default Hero
