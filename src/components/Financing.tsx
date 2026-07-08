"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck, DollarSign, FileSpreadsheet, Percent } from "lucide-react";

export default function Financing() {
    const options = [
        {
            id: 1,
            title: "Insurance Claims Assistance",
            description: "We work directly with your homeowner's insurance company, managing the paperwork and inspections to ensure your claim is fully approved.",
            isDark: false,
            icon: <FileSpreadsheet className="w-4.5 h-4.5" />,
        },
        {
            id: 2,
            title: "Flexible Payment Plans",
            description: "We offer zero-down options and low-APR installment structures, enabling you to spread the cost of your replacement over monthly terms.",
            isDark: true,
            icon: <DollarSign className="w-4.5 h-4.5" />,
        },
        {
            id: 3,
            title: "Free Damage Assessment",
            description: "Receive a professional, zero-obligation drone and physical roof inspection complete with a high-resolution damage report.",
            isDark: false,
            icon: <ShieldCheck className="w-4.5 h-4.5" />,
        },
        {
            id: 4,
            title: "100% Interest-Free Financing",
            description: "Take advantage of 12-month interest-free financing options for eligible projects, letting you secure your roof now and pay over time.",
            isDark: true,
            icon: <Percent className="w-4.5 h-4.5" />,
        },
    ];

    return (
        <section id="financing" className="w-full px-6 md:px-8 py-12 md:py-20 max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight">
                    Payment & Financing Options
                </h2>
                <p className="text-sm md:text-base text-secondary font-medium max-w-xl mx-auto leading-relaxed">
                    We believe high-quality roofing should be accessible. Choose from our various stress-free funding methods.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {options.map((option) => (
                    <div
                        key={option.id}
                        className={`relative flex flex-col justify-between p-6 md:p-7 rounded-2xl min-h-[220px] md:min-h-[250px] transition-all duration-300 transform hover:-translate-y-1 shadow-sm border ${option.isDark
                            ? "bg-accent text-whiteCard border-whiteCard/5 hover:bg-[#1C1E29]"
                            : "bg-whiteCard text-primary border-secondary/10 hover:bg-[#FAF9F9]"
                            } group`}
                    >
                        <div className="space-y-4">
                            <h3 className="text-base md:text-lg font-bold tracking-tight">
                                {option.title}
                            </h3>
                            <p
                                className={`text-xs md:text-sm leading-relaxed ${option.isDark ? "text-secondary" : "text-secondary"
                                    }`}
                            >
                                {option.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 mt-auto">
                            <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center ${option.isDark ? "bg-whiteCard/10 text-whiteCard" : "bg-surface text-primary"
                                    }`}
                            >
                                {option.icon}
                            </div>

                            <div
                                className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 ${option.isDark
                                    ? "bg-whiteCard text-primary"
                                    : "bg-accent text-whiteCard"
                                    }`}
                            >
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
