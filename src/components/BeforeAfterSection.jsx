import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Before/After result pairs
import beforeAtopic from '../assets/results/before-Actopic dermatitis.jpg'
import afterAtopic from '../assets/results/after-Actopic dermatitis.jpg'
import beforePsoriasis from '../assets/results/before-psoriasis pt.jpg'
import afterPsoriasis1 from '../assets/results/after-psoriasis pt.jpg'
import afterPsoriasis2 from '../assets/results/after-psoriasis pt 1.jpg'

const cases = [
    {
        id: 1,
        title: 'Atopic Dermatitis',
        before: beforeAtopic,
        after: afterAtopic,
        desc: 'Complete recovery achieved with Advanced Homeopathy treatment',
    },
    {
        id: 2,
        title: 'Psoriasis — Case 1',
        before: beforePsoriasis,
        after: afterPsoriasis1,
        desc: 'Significant skin clearing through root cause treatment',
    },
    {
        id: 3,
        title: 'Psoriasis — Case 2',
        before: beforePsoriasis,
        after: afterPsoriasis2,
        desc: 'Progressive healing with personalized homeopathic plan',
    },
]

const BeforeAfterSection = () => {
    const [activeCase, setActiveCase] = useState(0)

    return (
        <section className="py-20 px-4 sm:px-8 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="section-tag">Real Results</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">
                        Before &amp; <span style={{ color: '#0097a7' }}>After</span> Results
                    </h2>
                    <p className="text-gray-500 mt-3 text-sm max-w-lg mx-auto">
                        Real patients. Real results. Advanced Homeopathy treatments for chronic skin conditions and more.
                    </p>
                    <div className="w-14 h-0.5 bg-[#0097a7] mx-auto mt-5" />
                </motion.div>

                {/* Case selector tabs */}
                <div className="flex justify-center gap-3 mb-10 flex-wrap">
                    {cases.map((c, i) => (
                        <button
                            key={c.id}
                            onClick={() => setActiveCase(i)}
                            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                            style={
                                activeCase === i
                                    ? { background: '#0097a7', color: '#fff', boxShadow: '0 4px 14px rgba(0,151,167,0.35)' }
                                    : { background: '#f0fbfd', color: '#006978', border: '1px solid #b2ebf2' }
                            }
                        >
                            {c.title}
                        </button>
                    ))}
                </div>

                {/* Before/After display */}
                <motion.div
                    key={activeCase}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
                >
                    {/* Before */}
                    <div className="rounded-2xl overflow-hidden shadow-md border border-[#e0f7fa]">
                        <div className="text-center py-2.5 font-bold text-sm tracking-wider uppercase"
                            style={{ background: '#ffebee', color: '#c62828' }}>
                            Before Treatment
                        </div>
                        <img
                            src={cases[activeCase].before}
                            alt={`Before - ${cases[activeCase].title}`}
                            className="w-full h-64 object-cover"
                        />
                    </div>

                    {/* After */}
                    <div className="rounded-2xl overflow-hidden shadow-md border border-[#e0f7fa]">
                        <div className="text-center py-2.5 font-bold text-sm tracking-wider uppercase"
                            style={{ background: '#e8f5e9', color: '#2e7d32' }}>
                            After Treatment
                        </div>
                        <img
                            src={cases[activeCase].after}
                            alt={`After - ${cases[activeCase].title}`}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                </motion.div>

                {/* Case description */}
                <motion.div
                    key={`desc-${activeCase}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mt-6"
                >
                    <p className="text-gray-500 text-sm">
                        <strong className="text-gray-700">{cases[activeCase].title}:</strong>{' '}
                        {cases[activeCase].desc}
                    </p>
                </motion.div>

                {/* Disclaimer */}
                <p className="text-center text-gray-400 text-xs mt-8">
                    * Results may vary from patient to patient. These are genuine patient cases treated at the clinic.
                </p>
            </div>
        </section>
    )
}

export default BeforeAfterSection
