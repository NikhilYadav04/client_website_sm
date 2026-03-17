import React from 'react'
import { motion } from 'framer-motion'
import doctorImg from '../assets/doctor.png'

const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '5000+', label: 'Patients Healed' },
    { value: '12+', label: 'Conditions' },
]

const About = () => (
    <div className="min-h-screen pt-28 pb-24 font-sans">

        {/* Hero Banner */}
        <div className="bg-forest py-16 px-4 text-center mb-20 relative overflow-hidden">
            <div className="absolute text-sage/10 text-[15rem] font-serif select-none pointer-events-none right-0 top-0 leading-none">🌿</div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <span className="font-sans text-xs text-gold/80 uppercase tracking-[0.25em] font-semibold">Our Story</span>
                <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-3">About Us</h1>
                <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
            </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8">

            {/* Doctor section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                {/* Photo */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -top-4 -left-4 w-full h-full bg-sage/15 rounded-2xl" />
                    <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-gold/40 shadow-2xl z-10">
                        <img src={doctorImg} alt="Doctor" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-5 right-0 lg:-right-8 z-20 bg-forest text-white px-5 py-3 rounded-xl shadow-xl">
                        <p className="font-sans text-xs text-gold/80 uppercase tracking-wider">Qualified</p>
                        <p className="font-serif text-sm font-bold">BHMS, CGO, DNHE, FCAH</p>
                    </div>
                </motion.div>

                {/* Info */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6 mt-8 lg:mt-0"
                >
                    <div>
                        <span className="font-sans text-xs text-gold uppercase tracking-[0.2em] font-semibold">Founder & Physician</span>
                        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-charcoal mt-2">Dr. Priya Mehta</h2>
                        <p className="text-forest font-semibold font-sans mt-1">Homeopathic Physician & Consultant</p>
                    </div>
                    <div className="w-12 h-0.5 bg-gold" />
                    <p className="text-warmgray leading-relaxed">
                        Dr. Priya Mehta is a dedicated and compassionate homeopathic physician, known for her patient-centric
                        approach and commitment to holistic healing. With over <strong className="text-charcoal">10 years of experience</strong>, she has
                        gained expertise in managing a wide range of acute and chronic diseases.
                    </p>
                    <div className="bg-cream border border-gold/20 rounded-xl p-5 space-y-2">
                        <h4 className="font-serif text-forest font-semibold">Areas of Special Interest</h4>
                        <p className="font-sans text-warmgray text-sm leading-relaxed">
                            Lifestyle disorders, skin problems, female health issues, pediatric complaints, allergies, and chronic illnesses.
                        </p>
                    </div>
                    <p className="text-warmgray leading-relaxed text-sm">
                        Her treatment approach focuses on identifying the root cause of the disease rather than merely suppressing
                        symptoms, emphasizing detailed case evaluation and holistic understanding of the patient.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center border border-sage/30 rounded-xl py-4 bg-ivory">
                                <p className="font-serif text-2xl font-bold text-forest">{s.value}</p>
                                <p className="font-sans text-xs text-warmgray mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Philosophy */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-sage/10 border border-sage/30 rounded-2xl p-10 max-w-4xl mx-auto text-center space-y-5"
            >
                <span className="text-4xl">🌿</span>
                <h3 className="font-serif text-2xl font-bold text-forest">Our Philosophy</h3>
                <p className="font-serif text-charcoal/80 italic text-xl leading-relaxed">
                    "The goal is not only to treat illness but also to empower patients to achieve long-term wellness and a better quality of life."
                </p>
                <div className="w-12 h-0.5 bg-gold mx-auto" />
                <p className="font-sans text-warmgray text-sm leading-relaxed max-w-2xl mx-auto">
                    Dr. Priya Mehta is committed to providing ethical, evidence-based, and individualized homeopathic care in
                    accordance with the guidelines laid down by the <strong className="text-charcoal">Ministry of AYUSH, Government of India</strong>.
                </p>
            </motion.div>
        </div>
    </div>
)

export default About
