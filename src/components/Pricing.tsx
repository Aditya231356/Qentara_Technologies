"use client";

import { useState } from "react";
import { Check, X, Send, User, Mail, Phone, CheckCircle, Sparkles } from "lucide-react";
import { useEffect, useRef, useState as useVisibilityState } from "react";
import FloatingTechIcons from "./FloatingTechIcons";

const plans = [
  {
    name: "Starter",
    price: "₹6999",
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
    price: "₹11999",
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
    price: "₹24999",
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
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useVisibilityState(false);
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

  const handleGetStarted = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setFormData({ name: "", email: "", phone: "" });
    setShowSuccess(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!selectedPlan) return;

    try {
      const response = await fetch('/api/pricing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planName: selectedPlan.name,
          price: selectedPlan.price,
          description: selectedPlan.description,
          features: selectedPlan.features,
          ...formData
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          handleCloseModal();
        }, 3000);
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-card-bg relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl float-animation-reverse" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-1/4 w-3 h-3 bg-primary/40 rounded-full float-animation" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-accent/50 rounded-full float-animation-reverse" />
      <div className="absolute bottom-30 right-1/3 w-4 h-4 bg-secondary/30 rounded-full float-animation" style={{ animationDelay: "1s" }} />

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            Pricing
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mt-3 md:mt-4 mb-4 md:mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-400 max-w-xl md:max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a dedicated project manager and regular updates.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-5 md:p-6 lg:p-8 rounded-2xl border transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${
                plan.popular
                  ? "bg-background border-primary card-glow scale-100 md:scale-105 z-10 shadow-lg shadow-primary/10"
                  : "bg-background/80 border-slate-700/50 card-glow hover:-translate-y-2"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-bg text-white text-xs font-medium whitespace-nowrap shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-lg md:text-xl font-heading font-semibold text-slate-50 mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-3 md:mb-4">
                <span className="text-3xl md:text-4xl font-heading font-bold gradient-text">
                  {plan.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 mb-5 md:mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 md:gap-3 text-slate-300 text-sm">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handleGetStarted(plan)}
                className={`w-full py-3 md:py-4 rounded-xl font-semibold transition-all text-sm md:text-base ${
                  plan.popular
                    ? "gradient-bg text-white btn-glow hover:shadow-lg hover:shadow-primary/30"
                    : "bg-slate-800 text-slate-50 hover:bg-slate-700 border border-slate-700 hover-lift"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleCloseModal}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-card-bg border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-border">
            {/* Header */}
            <div className="p-4 md:p-6 flex items-center justify-between border-b border-slate-700">
              <div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-slate-50">
                  {selectedPlan.name} Plan
                </h3>
                <p className="text-primary font-semibold text-sm md:text-base">{selectedPlan.price}</p>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Success Message */}
            {showSuccess ? (
              <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4 md:mb-6 animate-bounce">
                  <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-50 mb-2">
                  Thank you!
                </h3>
                <p className="text-slate-400 text-sm md:text-base">
                  We will contact you soon.
                </p>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4">
                <p className="text-slate-400 text-sm">
                  Fill in your details and we'll get back to you about the {selectedPlan.name} plan.
                </p>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                    <User className="w-4 h-4 text-primary" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 md:py-4 rounded-xl gradient-bg text-white font-semibold btn-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base hover:shadow-lg hover:shadow-primary/30"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

