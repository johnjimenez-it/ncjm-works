import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services Miami | NCJM Maintenance Services",
  description: "Professional commercial cleaning services in Miami including office cleaning, floor care, restaurant sanitation, and 24/7 operations. Serving Miami-Dade and Broward Counties.",
};

export default function ServicesPage() {
  const commercialServices = [
    {
      title: "Professional Office Cleaning",
      description:
        "Keep your workspace spotless and productive with our comprehensive office cleaning services. We handle everything from daily maintenance to deep cleaning, ensuring your employees work in a healthy, inviting environment.",
      features: [
        "Daily or weekly cleaning schedules",
        "Restroom sanitization",
        "Break room and kitchen cleaning",
        "Trash removal and recycling",
        "Dusting and surface disinfection",
        "Window and glass cleaning",
      ],
      icon: "🏢",
    },
    {
      title: "Commercial Floor Care",
      description:
        "Transform your floors with our professional floor care services. From VCT buffing and waxing to carpet deep cleaning, we bring new life to every surface in your facility.",
      features: [
        "VCT stripping and waxing",
        "Tile and grout cleaning",
        "Carpet shampooing and extraction",
        "Hardwood floor maintenance",
        "Concrete floor polishing",
        "Anti-slip treatment application",
      ],
      icon: "✨",
    },
    {
      title: "Restaurant & Kitchen Sanitation",
      description:
        "Meet and exceed health code standards with our specialized restaurant and kitchen cleaning services. We understand the unique demands of food service environments.",
      features: [
        "Hood and exhaust cleaning",
        "Grease trap maintenance",
        "Kitchen equipment sanitization",
        "Dining area deep cleaning",
        "Walk-in cooler cleaning",
        "Health inspection preparation",
      ],
      icon: "🍽️",
    },
    {
      title: "Educational Facilities",
      description:
        "Create a safe, clean learning environment for students and staff. Our specialized cleaning protocols are designed for schools, daycares, and educational centers.",
      features: [
        "Classroom sanitization",
        "Gym and cafeteria cleaning",
        "Playground area maintenance",
        "Locker room disinfection",
        "Green cleaning products available",
        "Summer deep cleaning programs",
      ],
      icon: "🎓",
    },
    {
      title: "Medical & Healthcare Facilities",
      description:
        "Maintain the highest standards of cleanliness with our healthcare-grade cleaning services. We follow strict protocols to ensure patient and staff safety.",
      features: [
        "Medical-grade disinfection",
        "Waiting room maintenance",
        "Exam room sanitization",
        "Biohazard disposal compliance",
        "HIPAA-compliant practices",
        "Infection control protocols",
      ],
      icon: "🏥",
    },
    {
      title: "Retail & Commercial Spaces",
      description:
        "Make a great first impression on every customer. Our retail cleaning services keep your store looking its best during business hours and after.",
      features: [
        "Storefront and entrance cleaning",
        "Display case maintenance",
        "Fitting room sanitization",
        "Back stock area organization",
        "Emergency spill response",
        "Pre-opening and post-closing service",
      ],
      icon: "🛍️",
    },
    {
      title: "Airbnb & Vacation Rental Cleaning",
      description:
        "Keep your short-term rental property guest-ready with our specialized Airbnb cleaning services. We understand the importance of quick turnovers and 5-star reviews.",
      features: [
        "Same-day turnover cleaning",
        "Linen and towel service",
        "Restocking amenities",
        "Property inspection reports",
        "Guest checkout coordination",
        "Deep cleaning between guests",
      ],
      icon: "🔑",
    },
    {
      title: "Event Cleanup Services",
      description:
        "Make your event a success from start to finish with our professional event cleanup services. We handle pre-event setup and post-event cleanup for corporate gatherings, private parties, and special occasions.",
      features: [
        "Pre-event venue preparation",
        "Post-event cleanup and restoration",
        "Trash and recycling removal",
        "Table and chair cleaning",
        "Floor cleaning and spot treatment",
        "Same-day service available",
      ],
      icon: "🎉",
    },
    {
      title: "Pressure Washing Services",
      description:
        "Restore the appearance of your property's exterior with our professional pressure washing services. We remove dirt, grime, mold, and stains from all types of surfaces.",
      features: [
        "Building exterior cleaning",
        "Parking lot and garage washing",
        "Sidewalk and walkway cleaning",
        "Dumpster pad sanitization",
        "Graffiti removal",
        "Eco-friendly cleaning solutions",
      ],
      icon: "💦",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-teal-400">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From daily office maintenance to specialized deep cleaning and Airbnb turnovers, we
              provide comprehensive cleaning solutions for commercial facilities,
              vacation rentals, and residential homes throughout South Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Commercial Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional maintenance solutions for businesses of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commercialServices.map((service, index) => (
              <Link
                key={index}
                href="/contact"
                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-teal-200 block cursor-pointer"
              >
                <div className="p-6 sm:p-8">
                  {/* Service Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl sm:text-5xl">{service.icon}</div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {service.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <svg
                          className="w-5 h-5 text-teal-600 flex-shrink-0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700 text-sm sm:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
                Also Available
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Residential Cleaning Services
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                While we specialize in commercial maintenance, we also provide
                quality cleaning services for homes throughout Miami-Dade and
                Broward Counties. Whether you need a one-time deep clean or
                regular maintenance, we bring the same professional standards
                to your home.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Regular house cleaning",
                  "Deep cleaning services",
                  "Move-in/move-out cleaning",
                  "Post-construction cleanup",
                  "Window cleaning",
                  "Carpet & upholstery cleaning",
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-teal-600 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Request a Quote
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 sm:p-10 text-white shadow-xl">
                <div className="text-6xl mb-6">🏠</div>
                <h3 className="text-2xl font-bold mb-4">
                  Your Home, Our Priority
                </h3>
                <p className="text-teal-100 leading-relaxed mb-6">
                  We treat every home with the same care and attention we give
                  to our commercial clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Operations Banner */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <span className="text-4xl">🌙</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  24/7 Operations
                </h2>
              </div>
              <p className="text-lg text-slate-300 max-w-2xl">
                We work around your schedule. Our dedicated overnight and
                weekend crews ensure your facility is always clean without
                disrupting your business operations.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Every facility is unique. Contact us for a free, no-obligation
            assessment and customized proposal tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+13052822499"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
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
              (305) 282-2499
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
