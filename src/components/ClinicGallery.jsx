import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import clinic1 from '../assets/clinic/clinic1.jpeg'
import clinic2 from '../assets/clinic/clinic2.jpeg'
import clinic3 from '../assets/clinic/clinic3.jpeg'
import clinicDoc1 from '../assets/clinic/clinic-doc1.jpeg'
import clinicDoc2 from '../assets/clinic/clinic-doc2.jpeg'
import clinicKanjur from '../assets/clinic/clinic_kanjur.jpeg'
import clinicKanjur1 from '../assets/clinic/clinic_kanjur1.jpeg'
import clinicKanjur2 from '../assets/clinic/clinic_kanjur2.jpeg'

const images = [
    { src: clinic3, title: 'Reception & Entrance' },
    { src: clinicKanjur1, title: 'Kanjur Marg Clinic' },
    { src: clinic1, title: 'Clinic Interior' },
    { src: clinic2, title: 'Consultation Room' },
    { src: clinicDoc1, title: 'Doctor at Clinic' },
    { src: clinicDoc2, title: 'Patient Consultation' },
    { src: clinicKanjur, title: 'Kanjur Marg Clinic — Exterior' },
    { src: clinicKanjur2, title: 'Interior — Kanjur Clinic' },
]

const ClinicGallery = () => {
    const stripRef = useRef(null)
    const [lightbox, setLightbox] = useState(null) // index or null

    const scroll = (dir) => {
        if (stripRef.current) {
            stripRef.current.scrollBy({ left: dir * 360, behavior: 'smooth' })
        }
    }

    // Close on Escape key
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') setLightbox(null) }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

    const prev = () => setLightbox(i => (i - 1 + images.length) % images.length)
    const next = () => setLightbox(i => (i + 1) % images.length)

    return (
        <>
            <section className="py-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
                        <div>
                            <span className="section-tag">Our Space</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">
                                Our <span style={{ color: '#0097a7' }}>Clinic</span>
                            </h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-gray-500 text-sm">A calm, welcoming space designed for healing.</p>
                            <button
                                onClick={() => scroll(-1)}
                                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all"
                                style={{ background: '#e0f7fa', color: '#006978' }}
                                onMouseEnter={e => e.currentTarget.style.background = '#0097a7'}
                                onMouseLeave={e => e.currentTarget.style.background = '#e0f7fa'}
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={() => scroll(1)}
                                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all"
                                style={{ background: '#e0f7fa', color: '#006978' }}
                                onMouseEnter={e => { e.currentTarget.style.background = '#0097a7'; e.currentTarget.style.color = '#fff' }}
                                onMouseLeave={e => { e.currentTarget.style.background = '#e0f7fa'; e.currentTarget.style.color = '#006978' }}
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Horizontal scrollable strip */}
                <div
                    ref={stripRef}
                    className="flex gap-5 overflow-x-auto"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch',
                        paddingLeft: 'max(2rem, calc((100vw - 80rem) / 2 + 2rem))',
                        paddingRight: '1rem',
                    }}
                >
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            onClick={() => setLightbox(i)}
                            className="relative shrink-0 rounded-2xl overflow-hidden group cursor-pointer shadow-md"
                            style={{ width: 340, height: 420 }}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Hover overlay */}
                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                style={{ background: 'rgba(0,80,95,0.55)', backdropFilter: 'blur(2px)' }}
                            >
                                <ZoomIn size={32} color="#fff" />
                                <span className="text-white text-sm font-semibold tracking-wide">{img.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Lightbox ── */}
            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[999] flex items-center justify-center"
                        style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(8px)' }}
                        onClick={() => setLightbox(null)}
                    >
                        {/* Close */}
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all"
                            style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
                        >
                            <X size={22} color="#fff" />
                        </button>

                        {/* Prev */}
                        <button
                            onClick={e => { e.stopPropagation(); prev() }}
                            className="absolute left-4 sm:left-8 w-11 h-11 rounded-full flex items-center justify-center transition-all"
                            style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
                        >
                            <ChevronLeft size={24} color="#fff" />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={lightbox}
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.92, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={e => e.stopPropagation()}
                            className="relative mx-20 max-w-3xl w-full"
                        >
                            <img
                                src={images[lightbox].src}
                                alt={images[lightbox].title}
                                className="w-full rounded-2xl shadow-2xl"
                                style={{ maxHeight: '82vh', objectFit: 'contain' }}
                            />
                            <p className="text-center text-white/70 text-sm mt-3 font-semibold">
                                {images[lightbox].title} &nbsp;·&nbsp; {lightbox + 1} / {images.length}
                            </p>
                        </motion.div>

                        {/* Next */}
                        <button
                            onClick={e => { e.stopPropagation(); next() }}
                            className="absolute right-4 sm:right-8 w-11 h-11 rounded-full flex items-center justify-center transition-all"
                            style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
                        >
                            <ChevronRight size={24} color="#fff" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default ClinicGallery
