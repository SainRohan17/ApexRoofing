import React from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessVisual from "../components/ProcessVisual";
import ProjectCatalog from "../components/ProjectCatalog";
import Financing from "../components/Financing";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-pageBg flex flex-col antialiased">
      {/* 1. Header */}
      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Why Us Section */}
      <WhyChooseUs />

      {/* 4. Process Section */}
      <ProcessVisual />

      {/* 5. Catalog Section */}
      <ProjectCatalog />

      {/* 6. Payment Section */}
      <Financing />

      {/* 7. How It Works */}
      <HowItWorks />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
