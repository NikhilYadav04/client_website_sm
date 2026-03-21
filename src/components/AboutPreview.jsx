import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Globe, CheckCircle } from 'lucide-react'
import doctorImg from '../assets/doctor/1.jpg'

const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '10,000+', label: 'Patients Healed' },
    { value: 'Worldwide', label: 'Consultation' },
]

const credentials = [
    'BHMS Qualified',
    'Specialist in ADVANCED HOMEOPATHY',
    '20+ Years of Clinical Experience',
    '10,000+ Patients Treated',
    'Worldwide Patient Consultation',
]

const AboutPreview = () => {
    const navigate = useNavigate()
    return (
        <section className="py-20 px-4 sm:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                {/* Doctor photo */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative flex justify-center lg:justify-start"
                >
                    {/* Teal background offset */}
                    <div className="absolute -top-4 -left-4 w-full max-w-sm h-full rounded-2xl" style={{ backgroundColor: '#e0f7fa' }} />
                    {/* Doctor frame */}
                    <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-xl z-10 border-2 border-[#0097a7]/30">
                        <img
                            src={doctorImg}
                            alt="Dr. Smrity Joshi Sharma"
                            loading="eager"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Credential badge */}
                    <div className="absolute -bottom-4 -right-2 lg:-right-6 z-20 text-white px-5 py-3 rounded-xl shadow-lg"
                        style={{ backgroundColor: '#0097a7' }}>
                        <p className="text-xs text-[#b2ebf2] uppercase tracking-wider">Qualified</p>
                        <p className="text-sm font-bold">BHMS · Adv. Homeopathy</p>
                    </div>
                </motion.div>

                {/* Text content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="space-y-6"
                >
                    <div>
                        <span className="section-tag">About the Doctor</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3 leading-tight">
                            Dr. Smrity Joshi <span style={{ color: '#0097a7' }}>Sharma</span>
                        </h2>
                        <p className="text-[#0097a7] font-semibold mt-1 text-sm tracking-wide uppercase">
                            Advanced Homeopathy Specialist
                        </p>
                    </div>

                    <div className="w-14 h-0.5 bg-[#0097a7]" />

                    <p className="text-gray-500 leading-relaxed text-base">
                        Dr. Smrity Joshi Sharma is a highly experienced homeopathy practitioner with over{' '}
                        <strong className="text-gray-800">25 years of expertise</strong>. She is known for her specialization in{' '}
                        <strong className="text-[#006978]">ADVANCED HOMEOPATHY</strong>, using modern and result-oriented
                        approaches (work on mind method) to treat the root cause of diseases. Her treatments are safe,
                        natural, and completely personalized for each patient. She consults patients worldwide through
                        both online and in-clinic sessions.
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

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-2">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center border border-[#e0f7fa] rounded-xl py-4 bg-[#f5f9fa]">
                                <p className="text-2xl font-bold" style={{ color: '#0097a7' }}>{s.value}</p>
                                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => navigate('/about')}
                        className="inline-flex items-center gap-2 font-semibold text-[#0097a7] border-b-2 border-[#0097a7] pb-0.5 hover:text-[#006978] transition-colors text-sm group"
                    >
                        Read Full Story
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutPreview
