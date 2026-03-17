import React from 'react'
import { Link } from 'react-router-dom'
import { diseaseCategories } from '../data/diseasesData'

const categoryIcons = {
    'Respiratory': '🫁',
    'Gastric': '🟢',
    'Acute & Chronic': '⚕️',
}

const DiseasesPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* ── Banner ── */}
            <div className="page-banner pt-20">
                <div className="page-banner-text">
                    <p className="text-[#b2ebf2] text-sm font-semibold uppercase tracking-widest mb-3">
                        What We Treat
                    </p>
                    <h1>Diseases &amp; Treatments</h1>
                    <p className="text-white/80 mt-4 text-sm leading-relaxed max-w-md">
                        Homoeopathic treatment for a wide range of acute and chronic conditions.
                        Each condition is treated individually for lasting relief.
                    </p>
                </div>
                <div className="page-banner-image">
                    <img
                        src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
                        alt="Treatments"
                    />
                </div>
            </div>

            {/* ── Disease Categories ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
                <div className="text-center mb-12">
                    <span className="section-tag">Browse by Category</span>
                    <h2 className="text-3xl font-bold text-gray-800 mt-3">
                        Select a Disease to Learn More
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
                        Click any condition to read about causes, symptoms, and our homoeopathic approach to treatment.
                    </p>
                </div>

                <div className="space-y-12">
                    {diseaseCategories.map((cat) => (
                        <div key={cat.name}>
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">{categoryIcons[cat.name] || '🌿'}</span>
                                <h3 className="text-xl font-bold text-[#006978]">{cat.name}</h3>
                                <div className="flex-1 h-px bg-[#e0f7fa]" />
                            </div>

                            {/* Disease cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {cat.diseases.map((d) => (
                                    <Link
                                        key={d.slug}
                                        to={`/diseases/${d.slug}`}
                                        className="group bg-white border border-[#e0f7fa] rounded-xl p-5 hover:border-[#0097a7] hover:shadow-md transition-all duration-200"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="w-2 h-2 rounded-full bg-[#0097a7] shrink-0" />
                                            <span className="text-sm font-semibold text-gray-700 group-hover:text-[#0097a7] transition-colors">
                                                {d.label}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-400 group-hover:text-gray-500">
                                            Learn more →
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center bg-[#e0f7fa] rounded-2xl p-10">
                    <h3 className="text-2xl font-bold text-[#006978] mb-3">
                        Can't find your condition?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
                        Homoeopathy can help with many more conditions. Consult Dr. Priya Mehta for a personalised assessment.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-[#0097a7] hover:bg-[#006978] text-white font-semibold px-8 py-3 rounded-full transition-colors"
                    >
                        Book a Consultation
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DiseasesPage
