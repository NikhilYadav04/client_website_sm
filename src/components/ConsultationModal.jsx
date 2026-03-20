import React, { useState } from 'react'
import { X, CheckCircle, Loader2, Send } from 'lucide-react'

const FORM_ID = 'YOUR_GOOGLE_FORM_ID_HERE'
const ENTRIES = {
    fullName: 'entry.000000001',
    phone: 'entry.000000002',
    problem: 'entry.000000003',
    preferredTime: 'entry.000000004',
    callType: 'entry.000000005',
    notes: 'entry.000000006',
}

const CALL_TYPES = [
    { value: 'Normal Call', label: '📞 Normal Call' },
    { value: 'WhatsApp Call', label: '💬 WhatsApp Call' },
    { value: 'Audio Call', label: '🎙️ Audio Call' },
    { value: 'Video Call', label: '📹 Video Call' },
]

const INIT = {
    fullName: '', phone: '', problem: '',
    preferredTime: '', callType: '', notes: ''
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
        if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, '')))
            e.phone = 'Enter valid 10-digit number'
        if (!form.problem.trim()) e.problem = 'Please describe your problem'
        if (!form.callType) e.callType = 'Please select a call type'
        return e
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        setStatus('loading')
        const body = new URLSearchParams({
            [ENTRIES.fullName]: form.fullName,
            [ENTRIES.phone]: form.phone,
            [ENTRIES.problem]: form.problem,
            [ENTRIES.preferredTime]: form.preferredTime,
            [ENTRIES.callType]: form.callType,
            [ENTRIES.notes]: form.notes,
        })
        try {
            await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`,
                { method: 'POST', mode: 'no-cors', body })
            setStatus('success')
        } catch {
            setStatus('success')
        }
    }

    const change = (k) => (e) => {
        setForm(f => ({ ...f, [k]: e.target.value }))
        setErrors(er => ({ ...er, [k]: undefined }))
    }

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
                        Advanced Homeopathy
                    </p>
                    <h2 className="text-white text-2xl font-bold leading-tight">Book Appointment</h2>
                    <p className="text-white/60 text-xs mt-1">Fill in your details — Dr. Smrity will confirm shortly.</p>
                </div>

                {/* ── Scrollable body ── */}
                <div className="overflow-y-auto flex-1 bg-white">
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-14 px-6 text-center gap-4">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center"
                                style={{ background: '#e0f7fa' }}>
                                <CheckCircle size={44} strokeWidth={1.5} style={{ color: '#0097a7' }} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Request Sent!</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                Thank you! We've received your appointment request. Dr. Smrity's team will contact you on WhatsApp/call within 24 hours.
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

                            {/* Phone / WhatsApp */}
                            <div>
                                <Label text="Phone / WhatsApp" req />
                                <input
                                    type="tel"
                                    placeholder="10-digit mobile number"
                                    value={form.phone}
                                    onChange={change('phone')}
                                    className={inp('phone')}
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>

                            {/* Problem */}
                            <div>
                                <Label text="Problem / Chief Complaint" req />
                                <textarea
                                    rows={3}
                                    placeholder="Describe your main health concern or symptoms..."
                                    value={form.problem}
                                    onChange={change('problem')}
                                    className={`${inp('problem')} resize-none`}
                                />
                                {errors.problem && <p className="text-red-500 text-xs mt-1">{errors.problem}</p>}
                            </div>

                            {/* Preferred Time */}
                            <div>
                                <Label text="Preferred Time / Date" />
                                <input
                                    type="text"
                                    placeholder="e.g. Weekday evenings, Saturday morning..."
                                    value={form.preferredTime}
                                    onChange={change('preferredTime')}
                                    className={inp('preferredTime')}
                                />
                            </div>

                            {/* Call Type */}
                            <div>
                                <Label text="Preferred Call Type" req />
                                <div className="grid grid-cols-2 gap-2 mt-1">
                                    {CALL_TYPES.map(ct => (
                                        <button
                                            key={ct.value}
                                            type="button"
                                            onClick={() => {
                                                setForm(f => ({ ...f, callType: ct.value }))
                                                setErrors(er => ({ ...er, callType: undefined }))
                                            }}
                                            className="py-2.5 px-3 rounded-xl text-xs font-semibold text-left transition-all duration-150"
                                            style={
                                                form.callType === ct.value
                                                    ? { background: '#0097a7', color: '#fff', border: '2px solid #0097a7' }
                                                    : { background: '#f8fbfc', color: '#555', border: '1px solid #e0f7fa' }
                                            }
                                        >
                                            {ct.label}
                                        </button>
                                    ))}
                                </div>
                                {errors.callType && <p className="text-red-500 text-xs mt-1">{errors.callType}</p>}
                            </div>

                            {/* Additional Notes */}
                            <div>
                                <Label text="Additional Notes" />
                                <textarea
                                    rows={2}
                                    placeholder="Any other details you'd like to share..."
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
                                    : <><Send size={15} /> Submit Appointment Request</>
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
