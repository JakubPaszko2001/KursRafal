import React from "react";
import "./index.css";

// Import all the section components
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhatYouGet from "./components/WhatYouGet";
import WhyItWorks from "./components/WhyItWorks";
import Purchase from "./components/Purchase";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const year = new Date().getFullYear();

  // The purchase handler function remains in the main App component
  // and is passed down to the Purchase component as a prop.
  const handleBuy = (plan) => {
    alert(`Wybrano: ${plan}. Tutaj można podłączyć system płatności.`);
    // Example: window.location.href = '/checkout';
  };

  return (
    <div className="bg-[#0f1222] text-white antialiased">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhatYouGet />
        <WhyItWorks />
        <Purchase handleBuy={handleBuy} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer year={year} />
    </div>
  );
}