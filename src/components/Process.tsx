"use client";

import { MessageSquare, PenTool, Code, CheckCircle, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Requirement Discussion",
    description: "We start by understanding your business goals, target audience, and project requirements through detailed consultations.",
  },
  {
    icon: PenTool,
    title: "Wireframe & Design",
    description: "Our design team creates wireframes and visual designs that align with your brand and user experience goals.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Our developers build your website using modern technologies ensuring optimal performance and scalability.",
  },
  {
    icon: CheckCircle,
    title: "Testing",
    description: "We conduct thorough testing across devices and browsers to ensure everything works perfectly.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "After your approval, we launch your website and provide ongoing support to ensure continued success.",
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-card-bg relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Process</span>
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
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="group p-6 rounded-2xl bg-background border border-slate-800 card-glow hover:-translate-y-2 transition-all duration-300 h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 left-6 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-4 mt-2 group-hover:gradient-bg transition-all duration-300">
                    <step.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-heading font-semibold mb-3 text-slate-50">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-700 items-center justify-center z-10">
                    <ArrowRight className="w-3 h-3 text-slate-500" />
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

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
