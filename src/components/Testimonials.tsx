"use client";

import { ExternalLink, Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FloatingTechIcons from "./FloatingTechIcons";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const googleReviewsLink = "https://g.page/r/CUNDrgSt3mZjEBM/review";

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-secondary/10 rounded-full blur-3xl float-animation-reverse" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/50 rounded-full float-animation" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-400/30 rounded-full float-animation-reverse" />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-secondary/50 rounded-full float-animation" style={{ animationDelay: "1s" }} />

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mt-3 md:mt-4 mb-4 md:mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-400 max-w-xl md:max-w-2xl mx-auto">
            Don't just take our word for it. Check out our reviews on Google.
          </p>
        </div>

        {/* Rating Display */}
        <div className={`flex flex-col items-center mb-8 md:mb-12 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${star * 0.1}s` }} />
            ))}
          </div>
          <p className="text-slate-300 text-sm md:text-base font-medium">5.0 Google Rating</p>
          <p className="text-slate-500 text-xs md:text-sm mt-1">Based on client reviews</p>
        </div>

        {/* Google Reviews Link */}
        <div className={`text-center transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <a
            href={googleReviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-xl gradient-bg text-white font-semibold btn-glow hover:scale-105 transition-transform group"
          >
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
            View All Reviews on Google
          </a>
        </div>

        {/* Trust badges */}
        <div className={`mt-10 md:mt-14 flex flex-wrap justify-center items-center gap-4 md:gap-8 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex items-center gap-2 text-slate-500 text-xs md:text-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Trusted by 10+ Clients
          </div>
          <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full" />
          <div className="flex items-center gap-2 text-slate-500 text-xs md:text-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            98% Satisfaction Rate
          </div>
          <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full" />
          <div className="flex items-center gap-2 text-slate-500 text-xs md:text-sm">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "1s" }} />
            1+ Years Experience
          </div>
        </div>
      </div>
    </section>
  );
}

