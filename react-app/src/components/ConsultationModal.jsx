import { useState } from "react";
import { X, Send, User, Building, Mail, Phone, MessageSquare, FileText } from "lucide-react";

const workTypes = [
  "Website Development",
  "E-commerce Development",
  "UI/UX Design",
  "SEO Optimization",
  "Mobile App Development",
  "Custom Development",
  "Other"
];

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    query: "",
    workType: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email body
    const subject = encodeURIComponent(`New Consultation Request from ${formData.name}`);
    const body = encodeURIComponent(
      `*New Consultation Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Organisation:* ${formData.organisation || "Not provided"}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || "Not provided"}\n` +
      `*Query:* ${formData.query}\n` +
      `*Type of Work:* ${formData.workType}\n` +
      `*Description:* ${formData.description || "Not provided"}`
    );

    // Open email client
    window.location.href = `mailto:qentara.web@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        organisation: "",
        email: "",
        phone: "",
        query: "",
        workType: "",
        description: ""
      });
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card-bg border border-slate-700 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-card-bg border-b border-slate-700 p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-heading font-bold text-slate-50">Get Free Consultation</h2>
            <p className="text-slate-400 text-sm mt-1">Fill out the form below and we'll get back to you</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name */}
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

          {/* Organisation */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <Building className="w-4 h-4 text-primary" />
              Organisation Name
            </label>
            <input
              type="text"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-4 py-3 rounded-xl bg-background border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          {/* Email and Phone Row */}
          <div className="grid md:grid-cols-2 gap-4">
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
          </div>

          {/* Query */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              Query *
            </label>
            <input
              type="text"
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
              placeholder="Brief description of your project"
              className="w-full px-4 py-3 rounded-xl bg-background border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          {/* Type of Work */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <FileText className="w-4 h-4 text-primary" />
              Type of Work *
            </label>
            <select
              name="workType"
              value={formData.workType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-slate-700 text-slate-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            >
              <option value="">Select type of work</option>
              {workTypes.map((type) => (
                <option key={type} value={type} className="bg-card-bg">
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us more about your requirements..."
              className="w-full px-4 py-3 rounded-xl bg-background border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl gradient-bg text-white font-semibold btn-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}

