"use client";

import React from "react";
import Image from "next/image";

export default function ProcessVisual() {
    return (
        <section className="w-full px-6 md:px-8 py-8 md:py-12 max-w-6xl mx-auto">
            <div className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] rounded-[2rem] overflow-hidden group shadow-sm border border-secondary/10">

                <Image
                    src="/images/weather-protection.jpg"
                    alt="Close-up of newly installed severe-weather resistant shingles on residential roof"
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent transition-opacity duration-300 group-hover:from-primary/90" />

                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 z-10 max-w-lg space-y-2">

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-whiteCard tracking-tight leading-tight">
                        Precision Built. Engineered for Severe Weather Protection.
                    </h2>
                </div>

            </div>
        </section>
    );
}
