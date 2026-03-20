import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { homeopathyTopics } from '../data/diseasesData'

// Local about images — mapped 1:1 to the 4 topic slugs in order
import about1 from '../assets/about/1.jpg'
import about2 from '../assets/about/2.jpg'
import about3 from '../assets/about/3.jpg'
import about4 from '../assets/about/4.jpg'

const slugImageMap = {
    'hahnemanns-theory': about1,
    'individualising-case': about2,
    'mind-method': about3,
    'applicable-diseases': about4,
}

const HomeopathySubPage = () => {
    const { slug } = useParams()
    const topic = homeopathyTopics[slug]
    const bannerImg = slugImageMap[slug]

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
            {/* ── Banner — two-column layout with image fitting perfectly ── */}
            <div
                className="pt-20 grid grid-cols-1 lg:grid-cols-2"
                style={{ minHeight: '380px', background: 'linear-gradient(135deg, #004d5a 0%, #006978 100%)' }}
            >
                {/* Left — text */}
                <div className="flex flex-col justify-center px-8 sm:px-14 py-14">
                    <span
                        className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                        style={{ color: '#b2ebf2' }}
                    >
                        {topic.bannerSubtitle}
                    </span>
                    <h1
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white"
                    >
                        {topic.title}
                    </h1>
                    <div className="w-14 h-0.5 mt-6" style={{ backgroundColor: '#80deea' }} />
                    <p className="text-white/70 text-sm mt-5 max-w-md leading-relaxed">
                        Advanced Homeopathy · Dr. Smrity Joshi Sharma · 25+ Years Experience
                    </p>
                </div>

                {/* Right — full-height image, no crop */}
                {bannerImg && (
                    <div className="relative hidden lg:block" style={{ minHeight: '380px' }}>
                        <img
                            src={bannerImg}
                            alt={topic.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ objectPosition: 'center top' }}
                        />
                        {/* subtle left-edge fade so it blends with teal left panel */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{ background: 'linear-gradient(to right, rgba(0,77,90,0.6) 0%, transparent 40%)' }}
                        />
                    </div>
                )}
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


            </div>
        </div>
    )
}

export default HomeopathySubPage
