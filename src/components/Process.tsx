"use client";

import { MessageSquare, PenTool, Code, CheckCircle, Rocket, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FloatingTechIcons from "./FloatingTechIcons";

const steps = [
  {
    icon: MessageSquare,
    title: "Requirement Discussion",
    description: "We start by understanding your business goals, target audience, and project requirements through detailed consultations.",
  },
  {
    icon: PenTool,
    title: "Wireframe & Design",
    description: "Our design team creates wireframes and visual designs that align with your brand and user experience goals.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Our developers build your website using modern technologies ensuring optimal performance and scalability.",
  },
  {
    icon: CheckCircle,
    title: "Testing",
    description: "We conduct thorough testing across devices and browsers to ensure everything works perfectly.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "After your approval, we launch your website and provide ongoing support to ensure continued success.",
  },
];

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function Process() {
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

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-card-bg relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-48 h-48 md:w-64 md:h-64 bg-secondary/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 md:w-64 md:h-64 bg-accent/10 rounded-full blur-3xl float-animation-reverse" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 right-1/4 w-3 h-3 bg-secondary/40 rounded-full float-animation" />
      <div className="absolute bottom-30 left-20 w-2 h-2 bg-primary/50 rounded-full float-animation-reverse" />
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-accent/30 rounded-full float-animation" style={{ animationDelay: "1s" }} />

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mt-3 md:mt-4 mb-4 md:mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-400 max-w-xl md:max-w-2xl mx-auto">
            Our proven process ensures every project is delivered successfully, on time, and exceeds your expectations.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step card */}
                <div className="group relative p-5 md:p-6 rounded-2xl bg-background/80 border border-slate-700/50 card-glow hover:-translate-y-2 transition-all duration-300 h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 left-5 md:left-6 w-7 h-7 md:w-8 md:h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-4 mt-3 md:mt-4 group-hover:gradient-bg transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base md:text-lg font-heading font-semibold mb-2 md:mb-3 text-slate-50 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 md:line-clamp-none">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 md:-right-4 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-card-bg border-2 border-primary/50 items-center justify-center z-10 group-hover:scale-110 transition-transform">
                    <ArrowRightIcon className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 md:mt-16 text-center transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-xl gradient-bg text-white font-semibold btn-glow group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

