"use client";

import { Facebook, Twitter, Instagram, Linkedin, Github, Sparkles, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const services = [
  { name: "Website Development", href: "#services" },
  { name: "E-commerce Development", href: "#services" },
  { name: "UI/UX Design", href: "#services" },
  { name: "SEO Optimization", href: "#services" },
  { name: "Custom Development", href: "#services" },
];

const socials = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-card-bg border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-heading font-bold gradient-text">
                Qentara
              </h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We build high-performance websites for growing businesses. Let us help you transform your digital presence.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-slate-50 mb-4 flex items-center gap-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-slate-50 mb-4 flex items-center gap-2">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-slate-50 mb-4 flex items-center gap-2">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:qentara.web@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
                  qentara.web@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919264231356" className="text-slate-400 hover:text-primary transition-colors">
                  +91 9264231356
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/caFxQfJ1RLMiBp5d6" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                  Hareya, Chakdaud, Gorakhpur<br />
                  Uttar Pradesh, 273016, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 Qentara Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-slate-500 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-slate-500 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
