import React from 'react'
import { motion } from 'framer-motion'
import clinicImg from '../assets/clinic_1.jpg.png'

const sections = [
    {
        title: 'Individualized Approach',
        body: "Homoeopathy emphasizes understanding the patient's physical symptoms, mental state, emotional well-being, and lifestyle before planning treatment. Each patient is assessed in detail, and treatment is tailored according to their unique health profile — making it suitable for all age groups.",
    },
    {
        title: 'Safe & Effective',
        body: 'Homoeopathic medicines are prepared in regulated doses and are generally well-tolerated when prescribed by a qualified practitioner. The system places importance on long-term health support, preventive care, and overall well-being with zero known side effects.',
    },
    {
        title: 'Complementary Care',
        body: 'Homoeopathy is widely used as a supportive and complementary form of care in managing various acute and chronic health conditions. It can be taken alongside conventional medical treatment under proper medical guidance.',
    },
]

const HomeopathyPage = () => (
    <div className="min-h-screen pt-20 font-sans">
        {/* Banner */}
        <div className="bg-forest py-16 px-4 text-center relative overflow-hidden">
            <div className="absolute text-sage/10 text-[15rem] font-serif select-none pointer-events-none right-0 top-0 leading-none">🌿</div>
            <span className="font-sans text-xs text-gold/80 uppercase tracking-[0.25em] font-semibold">The Science of Natural Healing</span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-3">About Homoeopathy</h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
        </div>

        {/* Cinematic full-width image divider */}
        <div className="relative h-72 lg:h-96 overflow-hidden">
            <img
                src={clinicImg}
                alt="Homeopathy"
                loading="lazy"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-forest/30" />
        </div>

        {/* Editorial content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left column */}
                <div className="space-y-10">
                    {/* Pull quote */}
                    <blockquote className="border-l-4 border-gold pl-6">
                        <p className="font-serif text-2xl italic text-forest leading-relaxed">
                            "Homoeopathy is a holistic system of medicine that focuses on the individual as a whole rather than only on the disease."
                        </p>
                    </blockquote>

                    {sections.slice(0, 2).map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <h3 className="font-serif text-xl font-bold text-charcoal mb-3">{s.title}</h3>
                            <div className="w-8 h-0.5 bg-gold mb-3" />
                            <p className="font-sans text-warmgray leading-relaxed text-base">{s.body}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Right column */}
                <div className="space-y-8">
                    {/* Clinic image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-xl border-2 border-sage/20 aspect-[4/3]"
                    >
                        <img
                            src={clinicImg}
                            alt="Clinic"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Key benefits box */}
                    <div className="bg-sage/10 border border-sage/30 rounded-2xl p-6 space-y-3">
                        <h4 className="font-serif text-forest font-semibold text-lg">Key Benefits</h4>
                        {['No side effects', 'Safe for all ages', 'Treats root cause', 'Long-lasting results', 'AYUSH recognized'].map((b) => (
                            <div key={b} className="flex items-center gap-3 font-sans text-sm text-charcoal">
                                <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                                {b}
                            </div>
                        ))}
                    </div>

                    {sections.slice(2).map((s) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-serif text-xl font-bold text-charcoal mb-3">{s.title}</h3>
                            <div className="w-8 h-0.5 bg-gold mb-3" />
                            <p className="font-sans text-warmgray leading-relaxed text-base">{s.body}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* AYUSH notice */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 bg-forest/5 border-l-4 border-forest rounded-xl p-7 max-w-3xl mx-auto"
            >
                <p className="font-sans text-charcoal/80 leading-relaxed text-sm">
                    Recognized by the <strong className="text-forest">Ministry of AYUSH, Government of India</strong>, homoeopathy encourages
                    ethical practice, patient education, and realistic treatment expectations. The aim is to support the body's
                    natural healing response and improve quality of life.
                </p>
            </motion.div>
        </div>
    </div>
)

export default HomeopathyPage
