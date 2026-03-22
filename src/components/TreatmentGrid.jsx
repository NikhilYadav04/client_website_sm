import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { diseaseCategories } from '../data/diseasesData'

// ── Unique emoji per disease slug ──────────────────────────────────────────
const diseaseEmoji = {
    // Respiratory
    'cold-flu': '🤧', 'chronic-cough': '😮‍💨', 'bronchial-asthma': '🫁',
    'allergic-rhinitis': '👃', 'sinusitis': '🌬️', 'adenoids': '💊',
    'bronchitis': '🌫️', 'pneumonia': '🫁',
    // Gastrointestinal
    'piles': '🩸', 'acidity-gas': '🔥', 'ulcers': '🫀',
    'fissure-fistula': '⚡', 'ibs': '🌿', 'ulcerative-colitis': '🔬',
    'indigestion': '🍽️', 'gastritis': '🔥', 'constipation': '🪨', 'diarrhea': '💧',
    // Hormonal
    'diabetes': '💉', 'hypertension': '❤️', 'hypothyroidism': '🦋',
    'hyperthyroidism': '⚡', 'obesity': '⚖️', 'high-cholesterol': '🫀',
    // Female
    'pcos-pcod': '🌸', 'endometriosis': '🩺', 'leucorrhoea': '🌼',
    'menopause': '🌙', 'uterine-fibroids': '🔬', 'irregular-menstruation': '📅',
    // Pediatric
    'recurrent-cold-cough': '👶', 'adenoids-tonsillitis': '🍬', 'bedwetting': '🌙',
    'childhood-asthma': '🫁', 'adhd': '🧠', 'growth-delays': '📏',
    'teething-problems': '🦷', 'chickenpox': '🔴', 'diaper-rash': '👶',
    // Mental Health
    'anxiety': '😰', 'depression': '🌧️', 'insomnia': '😴',
    'ocd': '♾️', 'stress-burnout': '🔥', 'panic-attacks': '💨',
    'behavioral-disorders': '🧩',
    // Neurological
    'migraine': '🤕', 'epilepsy': '⚡', 'bells-palsy': '😶',
    'parkinsons': '🤲', 'vertigo': '🌀', 'nerve-pain': '⚡',
    'headache': '😖',
    // Cardiovascular
    'palpitations': '💓', 'heart-disease': '❤️‍🔥',
    // Skin
    'acne': '🌋', 'eczema': '🌿', 'psoriasis': '🦎',
    'vitiligo': '🎭', 'urticaria': '🐝', 'lichen-planus': '🟣',
    'fungal-infections': '🍄',
    // Hair
    'alopecia-areata': '💇', 'male-pattern-baldness': '👨‍🦲', 'dandruff': '❄️',
    'premature-greying': '🩶', 'hair-thinning': '🍂', 'scalp-psoriasis': '🔬',
    // Musculoskeletal
    'rheumatoid-arthritis': '🦴', 'back-pain': '🧍', 'cervical-spondylosis': '🔩',
    'sciatica': '⚡', 'frozen-shoulder': '🥶', 'gout': '🦶',
    'joint-pain': '🦵', 'muscle-strain': '💪',
    // Genito-Urinary
    'uti': '💧', 'kidney-stones': '🪨', 'bedwetting-adult': '🌙',
    'prostate': '🔵', 'recurrent-uti': '🔄', 'interstitial-cystitis': '💧',
    // Acute & Chronic / Infections
    'fever-infections': '🌡️', 'allergies': '🌼', 'autoimmune': '🛡️',
    'post-viral-fatigue': '😴', 'chronic-pain': '💊', 'recurrent-infections': '🦠',
    'bacterial-infections': '🦠',
}

// ── Per-category color config ──────────────────────────────────────────────
const catColors = [
    { color: '#0097a7', light: '#e0f7fa' },
    { color: '#00897b', light: '#e0f2f1' },
    { color: '#0277bd', light: '#e1f5fe' },
    { color: '#6d4c41', light: '#efebe9' },
    { color: '#558b2f', light: '#f1f8e9' },
    { color: '#7b1fa2', light: '#f3e5f5' },
    { color: '#0097a7', light: '#e0f7fa' },
    { color: '#2e7d32', light: '#e8f5e9' },
    { color: '#c62828', light: '#ffebee' },
    { color: '#4527a0', light: '#ede7f6' },
    { color: '#00695c', light: '#e0f2f1' },
    { color: '#e65100', light: '#fff3e0' },
]

// Show only these 3 specific categories on the home page
const FEATURED_NAMES = ['Respiratory System', 'Digestive System', 'Musculoskeletal System']

const TreatmentGrid = () => {
    const featured = diseaseCategories.filter(c => FEATURED_NAMES.includes(c.name))

    return (
        <section style={{ background: '#f8fbfc' }} className="py-20 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="section-tag">What We Treat</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">Our Treatment Areas</h2>
                    <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
                        Click any condition to learn about symptoms, causes and our Advanced Homeopathy approach.
                    </p>
                </div>

                {/* Featured 4 categories */}
                {featured.map((cat, ci) => {
                    const cfg = catColors[ci]
                    return (
                        <div key={cat.name} className="mb-12">
                            {/* Category label */}
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-lg"
                                    style={{ background: cfg.light }}
                                >
                                    {cat.emoji}
                                </div>
                                <h3 className="text-base font-bold" style={{ color: cfg.color }}>{cat.name}</h3>
                                <div className="flex-1 h-px" style={{ background: cfg.light }} />
                            </div>

                            {/* Disease cards */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                                {cat.diseases.map((d, di) => (
                                    <motion.div
                                        key={d.slug}
                                        initial={{ opacity: 0, y: 14 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: di * 0.05 }}
                                    >
                                        <Link
                                            to={`/diseases/${d.slug}`}
                                            className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl transition-all duration-200 hover:-translate-y-1 text-center"
                                            style={{
                                                background: '#fff',
                                                border: `1.5px solid ${cfg.color}22`,
                                                minHeight: '110px',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.borderColor = cfg.color
                                                e.currentTarget.style.background = cfg.light
                                                e.currentTarget.style.boxShadow = `0 6px 20px ${cfg.color}22`
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.borderColor = `${cfg.color}22`
                                                e.currentTarget.style.background = '#fff'
                                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
                                            }}
                                        >
                                            <span className="text-3xl leading-none select-none">
                                                {diseaseEmoji[d.slug] || '💊'}
                                            </span>
                                            <span
                                                className="text-xs font-semibold leading-tight"
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

                {/* ── View All CTA ─────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-6"
                    style={{ background: 'linear-gradient(135deg, #006978 0%, #0097a7 100%)' }}
                >
                    {/* Stats — evenly spaced */}
                    <div className="flex-1 flex justify-between gap-4">
                        {[
                            { value: '72+', label: 'Conditions Treated' },
                            { value: '12', label: 'Disease Categories' },
                            { value: '10,000+', label: 'Patients Healed' },
                            { value: '0', label: 'Side Effects' },
                        ].map((s, i) => (
                            <div key={i} className="flex-1 text-center">
                                <p className="text-2xl font-extrabold text-white">{s.value}</p>
                                <p className="text-xs text-white/70 mt-0.5">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right: button */}
                    <Link
                        to="/diseases"
                        className="shrink-0 flex items-center gap-2 bg-white font-bold px-7 py-3 rounded-full text-sm hover:bg-[#e0f7fa] transition-all duration-200 hover:scale-105 shadow-md"
                        style={{ color: '#006978' }}
                    >
                        View All Diseases
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}

export default TreatmentGrid
