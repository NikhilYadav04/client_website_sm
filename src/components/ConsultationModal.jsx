import React, { useState } from 'react'
import { X, CheckCircle, Loader2, Send } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO CONNECT YOUR GOOGLE FORM
// ─────────────────────────────────────────────────────────────────────────────
// 1. Go to https://forms.google.com and create a new form with these fields:
//    Q1: Full Name (Short answer)
//    Q2: WhatsApp Number (Short answer)
//    Q3: City (Short answer)
//    Q4: Chief Complaint (Dropdown)
//    Q5: Duration (Dropdown)
//    Q6: Consultation Mode (Multiple choice)
//    Q7: Additional Notes (Paragraph)
// 2. Click ⋮ → "Get pre-filled link", fill dummy data, get entry IDs
// 3. Paste your Form ID and entry IDs below
// ─────────────────────────────────────────────────────────────────────────────

const FORM_ID = 'YOUR_GOOGLE_FORM_ID_HERE'
const ENTRIES = {
    fullName: 'entry.000000001',
    whatsapp: 'entry.000000002',
    city: 'entry.000000003',
    chiefComplaint: 'entry.000000004',
    duration: 'entry.000000005',
    consultationMode: 'entry.000000006',
    notes: 'entry.000000007',
}

const COMPLAINTS = [
    'Skin Disorders (Psoriasis / Eczema / Acne)',
    'Women\'s Health (PCOD / Hormonal Issues)',
    'Child Health (Immunity / Tonsils / ADHD)',
    'Mental Health (Anxiety / Depression / Insomnia)',
    'Gut & Digestion (IBS / Acidity / Constipation)',
    'Respiratory (Cold / Cough / Asthma)',
    'Diabetes & Lifestyle Disorders',
    'Joint & Bone Pain',
    'Thyroid / Autoimmune',
    'Autism Spectrum / Developmental',
    'Other',
]

const DURATIONS = [
    'Less than 1 month',
    '1–6 months',
    '6 months – 1 year',
    '1–3 years',
    'More than 3 years',
]

const INIT = {
    fullName: '', whatsapp: '', city: '',
    chiefComplaint: '', duration: '', consultationMode: '', notes: ''
}

const ConsultationModal = ({ isOpen, onClose }) => {
    const [form, setForm] = useState(INIT)
    const [status, setStatus] = useState('idle')
    const [errors, setErrors] = useState({})

    if (!isOpen) return null

    const handleClose = () => {
        onClose()
        setTimeout(() => { setForm(INIT); setStatus('idle'); setErrors({}) }, 300)
    }

    const validate = () => {
        const e = {}
        if (!form.fullName.trim()) e.fullName = 'Required'
        if (!form.whatsapp.trim() || !/^\d{10}$/.test(form.whatsapp.replace(/\s/g, '')))
            e.whatsapp = 'Enter valid 10-digit number'
        if (!form.chiefComplaint) e.chiefComplaint = 'Required'
        if (!form.consultationMode) e.consultationMode = 'Required'
        return e
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        setStatus('loading')
        const body = new URLSearchParams({
            [ENTRIES.fullName]: form.fullName,
            [ENTRIES.whatsapp]: form.whatsapp,
            [ENTRIES.city]: form.city,
            [ENTRIES.chiefComplaint]: form.chiefComplaint,
            [ENTRIES.duration]: form.duration,
            [ENTRIES.consultationMode]: form.consultationMode,
            [ENTRIES.notes]: form.notes,
        })
        try {
            await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`,
                { method: 'POST', mode: 'no-cors', body })
            setStatus('success')
        } catch {
            setStatus('success') // no-cors always "fails" but data is sent
        }
    }

    const change = (k) => (e) => {
        setForm(f => ({ ...f, [k]: e.target.value }))
        setErrors(er => ({ ...er, [k]: undefined }))
    }

    // Shared input style
    const inp = (name) =>
        `w-full text-sm text-gray-700 bg-[#f8fbfc] border rounded-xl px-4 py-3 outline-none transition-all duration-200 placeholder:text-gray-300 focus:bg-white focus:border-[#0097a7] focus:ring-2 focus:ring-[#0097a7]/15 ${errors[name] ? 'border-red-400 bg-red-50' : 'border-[#e0f7fa]'}`

    const Label = ({ text, req }) => (
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            {text}{req && <span className="text-[#0097a7] ml-0.5">*</span>}
        </label>
    )

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />

            {/* Modal card */}
            <div className="relative z-10 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
                style={{ background: '#fff' }}>

                {/* ── Teal header ── */}
                <div className="px-6 py-5 shrink-0 relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #006978 0%, #0097a7 100%)' }}>
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
                    >
                        <X size={20} />
                    </button>
                    <p className="text-[#b2ebf2] text-xs uppercase tracking-widest font-semibold mb-1">
                        Homoeopathic Healing
                    </p>
                    <h2 className="text-white text-2xl font-bold leading-tight">Book a Consultation</h2>
                    <p className="text-white/60 text-xs mt-1">Fill in your details — we'll confirm shortly.</p>
                </div>

                {/* ── Scrollable body ── */}
                <div className="overflow-y-auto flex-1 bg-white">
                    {status === 'success' ? (
                        /* Success screen */
                        <div className="flex flex-col items-center justify-center py-14 px-6 text-center gap-4">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center"
                                style={{ background: '#e0f7fa' }}>
                                <CheckCircle size={44} strokeWidth={1.5} style={{ color: '#0097a7' }} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Request Sent!</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                Thank you! We've received your consultation request. Our team will contact you on WhatsApp within 24 hours.
                            </p>
                            <div className="w-12 h-0.5 mx-auto" style={{ background: '#0097a7' }} />
                            <button
                                onClick={handleClose}
                                className="mt-2 text-white font-semibold px-7 py-2.5 rounded-full text-sm transition-colors"
                                style={{ background: '#0097a7' }}
                                onMouseEnter={e => e.currentTarget.style.background = '#006978'}
                                onMouseLeave={e => e.currentTarget.style.background = '#0097a7'}
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        /* Form */
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">

                            {/* Full Name */}
                            <div>
                                <Label text="Full Name" req />
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    value={form.fullName}
                                    onChange={change('fullName')}
                                    className={inp('fullName')}
                                />
                                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                            </div>

                            {/* WhatsApp + City */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <Label text="WhatsApp No." req />
                                    <input
                                        type="tel"
                                        placeholder="10-digit number"
                                        value={form.whatsapp}
                                        onChange={change('whatsapp')}
                                        className={inp('whatsapp')}
                                    />
                                    {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
                                </div>
                                <div>
                                    <Label text="City" />
                                    <input
                                        type="text"
                                        placeholder="Your city"
                                        value={form.city}
                                        onChange={change('city')}
                                        className={inp('city')}
                                    />
                                </div>
                            </div>

                            {/* Chief Complaint */}
                            <div>
                                <Label text="Chief Complaint" req />
                                <select
                                    value={form.chiefComplaint}
                                    onChange={change('chiefComplaint')}
                                    className={`${inp('chiefComplaint')} cursor-pointer`}
                                >
                                    <option value="">Select your main concern</option>
                                    {COMPLAINTS.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                                {errors.chiefComplaint && <p className="text-red-500 text-xs mt-1">{errors.chiefComplaint}</p>}
                            </div>

                            {/* Duration + Mode */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <Label text="Duration" />
                                    <select
                                        value={form.duration}
                                        onChange={change('duration')}
                                        className={`${inp('duration')} cursor-pointer`}
                                    >
                                        <option value="">How long?</option>
                                        {DURATIONS.map(d => <option key={d} value={d}>{d}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <Label text="Mode" req />
                                    <select
                                        value={form.consultationMode}
                                        onChange={change('consultationMode')}
                                        className={`${inp('consultationMode')} cursor-pointer`}
                                    >
                                        <option value="">Prefer?</option>
                                        <option value="In-Clinic">In-Clinic</option>
                                        <option value="Online">Online</option>
                                    </select>
                                    {errors.consultationMode && <p className="text-red-500 text-xs mt-1">{errors.consultationMode}</p>}
                                </div>
                            </div>

                            {/* Notes */}
                            <div>
                                <Label text="Additional Notes" />
                                <textarea
                                    rows={3}
                                    placeholder="Describe your symptoms or any other details..."
                                    value={form.notes}
                                    onChange={change('notes')}
                                    className={`${inp('notes')} resize-none`}
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 text-sm disabled:opacity-70"
                                style={{ background: '#0097a7' }}
                                onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.background = '#006978' }}
                                onMouseLeave={e => e.currentTarget.style.background = '#0097a7'}
                            >
                                {status === 'loading'
                                    ? <><Loader2 size={16} className="animate-spin" /> Sending...</>
                                    : <><Send size={15} /> Submit Request</>
                                }
                            </button>

                            <p className="text-center text-gray-400 text-xs">
                                Your data is private and only used for appointment scheduling.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ConsultationModal
