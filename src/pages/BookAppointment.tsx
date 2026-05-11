import { BsFillInfoCircleFill } from "react-icons/bs"

function BookAppointment() {
  return (
    <div className="w-full font-sans">
      {/* 1. Breadcrumbs */}
      <nav className="bg-gray-50 py-3 px-6 md:px-12 lg:px-24">
        <ol className="flex items-center space-x-2 text-sm text-gray-400">
          <li>
            <a href="#" className="hover:underline text-gray-500">
              Home
            </a>
          </li>
          <li>»</li>
          <li>Request Quote</li>
        </ol>
      </nav>

      {/* 2. Hero Banner */}
      <section className="bg-[#01329C] text-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Quotation Request</h1>
          <p className="text-lg opacity-90">
            If you need assistance completing this form please call{" "}
            <span className="font-semibold">0333 600 1300</span>
          </p>
        </div>
      </section>

      {/* 3. Important Notice Bar */}
      <div className="bg-gray-100 py-6 px-6 md:px-12 lg:px-24 border-b border-gray-200">
        <div className="flex items-center gap-3 text-gray-700">
          {/* Use the react-icon component here */}
          <BsFillInfoCircleFill className="text-red-600 w-6 h-6 shrink-0" />
          <p className="text-lg leading-relaxed">
            <span className="text-red-600 font-bold uppercase">IMPORTANT</span>
            {" — "}
            <a href="#" className="text-[#01329C] font-semibold hover:underline">
              Click here
            </a>{" "}
            to download full list of laboratory tests
          </p>
        </div>
      </div>
    </div>
  )
}

export default BookAppointment
