"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
    <section id="contact" className="section bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Ready to start your project? Contact us today and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="p-8 rounded-2xl bg-card-bg border border-slate-800">
            <h3 className="text-xl font-heading font-semibold mb-6 text-slate-50">
              Send us a Message
            </h3>
            
            {/* Success Message */}
            {showSuccess ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-50 mb-2">
                  Thank you for contacting us!
                </h3>
                <p className="text-slate-400">
                  We will get back to you very soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 rounded-xl bg-background border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
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
                    className="w-full px-4 py-3 rounded-xl bg-background border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
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
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl gradient-bg text-white font-semibold btn-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-semibold text-slate-50 mb-6">
              Contact Information
            </h3>

            {/* Email Button */}
            <a href="mailto:qentara.web@gmail.com" className="flex items-center gap-4 p-6 rounded-2xl bg-card-bg border border-slate-800 hover:border-primary hover:bg-primary/5 transition-all group">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-500 mb-1">Email</div>
                <div className="text-slate-50 font-medium group-hover:text-primary transition-colors">
                  qentara.web@gmail.com
                </div>
              </div>
            </a>

            {/* Phone Button */}
            <a href="tel:+919264231356" className="flex items-center gap-4 p-6 rounded-2xl bg-card-bg border border-slate-800 hover:border-primary hover:bg-primary/5 transition-all group">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-500 mb-1">Phone</div>
                <div className="text-slate-50 font-medium group-hover:text-primary transition-colors">
                  +91 9264231356
                </div>
              </div>
            </a>

            {/* Location Button */}
            <a href="https://maps.app.goo.gl/caFxQfJ1RLMiBp5d6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-card-bg border border-slate-800 hover:border-primary hover:bg-primary/5 transition-all group">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-500 mb-1">Office</div>
                <div className="text-slate-50 font-medium group-hover:text-primary transition-colors">
                  Hareya, Chakdaud, Gorakhpur<br />
                  Uttar Pradesh, 273016, India
                </div>
              </div>
            </a>

            {/* WhatsApp Button */}
            <a href="https://wa.me/919264231356?text=Hello%20Qentara%20Technologies,%20I%20want%20to%20connect%20with%20you" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-card-bg border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-500 mb-1">WhatsApp</div>
                <div className="text-slate-50 font-medium group-hover:text-emerald-500 transition-colors">
                  Chat with us
                </div>
              </div>
            </a>

            {/* Additional info */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <h4 className="text-lg font-heading font-semibold text-slate-50 mb-2">
                Business Hours
              </h4>
              <p className="text-slate-400">
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

