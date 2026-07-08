import { FaBalanceScale, FaBuilding } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { PiHandshakeFill } from "react-icons/pi"
import { SiTicktick } from "react-icons/si"
import { steps, tabs } from "../data"
import { useState } from "react"
// import { HeroCarousel } from "../components/HeroSection"
import { Link } from "react-router-dom"
import Reviews from "../components/Reviews"
import {
  FaCircleCheck,
  FaBoltLightning,
  FaHouseMedical,
  FaShieldHalved,
  FaUserDoctor,
} from "react-icons/fa6"
// Embla carousel
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

function Home() {
  // For services we offer
  const [activeTab, setActiveTab] = useState(0)
  const current = tabs[activeTab]

  const benefits = [
    { text: "Certified Laboratory", icon: FaCircleCheck },
    { text: "Fast Turnaround", icon: FaBoltLightning },
    { text: "Home Sample Collection", icon: FaHouseMedical },
    { text: "Confidential Results", icon: FaShieldHalved },
    { text: "Professional Support", icon: FaUserDoctor },
  ]

  // Embla carousel
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500 })])
  return (
    <div>
      {/* Hero section with swiper */}
      {/* <HeroCarousel /> */}

      <div className="overflow-hidden w-full" ref={emblaRef}>
        {/* flex container  */}
        <div className="flex">
          <section className="relative flex-[0_0_100%] min-h-75 md:min-h-150 flex items-center bg-[#01329C] py-20">
            <img
              src="/lab-guy-testing.png"
              alt="Laboratory Microscope"
              className="hidden md:block absolute inset-0 h-full w-full object-cover object-right"
            />
            {/* 2. Gradient Overlay: Only active on md+ screens */}
            <div
              className="absolute inset-0 md:bg-linear-to-r md:from-[#01329C] md:via-[#01329C]/80 md:to-transparent"
              /* Inline style as a backup for precise control over the fade point */
              style={{
                background:
                  "linear-gradient(90deg, #01329C 0%, #01329C 45%, rgba(1, 50, 156, 0) 100%)",
              }}
            />

            {/* 3. Content: Centered on mobile, left-aligned on desktop */}
            <div className="relative z-10 w-full px-6 md:px-12 text-left text-white max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold leading-tight md:text-5xl max-w-2xl">
                Accurate Laboratory Testing Made Simple
              </h1>
              <p className="mt-4 text-lg md:text-xl opacity-90 max-w-150 mb-10">
                For individuals, businesses, and organizations. Book tests, request quotes, and
                access professional support with ease.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="#"
                  className="bg-white text-[#01329C] text-lg py-3 px-5 rounded-full hover:opacity-85 hover:scale-x-105 transition-all font-bold text-center"
                >
                  Request a quote
                </Link>
                <Link
                  to="/book-appointment"
                  className="bg-[#9B0100] text-lg px-5 py-3 rounded-full hover:opacity-85 hover:scale-x-105 transition-all text-white font-bold text-center"
                >
                  Book appointment
                </Link>
              </div>
            </div>
          </section>
          <section className="relative flex-[0_0_100%] min-h-75 md:min-h-150 flex items-center bg-[#01329C] py-20">
            <img
              src="/lab-attendants-working.png"
              alt="Laboratory Microscope"
              className="hidden md:block absolute scale-x-[-1] inset-0 h-full w-full object-cover object-right"
            />

            {/* 2. Gradient Overlay: Only active on md+ screens */}
            <div
              className="absolute inset-0 scale-x-[-1]  md:bg-linear-to-r md:from-[#01329C] md:via-[#01329C]/80 md:to-transparent"
              style={{
                background:
                  "linear-gradient(90deg, #01329C 0%, #01329C 45%, rgba(1, 50, 156, 0) 100%)",
              }}
            />

            {/* 3. Content: Centered on mobile, left-aligned on desktop */}
            <div className="relative z-10 px-6 md:px-12 text-left text-white md:ml-auto w-max">
              <h1 className="text-3xl font-bold leading-tight md:text-5xl max-w-[340px] md:max-w-[600px] mb-8">
                Your Trusted Partner in Medical Excellence
              </h1>

              {/* Icon list */}
              <ul className="space-y-4 max-w-150">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-lg md:text-xl font-medium"
                    >
                      <div className="flex items-center justify-center w-6 h-6 text-[#9B0100] bg-white rounded-full shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="opacity-95">{benefit.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* Different types of services with icons  */}
      <section className="pt-18 ">
        <h3 className="text-center text-[#01329C] text-4xl md:text-5xl font-bold pb-20">
          WHO WE SERVE
        </h3>
        <div className="max-w-7xl mx-auto grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center px-4 pb-26">
          <div className="flex flex-col items-center">
            <div className="border-10 border-[#01329C] rounded-full size-30 grid place-items-center mb-4">
              <IoIosPeople color="#01329C" size={70} />
            </div>
            <h3 className="text-[#01329C] font-semibold text-lg mb-2">Individuals</h3>
            <p className="max-w-60 text-center text-sm text-[#666] font-medium mb-5">
              Personal health testing and consultations
            </p>
            <Link
              to="/book-appointment"
              className="text-white bg-[#01329C] py-3 px-5 rounded-full font-medium hover:opacity-85 hover:scale-x-105 transition-all"
            >
              Book appointment
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-10 border-[#b855ac] rounded-full size-30 grid place-items-center mb-4">
              <FaBalanceScale color="#b855ac" size={70} />
            </div>
            <h3 className="text-[#b855ac] font-semibold text-lg mb-2">Businesses</h3>
            <p className="max-w-60 text-center text-sm text-[#666] font-medium mb-5">
              Staff testing and health services
            </p>
            <Link
              to="/book-appointment"
              className="text-white bg-[#b855ac] py-3 px-5 rounded-full font-medium hover:opacity-85 hover:scale-x-105 transition-all mt-auto"
            >
              Request Quote
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-10 border-[#e65400] rounded-full size-30 grid place-items-center mb-4">
              <FaBuilding color="#e65400" size={70} />
            </div>
            <h3 className="text-[#e65400] font-semibold text-lg mb-2">Corporate Organizations</h3>
            <p className="max-w-60 text-center text-sm text-[#666] font-medium mb-5">
              Large-scale and compliance testing
            </p>
            <Link
              to="/book-appointment"
              className="text-white bg-[#e65400] py-3 px-5 rounded-full font-medium hover:opacity-85 hover:scale-x-105 transition-all mt-auto"
            >
              Request Quote
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-10 border-[#0097A9] rounded-full size-30 grid place-items-center mb-4">
              <PiHandshakeFill color="#0097A9" size={70} />
            </div>
            <h3 className="text-[#0097A9] font-semibold text-lg mb-2">Employment & Drug Testing</h3>
            <p className="max-w-60 text-center text-sm text-[#666] font-medium mb-5">
              Screening for hiring and workplace safety
            </p>
            <Link
              to="/book-appointment"
              className="text-white bg-[#0097A9] py-3 px-5 rounded-full font-medium hover:opacity-85 hover:scale-x-105 transition-all mt-auto"
            >
              Book appointment
            </Link>
          </div>
        </div>
      </section>

      {/* The expert authority you can trust  */}
      <section className="py-26 bg-[#BFD3FF]">
        <h3 className="text-center text-[#01329C] text-4xl md:text-5xl font-bold uppercase">
          The expert authority you can trust
        </h3>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-5 items-start px-4 pt-7 md:pt-10">
          <article className="w-full md:w-1/2 mx-auto md:text-center">
            <header className="mb-3">
              <h3 className="text-[#01329C] font-bold text-2xl">Why Choose EC Laboratory</h3>
            </header>
            <ul className="space-y-4 md:space-y-6 flex flex-col md:items-center font-semibold">
              <li className="flex gap-2 items-center text-[#666]">
                <SiTicktick color="#01329C" />
                <p>Fast and accurate results</p>
              </li>
              <li className="flex gap-2 items-start text-[#666]">
                <SiTicktick color="#01329C" size={20} className="mt-1" />
                <p>Access to expert pathologists and medical consultations</p>
              </li>
              <li className="flex gap-2 items-center text-[#666]">
                <SiTicktick color="#01329C" />
                <p>All your tests in one place</p>
              </li>
              <li className="flex gap-2 items-start text-[#666]">
                <SiTicktick color="#01329C" size={20} className="mt-1" />
                <p>Home and office sample collection services are available</p>
              </li>
              <li className="flex gap-2 items-center text-[#666]">
                <SiTicktick color="#01329C" />
                <p>Reports are user-friendly and confidential</p>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* Our Services  */}
      <section className="py-20">
        <h3 className="text-center text-[#01329C] text-4xl md:text-5xl font-bold uppercase">
          Our Services
        </h3>
        <div className="max-w-7xl mx-auto px-4 py-7 md:py-10">
          <div className="">
            {/* Tab Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-5 items-end gap-1 px-4">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 flex items-center justify-between py-3 text-sm font-bold rounded-b-lg rounded-t-lg md:rounded-b-none transition-colors duration-200 
                  ${
                    activeTab === index
                      ? `${tab.color} text-white`
                      : `bg-transparent ${tab.textColor}`
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-lg md:hidden ${tab.textColor}`}>
                    {activeTab === index + 1 ? "" : "+"}
                  </span>
                </button>
              ))}
            </div>

            {/* Content Container */}
            <div
              className={`border-2 ${current.borderColor} rounded-xl p-8 -mt-0.5 transition-all duration-300`}
            >
              {/* Initial Note (Pre-Heading) */}
              {current.content.preHeading && (
                <p
                  className="text-lg font-semibold mb-4 italic"
                  style={{ color: current.textColor.replace("text-", "") }}
                >
                  {current.content.preHeading}
                </p>
              )}

              {/* Structured List */}
              <ul className="space-y-4 mb-8">
                {current.content.listItems.map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <div className="flex items-start gap-2">
                      <span className={`${current.textColor} font-bold text-lg leading-none`}>
                        •
                      </span>
                      <span className="font-medium text-gray-800">{item.label}</span>
                    </div>

                    {/* Sub-items (for DNA Testing style) */}
                    {item.subItems && (
                      <ul className="ml-8 mt-2 space-y-1 border-l-2 pl-4 border-gray-100">
                        {item.subItems.map((sub, j) => (
                          <li key={j} className="text-gray-600 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Important Footer Note */}
              {current.content.footerNote && (
                <div
                  className="bg-gray-50 p-4 rounded-lg border-l-4 mb-8 text-sm text-gray-700 italic"
                  style={{ borderColor: current.borderColor.replace("border-", "") }}
                >
                  {current.content.footerNote}
                </div>
              )}

              {/* CTA Button */}
              <Link
                to="/book-appointment"
                className={`border-2 ${current.borderColor} ${current.textColor} px-8 py-3 rounded-full font-bold hover:${current.color} transition-all`}
              >
                {current.content.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#002B9A] py-16 px-4 font-sans mb-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-24 tracking-wide">
            HOW IT WORKS
          </h2>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                {/* Number Box */}
                <div className="bg-white w-12 h-12 flex items-center justify-center rounded-md mb-6 shadow-lg">
                  <span className="text-[#FF4D4D] text-2xl font-semibold">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-bold mb-3 tracking-wider">{step.title}</h3>

                {/* Description */}
                <p className="text-white text-lg font-light leading-relaxed max-w-50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials  */}
      <section className="py-10">
        <h3 className="text-center text-[#01329C] text-4xl md:text-5xl font-bold mb-16 uppercase">
          Real reviews from real people
        </h3>
        <Reviews />
      </section>

      <section
        className="relative w-full h-100 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 43, 154, 0.85), rgba(0, 43, 154, 0.85)), url('/nurse-lab.jpg')`,
        }}
      >
        <div className="text-center px-4 max-w-2xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            NOT SURE WHAT YOU NEED
          </h2>

          <p className="text-white text-xl md:text-2xl font-light mb-8 leading-snug">
            Speak with a professional and <br className="hidden md:block" /> get the right guidance.
          </p>

          <Link
            to="/book-appointment"
            className="bg-[#9B0100] text-white px-8 py-3 text-lg font-medium rounded-full transition-colors duration-200"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
