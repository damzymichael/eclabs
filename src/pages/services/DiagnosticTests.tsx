import { Link } from "react-router-dom"

function DiagnosticTests() {
  return (
    <div className="w-full font-sans text-gray-800 bg-white">
      {/* Breadcrumbs */}
      <nav className="bg-gray-50 py-4 px-6 md:px-12 lg:px-24 border-b border-gray-200">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:underline hover:text-[#01329C] transition-colors">
              Home
            </Link>
          </li>
          <li>»</li>
          <li className="text-gray-700 font-medium">About Us</li>
        </ol>
      </nav>

      <section
        className="relative py-20 md:py-28 px-6 text-center border-b border-gray-100 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/about-us-background.jpg')" }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#01329C] mb-6 tracking-tight">
            Diagnostic Tests
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Delivering accurate, timely, and reliable laboratory results that support better
            healthcare decisions.
          </p>
        </div>
      </section>
    </div>
  )
}

export default DiagnosticTests
