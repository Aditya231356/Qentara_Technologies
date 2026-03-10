"use client";

import { useState } from "react";
import { Check, X, Send, User, Mail, Phone, CheckCircle, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$6999",
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
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Business",
    price: "$11999",
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
    color: "from-purple-500 to-pink-400",
  },
  {
    name: "Enterprise",
    price: "$24999",
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
    color: "from-amber-500 to-orange-400",
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
    <section className="py-16 md:py-20 lg:py-28 bg-card-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-slate-800 text-sm text-primary font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Pricing
          </span>
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
              className={`relative p-8 rounded-2xl border transition-all duration-300 group ${
                plan.popular
                  ? "bg-background/80 border-primary card-glow scale-105 backdrop-blur-sm"
                  : "bg-background/50 border-slate-800 card-glow hover:-translate-y-2 backdrop-blur-sm"
              }`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl -z-10`} />

              {/* Popular badge */}
              {plan.popular && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r ${plan.color} text-white text-sm font-medium shadow-lg`}>
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
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handleGetStarted(plan)}
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "gradient-bg text-white btn-glow group-hover:scale-105"
                    : `bg-gradient-to-r ${plan.color} text-white hover:opacity-90 group-hover:scale-105`
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
          <div className="relative w-full max-w-md bg-card-bg border border-slate-700 rounded-2xl shadow-2xl">
            {/* Header */}
            <div className="p-6 flex items-center justify-between border-b border-slate-700">
              <div>
                <h3 className="text-xl font-heading font-bold text-slate-50">
                  {selectedPlan.name} Plan
                </h3>
                <p className="text-primary font-semibold">{selectedPlan.price}</p>
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
              <div className="p-12 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-50 mb-2">
                  Thank you!
                </h3>
                <p className="text-slate-400">
                  We will contact you soon.
                </p>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <p className="text-slate-400 text-sm mb-4">
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
                  className="w-full py-4 rounded-xl gradient-bg text-white font-semibold btn-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
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
