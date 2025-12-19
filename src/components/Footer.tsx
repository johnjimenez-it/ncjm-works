import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="text-slate-600 text-sm sm:text-base min-w-0">
            <p className="font-semibold text-slate-900 mb-2">NCJM Maintenance Services LLC</p>
            <p className="mb-1">8731 NW 16 Ave, Miami, FL 33147</p>
            <p className="mb-3">Serving Miami-Dade and Broward Counties</p>
            <div className="mb-3">
              <a
                href="tel:+13052822499"
                className="text-teal-600 hover:text-teal-500 font-medium transition-colors inline-flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
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
            <div>
              <a
                href="mailto:ncjmlandscapeandcleaning@gmail.com"
                className="text-teal-600 hover:text-teal-500 font-medium transition-colors inline-flex items-start gap-2 break-all"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="break-words">ncjmlandscapeandcleaning@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Service Area - SEO */}
          <div className="text-slate-600 text-sm sm:text-base min-w-0">
            <p className="font-semibold text-slate-900 mb-3">Service Area</p>
            <p className="mb-2 font-medium text-slate-700">Miami-Dade County:</p>
            <ul className="space-y-1 mb-4 text-slate-600">
              <li>Miami</li>
              <li>Miami Beach</li>
              <li>Coral Gables</li>
              <li>Doral</li>
              <li>Aventura</li>
              <li>Kendall</li>
              <li>Homestead</li>
              <li>Hialeah</li>
            </ul>
            <p className="mb-2 font-medium text-slate-700">Broward County:</p>
            <ul className="space-y-1 text-slate-600">
              <li>Fort Lauderdale</li>
              <li>Hollywood</li>
              <li>Pembroke Pines</li>
              <li>Miramar</li>
              <li>Coral Springs</li>
              <li>Weston</li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="text-slate-600 text-sm sm:text-base">
            <p className="font-semibold text-slate-900 mb-2">Availability</p>
            <p className="mb-1">24/7 Operations</p>
            <p className="mb-4">Overnight &amp; Weekend Specialization</p>
            <p className="font-semibold text-slate-900 mb-2">Trust &amp; Compliance</p>
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
                <p className="font-semibold text-slate-900 text-sm">Family Owned &amp; Operated</p>
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
              <Link href="/contact" className="hover:text-slate-700 transition-colors">Contact</Link>
              <Link href="/services" className="hover:text-slate-700 transition-colors">Services</Link>
              <Link href="/about" className="hover:text-slate-700 transition-colors">About</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
