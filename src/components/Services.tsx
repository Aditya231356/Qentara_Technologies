"use client";

import { 
  Globe, 
  ShoppingCart, 
  Palette, 
  Gauge, 
  Search,
  Code2 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built with modern technologies like Next.js, React, and TypeScript for optimal performance.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Full-featured online stores with secure payment gateways, inventory management, and responsive design.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces that provide exceptional user experiences across all devices.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Speed optimization services to ensure your website loads fast and provides smooth user interactions.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Comprehensive SEO strategies to improve your visibility in search engines and drive organic traffic.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description: "Tailored solutions built specifically for your unique business requirements and workflows.",
  },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-card-bg relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We offer a comprehensive range of web development services to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-background border border-slate-800 card-glow hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:gradient-bg transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-slate-50">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
