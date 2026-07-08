"use client";

import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Services", href: "#services" },
        { label: "Why Us", href: "#why-us" },
        { label: "Projects", href: "#projects" },
        { label: "Financing", href: "#financing" },
        { label: "How It Works", href: "#how-it-works" },
    ];

    return (
        <header className="w-full px-4 pt-6 md:pt-8">
            <div className="mx-auto max-w-6xl rounded-full bg-whiteCard border border-[#E4E4E7]/60 px-6 py-3.5 shadow-sm transition-all duration-300">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <span className="font-bold text-lg md:text-xl tracking-tight text-primary transition-colors group-hover:text-accent">
                            Apex<span className="font-medium text-secondary">Roofing</span>
                        </span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8 justify-center flex-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-secondary hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center">
                        <a
                            href="tel:+18005557663"
                            className="flex items-center gap-2 rounded-full bg-accent hover:bg-primary text-whiteCard text-xs font-semibold px-4 py-2 transition-colors duration-200"
                        >
                            <Phone className="w-3.5 h-3.5" />
                            <span>(800) 555-ROOF</span>
                        </a>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-1.5 text-primary hover:text-secondary focus:outline-none transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden mt-3 mx-auto max-w-6xl rounded-2xl bg-whiteCard border border-[#E4E4E7]/60 p-5 shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-top-4">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-medium text-secondary hover:text-primary transition-colors py-1 border-b border-[#F4F4F5]"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="tel:+18005557663"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-primary text-whiteCard text-sm font-semibold py-3 transition-colors duration-200 mt-2"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Call (800) 555-ROOF</span>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
