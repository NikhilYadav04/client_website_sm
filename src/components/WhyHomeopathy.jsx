import React from 'react'
import { motion } from 'framer-motion'

const pillars = [
    { icon: '🌿', title: 'Holistic Healing', desc: 'Treats the person as a whole — body, mind & soul' },
    { icon: '✦', title: '0 Side Effects', desc: 'Natural medicines, safe for all ages including children' },
    { icon: '🎯', title: 'Root Cause Focus', desc: 'Addresses the origin of disease, not just symptoms' },
    { icon: '♾️', title: 'Long-Term Wellness', desc: 'Builds lasting immunity and overall quality of life' },
]

const WhyHomeopathy = () => (
    <section className="py-14 px-4 sm:px-8" style={{ backgroundColor: '#0097a7' }}>
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {pillars.map((p, i) => (
                    <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex flex-col items-center text-center gap-3"
                    >
                        <span className="text-4xl mb-1">{p.icon}</span>
                        <h3 className="text-base font-bold text-white">{p.title}</h3>
                        <p className="text-white/75 text-sm leading-relaxed">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default WhyHomeopathy
