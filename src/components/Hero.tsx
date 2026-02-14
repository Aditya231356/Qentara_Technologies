"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-bg border border-slate-800 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-slate-400">Accepting new projects</span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 leading-tight">
          <span className="text-slate-50">We Build </span>
          <span className="gradient-text">High-Performance</span>
          <br />
          <span className="text-slate-50">Websites for Growing Businesses</span>
        </h1>

        {/* Supporting paragraph */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Qentara Technologies is a modern web development agency that creates stunning, fast, and SEO-optimized websites designed to grow your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row w-full max-w-md mx-auto gap-4">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-semibold btn-glow overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="https://wa.me/919264231356"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-card-bg border border-slate-800 text-slate-50 font-semibold hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-emerald-500" />
            WhatsApp Us
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-xl mx-auto">
          <div>
            <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">10+</div>
            <div className="text-sm text-slate-500 mt-1">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">98%</div>
            <div className="text-sm text-slate-500 mt-1">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">1+</div>
            <div className="text-sm text-slate-500 mt-1">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-slate-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
