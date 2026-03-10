"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import ConsultationModal from "./ConsultationModal";
import FloatingTechIcons from "./FloatingTechIcons";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "High-Performance";
  const typingSpeed = 150; // milliseconds per character - slightly faster

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Animated background with mesh gradient */}
      <div className="absolute inset-0 bg-background mesh-gradient">
        {/* Gradient orbs with enhanced animation */}
        <div className="absolute top-1/4 -left-32 w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 bg-primary/20 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-1/4 -right-32 w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 bg-secondary/20 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[500px] lg:w-[600px] h-[400px] md:h-[500px] lg:h-[600px] bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: "1s" }} />
        
        {/* Additional orbs for more depth */}
        <div className="absolute top-1/3 right-1/4 w-48 md:w-56 lg:w-64 h-48 md:h-56 lg:h-64 bg-purple-500/10 rounded-full blur-3xl float-animation hidden sm:block" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-40 md:w-48 lg:w-48 h-40 md:h-48 lg:h-48 bg-cyan-500/10 rounded-full blur-3xl float-animation hidden sm:block" style={{ animationDelay: "4s" }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Tech Icons */}
        <FloatingTechIcons />
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-bg border border-slate-800 mb-8 hover:border-primary/50 transition-colors cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-slate-400">Accepting new projects</span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 leading-tight">
          <span className="text-slate-50">We Build </span>
          <span className="gradient-text">{typedText}</span>
          <span className="inline-block w-[3px] h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 ml-1 align-middle bg-primary animate-pulse" />
          <br />
          <span className="text-slate-50">Websites for Growing Businesses</span>
        </h1>

        {/* Supporting paragraph */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Qentara Technologies is a modern web development agency that creates stunning, fast, and SEO-optimized websites designed to grow your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row w-full max-w-md mx-auto gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-semibold btn-glow overflow-hidden hover:scale-105 transition-transform"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href="https://wa.me/919264231356?text=Hello%20Qentara%20Technologies,%20I%20want%20to%20connect%20with%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-card-bg border border-slate-800 text-slate-50 font-semibold hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 text-emerald-500" />
            WhatsApp Us
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-xl mx-auto">
          <div className="p-6 rounded-2xl bg-card-bg/50 border border-slate-800 backdrop-blur-sm hover:border-primary/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">10+</div>
            <div className="text-sm text-slate-500 mt-1">Projects Completed</div>
          </div>
          <div className="p-6 rounded-2xl bg-card-bg/50 border border-slate-800 backdrop-blur-sm hover:border-primary/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">98%</div>
            <div className="text-sm text-slate-500 mt-1">Client Satisfaction</div>
          </div>
          <div className="p-6 rounded-2xl bg-card-bg/50 border border-slate-800 backdrop-blur-sm hover:border-primary/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">1+</div>
            <div className="text-sm text-slate-500 mt-1">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2 hover:border-primary/50 transition-colors">
          <div className="w-1 h-2 bg-slate-500 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
