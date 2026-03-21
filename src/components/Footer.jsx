import React from 'react'
import { NavLink } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import logo from '../assets/loo.jpg'

const Footer = () => (
    <footer style={{ backgroundColor: '#006978' }} className="text-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Col 1: Logo + tagline + socials */}
            <div className="space-y-4">
                <img src={logo} alt="Dr. Smrity Joshi — Advanced Homeopathy" className="h-16 w-auto object-contain" />
                <p className="text-white/70 text-sm leading-relaxed">
                    Advanced Homeopathy — treating the root cause safely and naturally for 20+ years.
                </p>
                <div className="flex gap-4 pt-1">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"><Facebook size={20} /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"><Instagram size={20} /></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"><Youtube size={20} /></a>
                </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-2">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
                {[
                    { name: 'Home', path: '/' },
                    { name: 'About Us', path: '/about' },
                    { name: 'Diseases', path: '/diseases' },
                    { name: 'Testimonials', path: '/testimonials' },
                    { name: 'Contact', path: '/contact' },
                ].map((l) => (
                    <NavLink
                        key={l.name}
                        to={l.path}
                        className="block text-sm text-white/70 hover:text-white transition-colors py-0.5"
                    >
                        {l.name}
                    </NavLink>
                ))}
            </div>

            {/* Col 3: Contact */}
            <div className="space-y-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
                <div className="flex items-start gap-3 text-sm text-white/70">
                    <MapPin size={15} className="text-[#b2ebf2] shrink-0 mt-0.5" />
                    <span>Kanjurmarg (East),<br />Mumbai – 400042, Maharashtra</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                    <Phone size={15} className="text-[#b2ebf2] shrink-0" />
                    <a href="tel:+919321953605" className="hover:text-white transition-colors">+91 93219 53605</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                    <Mail size={15} className="text-[#b2ebf2] shrink-0" />
                    <a href="mailto:drsmrityjoshi@gmail.com" className="hover:text-white transition-colors break-all">
                        drsmrityjoshi@gmail.com
                    </a>
                </div>
            </div>

            {/* Col 4: Hours */}
            <div className="space-y-3">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                    <Clock size={14} className="inline mr-2 text-[#b2ebf2]" />
                    Clinic Hours
                </h4>
                <div className="text-sm space-y-1 text-white/70">
                    <p className="text-white/40 uppercase tracking-wider text-xs">Mon – Sat (IST)</p>
                    <p className="text-white font-semibold">10:00 AM – 12:00 PM</p>
                    <p className="text-[#b2ebf2] text-xs font-semibold">— and —</p>
                    <p className="text-white font-semibold">05:30 PM – 08:00 PM</p>
                </div>
                <div className="mt-4 inline-block bg-white/10 text-[#b2ebf2] px-3 py-1 rounded-full text-xs font-semibold">
                    Worldwide Online Consultation
                </div>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
                <p>© {new Date().getFullYear()} Dr. Smrity Joshi — Advanced Homeopathy. All rights reserved.</p>
                <p className="text-center">Legal Disclaimer: Outcomes may vary. Treatments follow AYUSH guidelines.</p>
            </div>
        </div>
    </footer>
)

export default Footer
