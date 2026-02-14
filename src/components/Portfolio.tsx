"use client";

import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Agriguard",
    description: "A full-featured online agriculture service provider model, which provides the services related to agriculture in online mode.",
    image: "/images/agriguard.png",
  },
  {
    title: "SaaS Dashboard",
    description: "Modern analytics dashboard with real-time data visualization and user management features.",
    image: "bg-gradient-to-br from-secondary/20 to-accent/20",
  },
  {
    title: "Healthcare App",
    description: "Patient management system with appointment scheduling and telemedicine integration.",
    image: "bg-gradient-to-br from-accent/20 to-primary/20",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing website with advanced search filters and virtual tour functionality.",
    image: "bg-gradient-to-br from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Food Delivery App",
    description: "Mobile-first food delivery platform with real-time tracking and payment integration.",
    image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
  },
  {
    title: "Corporate Website",
    description: "Premium corporate website with brand-focused design and lead generation capabilities.",
    image: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 lg:py-28 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-card-bg border border-slate-800 overflow-hidden card-glow hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <span className="text-slate-600 text-4xl font-bold opacity-30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3 text-slate-50 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>
                <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
