import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import ValueProp from "@/components/ValueProp";
import WhyAVM from "@/components/WhyAVM";
import Pricing from "@/components/Pricing";
import Experience from "@/components/Experience";
import UseCases from "@/components/UseCases";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoCarousel />
      <ValueProp />
      <WhyAVM />
      <Pricing />
      <Experience />
      <UseCases />
      <TechStack />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
