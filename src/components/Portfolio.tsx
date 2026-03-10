"use client";

import { ArrowUpRight, ExternalLink, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FloatingTechIcons from "./FloatingTechIcons";

const projects = [
  {
    title: "Agriguard",
    description: "A full-featured online agriculture service provider model, which provides the services related to agriculture in online mode.",
    image: "/images/agriguard.png",
    url: "https://agri-guard-1ibm.vercel.app/",
    category: "Web App",
  },
  {
    title: "Royal Cards Studio",
    description: "A website provides online card booking and home delivery features.",
    image: "/images/cards.png",
    url: "https://royal-cards-studio.vercel.app/",
    category: "E-commerce",
  },
  {
    title: "Rajan Carpenters",
    description: "A website for a carpenter shop named as Rajan Carpenters and Interior Design.",
    image: "/images/carpenter.png",
    url: "https://rajancarpenters.netlify.app/",
    category: "Business",
  },
  {
    title: "Aditya Ojha Portfolio",
    description: "Property listing website with advanced search filters and virtual tour functionality.",
    image: "/images/Aditya.png",
    url: "https://aditya231356.github.io/Aditya-Portfolio/",
    category: "Portfolio",
  },
  {
    title: "Market Nest",
    description: "This website provides the online platform, where the seller can least and sell and buyer can purchase the products",
    image: "/images/market.png",
    url: "https://market-nest-kappa.vercel.app/",
    category: "Marketplace",
  },
  {
    title: "CINEVERSE",
    description: "A website provides the place where the user can see the tailor of movies at one place of multiple types of movies",
    image: "/images/cine.png",
    url: "https://cineverse-movie-platform.vercel.app/",
    category: "Entertainment",
  },
  {
    title: "Corporate Website",
    description: "Premium corporate website with brand-focused design and lead generation capabilities.",
    image: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
    url: null,
    category: "Coming Soon",
  },
];

export default function Portfolio() {
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
      <div className="absolute top-0 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-secondary/10 rounded-full blur-3xl float-animation-reverse" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/50 rounded-full float-animation" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent/40 rounded-full float-animation-reverse" />
      <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-secondary/50 rounded-full float-animation" style={{ animationDelay: "1s" }} />

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mt-3 md:mt-4 mb-4 md:mb-6">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-400 max-w-xl md:max-w-2xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl bg-card-bg/50 border border-slate-700/50 overflow-hidden card-glow transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image container */}
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                {project.image.startsWith('/') ? (
                  <div className="w-full h-full bg-slate-800">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className={`w-full h-full ${project.image} flex items-center justify-center`}>
                    <span className="text-slate-600 text-3xl md:text-4xl font-bold opacity-30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Category badge */}
                <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-primary/80 backdrop-blur-sm text-xs text-white font-medium">
                  {project.category}
                </div>
                
                {/* View icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 lg:p-6 relative">
                <h3 className="text-base md:text-lg lg:text-xl font-heading font-semibold mb-2 text-slate-50 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-3 md:mb-4 line-clamp-2">
                  {project.description}
                </p>
                {project.url ? (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 md:gap-2 text-primary font-medium text-sm md:text-base hover:gap-3 transition-all group/link"
                  >
                    View Project
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 md:gap-2 text-slate-500 font-medium text-sm md:text-base cursor-not-allowed">
                    Coming Soon
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

