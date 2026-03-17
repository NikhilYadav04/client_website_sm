import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { homeopathyNavItems } from '../data/diseasesData'

const SECTION_IMG = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=85'

const topicDetails = {
    'hahnemanns-theory': { short: 'The Law of Similars — the revolutionary principle that forms the foundation of all homoeopathic prescribing.' },
    'individualising-case': { short: 'Every patient is unique. Learn how homoeopaths tailor treatment to your specific symptom picture.' },
    'mind-method': { short: 'Homoeopathy places mental & emotional symptoms at the top of the hierarchy — the key to deep healing.' },
    'applicable-diseases': { short: 'From acute infections to chronic lifestyle disorders, discover the wide scope of homoeopathic practice.' },
}

const numbers = ['01', '02', '03', '04']

const HomeopathySection = () => (
    <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

            {/* LEFT — Teal background + image overlay */}
            <div className="relative flex flex-col justify-center px-10 py-16" style={{ backgroundColor: '#006978' }}>
                {/* Faint image layered under teal */}
                <img
                    src={SECTION_IMG}
                    alt="Homoeopathy"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 pointer-events-none"
                />

                <div className="relative z-10">
                    <span className="text-[#b2ebf2] text-xs font-bold uppercase tracking-widest mb-3 block">About Homoeopathy</span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
                        Understanding the<br />
                        <span style={{ color: '#80deea' }}>Science of Healing</span>
                    </h2>
                    <p className="text-white/70 text-sm leading-relaxed max-w-md mb-8">
                        Homoeopathy is a complete system of medicine based on the principle that
                        like cures like. It treats the whole person — body, mind, and spirit — using ultra-diluted
                        natural substances that stimulate the body's own healing response.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {['No Side Effects', 'Safe for All Ages', 'Root Cause Treatment', 'AYUSH Recognised'].map(tag => (
                            <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                                style={{ background: 'rgba(255,255,255,0.12)', color: '#b2ebf2', border: '1px solid rgba(255,255,255,0.2)' }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT — Numbered topic cards */}
            <div className="bg-white flex flex-col justify-center px-8 lg:px-12 py-10 gap-0 divide-y divide-gray-100">
                {homeopathyNavItems.map((item, i) => (
                    <motion.div
                        key={item.slug}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <Link
                            to={`/homeopathy/${item.slug}`}
                            className="group flex items-start gap-5 py-5 hover:bg-[#f5f9fa] rounded-xl px-3 -mx-3 transition-colors duration-200"
                        >
                            {/* Number */}
                            <span className="text-3xl font-black shrink-0 leading-none" style={{ color: '#e0f7fa' }}>
                                {numbers[i]}
                            </span>

                            {/* Text */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-800 text-base mb-1 group-hover:text-[#0097a7] transition-colors">
                                    {item.label}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {topicDetails[item.slug]?.short}
                                </p>
                            </div>

                            {/* Arrow */}
                            <ArrowRight
                                size={18}
                                className="shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1"
                                style={{ color: '#0097a7' }}
                            />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default HomeopathySection
