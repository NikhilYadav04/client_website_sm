import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { diseaseCategories } from '../data/diseasesData'

// Disease-level icon map — emoji icons per disease slug
const diseaseIcons = {
    // Respiratory
    cold: '🤧', cough: '😮‍💨', asthma: '🫁', adenoid: '👃',
    // Gastric
    piles: '🩸', gas: '💨', acidity: '🔥', ulcers: '🫀',
    fissure: '⚡', fistula: '🔬',
    // Acute & Chronic
    'acute-respiratory': '🌬️', 'acute-gastric': '🍃', 'hormonal-disorder': '⚖️',
    'female-complaint': '🌸', autism: '🧠', 'neurological-disorder': '🧬',
    'skin-complaint': '🌿', 'pediatric-complaint': '👶',
}

// SVG line-art icons per category (for the section header)
const catSVG = {
    'Respiratory': (
        <svg viewBox="0 0 48 48" fill="none" stroke="#0097a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <path d="M24 8v14" /><ellipse cx="16" cy="30" rx="8" ry="10" /><ellipse cx="32" cy="30" rx="8" ry="10" />
            <path d="M16 20 Q24 14 32 20" />
        </svg>
    ),
    'Gastric': (
        <svg viewBox="0 0 48 48" fill="none" stroke="#00897b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <path d="M14 14 C8 14 8 22 10 28 C12 34 16 38 24 38 C32 38 36 34 38 28 C40 22 40 14 34 14 C30 14 28 18 24 18 C20 18 18 14 14 14Z" />
        </svg>
    ),
    'Acute & Chronic': (
        <svg viewBox="0 0 48 48" fill="none" stroke="#0277bd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <circle cx="24" cy="24" r="16" /><polyline points="24,12 24,24 32,28" />
        </svg>
    ),
}

const catColors = {
    'Respiratory': { color: '#0097a7', light: '#e0f7fa' },
    'Gastric': { color: '#00897b', light: '#e0f2f1' },
    'Acute & Chronic': { color: '#0277bd', light: '#e1f5fe' },
}

const DiseaseIconGrid = () => {
    return (
        <section className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="section-tag">Browse Conditions</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">Conditions We Treat</h2>
                    <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
                        Click any condition below to learn about symptoms, causes and our homoeopathic approach.
                    </p>
                </div>

                {/* Per-category groups */}
                {diseaseCategories.map((cat, ci) => {
                    const cfg = catColors[cat.name] || { color: '#0097a7', light: '#e0f7fa' }
                    return (
                        <div key={cat.name} className="mb-14">

                            {/* Category label row */}
                            <div className="flex items-center gap-3 mb-7">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                                    style={{ background: cfg.light }}
                                >
                                    {catSVG[cat.name]}
                                </div>
                                <h3 className="text-lg font-bold" style={{ color: cfg.color }}>{cat.name}</h3>
                                <div className="flex-1 h-px" style={{ background: cfg.light }} />
                            </div>

                            {/* Disease grid */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5">
                                {cat.diseases.map((d, di) => (
                                    <motion.div
                                        key={d.slug}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.35, delay: di * 0.05 }}
                                    >
                                        <Link
                                            to={`/diseases/${d.slug}`}
                                            className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-200 hover:-translate-y-1"
                                        >
                                            {/* Circle icon */}
                                            <div
                                                className="w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-200 group-hover:shadow-md"
                                                style={{
                                                    borderColor: cfg.color + '40',
                                                    background: '#fff',
                                                }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.borderColor = cfg.color
                                                    e.currentTarget.style.background = cfg.light
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.borderColor = cfg.color + '40'
                                                    e.currentTarget.style.background = '#fff'
                                                }}
                                            >
                                                <span className="text-3xl select-none">
                                                    {diseaseIcons[d.slug] || '💊'}
                                                </span>
                                            </div>

                                            {/* Label */}
                                            <span
                                                className="text-xs sm:text-sm font-semibold text-center leading-tight transition-colors"
                                                style={{ color: cfg.color }}
                                            >
                                                {d.label}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default DiseaseIconGrid
