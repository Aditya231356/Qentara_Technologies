"use client";

import { ExternalLink, Star, Sparkles } from "lucide-react";

export default function Testimonials() {
  const googleReviewsLink = "https://g.page/r/CUNDrgSt3mZjEBM/review";

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-bg border border-slate-800 text-sm text-primary font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Check out our reviews on Google.
          </p>
        </div>

        {/* Star ratings display */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center animate-pulse" style={{ animationDelay: `${star * 0.1}s` }}>
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
            ))}
          </div>
          <p className="text-2xl font-heading font-bold gradient-text">5.0 Rating on Google</p>
          <p className="text-slate-400 mt-2">Based on client reviews</p>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center">
          <a
            href={googleReviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl gradient-bg text-white font-semibold btn-glow hover:scale-105 transition-transform duration-300 group"
          >
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
