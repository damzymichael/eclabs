import { useState } from "react"
import { TiThMenu } from "react-icons/ti"
import { FaPhoneAlt, FaChevronDown } from "react-icons/fa"
import { IoMail } from "react-icons/io5"
import { Link } from "react-router-dom"

const categories = [
  {
    title: "Clinical Pathology",
    links: [
      "Microbiology",
      "Hematology",
      "Chemistry",
      "Immunology",
      "Histopathology",
      "Molecular Diagnostics",
    ],
  },
  {
    title: "DNA Testing",
    links: [
      "Paternity Testing",
      "Maternity Testing",
      "Prenatal Paternity",
      "Sex Determinations",
      "Baby Gender Test",
      "Genetic Disease Test",
    ],
  },
  {
    title: "General Health Screening",
    links: [
      "Diabetes and Hypertension",
      "Kidney, Heart and Liver",
      "Cancer Screening",
      "Pre-employment Screening",
      "Pre-School Screening",
      "Travel Screening",
    ],
  },
  {
    title: "Drug & STI Testing",
    links: [
      "Workplace & School Drug Testing",
      "Urine, Saliva & Hair Analysis",
      "HIV Testing",
      "Gonorrhoea & Chlamydia",
      "Herpes & Syphilis",
      "Hepatitis B and C",
    ],
  },
]

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="sticky top-0 z-50">
      <div className="">
        <aside className="bg-[#01329C] text-white text-sm sm:text-base px-4 py-2 flex items-center gap-5">
          <a href="tel:+2347012345678">
            <div className="flex gap-2 items-center">
              <FaPhoneAlt color="white" size={15} className="mt-0.5" />
              <p className="font-semibold">+2347012345678</p>
            </div>
          </a>

          <a href="mailto:info@eclaboratory.com">
            <div className="flex gap-2 items-center">
              <IoMail color="white" size={20} className="mt-.5" />
              <p className="font-semibold">info@eclaboratory.com</p>
            </div>
          </a>
        </aside>
        <header className="py-2 px-4 flex items-center justify-between bg-white shadow-xl">
          <a href="/">
            <img src="/eclab-full-logo.png" className="h-12" alt="Logo" />
          </a>

          <div className="md:hidden">
            <button onClick={() => setMobileNav(!mobileNav)}>
              <TiThMenu size={25} color="#01329C" />
            </button>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-lg font-semibold text-[#808080]">
              <li>
                <a href="">Home</a>
              </li>

              <li>
                <a href="">About us</a>
              </li>

              <li
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative flex items-center gap-2 py-4"
              >
                <a href="">Our Services</a>
                <FaChevronDown className="mt-1" />
              </li>

              <li>
                <Link
                  to="/book-appointment"
                  className="bg-[#9B0100] px-5 py-3 rounded-full text-white"
                >
                  Book appointment
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      {isHovered && (
        <section
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full left-0 mt-0 bg-white py-8 px-6 md:px-12 lg:px-24 border-t-4 border-[#01329C] shadow-2xl fixed top-26"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`flex flex-col space-y-4 p-6 lg:p-8 
                    ${index !== 0 ? "lg:border-l lg:border-dotted lg:border-gray-400" : ""}
                    ${index % 2 !== 0 ? "sm:border-l sm:border-dotted sm:border-gray-400 lg:border-l" : ""}
                  `}
                >
                  <h3 className="text-[#01329C] font-bold text-lg mb-2 cursor-pointer hover:underline">
                    {category.title}
                  </h3>

                  <ul className="space-y-3">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-gray-600 font-medium hover:text-[#01329C] transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {mobileNav && (
        <nav className="md:hidden bg-white w-full fixed left-0 top-24 z-10">
          <ul className="flex flex-col font-semibold text-lg text-[#808080] px-4 pb-30">
            <li className="border-b border-t py-6 flex items-center justify-between">
              <a href="">Home</a>
            </li>

            <li className="border-b py-6 flex items-center justify-between">
              <a href="">About us</a>
            </li>

            <li className="border-b py-6 flex items-center justify-between">
              <a href="">Our Services</a>
            </li>

            <li className="border-b py-6 flex items-center justify-between">
              <a href="">Contact us</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Navbar
