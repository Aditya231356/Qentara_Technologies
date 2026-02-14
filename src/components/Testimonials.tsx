"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    rating: 5,
    review: "Qentara Technologies transformed our online presence. Their team delivered a stunning website that has significantly increased our leads and conversions. Highly recommend!",
  },
  {
    name: "Michael Chen",
    company: "Growth Ventures",
    rating: 5,
    review: "Professional, efficient, and incredibly talented. They understood our vision from day one and delivered beyond our expectations. The SEO results have been amazing.",
  },
  {
    name: "Emily Rodriguez",
    company: "Retail Pro",
    rating: 5,
    review: "Our e-commerce platform is performing exceptionally well. The team was responsive, creative, and delivered on time. We've seen a 200% increase in online sales.",
  },
];

export default function Testimonials() {
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
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card-bg border border-slate-800 card-glow hover:-translate-y-2 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-400 mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div className="border-t border-slate-800 pt-4">
                <div className="font-semibold text-slate-50">{testimonial.name}</div>
                <div className="text-sm text-slate-500">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a review button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-semibold btn-glow">
            Leave a Review
          </button>
        </div>
      </div>
    </section>
  );
}
