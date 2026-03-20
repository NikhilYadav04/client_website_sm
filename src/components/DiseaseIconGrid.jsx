import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { diseaseCategories } from '../data/diseasesData'

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

const DiseaseIconGrid = () => (
    <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
                <span className="section-tag">Browse Conditions</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">Conditions We Treat</h2>
                <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
                    Click any condition below to learn about symptoms, causes, and our homoeopathic approach.
                </p>
            </div>

            {/* Per-category groups */}
            {diseaseCategories.map((cat, ci) => {
                const cfg = catColors[ci % catColors.length]
                return (
                    <div key={cat.name} className="mb-14">
                        {/* Category label row with thumbnail */}
                        <div className="flex items-center gap-4 mb-7">
                            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2" style={{ borderColor: cfg.color + '40' }}>
                                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-lg mr-1">{cat.emoji}</span>
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
                                        {/* Circle with category image thumbnail */}
                                        <div
                                            className="w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-200 group-hover:shadow-md"
                                            style={{ borderColor: cfg.color + '40' }}
                                        >
                                            <img
                                                src={cat.img}
                                                alt={d.label}
                                                className="w-full h-full object-cover"
                                                style={{ filter: 'brightness(0.92)' }}
                                            />
                                        </div>
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

export default DiseaseIconGrid
