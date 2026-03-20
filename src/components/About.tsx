"use client";

import { Zap, Search, TrendingUp, ArrowRight, Shield, Clock, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FloatingTechIcons from "./FloatingTechIcons";

const highlights = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We deliver your projects on time without compromising on quality.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Our websites are built with SEO best practices to rank higher on search engines.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Future-proof solutions that grow with your business needs.",
  },
];

const stats = [
  { icon: Award, value: "10+", label: "Projects Done" },
  { icon: Clock, value: "1+", label: "Years Experience" },
  { icon: Shield, value: "100%", label: "Client Satisfaction" },
];

export default function About() {
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
      className="py-16 md:py-20 lg:py-28 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-secondary/10 rounded-full blur-3xl float-animation-reverse" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full float-animation" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent/30 rounded-full float-animation-reverse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-secondary/20 rounded-full float-animation" style={{ animationDelay: "1.5s" }} />

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium uppercase tracking-wider mb-4">
            About Us
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mt-3 md:mt-4 mb-4 md:mb-6">
            Building the Future of <span className="gradient-text">Web Development</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-400 max-w-xl md:max-w-2xl mx-auto">
            At Qentara Technologies, we believe in the power of innovation and excellence. 
            Our mission is to help businesses transform their digital presence with cutting-edge 
            web solutions that drive growth and deliver measurable results.
          </p>
        </div>

        {/* Stats bar */}
        <div className={`flex flex-wrap justify-center gap-4 md:gap-8 mb-12 md:mb-16 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-card-bg/50 border border-slate-700/50"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-bg flex items-center justify-center">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div className={`mb-10 md:mb-16 p-6 md:p-8 rounded-2xl bg-card-bg/70 border border-slate-700/50 gradient-border transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h3 className="text-lg md:text-xl font-heading font-semibold mb-3 md:mb-4 text-slate-50 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Our Mission
          </h3>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            To empower businesses with high-performance, scalable, and beautiful websites 
            that not only meet their current needs but also position them for future success. 
            We combine technical expertise with creative innovation to deliver exceptional 
            digital experiences that convert visitors into customers.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`group p-6 md:p-8 rounded-2xl bg-card-bg/50 border border-slate-700/50 card-glow transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-bg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-heading font-semibold mb-2 md:mb-3 text-slate-50 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-12 md:mt-16 text-center transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-xl gradient-bg text-white font-semibold btn-glow group hover:shadow-lg hover:shadow-primary/30"
          >
            Get Started
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

