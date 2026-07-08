"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export default function ProjectCatalog() {
    const projects = [
        {
            id: 1,
            name: "Modern Slate Shingles",
            details: "3,200 sq ft • from $18,500",
            image: "/images/modern-slate-shingle.png",
        },
        {
            id: 2,
            name: "Classic Composite Tile",
            details: "2,400 sq ft • from $12,400",
            image: "/images/classic-composite-tiles.png",
        },
        {
            id: 3,
            name: "Standing Seam Metal",
            details: "2,800 sq ft • from $16,800",
            image: "/images/standing-seam-metal.png",
        },
        {
            id: 4,
            name: "Premium Asphalt Shake",
            details: "3,500 sq ft • from $14,900",
            image: "/images/premium-asphalt.png",
        },
    ];

    return (
        <section id="projects" className="w-full px-4 md:px-8 py-10 md:py-16">
            <div className="mx-auto max-w-7xl rounded-[2rem] md:rounded-[2.5rem] bg-surface p-6 md:p-12 shadow-sm">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 md:pb-10 border-b border-secondary/20">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight">
                            Recent Projects &<br />Completed Roofs
                        </h2>
                    </div>
                    <div className="max-w-xs md:text-right">
                        <p className="text-xs md:text-sm text-secondary font-semibold leading-relaxed">
                            We construct custom roofing solutions designed for modern thermal efficiency and extreme weather resilience.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8 md:pt-10">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-sm bg-whiteCard border border-secondary/5"
                        >
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            <div className="absolute bottom-3 left-3 right-3 z-10">
                                <div className="rounded-xl bg-accent/90 backdrop-blur-md px-4 py-3 border border-whiteCard/10 shadow-md">
                                    <h3 className="text-whiteCard text-xs md:text-sm font-bold truncate">
                                        {project.name}
                                    </h3>
                                    <p className="text-[10px] md:text-xs text-secondary mt-0.5 font-medium">
                                        {project.details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-8 md:pt-10 border-t border-secondary/20 mt-8 md:mt-10">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-primary text-whiteCard text-xs md:text-sm font-semibold tracking-wide px-6 py-3 transition-colors duration-200 group"
                    >
                        <span>View All Projects</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <div className="flex items-center gap-2.5">
                        <button
                            className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center bg-whiteCard hover:bg-[#F4F4F5] text-primary transition-colors focus:outline-none"
                            aria-label="Previous project page"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center bg-whiteCard hover:bg-[#F4F4F5] text-primary transition-colors focus:outline-none"
                            aria-label="Next project page"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
