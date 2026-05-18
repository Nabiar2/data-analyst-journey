import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LiveClasses from "@/components/LiveClasses";
import LogoStrip from "@/components/LogoStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LiveClasses />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
