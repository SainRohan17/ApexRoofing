"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Zap, Award } from "lucide-react";

export default function WhyChooseUs() {
    const cards = [
        {
            id: 1,
            title: "Premium Materials",
            description: "We source industry-leading asphalt shingle, metal, and slate roofing materials backed by comprehensive lifetime warranties.",
            icon: <Award className="w-5.5 h-5.5 text-whiteCard" />,
        },
        {
            id: 2,
            title: "Fast Response & Turnaround",
            description: "From immediate leak response to complete replacements, most projects are completed within 1 to 2 days.",
            icon: <Zap className="w-5.5 h-5.5 text-whiteCard" />,
        },
        {
            id: 3,
            title: "Licensed & Fully Insured",
            description: "Our certified roofers receive ongoing safety training, and every project is covered by multi-million dollar liability insurance.",
            icon: <ShieldCheck className="w-5.5 h-5.5 text-whiteCard" />,
        },
    ];

    return (
        <section id="why-us" className="w-full px-6 md:px-8 py-12 md:py-20 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-6 space-y-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight">
                            Quality Roofing Built<br />to Stand the Test of Time
                        </h2>
                        <p className="text-sm md:text-base text-secondary font-medium leading-relaxed max-w-lg">
                            We employ precision-engineering standards to build weather-resistant roofs. Our specialized processes ensure that every layer—from decking to venting—functions cohesively.
                        </p>
                    </div>

                    <div className="relative w-full h-[220px] md:h-[280px] rounded-2xl overflow-hidden bg-surface border border-secondary/10 flex items-center justify-center p-4">
                        <Image
                            src="/images/quality-section.png"
                            alt="Quality high-precision residential roofing installation details"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60 pointer-events-none" />
                    </div>
                </div>

                <div className="lg:col-span-6 flex flex-col gap-5">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="flex gap-5 p-5 md:p-6 rounded-2xl bg-accent text-whiteCard hover:bg-[#1C1E29] transition-all duration-300 transform hover:-translate-y-1 shadow-sm border border-whiteCard/5 group"
                        >
                            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-whiteCard/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {card.icon}
                            </div>

                            <div className="space-y-1.5">
                                <h3 className="text-base font-bold text-whiteCard tracking-tight">
                                    {card.title}
                                </h3>
                                <p className="text-xs md:text-sm text-secondary leading-relaxed font-normal">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
