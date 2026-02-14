"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
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
            
            <form className="space-y-6">
              {/* Name input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl gradient-bg text-white font-semibold btn-glow flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-semibold text-slate-50 mb-6">
              Contact Information
            </h3>

            {/* Email */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card-bg border border-slate-800">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-slate-500 mb-1">Email</div>
                <a href="mailto:qentara.web@gmail.com" className="text-slate-50 font-medium hover:text-primary transition-colors">
                  qentara.web@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card-bg border border-slate-800">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-slate-500 mb-1">Phone</div>
                <a href="tel:9264231356" className="text-slate-50 font-medium hover:text-primary transition-colors">
                  +91 9264231356
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card-bg border border-slate-800">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-slate-500 mb-1">Office</div>
                <p className="text-slate-50 font-medium">
                  Hareya, Chakdaud, Gorakhpur<br />
                  Uttar Pradesh, 273016, India
                </p>
              </div>
            </div>

            {/* Additional info */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <h4 className="text-lg font-heading font-semibold text-slate-50 mb-2">
                Business Hours
              </h4>
              <p className="text-slate-400">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
