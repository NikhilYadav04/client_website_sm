import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { diseaseCategories } from '../data/diseasesData'

// Emoji icons per disease slug
const diseaseIcons = {
    cold: '🤧', cough: '😮‍💨', asthma: '🫁', adenoid: '👃',
    piles: '🩸', gas: '💨', acidity: '🔥', ulcers: '🫀',
    fissure: '⚡', fistula: '🔬',
    'acute-respiratory': '🌬️', 'acute-gastric': '🍃', 'hormonal-disorder': '⚖️',
    'female-complaint': '🌸', autism: '🧠', 'neurological-disorder': '🧬',
    'skin-complaint': '🌿', 'pediatric-complaint': '👶',
}

const catSVG = {
    'Respiratory': (
        <svg viewBox="0 0 48 48" fill="none" stroke="#0097a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M24 8v14" /><ellipse cx="16" cy="30" rx="8" ry="10" /><ellipse cx="32" cy="30" rx="8" ry="10" />
            <path d="M16 20 Q24 14 32 20" />
        </svg>
    ),
    'Gastric': (
        <svg viewBox="0 0 48 48" fill="none" stroke="#00897b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M14 14 C8 14 8 22 10 28 C12 34 16 38 24 38 C32 38 36 34 38 28 C40 22 40 14 34 14 C30 14 28 18 24 18 C20 18 18 14 14 14Z" />
        </svg>
    ),
    'Acute & Chronic': (
        <svg viewBox="0 0 48 48" fill="none" stroke="#0277bd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="24" cy="24" r="16" /><polyline points="24,12 24,24 32,28" />
        </svg>
    ),
}

const catColors = {
    'Respiratory': { color: '#0097a7', light: '#e0f7fa' },
    'Gastric': { color: '#00897b', light: '#e0f2f1' },
    'Acute & Chronic': { color: '#0277bd', light: '#e1f5fe' },
}

const TreatmentGrid = () => {
    return (
        <section style={{ background: '#f8fbfc' }} className="py-20 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="section-tag">What We Treat</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">Our Treatment Areas</h2>
                    <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
                        Click any condition to learn about symptoms, causes and our homoeopathic approach.
                    </p>
                </div>

                {/* Per-category disease icon groups */}
                {diseaseCategories.map((cat) => {
                    const cfg = catColors[cat.name] || { color: '#0097a7', light: '#e0f7fa' }
                    return (
                        <div key={cat.name} className="mb-14">

                            {/* Category label */}
                            <div className="flex items-center gap-3 mb-7">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                                    style={{ background: cfg.light }}>
                                    {catSVG[cat.name]}
                                </div>
                                <h3 className="text-base font-bold" style={{ color: cfg.color }}>{cat.name}</h3>
                                <div className="flex-1 h-px" style={{ background: cfg.light }} />
                            </div>

                            {/* Circle icon grid */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5">
                                {cat.diseases.map((d, di) => (
                                    <motion.div
                                        key={d.slug}
                                        initial={{ opacity: 0, y: 14 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: di * 0.04 }}
                                    >
                                        <Link
                                            to={`/diseases/${d.slug}`}
                                            className="group flex flex-col items-center gap-2.5 p-3 rounded-2xl transition-all duration-200 hover:-translate-y-1"
                                        >
                                            <div
                                                className="w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-200 group-hover:shadow-md"
                                                style={{ borderColor: cfg.color + '35', background: '#fff' }}
                                                onMouseEnter={e => { e.currentTarget.style.borderColor = cfg.color; e.currentTarget.style.background = cfg.light }}
                                                onMouseLeave={e => { e.currentTarget.style.borderColor = cfg.color + '35'; e.currentTarget.style.background = '#fff' }}
                                            >
                                                <span className="text-3xl select-none">{diseaseIcons[d.slug] || '💊'}</span>
                                            </div>
                                            <span className="text-xs sm:text-sm font-semibold text-center leading-tight" style={{ color: cfg.color }}>
                                                {d.label}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )
                })}

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-6"
                    style={{ background: 'linear-gradient(135deg, #006978 0%, #0097a7 100%)' }}
                >
                    {[
                        { value: '20+', label: 'Conditions Treated' },
                        { value: '5000+', label: 'Patients Healed' },
                        { value: '10+', label: 'Years Experience' },
                        { value: '0', label: 'Side Effects' },
                    ].map((s, i) => (
                        <div key={i} className="text-center flex-1">
                            <p className="text-3xl font-extrabold text-white">{s.value}</p>
                            <p className="text-sm text-white/70 mt-1">{s.label}</p>
                        </div>
                    ))}
                    <Link
                        to="/diseases"
                        className="shrink-0 bg-white font-bold px-7 py-3 rounded-full text-sm hover:bg-[#e0f7fa] transition-colors"
                        style={{ color: '#006978' }}
                    >
                        View All Diseases →
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default TreatmentGrid
