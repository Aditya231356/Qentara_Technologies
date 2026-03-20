"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import FloatingTechIcons from "./FloatingTechIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // Send form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show success message
        setShowSuccess(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" });
          setShowSuccess(false);
        }, 3000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 md:w-64 md:h-64 bg-secondary/10 rounded-full blur-3xl float-animation-reverse" />
      
      {/* Floating elements */}
      <div className="absolute top-20 right-1/4 w-3 h-3 bg-primary/40 rounded-full float-animation" />
      <div className="absolute top-40 left-20 w-2 h-2 bg-accent/50 rounded-full float-animation-reverse" />
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-secondary/30 rounded-full float-animation" style={{ animationDelay: "1s" }} />

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            Contact
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mt-3 md:mt-4 mb-4 md:mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-400 max-w-xl md:max-w-2xl mx-auto">
            Ready to start your project? Contact us today and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
          {/* Contact form */}
          <div className={`p-5 md:p-6 lg:p-8 rounded-2xl bg-card-bg/70 border border-slate-700/50 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h3 className="text-lg md:text-xl font-heading font-semibold mb-5 md:mb-6 text-slate-50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Send us a Message
            </h3>
            
            {/* Success Message */}
            {showSuccess ? (
              <div className="py-8 md:py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4 md:mb-6 animate-bounce">
                  <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-50 mb-2">
                  Thank you for contacting us!
                </h3>
                <p className="text-slate-400 text-sm md:text-base">
                  We will get back to you very soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                {/* Name input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-background/80 border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm md:text-base"
                  />
                </div>

                {/* Email input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-background/80 border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm md:text-base"
                  />
                </div>

                {/* Project details textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-background/80 border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none text-sm md:text-base"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 md:py-4 rounded-xl gradient-bg text-white font-semibold btn-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base hover:shadow-lg hover:shadow-primary/30"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className={`space-y-4 md:space-y-6 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h3 className="text-lg md:text-xl font-heading font-semibold text-slate-50 mb-5 md:mb-6">
              Contact Information
            </h3>

            {/* Email Button */}
            <a href="mailto:qentara.web@gmail.com" className="flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-card-bg/70 border border-slate-700/50 hover:border-primary hover:bg-primary/5 transition-all group card-glow">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs md:text-sm text-slate-500 mb-0.5">Email</div>
                <div className="text-sm md:text-base text-slate-50 font-medium group-hover:text-primary transition-colors truncate">
                  qentara.web@gmail.com
                </div>
              </div>
            </a>

            {/* Phone Button */}
            <a href="tel:+919264231356" className="flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-card-bg/70 border border-slate-700/50 hover:border-primary hover:bg-primary/5 transition-all group card-glow">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs md:text-sm text-slate-500 mb-0.5">Phone</div>
                <div className="text-sm md:text-base text-slate-50 font-medium group-hover:text-primary transition-colors">
                  +91 9264231356
                </div>
              </div>
            </a>

            {/* Location Button */}
            <a href="https://maps.app.goo.gl/caFxQfJ1RLMiBp5d6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-card-bg/70 border border-slate-700/50 hover:border-primary hover:bg-primary/5 transition-all group card-glow">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs md:text-sm text-slate-500 mb-0.5">Office</div>
                <div className="text-sm md:text-base text-slate-50 font-medium group-hover:text-primary transition-colors">
                  Hareya, Chakdaud, Gorakhpur<br />
                  <span className="text-xs md:text-sm">Uttar Pradesh, 273016, India</span>
                </div>
              </div>
            </a>

            {/* WhatsApp Button */}
            <a href="https://wa.me/919264231356?text=Hello%20Qentara%20Technologies,%20I%20want%20to%20connect%20with%20you" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-card-bg/70 border border-slate-700/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all group card-glow">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs md:text-sm text-slate-500 mb-0.5">WhatsApp</div>
                <div className="text-sm md:text-base text-slate-50 font-medium group-hover:text-emerald-500 transition-colors">
                  Chat with us
                </div>
              </div>
            </a>

            {/* Additional info */}
            <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <h4 className="text-base md:text-lg font-heading font-semibold text-slate-50 mb-2">
                Business Hours
              </h4>
              <p className="text-sm text-slate-400">
                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

