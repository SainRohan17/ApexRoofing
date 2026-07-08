"use client";

import React from "react";
import Image from "next/image";
import Header from "./Header";
import { ArrowUpRight, Shield, Star, Calendar } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="w-full px-4 md:px-8 py-4">
            <div className="mx-auto max-w-7xl rounded-[2rem] md:rounded-[2.5rem] bg-surface pb-12 md:pb-16 shadow-sm overflow-hidden">
                <Header />

                <div className="mx-auto max-w-6xl px-6 md:px-8 mt-8 md:mt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">

                        <div className="lg:col-span-7 flex flex-col justify-between">
                            <div className="space-y-6">


                                <h1 className="text-3xl sm:text-4xl md:text-[44px] leading-[1.1] font-bold text-primary tracking-tight max-w-xl">
                                    Professional Roof Replacement & Repair Done Right
                                </h1>

                                <p className="text-sm md:text-base text-secondary font-medium leading-relaxed max-w-lg">
                                    With premium roofing materials, highly skilled local craftsmen, and a 100% satisfaction guarantee, we build roofs designed to stand the test of time and weather.
                                </p>

                                <div className="pt-2">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-primary text-whiteCard text-xs md:text-sm font-semibold tracking-wide px-7 py-3.5 transition-all duration-200 group shadow-md shadow-accent/10 hover:shadow-accent/20"
                                    >
                                        <span>Get a Free Estimate</span>
                                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 md:gap-6 border-t border-secondary/20 pt-8 mt-8 lg:mt-12">
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-whiteCard flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                                        <Shield className="w-4.5 h-4.5" />
                                    </div>
                                    <div>
                                        <div className="text-xl md:text-2xl font-bold text-primary leading-none">
                                            500+
                                        </div>
                                        <p className="text-[11px] font-semibold text-secondary mt-1">
                                            Roofs Completed
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-whiteCard flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                                        <Calendar className="w-4.5 h-4.5" />
                                    </div>
                                    <div>
                                        <div className="text-xl md:text-2xl font-bold text-primary leading-none">
                                            15+
                                        </div>
                                        <p className="text-[11px] font-semibold text-secondary mt-1">
                                            Years Experience
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-whiteCard flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                                        <Star className="w-4.5 h-4.5" />
                                    </div>
                                    <div>
                                        <div className="text-xl md:text-2xl font-bold text-primary leading-none">
                                            4.9/5
                                        </div>
                                        <p className="text-[11px] font-semibold text-secondary mt-1">
                                            Customer Rating
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="lg:col-span-5 relative min-h-[350px] md:min-h-[480px] rounded-[2rem] overflow-hidden group">
                            <Image
                                src="/images/hero-roofer-working.jpg"
                                alt="Professional residential roofer at work installing high-quality composite shingles"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            <div className="absolute top-4 left-4 right-4 z-10">
                                <div className="rounded-full bg-accent/90 backdrop-blur-md p-1.5 flex items-center justify-between border border-whiteCard/10 shadow-lg">
                                    <a
                                        href="#contact"
                                        className="rounded-full bg-whiteCard text-primary text-[10px] md:text-xs font-bold px-4 py-2 hover:bg-pageBg transition-colors"
                                    >
                                        Free Estimate
                                    </a>
                                    <a
                                        href="tel:+18005557663"
                                        className="text-whiteCard text-[11px] md:text-xs font-bold pr-4 hover:underline"
                                    >
                                        (800) 555-ROOF
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
