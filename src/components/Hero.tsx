"use client";

import { ArrowRight, MessageCircle, Sparkles, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ConsultationModal from "./ConsultationModal";
import FloatingTechIcons from "./FloatingTechIcons";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const heroRef = useRef<HTMLElement>(null);

  const textToType = "High-Performance";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= textToType.length) {
        setTypedText(textToType.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Mouse tracking - only on desktop (not mobile/touch)
  useEffect(() => {
    // Check if device supports hover (desktop) - skip on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient orbs with 3D effect */}
        <div 
          className="absolute top-1/4 -left-20 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl float-animation"
          style={{
            transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * 30}px, 0)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-20 w-72 h-72 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl float-animation-reverse"
          style={{ 
            animationDelay: "2s",
            transform: `translate3d(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px, 0)`,
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-accent/10 rounded-full blur-3xl pulse-glow"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-16 right-10 md:right-20 w-16 h-16 md:w-20 md:h-20 border-2 border-primary/30 rounded-lg rotate-12 float-animation hover:border-primary/60 transition-colors" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-20 left-10 md:left-20 w-12 h-12 md:w-16 md:h-16 border-2 border-secondary/30 rounded-full float-animation-reverse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 left-1/4 w-8 h-8 md:w-10 md:h-10 border-2 border-accent/30 rotate-45 float-animation" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/4 right-1/4 w-6 h-6 md:w-8 md:h-8 bg-primary/20 rounded-full float-animation" style={{ animationDelay: "2.5s" }} />
        <div className="absolute bottom-1/3 right-1/3 w-10 h-10 md:w-12 md:h-12 border-2 border-purple-500/30 -rotate-12 float-animation-reverse" style={{ animationDelay: "3s" }} />
        
      {/* Stars */}
        <div className="absolute top-20 left-[15%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-32 right-[20%] w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-[25%] w-1 h-1 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Floating Tech Icons - outside mouse tracked area */}
      <FloatingTechIcons />

      {/* Content */}
      <div 
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transform: `rotateX(${mousePosition.y * 3}deg) rotateY(${-mousePosition.x * 3}deg)`,
        }}
      >
        {/* Badge with glow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-bg/80 border border-slate-700/50 backdrop-blur-sm mb-6 md:mb-8 animate-border">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs md:text-sm text-slate-300">Accepting new projects</span>
          <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse" />
        </div>

        {/* Main headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 md:mb-6 leading-tight">
          <span className="text-slate-50">We Build </span>
          <span className="gradient-text">{typedText}</span>
          <span 
            className="typing-cursor" 
            style={{ 
              color: '#06b6d4',
              textShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4'
            }}
          >
            |
          </span>
          <br />
          <span className="text-slate-50">Websites for Growing Businesses</span>
        </h1>

        {/* Supporting paragraph */}
        <p className="text-sm md:text-base lg:text-lg text-slate-400 max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10">
          Qentara Technologies is a modern web development agency that creates stunning, fast, and SEO-optimized websites designed to grow your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row w-full max-w-md mx-auto gap-3 md:gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 md:py-4 rounded-xl gradient-bg text-white font-semibold btn-glow overflow-hidden text-sm md:text-base hover:shadow-lg hover:shadow-primary/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get a Free Consultation
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href="https://wa.me/919264231356?text=Hello%20Qentara%20Technologies,%20I%20want%20to%20connect%20with%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:py-4 rounded-xl bg-card-bg border border-slate-700 text-slate-50 font-semibold hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all text-sm md:text-base hover-lift"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
            WhatsApp Us
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-lg sm:max-w-xl mx-auto">
          <div className="group p-4 md:p-5 rounded-2xl bg-card-bg/60 border border-slate-700/50 card-glow">
            <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold gradient-text">10+</div>
            <div className="text-xs md:text-sm text-slate-500 mt-1">Projects Completed</div>
          </div>
          <div className="group p-4 md:p-5 rounded-2xl bg-card-bg/60 border border-slate-700/50 card-glow">
            <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold gradient-text">98%</div>
            <div className="text-xs md:text-sm text-slate-500 mt-1">Client Satisfaction</div>
          </div>
          <div className="group p-4 md:p-5 rounded-2xl bg-card-bg/60 border border-slate-700/50 card-glow">
            <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold gradient-text">1+</div>
            <div className="text-xs md:text-sm text-slate-500 mt-1">Years Experience</div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 text-slate-500 text-xs md:text-sm">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>5.0 Rating</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full" />
          <div className="text-slate-500 text-xs md:text-sm">
            <span className="text-primary font-semibold">100%</span> Satisfaction Guaranteed
          </div>
          <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full" />
          <div className="text-slate-500 text-xs md:text-sm">
            <span className="text-emerald-400 font-semibold">24/7</span> Support Available
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5 md:p-2 hover:border-primary/50 transition-colors">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

