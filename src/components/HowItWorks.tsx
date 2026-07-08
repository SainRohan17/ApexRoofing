"use client";

import React from "react";

export default function HowItWorks() {
    const steps = [
        {
            id: "01",
            title: "Free 21-Point Inspection",
            description: "Our certified local inspectors run a complete physical and high-resolution drone analysis to map structural health, deck strength, and any active leaks.",
        },
        {
            id: "02",
            title: "Exact Proposal & Materials",
            description: "We supply a precise, fixed-price proposal detailing all material options—from composite shingles to standing seam metal—with no surprise fees.",
        },
        {
            id: "03",
            title: "Clean & Rapid Installation",
            description: "Our elite roofing crews strip the old deck, lay down premium waterproof barriers, install the main shingles, and perform a complete magnetic sweep cleanup.",
        },
    ];

    return (
        <section id="how-it-works" className="w-full px-6 md:px-8 py-12 md:py-20 max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight">
                    How It Works
                </h2>
                <p className="text-sm md:text-base text-secondary font-medium max-w-lg mx-auto leading-relaxed">
                    From initial inspection to final thorough cleanup, our streamlined three-step process guarantees stress-free results.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
                {steps.map((step) => (
                    <div key={step.id} className="group space-y-6">

                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-secondary/30 bg-surface/30 text-secondary font-mono text-lg font-bold group-hover:bg-accent group-hover:text-whiteCard group-hover:border-accent transition-all duration-300">
                            {step.id}
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-base md:text-lg font-bold text-primary tracking-tight">
                                {step.title}
                            </h3>
                            <p className="text-xs md:text-sm text-secondary leading-relaxed">
                                {step.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
