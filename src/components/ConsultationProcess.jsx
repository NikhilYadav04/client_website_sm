import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Video, Phone, MessageCircle, Building2, Mic } from 'lucide-react'

const consultTypes = [
    {
        icon: <Clock size={32} strokeWidth={1.5} style={{ color: '#0097a7' }} />,
        label: 'First Consultation',
        duration: '2 – 3 Hours',
        desc: 'Detailed case study, deep analysis of mind & body, complete history taking, personalized medicine plan',
        tag: 'In-Depth Case Study',
        tagColor: '#0097a7',
    },
    {
        icon: <Clock size={32} strokeWidth={1.5} style={{ color: '#006978' }} />,
        label: 'Follow-up / Routine',
        duration: '10 – 15 Minutes',
        desc: 'Quick progress review, medicine adjustments, follow-up on treatment plan and symptom changes',
        tag: 'Progress Review',
        tagColor: '#006978',
    },
]

const modes = [
    { icon: <Building2 size={22} />, label: 'In-Clinic' },
    { icon: <Video size={22} />, label: 'Zoom' },
    { icon: <Video size={22} />, label: 'Google Meet' },
    { icon: <Phone size={22} />, label: 'Phone Call' },
    { icon: <MessageCircle size={22} />, label: 'WhatsApp' },
    { icon: <Mic size={22} />, label: 'Audio Call' },
]

const ConsultationProcess = () => (
    <section className="py-20 px-4 sm:px-8 bg-[#f5f9fa]">
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
            >
                <span className="section-tag">How It Works</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">
                    Consultation <span style={{ color: '#0097a7' }}>Process</span>
                </h2>
                <p className="text-gray-500 mt-3 text-sm max-w-lg mx-auto">
                    Our proven ADVANCED HOMEOPATHY method begins with a thorough understanding of you as a person, not just your symptoms
                </p>
                <div className="w-14 h-0.5 bg-[#0097a7] mx-auto mt-5" />
            </motion.div>

            {/* Consultation types */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
                {consultTypes.map((c, i) => (
                    <motion.div
                        key={c.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-[#e0f7fa] relative overflow-hidden"
                    >
                        {/* Decorative circle */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10"
                            style={{ backgroundColor: c.tagColor }} />

                        <div className="flex items-start gap-5">
                            <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: '#e0f7fa' }}>
                                {c.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1 flex-wrap">
                                    <h3 className="text-lg font-bold text-gray-800">{c.label}</h3>
                                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                                        style={{ backgroundColor: c.tagColor }}>
                                        {c.tag}
                                    </span>
                                </div>
                                <p className="text-3xl font-extrabold mt-1 mb-3" style={{ color: c.tagColor }}>
                                    {c.duration}
                                </p>
                                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Consultation Modes */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#e0f7fa]"
            >
                <h3 className="text-lg font-bold text-gray-800 text-center mb-8">
                    Available Consultation Modes
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {modes.map((m, i) => (
                        <motion.div
                            key={m.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="flex flex-col items-center gap-2 p-4 rounded-xl text-center transition-all duration-200 cursor-default"
                            style={{ background: '#f0fbfd', border: '1px solid #b2ebf2' }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = '#e0f7fa'
                                e.currentTarget.style.transform = 'translateY(-3px)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = '#f0fbfd'
                                e.currentTarget.style.transform = 'translateY(0)'
                            }}
                        >
                            <div style={{ color: '#0097a7' }}>{m.icon}</div>
                            <span className="text-xs font-semibold text-gray-600">{m.label}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
)

export default ConsultationProcess
