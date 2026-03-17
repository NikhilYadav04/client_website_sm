import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const testimonials = [
    {
        name: 'Priya Sharma',
        condition: 'PCOD / Hormonal Imbalance',
        quote: 'After years of struggling with PCOD, I finally found lasting relief through homeopathy. The treatment was gentle yet incredibly effective. Highly recommend!',
        rating: 5,
    },
    {
        name: 'Rajesh Mehta',
        condition: 'Psoriasis',
        quote: 'I had severe psoriasis for 8 years. Within 6 months of homeopathic treatment, my skin cleared up beautifully. I am so grateful for this gentle healing.',
        rating: 5,
    },
    {
        name: 'Anita Desai',
        condition: 'Child Immunity & Tonsillitis',
        quote: 'My daughter used to fall sick every month. After homeopathic treatment, her immunity has improved dramatically. No more frequent visits to allopathic doctors!',
        rating: 5,
    },
]

const TestimonialsPreview = () => {
    const navigate = useNavigate()
    return (
        <section className="py-20 px-4 sm:px-8 bg-[#f5f9fa]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="section-tag">Patient Stories</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">
                        Lives <span style={{ color: '#0097a7' }}>Transformed</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className="bg-white border border-[#e0f7fa] rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                        >
                            {/* Stars */}
                            <div className="flex gap-1">
                                {[...Array(t.rating)].map((_, idx) => (
                                    <Star key={idx} size={14} fill="#0097a7" className="text-[#0097a7]" />
                                ))}
                            </div>
                            <Quote size={24} className="text-[#0097a7]/30" />
                            <p className="text-gray-600 italic text-sm leading-relaxed flex-1">
                                "{t.quote}"
                            </p>
                            <div className="border-t border-gray-100 pt-4">
                                <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                                <p className="text-xs text-[#0097a7] mt-0.5">{t.condition}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <button
                        onClick={() => navigate('/testimonials')}
                        className="border-2 border-[#0097a7] text-[#0097a7] font-semibold px-8 py-3 rounded-full hover:bg-[#0097a7] hover:text-white transition-all duration-200 text-sm"
                    >
                        Read More Stories
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsPreview
