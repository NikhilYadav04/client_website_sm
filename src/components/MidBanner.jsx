import React, { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
    {
        img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1600&q=85',
        caption: 'Gentle, natural medicines for lasting health',
    },
    {
        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=85',
        caption: 'Personalised care for every patient',
    },
    {
        img: 'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=1600&q=85',
        caption: 'Holistic healing — body, mind & spirit',
    },
]

const MidBanner = () => {
    const [current, setCurrent] = useState(0)
    const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
    const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), [])

    useEffect(() => {
        const t = setInterval(next, 5000)
        return () => clearInterval(t)
    }, [next])

    return (
        <div className="relative h-[300px] sm:h-[380px] overflow-hidden">
            {/* Images */}
            {slides.map((s, i) => (
                <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
                >
                    <img src={s.img} alt={s.caption} className="w-full h-full object-cover" />
                    {/* Light overlay */}
                    <div className="absolute inset-0" style={{ background: 'rgba(0,90,104,0.38)' }} />
                    {/* Caption */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10 w-full px-4">
                        <p className="text-white text-lg sm:text-2xl font-bold drop-shadow-md">{s.caption}</p>
                    </div>
                </div>
            ))}

            {/* Left arrow */}
            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.3)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.35)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            >
                <ChevronLeft size={20} color="#fff" />
            </button>

            {/* Right arrow */}
            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.3)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.35)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            >
                <ChevronRight size={20} color="#fff" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        style={{
                            width: i === current ? 24 : 7,
                            height: 7,
                            borderRadius: 999,
                            background: i === current ? '#fff' : 'rgba(255,255,255,0.45)',
                            transition: 'all 0.3s',
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default MidBanner
