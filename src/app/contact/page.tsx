"use client";

import { useState } from "react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    "Professional Office Cleaning",
    "Commercial Floor Care & Maintenance",
    "Restaurant & Kitchen Sanitation",
    "Educational & Child Care Facilities",
    "Janitorial Management Services",
    "Overnight & Weekend Operations",
    "Custom Commercial Maintenance",
    "Airbnb & Vacation Rental Cleaning",
    "Event Cleanup Services",
    "Residential - Regular House Cleaning",
    "Residential - Deep Cleaning",
    "Residential - Move-in/Move-out Cleaning",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Proposal Request - ${formData.serviceType}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\n` +
      `Company: ${formData.company}\n` +
      `Phone: ${formData.phone}\n` +
      `Service Type: ${formData.serviceType}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open email client
    window.location.href = `mailto:ncjmlandscapeandcleaning@gmail.com?subject=${subject}&body=${body}`;

    // Show success state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        company: "",
        phone: "",
        serviceType: "",
        message: "",
      });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Get in <span className="text-teal-400">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Request a customized proposal for your commercial maintenance needs. We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Request a Proposal Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-slate-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                  Request a Proposal
                </h2>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-teal-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-teal-800 font-medium">
                        Your email client should have opened. If it didn&apos;t, please email us directly at{" "}
                        <a href="mailto:ncjmlandscapeandcleaning@gmail.com" className="underline">
                          ncjmlandscapeandcleaning@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Full Name <span className="text-teal-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Company <span className="text-teal-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                      placeholder="ABC Corporation"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Phone <span className="text-teal-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                      placeholder="(305) 555-1234"
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Service Type <span className="text-teal-600">*</span>
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none bg-white"
                    >
                      <option value="">Select a service type</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Message <span className="text-teal-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none resize-none"
                      placeholder="Tell us about your facility and maintenance needs..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Opening Email..." : "Submit Request"}
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Contact Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-100">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-teal-600"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Address</p>
                      <p className="text-slate-600 text-sm sm:text-base">
                        8731 NW 16 Ave<br />
                        Miami, FL 33147
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-teal-600"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Phone</p>
                      <a
                        href="tel:+13052822499"
                        className="text-teal-600 hover:text-teal-500 font-medium transition-colors text-sm sm:text-base"
                      >
                        (305) 282-2499
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-teal-600"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Email</p>
                      <a
                        href="mailto:ncjmlandscapeandcleaning@gmail.com"
                        className="text-teal-600 hover:text-teal-500 font-medium transition-colors text-sm sm:text-base break-all"
                      >
                        ncjmlandscapeandcleaning@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-teal-600"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Hours</p>
                      <p className="text-slate-600 text-sm sm:text-base">24/7 Availability</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Services Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-teal-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Emergency Services
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                      Need immediate commercial cleaning assistance? Our 24/7 emergency response team is ready to help.
                    </p>
                    <a
                      href="tel:+13052822499"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Service Area
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proudly serving Miami-Dade and Broward Counties with professional commercial maintenance services.
            </p>
          </div>

          {/* Google Maps Embed Placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <div className="relative w-full h-96 bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854274.7053997401!2d-80.43026900000001!3d26.054181550000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9745374484071%3A0xeb174b8d9d82af56!2sMiami%20Metropolitan%20Area%2C%20FL!5e1!3m2!1sen!2sus!4v1766132760276!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="NCJM Maintenance Services - Miami-Dade and Broward Counties Service Area"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

