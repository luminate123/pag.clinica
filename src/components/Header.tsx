"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Instagram, Facebook, Youtube, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
        {/* Top Bar - Contact Info */}
        <div className="bg-[#1a1a1a] text-white py-2 hidden md:block">
            <div className="container mx-auto px-6 flex justify-between items-center text-xs tracking-widest uppercase">
                <div className="flex items-center space-x-6">
                    <span className="flex items-center gap-2"><Phone className="w-3 h-3 text-[#D4AF37]" /> (01) 448 36 00</span>
                    <span className="flex items-center gap-2"><Mail className="w-3 h-3 text-[#D4AF37]" /> contacto@clinica.com</span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:text-[#D4AF37] transition-colors"><Instagram className="w-3 h-3" /></a>
                    <a href="#" className="hover:text-[#D4AF37] transition-colors"><Facebook className="w-3 h-3" /></a>
                    <a href="#" className="hover:text-[#D4AF37] transition-colors"><Youtube className="w-3 h-3" /></a>
                </div>
            </div>
        </div>

        {/* Main Header */}
        <header className="sticky top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-slate-100 h-20 flex items-center">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex flex-col">
                    <span className="text-2xl font-serif text-slate-900 tracking-wide leading-none">CLÍNICA</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">ESTÉTICA LIMA</span>
                </Link>
                
                {/* Desktop Nav */}
                <nav className="hidden lg:flex space-x-10">
                    <NavLink href="/">Inicio</NavLink>
                    <NavLink href="/servicios">Procedimientos</NavLink>
                    <NavLink href="/promociones">Promociones</NavLink>
                    <NavLink href="/sedes">Sedes</NavLink>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="https://wa.me/123456789" className="px-6 py-2.5 bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#b08d26] transition-colors rounded-sm">
                        Agendar Cita
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden text-slate-900"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
            <div className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden animate-in fade-in slide-in-from-top-10 duration-200">
                <nav className="flex flex-col space-y-6">
                    <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Inicio</MobileNavLink>
                    <MobileNavLink href="/servicios" onClick={() => setIsMenuOpen(false)}>Procedimientos</MobileNavLink>
                    <MobileNavLink href="/promociones" onClick={() => setIsMenuOpen(false)}>Promociones</MobileNavLink>
                    <MobileNavLink href="/sedes" onClick={() => setIsMenuOpen(false)}>Sedes</MobileNavLink>
                    
                    <div className="pt-6 border-t border-slate-100 mt-6">
                        <Link 
                            href="https://wa.me/123456789" 
                            className="block w-full text-center bg-[#D4AF37] text-white py-3 rounded-lg text-sm font-bold uppercase tracking-widest"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Agendar Cita
                        </Link>
                    </div>

                     <div className="flex flex-col gap-4 mt-8 text-slate-500 text-sm">
                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-[#D4AF37]" /> 
                            <span>(01) 448 36 00</span>
                        </div>
                        <div className="flex items-center gap-3">
                             <Mail className="w-4 h-4 text-[#D4AF37]" />
                             <span>contacto@clinica.com</span>
                        </div>
                    </div>
                </nav>
            </div>
        )}
    </>
  );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="text-slate-600 hover:text-[#D4AF37] transition-colors text-xs font-bold uppercase tracking-widest">
            {children}
        </Link>
    )
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
    return (
        <Link 
            href={href} 
            onClick={onClick}
            className="text-xl font-serif text-slate-900 border-b border-slate-50 pb-2 block"
        >
            {children}
        </Link>
    )
}
