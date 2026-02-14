import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div id="about"></div>
      <About />
      <div id="services"></div>
      <Services />
      <div id="portfolio"></div>
      <Portfolio />
      <div id="process"></div>
      <Process />
      <div id="testimonials"></div>
      <Testimonials />
      <div id="pricing"></div>
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
