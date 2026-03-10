"use client";

import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FloatingTechIcons from "./FloatingTechIcons";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const services = [
  { name: "Website Development", href: "#" },
  { name: "E-commerce Development", href: "#" },
  { name: "UI/UX Design", href: "#" },
  { name: "SEO Optimization", href: "#" },
  { name: "Custom Development", href: "#" },
];

const socials = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="bg-card-bg border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl float-animation-reverse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Logo and description */}
          <div className={`lg:col-span-1 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-heading font-bold gradient-text">
                Qentara
              </h3>
              <button 
                onClick={scrollToTop}
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all group"
              >
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            <p className="text-slate-400 mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
              We build high-performance websites for growing businesses. Let us help you transform your digital presence.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h4 className="text-base md:text-lg font-heading font-semibold text-slate-50 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm md:text-base inline-flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h4 className="text-base md:text-lg font-heading font-semibold text-slate-50 mb-4">
              Services
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm md:text-base inline-flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h4 className="text-base md:text-lg font-heading font-semibold text-slate-50 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:qentara.web@gmail.com" className="text-slate-400 hover:text-primary transition-colors text-sm md:text-base flex items-center gap-2 group">
                  <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  qentara.web@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919264231356" className="text-slate-400 hover:text-primary transition-colors text-sm md:text-base flex items-center gap-2 group">
                  <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  +91 9264231356
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/caFxQfJ1RLMiBp5d6" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors text-sm md:text-base flex items-start gap-2 group">
                  <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform mt-0.5" />
                  <span>
                    Hareya, Chakdaud, Gorakhpur<br />
                    <span className="text-xs md:text-sm">Uttar Pradesh, 273016, India</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-slate-500 text-xs md:text-sm">
              © 2026 Qentara Technologies. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a href="/privacy" className="text-slate-500 hover:text-primary text-xs md:text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-slate-500 hover:text-primary text-xs md:text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

