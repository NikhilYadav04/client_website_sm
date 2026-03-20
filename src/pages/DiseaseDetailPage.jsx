import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { diseasesData, diseaseCategories } from '../data/diseasesData'

// Map slug → category image
const slugImgMap = {}
if (typeof diseaseCategories !== 'undefined') {
    diseaseCategories.forEach(cat => {
        cat.diseases.forEach(d => { slugImgMap[d.slug] = cat.img })
    })
}

const FaqItem = ({ q, a }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="border border-gray-100 rounded-xl overflow-hidden mb-3">
            <button
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                style={{ background: open ? '#e0f7fa' : '#f9fdfd' }}
                onClick={() => setOpen(o => !o)}
            >
                <span className="text-sm font-semibold text-[#006978]">Q. {q}</span>
                {open
                    ? <ChevronUp size={18} className="text-[#0097a7] shrink-0" />
                    : <ChevronDown size={18} className="text-[#0097a7] shrink-0" />}
            </button>
            {open && (
                <div className="px-5 py-4 bg-white text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {a}
                </div>
            )}
        </div>
    )
}

const DiseaseDetailPage = () => {
    const { slug } = useParams()
    const disease = diseasesData[slug]
    const bannerImg = slugImgMap[slug]

    if (!disease) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h1>
                    <p className="text-gray-500 mb-6">The disease page you are looking for does not exist.</p>
                    <Link to="/diseases" className="bg-[#0097a7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006978] transition-colors">
                        View All Diseases
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            {/* ── Two-column Banner ── */}
            <div
                className="pt-20 grid grid-cols-1 lg:grid-cols-2"
                style={{ minHeight: '340px', background: 'linear-gradient(135deg, #004d5a 0%, #006978 100%)' }}
            >
                {/* Left — text */}
                <div className="flex flex-col justify-center px-8 sm:px-14 py-12">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#b2ebf2' }}>
                        {disease.bannerSubtitle}
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                        {disease.title}
                    </h1>
                    <div className="w-14 h-0.5 mt-5" style={{ backgroundColor: '#80deea' }} />
                    <p className="text-white/60 text-sm mt-4 max-w-md">
                        Advanced Homoeopathy · Dr. Smrity Joshi Sharma · 25+ Years Experience
                    </p>
                </div>
                {/* Right — category image */}
                {bannerImg && (
                    <div className="relative hidden lg:block">
                        <img src={bannerImg} alt={disease.title} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center' }} />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,77,90,0.55) 0%, transparent 40%)' }} />
                    </div>
                )}
            </div>

            {/* ── Content ── */}
            <div className="max-w-4xl mx-auto px-4 sm:px-8 py-14">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                    <Link to="/" className="hover:text-[#0097a7]">Home</Link>
                    <span>/</span>
                    <Link to="/diseases" className="hover:text-[#0097a7]">Diseases</Link>
                    <span>/</span>
                    <span className="text-[#0097a7] font-medium">{disease.title}</span>
                </nav>

                {/* Category badge */}
                <span className="section-tag mb-6">{disease.category}</span>

                {/* Introduction */}
                <p className="text-gray-600 leading-relaxed text-base my-8 border-l-4 border-[#0097a7] pl-5 bg-[#e0f7fa] rounded-r-lg py-4">
                    {disease.intro}
                </p>

                {/* Symptoms */}
                {disease.symptoms && (
                    <div className="mb-10">
                        <h2 className="text-xl font-bold text-[#006978] mb-3 uppercase tracking-wide">Symptoms</h2>
                        <div className="w-12 h-0.5 bg-[#0097a7] mb-4" />
                        <ul className="space-y-2">
                            {disease.symptoms.map((s, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0097a7] shrink-0" />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Causes */}
                {disease.causes && (
                    <div className="mb-10">
                        <h2 className="text-xl font-bold text-[#006978] mb-3 uppercase tracking-wide">Causes</h2>
                        <div className="w-12 h-0.5 bg-[#0097a7] mb-4" />
                        <ul className="space-y-2">
                            {disease.causes.map((c, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#006978] shrink-0" />
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Homoeopathic Treatment */}
                {disease.homeopathy && (
                    <div className="mb-10">
                        <h2 className="text-xl font-bold text-[#006978] mb-3 uppercase tracking-wide">Homoeopathic Diagnosis & Treatment</h2>
                        <div className="w-12 h-0.5 bg-[#0097a7] mb-4" />
                        <p className="text-gray-600 leading-relaxed text-sm">{disease.homeopathy}</p>
                    </div>
                )}

                {/* FAQ */}
                {disease.faq && disease.faq.length > 0 && (
                    <div className="mb-10">
                        <h2 className="text-xl font-bold text-[#006978] mb-3 uppercase tracking-wide">Frequently Asked Questions</h2>
                        <div className="w-12 h-0.5 bg-[#0097a7] mb-6" />
                        {disease.faq.map((item, i) => (
                            <FaqItem key={i} q={item.q} a={item.a} />
                        ))}
                    </div>
                )}

                {/* CTA */}
                <div className="mt-10 bg-[#e0f7fa] rounded-xl p-8 text-center">
                    <h3 className="text-xl font-bold text-[#006978] mb-2">
                        Get Homoeopathic Treatment for {disease.title}
                    </h3>
                    <p className="text-gray-600 mb-5 text-sm">
                        Book a consultation with Dr. Smrity Joshi Sharma for a personalised homoeopathic treatment plan tailored to your individual needs.
                    </p>
                    <Link to="/contact" className="inline-block bg-[#0097a7] hover:bg-[#006978] text-white font-semibold px-8 py-3 rounded-full transition-colors">
                        Book Consultation
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DiseaseDetailPage
