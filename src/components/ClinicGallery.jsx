import React from 'react'
import { motion } from 'framer-motion'
import clinicImg from '../assets/clinic_1.jpg.png'

const images = [
    { src: clinicImg, title: 'Clinic Interior', span: 'row-span-2' },
    { src: clinicImg, title: 'Consultation Room', span: '' },
    { src: clinicImg, title: 'Waiting Area', span: '' },
]

const ClinicGallery = () => (
    <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
                <div>
                    <span className="section-tag">Our Space</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">
                        Our <span style={{ color: '#0097a7' }}>Clinic</span>
                    </h2>
                </div>
                <p className="text-gray-500 text-sm max-w-xs">
                    A calm, welcoming environment designed for healing and comfort.
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`relative overflow-hidden rounded-xl group cursor-pointer ${img.span}`}
                    >
                        <img
                            src={img.src}
                            alt={img.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#0097a7]/0 group-hover:bg-[#006978]/60 transition-all duration-400 flex items-end p-5">
                            <span className="text-white text-base font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                {img.title}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default ClinicGallery
