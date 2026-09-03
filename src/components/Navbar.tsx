import { useState, useEffect } from "react"
import { TiThMenu } from "react-icons/ti"
import {
  FaPhoneAlt,
  FaChevronDown,
  FaHeartbeat,
  FaTint,
  FaRibbon,
  FaMale,
  FaChild,
  FaPlane,
  FaVenusMars,
  FaGraduationCap,
  FaBriefcase,
  FaUserFriends,
} from "react-icons/fa"
import { IoMail } from "react-icons/io5"
import { MdBloodtype, MdPregnantWoman } from "react-icons/md"
import {
  FaBacteria,
  FaVial,
  FaDna,
  FaMicroscope,
  FaSuitcaseMedical,
  FaScaleBalanced,
  FaVirus,
  FaBabyCarriage,
  FaPassport,
} from "react-icons/fa6"
import { GiAntibody, GiKidneys, GiLiver } from "react-icons/gi"

const categories = [
  {
    title: "Diagnostic tests",
    link: "/services/diagnostic-tests",
    links: [
      { name: "Haematology", icon: <MdBloodtype className="text-red-600 text-[1.35rem]" /> },
      {
        name: "Medical Microbiology",
        icon: <FaBacteria className="text-[#01329C] text-[1.35rem]" />,
      },
      { name: "Clinical Chemistry", icon: <FaVial className="text-[#01329C] text-[1.35rem]" /> },
      { name: "Molecular Diagnostics", icon: <FaDna className="text-[#01329C] text-[1.35rem]" /> },
      { name: "Immunology", icon: <GiAntibody className="text-[#01329C] text-[1.35rem]" /> },
      { name: "Histopathology", icon: <FaMicroscope className="text-[#01329C] text-[1.35rem]" /> },
    ],
  },
  {
    title: "DNA Testing",
    link: "/services/dna-testing",
    links: [
      { name: "Paternity Testing", icon: <FaMale className="text-[#01329C] text-[1.35rem]" /> },
      {
        name: "Maternity Testing",
        icon: <MdPregnantWoman className="text-[#01329C] text-[1.35rem]" />,
      },
      {
        name: "Prenatal Paternity",
        icon: <FaBabyCarriage className="text-[#01329C] text-[1.35rem]" />,
      },
      { name: "Baby Gender Test", icon: <FaVenusMars className="text-[#01329C] text-[1.35rem]" /> },
      { name: "Genetic Disease Test", icon: <FaDna className="text-[#01329C] text-[1.35rem]" /> },
      {
        name: "Immigration testing",
        icon: <FaPassport className="text-[#01329C] text-[1.35rem]" />,
      },
    ],
  },
  {
    title: "General Health Screening",
    link: "/services/general-health-screening",
    links: [
      { name: "Hypertension", icon: <FaHeartbeat className="text-[#106c27] text-[1.35rem]" /> },
      { name: "Diabetes", icon: <FaTint className="text-[#106c27] text-[1.35rem]" /> },
      { name: "Kidney Health", icon: <GiKidneys className="text-[#106c27] text-[1.35rem]" /> },
      { name: "Liver Health", icon: <GiLiver className="text-[#106c27] text-[1.35rem]" /> },
      { name: "Cancer Screening", icon: <FaRibbon className="text-[#106c27] text-[1.35rem]" /> },
      { name: "Prostate Health", icon: <FaMale className="text-[#01329C] text-[1.35rem]" /> },
      { name: "Preschool Medicals", icon: <FaChild className="text-[#106c27] text-[1.35rem]" /> },
      {
        name: "Pre-employment Medicals",
        icon: <FaSuitcaseMedical className="text-[#106c27] text-[1.35rem]" />,
      },
      {
        name: "Travel Medical Screening",
        icon: <FaPlane className="text-[#106c27] text-[1.35rem]" />,
      },
    ],
  },
  {
    title: "Drug & STI Testing",
    link: "/services/drug-sti-testing",
    links: [
      { name: "Schools", icon: <FaGraduationCap className="text-[#43158c] text-[1.35rem]" /> },
      { name: "Workplace", icon: <FaBriefcase className="text-[#43158c] text-[1.35rem]" /> },
      { name: "Legal", icon: <FaScaleBalanced className="text-[#43158c] text-[1.35rem]" /> },
      {
        name: "Family Peace of Mind",
        icon: <FaUserFriends className="text-[#43158c] text-[1.35rem]" />,
      },
      { name: "STI Screening", icon: <FaVenusMars className="text-[#01329C] text-[1.35rem]" /> },
      {
        name: "Infectious Diseases",
        icon: <FaBacteria className="text-[#01329C] text-[1.35rem]" />,
      },
      { name: "HBV & HCV Viral Load", icon: <FaVirus className="text-[#01329C] text-[1.35rem]" /> },
    ],
  },
]

// Todo Mobile navigation
function Navbar() {
  const [mobileNav, setMobileNav] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileNav])
  return (
    <div className="sticky top-0 z-50">
      <div className="">
        <aside className="bg-[#01329C] text-white text-sm sm:text-base px-4 py-2 flex items-center gap-5">
          <a href="tel:+2349033596255">
            <div className="flex gap-2 items-center">
              <FaPhoneAlt color="white" size={15} className="mt-0.5" />
              <p className="font-semibold">+2349033596255</p>
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
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about-us">About us</a>
              </li>

              <li
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative flex items-center gap-2 py-4"
              >
                <a href="/services">Our Services</a>
                <FaChevronDown className="mt-1" />
              </li>

              <li>
                <a
                  href="/book-appointment"
                  className="bg-[#9B0100] px-5 py-3 rounded-full text-white"
                >
                  Book appointment
                </a>
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
            <div className="ml-6 lg:ml-8">
              <a
                download
                href="/ec_labs_full_test_menu.pdf"
                className="text-white bg-[#01329C] py-3 px-5 rounded-full font-medium cursor-pointer hover:opacity-85 hover:scale-x-105 transition-all"
              >
                Download full test menu
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`flex flex-col space-y-4 p-6 lg:p-8 
                    ${index !== 0 ? "lg:border-l lg:border-dotted lg:border-gray-400" : ""}
                    ${index % 2 !== 0 ? "sm:border-l sm:border-dotted sm:border-gray-400 lg:border-l" : ""}
                  `}
                >
                  <a
                    href={category.link}
                    className="text-[#01329C] font-bold text-lg mb-2 cursor-pointer hover:underline"
                  >
                    {category.title}
                  </a>

                  <ul className="space-y-3">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-gray-600 font-medium hover:text-[#01329C] transition-colors duration-200 flex items-center gap-2"
                        >
                          {typeof link === "string" ? (
                            link
                          ) : (
                            <>
                              {link.icon}
                              <span>{link.name}</span>
                            </>
                          )}
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
        <>
          <div
            className="fixed inset-0 top-26 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileNav(false)}
          />
          <nav className="md:hidden bg-white w-full fixed left-0 top-26 z-50 max-h-[calc(100vh-104px)] overflow-y-auto shadow-xl pb-4">
            <ul className="flex flex-col font-semibold text-lg text-[#808080] px-6">
              <li className="border-b border-gray-100 py-5">
                <a href="/" onClick={() => setMobileNav(false)}>
                  Home
                </a>
              </li>

              <li className="border-b border-gray-100 py-5">
                <a href="/about-us" onClick={() => setMobileNav(false)}>
                  About us
                </a>
              </li>

              <li className="border-b border-gray-100 py-5 flex flex-col">
                <span className="mb-3">Our Services</span>
                <ul className="flex flex-col pl-2 space-y-3 font-medium text-[1.05rem] text-[#01329C]">
                  {categories.map((category, idx) => (
                    <li key={idx}>
                      <a className="underline" href={category.link} onClick={() => setMobileNav(false)}>
                        {category.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="py-5">
                <a href="/book-appointment" onClick={() => setMobileNav(false)}>
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  )
}

export default Navbar
