import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Professional Office Cleaning",
      description: "Tailored workspace maintenance for corporate environments",
      icon: "🏢",
    },
    {
      title: "Commercial Floor Care",
      description: "Buffing, waxing, and deep cleaning for lasting shine",
      icon: "✨",
    },
    {
      title: "Restaurant & Kitchen Sanitation",
      description: "Deep cleaning and sanitation for the hospitality industry",
      icon: "🍽️",
    },
    {
      title: "Educational Facilities",
      description: "Safe and thorough cleaning for schools and child care centers",
      icon: "🎓",
    },
    {
      title: "24/7 Operations",
      description: "Dedicated overnight and weekend crews to prevent business disruption",
      icon: "🌙",
    },
    {
      title: "Custom Proposals",
      description: "Tailored maintenance solutions for your specific facility needs",
      icon: "📋",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background overlay for video placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 to-slate-900/80 z-0" />
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6">
              The Gold Standard in{" "}
              <span className="text-teal-400">Commercial Maintenance</span>.
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Serving South Florida&apos;s premier offices and facilities with surgical precision and custom schedules.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/estimate"
                className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
              >
                Request a Proposal
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-bold rounded-full transition-all duration-300 text-center backdrop-blur-sm hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-0" />
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive maintenance solutions tailored to your facility&apos;s unique needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-teal-200 hover:-translate-y-1"
              >
                {/* Glassmorphism effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Facility?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a customized proposal for your commercial maintenance needs. Serving Miami-Dade and Broward Counties.
          </p>
          <Link
            href="/estimate"
            className="inline-block px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="text-slate-600 text-sm sm:text-base">
              <p className="font-semibold text-slate-900 mb-2">NCJM Maintenance Services LLC</p>
              <p className="mb-1">8731 NW 16 Ave, Miami, FL 33147</p>
              <p className="mb-3">Serving Miami-Dade and Broward Counties</p>
              <a
                href="tel:+13052822499"
                className="text-teal-600 hover:text-teal-500 font-medium transition-colors inline-flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (305) 282-2499
              </a>
            </div>

            {/* Operating Hours */}
            <div className="text-slate-600 text-sm sm:text-base">
              <p className="font-semibold text-slate-900 mb-2">Availability</p>
              <p className="mb-1">24/7 Operations</p>
              <p>Overnight & Weekend Specialization</p>
            </div>

            {/* Trust & Compliance */}
            <div className="text-slate-600 text-sm sm:text-base">
              <p className="font-semibold text-slate-900 mb-2">Trust & Compliance</p>
              <p className="leading-relaxed">
                NCJM Maintenance Services LLC is a legally registered Florida entity. Locally compliant with Miami-Dade and Broward County Business Tax Receipts (BTR).
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-slate-100">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-teal-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Family Owned & Operated</p>
                  <p className="text-xs text-slate-500 mt-1">Trusted local business</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-slate-100">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-teal-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">100% Satisfaction Guarantee</p>
                  <p className="text-xs text-slate-500 mt-1">Your satisfaction is our promise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} NCJM Maintenance Services LLC. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="/contact" className="hover:text-slate-700 transition-colors">Contact</a>
                <a href="/services" className="hover:text-slate-700 transition-colors">Services</a>
                <a href="/about" className="hover:text-slate-700 transition-colors">About</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
