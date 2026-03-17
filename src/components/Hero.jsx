import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ConsultationModal from './ConsultationModal'

const slides = [
    {
        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=85',
        headline: 'Heal From Within,',
        accent: 'Naturally',
        sub: 'Expert Homeopathic Physician & Consultant',
    },
    {
        img: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1600&q=85',
        headline: 'Safe. Gentle.',
        accent: 'Effective.',
        sub: 'Zero Side Effects · Treats Root Cause · All Ages',
    },
    {
        img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1600&q=85',
        headline: 'Your Health,',
        accent: 'Our Mission.',
        sub: 'Personalised homeopathic care for every individual',
    },
]

const Hero = () => {
    const navigate = useNavigate()
    const [current, setCurrent] = useState(0)
    const [modalOpen, setModalOpen] = useState(false)

    const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
    const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), [])

    // Auto-advance every 6 seconds
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

                {/* ── Reduced overlay — image clearly visible ── */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,90,104,0.48) 0%, rgba(0,60,74,0.62) 100%)',
                        zIndex: 1,
                    }}
                />

                {/* ── Left arrow ── */}
                <button
                    onClick={prev}
                    aria-label="Previous slide"
                    className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
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
                    className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.3)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.32)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
                >
                    <ChevronRight size={22} color="#fff" />
                </button>

                {/* ── Content ── */}
                <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">

                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="h-px w-10 bg-white/50" />
                        <span className="text-white/90 text-sm font-semibold tracking-[0.2em] uppercase">
                            Holistic Healing  •  Homoeopathy
                        </span>
                        <span className="h-px w-10 bg-white/50" />
                    </div>

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
                            className="text-white/85 text-lg font-light tracking-wide mb-1"
                        >
                            {slide.sub}
                        </motion.p>
                    </AnimatePresence>

                    <p className="text-white/60 text-sm tracking-widest uppercase font-medium mb-10">BHMS, CGO, DNHE, FCAH</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setModalOpen(true)}
                            className="bg-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-[#e0f7fa] hover:shadow-xl hover:-translate-y-0.5"
                            style={{ color: '#006978' }}
                        >
                            Book Consultation
                        </button>
                        <button
                            onClick={() => navigate('/diseases')}
                            className="border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
                        >
                            View Treatments
                        </button>
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
