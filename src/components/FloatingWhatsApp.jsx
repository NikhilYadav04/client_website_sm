import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WHATSAPP_NUMBER = '919321953605'
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Dr.%20Smrity%2C%20I%20would%20like%20to%20book%20a%20consultation.`

const FloatingWhatsApp = () => {
    const [tooltip, setTooltip] = useState(true)

    return (
        <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-2">
            {/* Tooltip bubble */}
            {tooltip && (
                <div className="relative flex items-center gap-2 bg-white text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-lg"
                    style={{ border: '1px solid #e0f7fa', maxWidth: 180 }}>
                    <button
                        onClick={() => setTooltip(false)}
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center hover:bg-gray-300"
                    >
                        <X size={11} />
                    </button>
                    💬 Chat with us on WhatsApp!
                </div>
            )}

            {/* Main button */}
            <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 hover:scale-110"
                style={{ backgroundColor: '#25D366' }}
            >
                {/* Pulse ring */}
                <span
                    className="absolute inset-0 rounded-full animate-ping opacity-30"
                    style={{ backgroundColor: '#25D366' }}
                />
                <MessageCircle size={30} color="#fff" fill="#fff" />
            </a>
        </div>
    )
}

export default FloatingWhatsApp
