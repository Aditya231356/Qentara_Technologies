"use client";

import { Zap, Search, TrendingUp } from "lucide-react";

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

export default function About() {
  return (
    <section className="py-20 lg:py-28 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            Building the Future of <span className="gradient-text">Web Development</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            At Qentara Technologies, we believe in the power of innovation and excellence. 
            Our mission is to help businesses transform their digital presence with cutting-edge 
            web solutions that drive growth and deliver measurable results.
          </p>
        </div>

        {/* Mission statement */}
        <div className="mb-16 p-8 rounded-2xl bg-card-bg border border-slate-800">
          <h3 className="text-xl font-heading font-semibold mb-4 text-slate-50">Our Mission</h3>
          <p className="text-slate-400 leading-relaxed">
            To empower businesses with high-performance, scalable, and beautiful websites 
            that not only meet their current needs but also position them for future success. 
            We combine technical expertise with creative innovation to deliver exceptional 
            digital experiences.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card-bg border border-slate-800 card-glow hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-slate-50">
                {item.title}
              </h3>
              <p className="text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
