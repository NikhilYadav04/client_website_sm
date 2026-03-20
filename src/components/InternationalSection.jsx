import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Clock, Users, Award } from 'lucide-react'

const WHATSAPP_NUMBER = '919321953605'

const timezones = [
    {
        flag: '🇮🇳',
        country: 'India',
        tz: 'IST',
        slots: [
            { label: 'Morning', time: '10:00 AM – 12:00 PM' },
            { label: 'Evening', time: '05:30 PM – 08:00 PM' },
        ],
    },
    {
        flag: '🇬🇧',
        country: 'United Kingdom',
        tz: 'GMT/BST',
        slots: [
            { label: 'Morning', time: '04:30 AM – 06:30 AM' },
            { label: 'Afternoon', time: '12:00 PM – 02:30 PM' },
        ],
    },
    {
        flag: '🇺🇸',
        country: 'USA',
        tz: 'EST',
        slots: [
            { label: 'Early Morning', time: '12:30 AM – 02:30 AM' },
            { label: 'Morning', time: '08:00 AM – 10:30 AM' },
        ],
    },
    {
        flag: '🇨🇦',
        country: 'Canada',
        tz: 'EST',
        slots: [
            { label: 'Early Morning', time: '12:30 AM – 02:30 AM' },
            { label: 'Morning', time: '08:00 AM – 10:30 AM' },
        ],
    },
    {
        flag: '🇦🇪',
        country: 'Dubai / UAE',
        tz: 'GST',
        slots: [
            { label: 'Morning', time: '08:30 AM – 10:30 AM' },
            { label: 'Evening', time: '04:00 PM – 06:30 PM' },
        ],
    },
]

const highlights = [
    { icon: <Users size={28} />, text: 'Thousands of patients trust us worldwide' },
    { icon: <Award size={28} />, text: '25+ Years of Clinical Experience' },
    { icon: <Globe size={28} />, text: 'Advanced Homeopathy Specialist' },
]

const InternationalSection = () => (
    <section
        className="py-20 px-4 sm:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #004d5a 0%, #006978 50%, #00838f 100%)' }}
        id="international"
    >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 -translate-y-1/2 translate-x-1/4"
            style={{ background: '#80deea' }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5 translate-y-1/2 -translate-x-1/4"
            style={{ background: '#80deea' }} />

        <div className="max-w-7xl mx-auto relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
            >
                <span
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
                    style={{ background: 'rgba(178,235,242,0.15)', color: '#b2ebf2', border: '1px solid rgba(178,235,242,0.3)' }}
                >
                    <Globe size={14} /> International & Online Consultation
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
                    Online Consultation for{' '}
                    <span style={{ color: '#80deea' }}>International Patients</span>
                </h2>
                <p className="text-white/70 mt-4 text-base max-w-2xl mx-auto leading-relaxed">
                    Dr. Smrity Joshi Sharma provides <strong className="text-white">Advanced Homeopathy</strong> consultation
                    to patients worldwide through online platforms. Consult from anywhere via Zoom, Google Meet, WhatsApp, or phone call.
                </p>
                <div className="w-16 h-0.5 mx-auto mt-6" style={{ backgroundColor: '#80deea' }} />
            </motion.div>

            {/* Highlight stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
                {highlights.map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 rounded-2xl p-5"
                        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                        <div className="shrink-0 p-3 rounded-xl" style={{ background: 'rgba(128,222,234,0.2)' }}>
                            <span style={{ color: '#80deea' }}>{h.icon}</span>
                        </div>
                        <p className="text-white font-semibold text-sm leading-snug">{h.text}</p>
                    </motion.div>
                ))}
            </div>

            {/* Timezone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">
                {timezones.map((tz, i) => (
                    <motion.div
                        key={tz.country}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="rounded-2xl p-5 text-center transition-all duration-200"
                        style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.10)'}
                    >
                        <div className="text-4xl mb-2">{tz.flag}</div>
                        <h3 className="text-white font-bold text-sm">{tz.country}</h3>
                        <p className="text-[#b2ebf2] text-xs font-semibold uppercase tracking-wider mt-0.5 mb-4">{tz.tz}</p>
                        <div className="space-y-2">
                            {tz.slots.map(s => (
                                <div key={s.label} className="rounded-xl p-2" style={{ background: 'rgba(0,0,0,0.2)' }}>
                                    <p className="text-[#b2ebf2] text-[10px] uppercase tracking-wider">{s.label}</p>
                                    <p className="text-white font-semibold text-xs mt-0.5">{s.time}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <p className="text-white/70 text-sm mb-5">
                    <Clock size={14} className="inline mr-1.5 mb-0.5" />
                    All times shown are local times for each region. Contact us to confirm slot availability.
                </p>
                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Dr.%20Smrity%2C%20I%20would%20like%20to%20book%20an%20online%20consultation`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: '#25D366', color: '#fff' }}
                >
                    💬 Book International Consultation via WhatsApp
                </a>
            </motion.div>
        </div>
    </section>
)

export default InternationalSection
