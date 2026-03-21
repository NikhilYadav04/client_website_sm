import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const GOOGLE_REVIEW_URL = 'https://share.google/WonD5nVqccqcbgJcZ'

const testimonials = [
    {
        name: 'Shiv Shankar Rai',
        date: 'A year ago',
        condition: 'General Health',
        quote: 'Dr. Smrity Joshi is an excellent homeopathy doctor! She listens carefully, understands the root cause, and provides highly effective treatments. Her expertise and compassionate care make her the best choice for holistic healing. Highly recommended!',
        rating: 5,
        initial: 'S',
    },
    {
        name: 'Manoj Meena',
        date: 'A year ago',
        condition: 'Chronic Illness',
        quote: 'Dr. Smrity Joshi is the best homeopathy doctor in India! Her precise diagnosis, personalized treatment, and caring approach make a real difference. I saw amazing improvement in my health within weeks. Highly recommended for anyone seeking natural and effective healing! Once again thank you Dr.',
        rating: 5,
        initial: 'M',
    },
    {
        name: 'Yogita Dorle',
        date: '2 years ago',
        condition: 'Child Cough & Breathing',
        quote: 'Dr. Smriti is a wonderful doctor. Her medicines worked like magic for my 4 year old son who was taking 2 pumps thrice a day for his cough and breathing problems. Within 2 weeks he showed great results and was able to eat all his favourite foods and still not have cough due to his strong immunity built up. Would really recommend homeopathic medicines by Dr. Smriti.',
        rating: 5,
        initial: 'Y',
    },
    {
        name: 'Aparna Bhargava',
        date: '3 years ago',
        condition: 'Anxiety',
        quote: 'I have been taking medicine from Dr Smrity for anxiety for last 4 months and have seen considerable improvement in my health. She is very understanding and knowledgeable and makes the person very comfortable. Thank you Doctor for all your help.',
        rating: 5,
        initial: 'A',
    },
    {
        name: 'Rashmi Singh',
        date: 'Sept 14, 2019',
        condition: 'Allergic Cold & Cough',
        quote: 'Dr. Smrity is a very good and friendly consultant. I was very sensitive to allergic cold and cough due to change in climatic conditions. Thanks to her, that I got rid of my childhood problem.',
        rating: 5,
        initial: 'R',
    },
    {
        name: 'Mayank Gupta',
        date: 'Sept 14, 2019',
        condition: 'Root Cause Treatment',
        quote: 'Very good homeopathic doctor. She does thorough analysis of patient\'s problem before starting treatment. She is very good in identifying the root cause and curing the disease permanently.',
        rating: 5,
        initial: 'M',
    },
    {
        name: 'Ritika Kulkarni',
        date: 'Sept 11, 2019',
        condition: 'Tonsillitis (Child)',
        quote: 'Dr. Smrity is a professional homeopathy doctor. My daughter was suffering from tonsillitis since her childhood. Earlier I used to give antibiotics, but now after taking the treatment from Dr Smrity I can see a lot of improvement in my daughters health. She has become like a family doctor now. Apart from profession she is a very polite and helpful doctor. Definitely would like to recommend her.',
        rating: 5,
        initial: 'R',
    },
    {
        name: 'Aditya Shukla',
        date: 'A year ago',
        condition: 'Health & Beauty',
        quote: 'Trusted for Health and Beauty — exceptional homeopathic and cosmetic solutions. Her personalized treatments bring natural healing and visible results. A go-to expert for holistic care and confidence!',
        rating: 5,
        initial: 'A',
    },
]

const avatarColors = ['#0097a7', '#006978', '#00897b', '#0277bd', '#6d4c41', '#558b2f', '#7b1fa2', '#c62828']

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
                    <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
                        Real reviews from patients who experienced the power of Advanced Homeopathy
                    </p>

                </motion.div>

                {/* Show first 3 on homepage preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.slice(0, 3).map((t, i) => (
                        <motion.div
                            key={t.name + i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className="bg-white border border-[#e0f7fa] rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                        >
                            <div className="flex gap-1">
                                {[...Array(t.rating)].map((_, idx) => (
                                    <Star key={idx} size={14} fill="#FBBC04" className="text-[#FBBC04]" />
                                ))}
                            </div>
                            <Quote size={24} className="text-[#0097a7]/30" />
                            <p className="text-gray-600 italic text-sm leading-relaxed flex-1">"{t.quote}"</p>
                            <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                                    style={{ background: avatarColors[i % avatarColors.length] }}
                                >
                                    {t.initial}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                                    <p className="text-xs text-gray-400">{t.condition}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-10 flex flex-wrap gap-4 justify-center">
                    <button
                        onClick={() => navigate('/testimonials')}
                        className="border-2 border-[#0097a7] text-[#0097a7] font-semibold px-8 py-3 rounded-full hover:bg-[#0097a7] hover:text-white transition-all duration-200 text-sm"
                    >
                        Read All Reviews
                    </button>
                    <a
                        href={GOOGLE_REVIEW_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0097a7] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#006978] transition-all duration-200 text-sm"
                    >
                        ⭐ Add a Review
                    </a>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsPreview
