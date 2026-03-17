import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import doctorImg from '../assets/doctor.png'

const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '5000+', label: 'Patients Healed' },
    { value: '12+', label: 'Conditions Treated' },
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
                            alt="Doctor"
                            loading="eager"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Credential badge */}
                    <div className="absolute -bottom-4 -right-2 lg:-right-6 z-20 text-white px-5 py-3 rounded-xl shadow-lg"
                        style={{ backgroundColor: '#0097a7' }}>
                        <p className="text-xs text-[#b2ebf2] uppercase tracking-wider">Qualified</p>
                        <p className="text-sm font-bold">BHMS, CGO, DNHE, FCAH</p>
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
                            Healing with <span style={{ color: '#0097a7' }}>Nature's</span> Wisdom
                        </h2>
                    </div>

                    <div className="w-14 h-0.5 bg-[#0097a7]" />

                    <p className="text-gray-500 leading-relaxed text-base">
                        A dedicated and compassionate homeopathic physician known for a patient-centric approach
                        and commitment to holistic healing. With over <strong className="text-gray-800">10 years of experience</strong> managing
                        a wide range of acute and chronic diseases.
                    </p>

                    <div className="bg-[#f5f9fa] border border-[#e0f7fa] rounded-xl p-5">
                        <h4 className="font-semibold text-[#006978] mb-2">Areas of Special Interest</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Lifestyle disorders, skin problems, female health issues, pediatric complaints,
                            allergies, and chronic illnesses.
                        </p>
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
