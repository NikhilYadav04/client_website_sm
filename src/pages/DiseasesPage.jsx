import React from 'react'
import { Link } from 'react-router-dom'
import { diseaseCategories } from '../data/diseasesData'

const DiseasesPage = () => (
    <div className="min-h-screen bg-white">
        {/* ── Banner ── */}
        <div
            className="pt-20 grid grid-cols-1 lg:grid-cols-2"
            style={{ minHeight: '300px', background: 'linear-gradient(135deg, #004d5a 0%, #006978 100%)' }}
        >
            <div className="flex flex-col justify-center px-8 sm:px-14 py-12">
                <span className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#b2ebf2' }}>What We Treat</span>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">Diseases &amp; Treatments</h1>
                <div className="w-14 h-0.5 mt-5" style={{ backgroundColor: '#80deea' }} />
                <p className="text-white/70 mt-4 text-sm leading-relaxed max-w-md">
                    Homoeopathic treatment for 12 categories of conditions across 72 diseases. Each condition is treated individually for lasting relief.
                </p>
            </div>
            <div className="hidden lg:block relative">
                {/* mosaic of 3 category images */}
                <div className="absolute inset-0 grid grid-cols-3 gap-0.5">
                    {diseaseCategories.slice(0, 3).map(cat => (
                        <img key={cat.name} src={cat.img} alt={cat.name} className="w-full h-full object-cover opacity-70" />
                    ))}
                </div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,77,90,0.7) 0%, transparent 40%)' }} />
            </div>
        </div>

        {/* ── Disease Categories ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
            <div className="text-center mb-12">
                <span className="section-tag">Browse by Category</span>
                <h2 className="text-3xl font-bold text-gray-800 mt-3">Select a Disease to Learn More</h2>
                <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
                    Click any condition to read about causes, symptoms, and our homoeopathic approach to treatment.
                </p>
            </div>

            <div className="space-y-12">
                {diseaseCategories.map((cat) => (
                    <div key={cat.name}>
                        {/* Category header with image */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-sm">
                                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">{cat.emoji}</span>
                                    <h3 className="text-xl font-bold text-[#006978]">{cat.name}</h3>
                                </div>

                            </div>
                            <div className="flex-1 h-px bg-[#e0f7fa]" />
                        </div>

                        {/* Disease cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                            {cat.diseases.map((d) => (
                                <Link
                                    key={d.slug}
                                    to={`/diseases/${d.slug}`}
                                    className="group bg-white border border-[#e0f7fa] rounded-xl p-4 hover:border-[#0097a7] hover:shadow-md transition-all duration-200 text-center"
                                >
                                    <span className="text-xs font-semibold text-gray-700 group-hover:text-[#0097a7] transition-colors leading-tight block">
                                        {d.label}
                                    </span>
                                    <span className="text-[10px] text-gray-400 mt-1 block">Learn more →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center bg-[#e0f7fa] rounded-2xl p-10">
                <h3 className="text-2xl font-bold text-[#006978] mb-3">Can't find your condition?</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
                    Homoeopathy can help with many more conditions. Consult Dr. Smrity Joshi for a personalised assessment.
                </p>
                <Link to="/contact" className="inline-block bg-[#0097a7] hover:bg-[#006978] text-white font-semibold px-8 py-3 rounded-full transition-colors">
                    Book a Consultation
                </Link>
            </div>
        </div>
    </div>
)

export default DiseasesPage
