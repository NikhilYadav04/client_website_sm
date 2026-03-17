import React from 'react'
import TreatmentGrid from '../components/TreatmentGrid'

const Treatments = () => (
    <div className="min-h-screen pt-20 font-sans">
        {/* Banner */}
        <div className="bg-forest py-16 px-4 text-center relative overflow-hidden">
            <div className="absolute text-sage/10 text-[15rem] font-serif select-none pointer-events-none right-0 top-0 leading-none">🌿</div>
            <span className="font-sans text-xs text-gold/80 uppercase tracking-[0.25em] font-semibold">What We Treat</span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-3">Treatment Areas</h1>
            <p className="font-sans text-white/60 mt-4 max-w-xl mx-auto text-sm">
                We offer specialized homeopathic treatments for a wide range of acute and chronic conditions.
                Hover over any card to see specific conditions.
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
        </div>

        <TreatmentGrid preview={false} />
    </div>
)

export default Treatments
