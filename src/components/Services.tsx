"use client";

import { 
  Globe, 
  ShoppingCart, 
  Palette, 
  Gauge, 
  Search,
  Code2,
  Sparkles
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FloatingTechIcons from "./FloatingTechIcons";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built with modern technologies like Next.js, React, and TypeScript for optimal performance.",
    features: ["Next.js", "React", "TypeScript", "Responsive"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Full-featured online stores with secure payment gateways, inventory management, and responsive design.",
    features: ["Payment Gateway", "Inventory", "Admin Panel"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces that provide exceptional user experiences across all devices.",
    features: ["Figma", "Prototyping", "User Research"],
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Speed optimization services to ensure your website loads fast and provides smooth user interactions.",
    features: ["Core Web Vitals", "CDN", "Caching"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Comprehensive SEO strategies to improve your visibility in search engines and drive organic traffic.",
    features: ["On-Page SEO", "Technical SEO", "Analytics"],
  },
  {
    icon: Code2,
    title: "Custom Development",
    description: "Tailored solutions built specifically for your unique business requirements and workflows.",
    features: ["API Integration", "Custom Features", "Scalable"],
  },
];

export default function Services() {
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
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl float-animation-reverse" />
      
      {/* Floating shapes */}
      <div className="absolute top-10 right-1/4 w-3 h-3 bg-primary/40 rounded-full float-animation" />
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-secondary/30 rounded-full float-animation-reverse" />
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-accent/40 rounded-full float-animation" style={{ animationDelay: "1s" }} />

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            Services
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mt-3 md:mt-4 mb-4 md:mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-400 max-w-xl md:max-w-2xl mx-auto">
            We offer a comprehensive range of web development services to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-5 md:p-6 lg:p-8 rounded-2xl bg-background/80 border border-slate-700/50 card-glow transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-4 md:mb-6 group-hover:gradient-bg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-semibold mb-2 md:mb-3 text-slate-50 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-2 py-1 text-xs rounded-md bg-slate-800 text-slate-400 border border-slate-700 group-hover:border-primary/50 group-hover:text-primary transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

