import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero-section";
import Strategies from "./components/Strategies";
import SmartTaxSection from "./components/SmartTax";
import FinancialTax from "./components/Financial-Taxes";
import CoreFeatures from "./components/Core-Features";
import Testimonials from "./components/Testimonials";
import OptimizeTax from "./components/OptimizeTaxes";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="2xl:container px-3">
      <Navbar />
      <HeroSection />
      <Strategies />
      <SmartTaxSection />
      <FinancialTax />
      <CoreFeatures />
      <Testimonials />
      <OptimizeTax />
      <Footer />
    </div>
  );
}
