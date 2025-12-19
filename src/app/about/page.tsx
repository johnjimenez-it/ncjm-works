import Link from "next/link";
import Footer from "@/components/Footer";

export default function AboutPage() {
    const values = [
        {
            title: "Excellence",
            description:
                "We don't just clean – we set the gold standard. Every detail matters, and we take pride in delivering results that exceed expectations.",
            icon: "⭐",
        },
        {
            title: "Reliability",
            description:
                "When we make a commitment, we keep it. Our clients trust us to show up on time, every time, and deliver consistent quality.",
            icon: "🤝",
        },
        {
            title: "Integrity",
            description:
                "Honesty and transparency guide everything we do. From fair pricing to open communication, we build relationships on trust.",
            icon: "💎",
        },
        {
            title: "Family Values",
            description:
                "As a family-owned business, we treat our clients and team members like family. Your success is our success.",
            icon: "👨‍👩‍👧‍👦",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-16 sm:pt-20">
            {/* Hero Section */}
            <section className="bg-slate-900 py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            About <span className="text-teal-400">NCJM</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            A family-owned business dedicated to delivering the gold standard
                            in commercial maintenance services throughout South Florida.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    NCJM Maintenance Services LLC was founded with a simple
                                    mission: to provide South Florida businesses with cleaning
                                    services they can truly rely on. What started as a small
                                    family operation has grown into a trusted name in commercial
                                    maintenance.
                                </p>
                                <p>
                                    Today, we proudly serve offices, restaurants, schools,
                                    healthcare facilities, and commercial spaces throughout
                                    Miami-Dade and Broward Counties. Our growth is built on a
                                    foundation of hard work, attention to detail, and genuine care
                                    for every client we serve.
                                </p>
                                <p>
                                    As a family-owned and operated business, we understand that
                                    trust is everything. That&apos;s why we treat every facility
                                    as if it were our own, ensuring the highest standards of
                                    cleanliness and professionalism.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 sm:p-10 text-white shadow-xl">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                                Why Choose NCJM?
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-teal-200 flex-shrink-0 mt-1"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-lg">
                                        Family-owned business with personal attention to every
                                        client
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-teal-200 flex-shrink-0 mt-1"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-lg">
                                        24/7 availability with overnight and weekend crews
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-teal-200 flex-shrink-0 mt-1"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-lg">
                                        Registered Florida LLC &amp; Miami-Dade BTR Certified
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-teal-200 flex-shrink-0 mt-1"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-lg">
                                        Custom cleaning solutions tailored to your needs
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-teal-200 flex-shrink-0 mt-1"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-lg">
                                        100% satisfaction guarantee on all services
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            These principles guide every decision we make and every service we
                            provide.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-slate-100"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Area Section */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Proudly Serving South Florida
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            From Miami-Dade to Broward County, we bring professional cleaning
                            services to businesses across the region.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="px-6 py-3 bg-slate-800 text-teal-400 rounded-full font-semibold">
                                Miami
                            </span>
                            <span className="px-6 py-3 bg-slate-800 text-teal-400 rounded-full font-semibold">
                                Miami Beach
                            </span>
                            <span className="px-6 py-3 bg-slate-800 text-teal-400 rounded-full font-semibold">
                                Hialeah
                            </span>
                            <span className="px-6 py-3 bg-slate-800 text-teal-400 rounded-full font-semibold">
                                Fort Lauderdale
                            </span>
                            <span className="px-6 py-3 bg-slate-800 text-teal-400 rounded-full font-semibold">
                                Hollywood
                            </span>
                            <span className="px-6 py-3 bg-slate-800 text-teal-400 rounded-full font-semibold">
                                Coral Gables
                            </span>
                            <span className="px-6 py-3 bg-slate-800 text-teal-400 rounded-full font-semibold">
                                Doral
                            </span>
                            <span className="px-6 py-3 bg-slate-800 text-teal-400 rounded-full font-semibold">
                                Aventura
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-teal-600">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Experience the NCJM Difference?
                    </h2>
                    <p className="text-lg sm:text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                        Join the growing family of South Florida businesses that trust NCJM
                        for their commercial maintenance needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white hover:bg-slate-50 text-teal-600 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Get a Free Quote
                        </Link>
                        <a
                            href="tel:+13052822499"
                            className="px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
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
                            Call Us Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
