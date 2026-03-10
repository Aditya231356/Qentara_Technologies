"use client";

import { Zap, Search, TrendingUp, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We deliver your projects on time without compromising on quality.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Our websites are built with SEO best practices to rank higher on search engines.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Future-proof solutions that grow with your business needs.",
    color: "from-emerald-400 to-green-500",
  },
];

export default function About() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-bg border border-slate-800 text-sm text-primary font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            About Us
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mt-4 mb-4 md:mb-6">
            Building the Future of <span className="gradient-text">Web Development</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            At Qentara Technologies, we believe in the power of innovation and excellence. 
            Our mission is to help businesses transform their digital presence with cutting-edge 
            web solutions that drive growth and deliver measurable results.
          </p>
        </div>

        {/* Mission statement */}
        <div className="mb-10 md:mb-12 lg:mb-16 p-6 md:p-8 rounded-2xl bg-card-bg/50 border border-slate-800 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-slate-50 group-hover:gradient-text transition-all">Our Mission</h3>
          </div>
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
              className="group p-8 rounded-2xl bg-card-bg/50 border border-slate-800 card-glow hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-slate-50 group-hover:gradient-text transition-all">
                  {item.title}
                </h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
