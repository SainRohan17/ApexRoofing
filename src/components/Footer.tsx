"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setEmail("");
            }, 3000);
        }
    };

    return (
        <footer id="contact" className="w-full px-4 md:px-8 pb-8 pt-4">
            <div className="mx-auto max-w-7xl rounded-[2rem] bg-accent px-8 md:px-12 py-16 h-auto text-whiteCard">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 pb-8 border-b border-whiteCard/10 lg:items-start">

                    <div className="lg:col-span-4 space-y-6 lg:pt-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                                Ready to Protect<br />Your Home?
                            </h2>
                            <p className="text-xs md:text-sm text-secondary leading-relaxed max-w-sm">
                                Get in touch with ApexRoofing for a prompt, honest, and completely free damage inspection and detailed estimate.
                            </p>
                        </div>

                        <div className="space-y-3 pt-2 text-xs md:text-sm">
                            <a
                                href="tel:+18005557663"
                                className="flex items-center gap-3 text-whiteCard hover:text-secondary transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-whiteCard/5 flex items-center justify-center text-secondary border border-whiteCard/10 flex-shrink-0">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="block text-[10px] text-secondary font-bold leading-none mb-0.5">CALL TODAY</span>
                                    <span className="font-bold">(800) 555-ROOF</span>
                                </div>
                            </a>

                            <a
                                href="mailto:estimates@apexroofing.com"
                                className="flex items-center gap-3 text-whiteCard hover:text-secondary transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-whiteCard/5 flex items-center justify-center text-secondary border border-whiteCard/10 flex-shrink-0">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="block text-[10px] text-secondary font-bold leading-none mb-0.5">EMAIL US</span>
                                    <span className="font-bold">estimates@apexroofing.com</span>
                                </div>
                            </a>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-whiteCard/5 flex items-center justify-center text-secondary border border-whiteCard/10 flex-shrink-0 mt-0.5">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="block text-[10px] text-secondary font-bold leading-none mb-1">OFFICE LOCATION</span>
                                    <span className="text-secondary leading-normal">
                                        1024 Ridge Line Blvd, Suite C<br />Phoenix, AZ 85016
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-center bg-whiteCard/5 p-6 rounded-2xl border border-whiteCard/10 h-auto">
                        <h3 className="text-sm md:text-base font-bold text-whiteCard tracking-tight mb-3">
                            Request a Callback
                        </h3>
                        <p className="text-xs text-secondary leading-relaxed mb-4">
                            Enter your email and one of our licensed estimators will reach out to you within 2 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    required
                                    placeholder="name@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-whiteCard/10 hover:bg-whiteCard/15 focus:bg-whiteCard/20 focus:outline-none focus:ring-1 focus:ring-secondary/40 text-whiteCard text-xs rounded-full px-4 py-3 border border-whiteCard/15 transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitted}
                                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-whiteCard hover:bg-pageBg text-primary text-xs font-bold px-6 py-3 transition-colors duration-200"
                            >
                                {isSubmitted ? (
                                    <>
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                        <span>Inquiry Submitted</span>
                                    </>
                                ) : (
                                    <>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                        <span>Get Free Callback</span>
                                    </>
                                )}
                            </button>

                            <p className="text-[11px] text-secondary/80 text-center mt-2.5">
                                No spam. No obligation.
                            </p>
                        </form>
                    </div>

                    <div className="lg:col-span-3 grid grid-cols-2 gap-6 items-start lg:pt-6">
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Services</h4>
                            <ul className="space-y-2 text-xs text-secondary font-medium">
                                <li><a href="#services" className="hover:text-whiteCard transition-colors">Inspection</a></li>
                                <li><a href="#services" className="hover:text-whiteCard transition-colors">Replacement</a></li>
                                <li><a href="#services" className="hover:text-whiteCard transition-colors">Storm Repairs</a></li>
                                <li><a href="#services" className="hover:text-whiteCard transition-colors">Metal Shingles</a></li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Company</h4>
                            <ul className="space-y-2 text-xs text-secondary font-medium">
                                <li><a href="#why-us" className="hover:text-whiteCard transition-colors">Why Choose Us</a></li>
                                <li><a href="#projects" className="hover:text-whiteCard transition-colors">Our Projects</a></li>
                                <li><a href="#financing" className="hover:text-whiteCard transition-colors">Financing</a></li>
                                <li><a href="#how-it-works" className="hover:text-whiteCard transition-colors">How It Works</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-1 space-y-3 lg:pt-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Follow Us</h4>
                        <div className="flex flex-row lg:flex-col gap-3">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-whiteCard/5 flex items-center justify-center text-secondary border border-whiteCard/10 hover:text-whiteCard hover:bg-whiteCard/10 transition-colors"
                            >
                                <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-whiteCard/5 flex items-center justify-center text-secondary border border-whiteCard/10 hover:text-whiteCard hover:bg-whiteCard/10 transition-colors"
                            >
                                <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-whiteCard/5 flex items-center justify-center text-secondary border border-whiteCard/10 hover:text-whiteCard hover:bg-whiteCard/10 transition-colors"
                            >
                                <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-[11px] md:text-xs text-secondary font-semibold">
                    <div>
                        <p>© {new Date().getFullYear()} ApexRoofing. All rights reserved.</p>
                    </div>
                    <div className="text-center md:text-right space-y-1 text-whiteCard/70">
                        <p>Licensed, Bonded & Insured Residential Contractor #ROC-29384A</p>
                        <p className="text-whiteCard/45">Precision engineered. Constructed to stand the test of time.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
