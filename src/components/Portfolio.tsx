"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Agriguard",
    description: "A full-featured online agriculture service provider model, which provides the services related to agriculture in online mode.",
    image: "/images/agriguard.png",
    url: "https://agri-guard-1ibm.vercel.app/",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Royal Cards Studio",
    description: "A website provides online card booking and home delivery features.",
    image: "/images/cards.png",
    url: "https://royal-cards-studio.vercel.app/",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Rajan Carpenters and Interior Design",
    description: "A website for a carpenter shop named as Rajan Carpenters and Interior Design.",
    image: "/images/carpenter.png",
    url: "https://rajancarpenters.netlify.app/",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Aditya Ojha Portfolio",
    description: "Property listing website with advanced search filters and virtual tour functionality.",
    image: "/images/Aditya.png",
    url: "https://aditya231356.github.io/Aditya-Portfolio/",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Market Nest",
    description: "This website provides the online platform, where the seller can least and sell and buyer can purchase the products",
    image: "/images/market.png",
    url: "https://market-nest-kappa.vercel.app/",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "CINEVERSE",
    description: "A website provides the place where the user can see the tailor of movies at one place of multiple types of movies",
    image: "/images/cine.png",
    url: "https://cineverse-movie-platform.vercel.app/",
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Corporate Website",
    description: "Premium corporate website with brand-focused design and lead generation capabilities.",
    image: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
    url: null,
    color: "from-cyan-500 to-blue-600",
  },
];

export default function Portfolio() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-bg border border-slate-800 text-sm text-primary font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Portfolio
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mt-4 mb-4 md:mb-6">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-card-bg/50 border border-slate-800 overflow-hidden card-glow hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm relative"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300 z-0`} />
              
              {/* Image container */}
              <div className={`h-40 md:h-48 relative z-10 overflow-hidden ${project.image.startsWith('/') ? '' : project.image} flex items-center justify-center`}>
                {project.image.startsWith('/') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-slate-600 text-4xl font-bold opacity-30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-heading font-semibold mb-3 text-slate-50 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>
                {project.url ? (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group/link"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-slate-500 font-medium cursor-not-allowed">
                    Coming Soon
                    <ArrowUpRight className="w-4 h-4" />
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
