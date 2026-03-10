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

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built with modern technologies like Next.js, React, and TypeScript for optimal performance.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Full-featured online stores with secure payment gateways, inventory management, and responsive design.",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces that provide exceptional user experiences across all devices.",
    color: "from-orange-500 to-amber-400",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Speed optimization services to ensure your website loads fast and provides smooth user interactions.",
    color: "from-emerald-500 to-green-400",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Comprehensive SEO strategies to improve your visibility in search engines and drive organic traffic.",
    color: "from-indigo-500 to-violet-400",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description: "Tailored solutions built specifically for your unique business requirements and workflows.",
    color: "from-rose-500 to-red-400",
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-card-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl float-animation" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-slate-800 text-sm text-primary font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Services
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mt-4 mb-4 md:mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We offer a comprehensive range of web development services to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-5 md:p-8 rounded-2xl bg-background/50 border border-slate-800 card-glow hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-slate-50 group-hover:gradient-text transition-all">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
