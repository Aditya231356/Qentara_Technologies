"use client";

import { ExternalLink } from "lucide-react";

export default function Testimonials() {
  const googleReviewsLink = "https://g.page/r/CUNDrgSt3mZjEBM/review";

  return (
    <section className="py-20 lg:py-28 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Check out our reviews on Google.
          </p>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center">
          <a
            href={googleReviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl gradient-bg text-white font-semibold btn-glow hover:scale-105 transition-transform duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
