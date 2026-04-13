import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, ChevronRight } from 'lucide-react'
import ConsultationModal from './ConsultationModal'
import { diseaseCategories, homeopathyNavItems } from '../data/diseasesData'

const PHONE = '+91 93219 53605'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
    const [mobileDiseaseOpen, setMobileDiseaseOpen] = useState(false)
    const [aboutOpen, setAboutOpen] = useState(false)
    const [diseaseOpen, setDiseaseOpen] = useState(false)
    const [hoveredCat, setHoveredCat] = useState(diseaseCategories[0].name)

    const aboutTimer = useRef(null)
    const diseaseTimer = useRef(null)
    const location = useLocation()

    useEffect(() => {
        setMenuOpen(false)
        setMobileAboutOpen(false)
        setMobileDiseaseOpen(false)
        setAboutOpen(false)
        setDiseaseOpen(false)
    }, [location.pathname])

    const openAbout = () => { clearTimeout(aboutTimer.current); setAboutOpen(true) }
    const closeAbout = () => { aboutTimer.current = setTimeout(() => setAboutOpen(false), 120) }

    const openDisease = () => { clearTimeout(diseaseTimer.current); setDiseaseOpen(true) }
    const closeDisease = () => { diseaseTimer.current = setTimeout(() => setDiseaseOpen(false), 120) }

    // Always white — no transparent mode
    const navColor = 'text-[#333333] hover:text-[#0097a7]'
    const activeColor = 'text-[#0097a7]'
    const linkBase = 'text-sm font-semibold transition-colors duration-200'

    return (
        <>
            <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

                    {/* Logo — text only */}
                    <NavLink to="/" className="shrink-0 select-none">
                        <span className="text-2xl font-black tracking-tight" style={{ color: '#006978' }}>Dr. Smrity Joshi</span>
                    </NavLink>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-7">

                        <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? activeColor : navColor}`}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `${linkBase} ${isActive ? activeColor : navColor}`}>About Us</NavLink>

                        {/* ──── About Homeopathy Dropdown ──── */}
                        <div
                            className="relative"
                            onMouseEnter={openAbout}
                            onMouseLeave={closeAbout}
                        >
                            <button className={`${linkBase} ${navColor} flex items-center gap-1`}>
                                About Homoeopathy
                                <ChevronDown size={14} className={`transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Invisible bridge fills gap between button and panel */}
                            <div className="absolute top-full left-0 w-full h-2" />

                            {aboutOpen && (
                                <div className="nav-dropdown animate-slide-down" style={{ top: 'calc(100% + 8px)' }}>
                                    {homeopathyNavItems.map(item => (
                                        <Link key={item.slug} to={`/homeopathy/${item.slug}`} onClick={() => setAboutOpen(false)}>
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ──── Diseases Two-Panel Flyout ──── */}
                        <div
                            className="relative"
                            onMouseEnter={openDisease}
                            onMouseLeave={closeDisease}
                        >
                            <button className={`${linkBase} ${navColor} flex items-center gap-1`}>
                                Diseases
                                <ChevronDown size={14} className={`transition-transform duration-200 ${diseaseOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Invisible bridge */}
                            <div className="absolute top-full left-0 w-full h-2" />

                            {diseaseOpen && (
                                <div
                                    className="animate-slide-down"
                                    style={{
                                        position: 'absolute',
                                        top: 'calc(100% + 8px)',
                                        left: '-20px',
                                        display: 'flex',
                                        background: '#fff',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: '10px',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.13)',
                                        zIndex: 200,
                                        minWidth: '500px',
                                    }}
                                >
                                    {/* LEFT panel — category list */}
                                    <div style={{ width: '220px', borderRight: '1px solid #f0f0f0', padding: '10px 0', flexShrink: 0 }}>
                                        {diseaseCategories.map(cat => (
                                            <div
                                                key={cat.name}
                                                onMouseEnter={() => setHoveredCat(cat.name)}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    padding: '10px 18px',
                                                    cursor: 'default',
                                                    backgroundColor: hoveredCat === cat.name ? '#e0f7fa' : 'transparent',
                                                    color: hoveredCat === cat.name ? '#0097a7' : '#444',
                                                    fontWeight: hoveredCat === cat.name ? 700 : 500,
                                                    fontSize: '0.875rem',
                                                    transition: 'all 0.15s',
                                                }}
                                            >
                                                {cat.name}
                                                <ChevronRight size={14} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* RIGHT panel — disease links for hovered category */}
                                    <div style={{ flex: 1, padding: '14px 6px' }}>
                                        <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0097a7', padding: '0 12px 8px', borderBottom: '1px solid #f0f0f0', marginBottom: '6px' }}>
                                            {hoveredCat}
                                        </p>
                                        <div style={{ columns: diseaseCategories.find(c => c.name === hoveredCat)?.diseases.length > 5 ? 2 : 1 }}>
                                            {(diseaseCategories.find(c => c.name === hoveredCat)?.diseases || []).map(d => (
                                                <Link
                                                    key={d.slug}
                                                    to={`/diseases/${d.slug}`}
                                                    onClick={() => setDiseaseOpen(false)}
                                                    style={{
                                                        display: 'block',
                                                        padding: '7px 12px',
                                                        fontSize: '0.85rem',
                                                        color: '#555',
                                                        fontWeight: 500,
                                                        transition: 'color 0.15s, padding-left 0.15s',
                                                        textDecoration: 'none',
                                                        breakInside: 'avoid',
                                                        whiteSpace: 'nowrap',
                                                    }}
                                                    onMouseEnter={e => { e.currentTarget.style.color = '#0097a7'; e.currentTarget.style.paddingLeft = '18px' }}
                                                    onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.paddingLeft = '12px' }}
                                                >
                                                    {d.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <NavLink to="/testimonials" className={({ isActive }) => `${linkBase} ${isActive ? activeColor : navColor}`}>Testimonials</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? activeColor : navColor}`}>Contact</NavLink>
                    </nav>

                    {/* Phone + CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a href={`tel:${PHONE.replace(/\s/g, '')}`}
                            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#0097a7] transition-colors">
                            <Phone size={14} />{PHONE}
                        </a>
                        <button
                            onClick={() => setModalOpen(true)}
                            className="bg-[#0097a7] hover:bg-[#006978] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
                        >
                            Book Consultation
                        </button>
                    </div>

                    {/* Hamburger */}
                    <button onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden p-2 rounded-lg text-gray-700">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* ── Mobile Drawer ── */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 bg-white pt-20 overflow-y-auto">
                    <nav className="flex flex-col px-6 py-6">
                        <MobileLink to="/" label="Home" />
                        <MobileLink to="/about" label="About Us" />

                        {/* Mobile accordion: About Homeopathy */}
                        <MobileAccordion
                            label="About Homoeopathy"
                            open={mobileAboutOpen}
                            onToggle={() => setMobileAboutOpen(o => !o)}
                        >
                            {homeopathyNavItems.map(item => (
                                <Link key={item.slug} to={`/homeopathy/${item.slug}`}
                                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#0097a7]">
                                    {item.label}
                                </Link>
                            ))}
                        </MobileAccordion>

                        {/* Mobile accordion: Diseases */}
                        <MobileAccordion
                            label="Diseases"
                            open={mobileDiseaseOpen}
                            onToggle={() => setMobileDiseaseOpen(o => !o)}
                        >
                            {diseaseCategories.map(cat => (
                                <div key={cat.name} className="px-4 pt-3 pb-1">
                                    <p className="text-xs font-bold text-[#0097a7] uppercase tracking-wider mb-1">{cat.name}</p>
                                    {cat.diseases.map(d => (
                                        <Link key={d.slug} to={`/diseases/${d.slug}`}
                                            className="block py-1.5 text-sm text-gray-600 hover:text-[#0097a7]">
                                            {d.label}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </MobileAccordion>

                        <MobileLink to="/testimonials" label="Testimonials" />
                        <MobileLink to="/contact" label="Contact" />

                        <div className="mt-6 flex flex-col gap-3">
                            <button onClick={() => { setModalOpen(true); setMenuOpen(false) }}
                                className="w-full bg-[#0097a7] text-white font-semibold py-3 rounded-full">
                                Book Consultation
                            </button>
                            <a href={`tel:${PHONE.replace(/\s/g, '')}`}
                                className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-600 font-medium py-3 rounded-full">
                                <Phone size={14} /> {PHONE}
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </>
    )
}

const MobileLink = ({ to, label }) => (
    <NavLink to={to} end={to === '/'}
        className={({ isActive }) =>
            `block py-4 border-b border-gray-100 font-semibold transition-colors ${isActive ? 'text-[#0097a7]' : 'text-gray-800 hover:text-[#0097a7]'}`
        }>
        {label}
    </NavLink>
)

const MobileAccordion = ({ label, open, onToggle, children }) => (
    <div>
        <button onClick={onToggle}
            className="w-full flex items-center justify-between py-4 border-b border-gray-100 font-semibold text-gray-800">
            {label}
            <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
            <div className="bg-[#f5f9fa] rounded-lg my-1 divide-y divide-gray-100">
                {children}
            </div>
        )}
    </div>
)

export default Navbar
