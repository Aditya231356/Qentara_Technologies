"use client";

import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for small businesses and startups",
    features: [
      "5 Pages Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "Social Media Integration",
      "1 Month Support",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "$999",
    description: "Ideal for growing businesses",
    features: [
      "10 Pages Website",
      "Responsive Design",
      "Advanced SEO",
      "Contact Form",
      "Social Media Integration",
      "CMS Integration",
      "Analytics Setup",
      "3 Months Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$2,499",
    description: "For large businesses with complex needs",
    features: [
      "Unlimited Pages",
      "Responsive Design",
      "Advanced SEO",
      "E-commerce Integration",
      "Custom Functionality",
      "API Integration",
      "Analytics Setup",
      "6 Months Support",
      "Priority Support",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="section bg-card-bg relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a dedicated project manager and regular updates.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-background border-primary card-glow scale-105"
                  : "bg-background border-slate-800 card-glow hover:-translate-y-2"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-white text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-heading font-semibold text-slate-50 mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-heading font-bold gradient-text">
                  {plan.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-400 mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "gradient-bg text-white btn-glow"
                    : "bg-slate-800 text-slate-50 hover:bg-slate-700 border border-slate-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
