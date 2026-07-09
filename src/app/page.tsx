import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import FootballJersey from "@/components/FootballJersey";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <FootballJersey />
      <WhyChooseUs />
      <Portfolio />
      <HowItWorks />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}