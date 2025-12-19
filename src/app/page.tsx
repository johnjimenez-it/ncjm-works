import Link from "next/link";
import Footer from "@/components/Footer";

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
      title: "Residential Cleaning",
      description: "Regular house cleaning, deep cleaning, and move-in/move-out services",
      icon: "🏠",
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
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6">
              The Gold Standard in{" "}
              <span className="text-teal-400">Commercial Maintenance</span>.
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Serving South Florida&apos;s premier offices and facilities with surgical precision and custom schedules.
            </p>

            {/* Prominent CTA Button */}
            <div className="mt-10 sm:mt-12 flex justify-center">
              <Link
                href="/contact"
                className="px-10 sm:px-12 py-5 sm:py-6 bg-[#0D9488] hover:bg-teal-500 text-white font-bold text-lg sm:text-xl rounded-full transition-all duration-300 shadow-2xl hover:shadow-teal-500/50 hover:scale-110 transform"
              >
                Request a Free Quote
              </Link>
            </div>

            {/* Secondary Action */}
            <div className="mt-6 sm:mt-8 flex justify-center">
              <Link
                href="/services"
                className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-bold rounded-full transition-all duration-300 text-center backdrop-blur-sm hover:bg-white/10"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
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

      {/* Featured Project Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 font-semibold rounded-full text-sm mb-4">
              Featured Project
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Recent Work
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              After-School Children&apos;s Program Cleaning
            </p>
          </div>

          {/* Project Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              { src: "/photos/IMG_5859.jpg", alt: "Children's program cleaning - Image 1" },
              { src: "/photos/IMG_5860.jpg", alt: "Children's program cleaning - Image 2" },
              { src: "/photos/IMG_5862.jpg", alt: "Children's program cleaning - Image 3" },
              { src: "/photos/IMG_5865.jpg", alt: "Children's program cleaning - Image 4" },
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Project Description */}
          <div className="mt-10 sm:mt-12 text-center">
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We provided comprehensive cleaning services for a local after-school children&apos;s program,
              ensuring a safe, sanitary, and welcoming environment for students and staff.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-8 px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get a Quote for Your Facility
            </Link>
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
      <Footer />
    </div>
  );
}
