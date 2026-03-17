import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { homeopathyTopics } from '../data/diseasesData'

const HomeopathySubPage = () => {
    const { slug } = useParams()
    const topic = homeopathyTopics[slug]

    if (!topic) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h1>
                    <p className="text-gray-500 mb-6">The page you are looking for does not exist.</p>
                    <Link to="/" className="bg-[#0097a7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006978] transition-colors">
                        Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            {/* ── Banner ── */}
            <div className="page-banner pt-20">
                <div className="page-banner-text">
                    <p className="text-[#b2ebf2] text-sm font-semibold uppercase tracking-widest mb-3">
                        {topic.bannerSubtitle}
                    </p>
                    <h1>{topic.title}</h1>
                </div>
                <div className="page-banner-image">
                    <img
                        src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80"
                        alt="Homoeopathy"
                    />
                </div>
            </div>

            {/* ── Content ── */}
            <div className="max-w-4xl mx-auto px-4 sm:px-8 py-14">
                {/* Introduction */}
                <p className="text-gray-600 leading-relaxed text-base mb-10 border-l-4 border-[#0097a7] pl-5 bg-[#e0f7fa] rounded-r-lg py-4">
                    {topic.intro}
                </p>

                {/* Sections */}
                <div className="space-y-10">
                    {topic.sections.map((section, i) => (
                        <div key={i}>
                            <h2 className="text-xl font-bold text-[#006978] mb-3 uppercase tracking-wide">
                                {section.heading}
                            </h2>
                            <div className="w-12 h-0.5 bg-[#0097a7] mb-4" />

                            {section.body && (
                                <p className="text-gray-600 leading-relaxed mb-4">{section.body}</p>
                            )}

                            {section.bullets && (
                                <ul className="space-y-2">
                                    {section.bullets.map((b, j) => (
                                        <li key={j} className="flex items-start gap-3 text-gray-600">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0097a7] shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-14 bg-[#e0f7fa] rounded-xl p-8 text-center">
                    <h3 className="text-xl font-bold text-[#006978] mb-2">Consult Dr. Priya Mehta</h3>
                    <p className="text-gray-600 mb-5 text-sm">
                        Experience personalised homoeopathic care tailored to your individual needs.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-[#0097a7] hover:bg-[#006978] text-white font-semibold px-8 py-3 rounded-full transition-colors"
                    >
                        Book Consultation
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeopathySubPage
