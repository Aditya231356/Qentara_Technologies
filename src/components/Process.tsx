"use client";

import { MessageSquare, PenTool, Code, CheckCircle, Rocket, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Requirement Discussion",
    description: "We start by understanding your business goals, target audience, and project requirements through detailed consultations.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: PenTool,
    title: "Wireframe & Design",
    description: "Our design team creates wireframes and visual designs that align with your brand and user experience goals.",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Code,
    title: "Development",
    description: "Our developers build your website using modern technologies ensuring optimal performance and scalability.",
    color: "from-emerald-500 to-green-400",
  },
  {
    icon: CheckCircle,
    title: "Testing",
    description: "We conduct thorough testing across devices and browsers to ensure everything works perfectly.",
    color: "from-amber-500 to-orange-400",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "After your approval, we launch your website and provide ongoing support to ensure continued success.",
    color: "from-red-500 to-rose-400",
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-card-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-slate-800 text-sm text-primary font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Our proven process ensures every project is delivered successfully, on time, and exceeds your expectations.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="group p-6 rounded-2xl bg-background/50 border border-slate-800 card-glow hover:-translate-y-2 transition-all duration-300 h-full backdrop-blur-sm relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Step number */}
                    <div className={`absolute -top-3 left-6 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mt-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-heading font-semibold mb-3 text-slate-50 group-hover:gradient-text transition-all">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-slate-700 items-center justify-center z-10 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
