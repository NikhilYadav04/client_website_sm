import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Globe } from 'lucide-react'
import doctorImg from '../assets/doctor/4.png'

const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '10,000+', label: 'Patients Healed' },
    { value: 'BHMS', label: 'Qualified' },
]

const credentials = [
    'BHMS Qualified',
    'Specialist in ADVANCED HOMEOPATHY',
    '20+ Years of Clinical Experience',
    '10,000+ Patients Treated',
    'Worldwide Patient Consultation',
]

const About = () => (
    <div className="min-h-screen pt-28 pb-24 font-sans">

        {/* Hero Banner */}
        <div className="py-16 px-4 text-center mb-20 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #004d5a 0%, #0097a7 100%)' }}>
            <div className="hidden sm:block absolute text-white/5 text-[15rem] font-serif select-none pointer-events-none right-0 top-0 leading-none">🌿</div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <span className="text-xs text-[#b2ebf2] uppercase tracking-[0.25em] font-semibold">Our Story</span>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">About Dr. Smrity Joshi</h1>
                <p className="text-white/70 mt-3 text-sm">Advanced Homeopathy Specialist · 20+ Years Experience · Worldwide Consultation</p>
                <div className="w-16 h-0.5 mx-auto mt-5" style={{ backgroundColor: '#80deea' }} />
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
                    <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl" style={{ backgroundColor: '#e0f7fa' }} />
                    <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-[#0097a7]/30 shadow-2xl z-10">
                        <img src={doctorImg} alt="Dr. Smrity Joshi" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-5 right-0 lg:-right-8 z-20 text-white px-5 py-3 rounded-xl shadow-xl"
                        style={{ backgroundColor: '#0097a7' }}>
                        <p className="text-xs text-[#b2ebf2] uppercase tracking-wider">Qualified</p>
                        <p className="text-sm font-bold">BHMS · Adv. Homeopathy</p>
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
                        <span className="text-xs text-[#0097a7] uppercase tracking-[0.2em] font-semibold">Founder &amp; Physician</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">Dr. Smrity Joshi</h2>
                        <p className="text-[#0097a7] font-semibold mt-1">Advanced Homeopathy Specialist</p>
                    </div>
                    <div className="w-12 h-0.5 bg-[#0097a7]" />
                    <p className="text-gray-500 leading-relaxed">
                        Dr. Smrity Joshi is a highly experienced homeopathy practitioner with over{' '}
                        <strong className="text-gray-800">20+ years of expertise</strong>. She is known for her specialization in{' '}
                        <strong className="text-[#006978]">ADVANCED HOMEOPATHY</strong>, using modern and result-oriented
                        approaches (work on mind method) to treat the root cause of diseases. Her treatments are safe, natural,
                        and completely personalized for each patient. She consults patients worldwide through both online and
                        in-clinic sessions.
                    </p>

                    {/* Credentials checklist */}
                    <div className="bg-[#f5f9fa] border border-[#e0f7fa] rounded-xl p-5 space-y-2">
                        <h4 className="font-semibold text-[#006978] mb-3 flex items-center gap-2">
                            <Globe size={16} />
                            Credentials &amp; Specialization
                        </h4>
                        {credentials.map(c => (
                            <div key={c} className="flex items-center gap-2">
                                <CheckCircle size={14} className="shrink-0" style={{ color: '#0097a7' }} />
                                <p className="text-gray-600 text-sm">{c}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-500 leading-relaxed text-sm">
                        Her treatment approach focuses on identifying the root cause of the disease rather than merely suppressing
                        symptoms, emphasizing detailed case evaluation and holistic understanding of the patient — her first
                        consultation lasts 1–2 hours for thorough case analysis.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center border border-[#e0f7fa] rounded-xl py-4 bg-[#f5f9fa]">
                                <p className="text-2xl font-bold" style={{ color: '#0097a7' }}>{s.value}</p>
                                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
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
                className="rounded-2xl p-10 max-w-4xl mx-auto text-center space-y-5"
                style={{ background: '#f5f9fa', border: '1px solid #e0f7fa' }}
            >
                <span className="text-4xl">🌿</span>
                <h3 className="text-2xl font-bold" style={{ color: '#006978' }}>Our Philosophy</h3>
                <p className="text-gray-600 italic text-xl leading-relaxed">
                    "The goal is not only to treat illness but also to empower patients to achieve long-term wellness and a better quality of life."
                </p>
                <div className="w-12 h-0.5 mx-auto" style={{ backgroundColor: '#0097a7' }} />
                <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
                    Dr. Smrity Joshi is committed to providing ethical, evidence-based, and individualized homeopathic care in
                    accordance with the guidelines laid down by the <strong className="text-gray-700">Ministry of AYUSH, Government of India</strong>.
                </p>
            </motion.div>
        </div>
    </div>
)

export default About
