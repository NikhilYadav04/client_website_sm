import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    { name: 'Priya Sharma', condition: 'PCOD / Hormonal Imbalance', quote: 'After years of struggling with PCOD, I finally found lasting relief through homeopathy. The treatment was gentle yet incredibly effective.', rating: 5 },
    { name: 'Rajesh Mehta', condition: 'Psoriasis', quote: 'I had severe psoriasis for 8 years. Within 6 months of homeopathic treatment, my skin cleared up beautifully. I am so grateful for this gentle healing.', rating: 5 },
    { name: 'Anita Desai', condition: 'Child Immunity & Tonsillitis', quote: 'My daughter used to fall sick every month. After homeopathic treatment, her immunity has improved dramatically. Highly recommend!', rating: 5 },
    { name: 'Suresh Patil', condition: 'Diabetes Care', quote: 'My blood sugar levels have stabilized remarkably with supportive homeopathic treatment alongside my regular medication. Life-changing experience.', rating: 5 },
    { name: 'Meena Kulkarni', condition: 'Anxiety & Insomnia', quote: 'The constitutional treatment helped me overcome severe anxiety and sleep issues without any side effects. I feel like a completely new person now.', rating: 5 },
    { name: 'Kavita Joshi', condition: 'Hair Fall & Skin', quote: 'Tremendous improvement in my hair fall and skin quality. The holistic approach addressed my problems from the root and the results were amazing.', rating: 5 },
]

const Testimonials = () => (
    <div className="min-h-screen pt-20 font-sans">
        {/* Banner */}
        <div className="bg-forest py-16 px-4 text-center relative overflow-hidden">
            <div className="absolute text-sage/10 text-[15rem] font-serif select-none pointer-events-none right-0 top-0 leading-none">🌿</div>
            <span className="font-sans text-xs text-gold/80 uppercase tracking-[0.25em] font-semibold">Patient Stories</span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-3">Lives Transformed</h1>
            <p className="font-sans text-white/60 mt-4 max-w-xl mx-auto text-sm">
                Real stories from patients who experienced the power of holistic homeopathic healing.
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
        </div>

        <div className="py-24 px-4 sm:px-8 bg-sage/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={t.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="bg-ivory border border-sage/20 rounded-2xl p-8 flex flex-col gap-4 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex gap-1">
                            {[...Array(t.rating)].map((_, idx) => (
                                <Star key={idx} size={15} fill="#C9972B" className="text-gold" />
                            ))}
                        </div>
                        <Quote size={28} className="text-gold/40" />
                        <p className="font-serif text-charcoal/80 italic text-base leading-relaxed flex-1">
                            "{t.quote}"
                        </p>
                        <div className="border-t border-sage/20 pt-4">
                            <p className="font-sans font-semibold text-charcoal text-sm">{t.name}</p>
                            <p className="font-sans text-xs text-sage mt-0.5">{t.condition}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Online review nudge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
            >
                <div className="inline-block bg-ivory border border-gold/30 rounded-2xl px-8 py-6 shadow-md">
                    <p className="font-serif text-lg font-semibold text-charcoal mb-1">Share Your Experience</p>
                    <p className="font-sans text-warmgray text-sm mb-4">Had a positive experience? Leave us a review on Google</p>
                    <a
                        href="https://g.page/r/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gold hover:bg-amber-500 text-white font-sans font-semibold px-6 py-2.5 rounded-full text-sm transition-all"
                    >
                        Leave a Google Review
                    </a>
                </div>
            </motion.div>
        </div>
    </div>
)

export default Testimonials
