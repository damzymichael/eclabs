import { useCallback, useEffect } from "react"
import { FaPhoneAlt, FaBalanceScale, FaBuilding, FaCheckCircle } from "react-icons/fa"
import { IoMail, IoStarSharp } from "react-icons/io5"
import { IoIosPeople } from "react-icons/io"
import { PiHandshakeFill } from "react-icons/pi"
import { SiTicktick } from "react-icons/si"
import { tabs } from "./data"
import { useState } from "react"
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5"
import useEmblaCarousel from "embla-carousel-react"
import { reviews } from "./data"
import { HeroCarousel } from "./HeroSection"
import { TiThMenu } from "react-icons/ti"
import Footer from "./components/Footer"

function App() {
  // For services we offer
  const [activeTab, setActiveTab] = useState(0)
  const current = tabs[activeTab]

  const [mobileNav, setMobileNav] = useState(false)

  // reviews carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" })

  // const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      // setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi])

  // Star Component using React Icons
  const TrustStars = () => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="bg-[#00b67a] p-0.5">
          <IoStarSharp className="text-white text-[12px]" />
        </div>
      ))}
    </div>
  )
  return (
    <div className="min-w-xs">
      <div className="sticky top-0 z-10">
        <aside className="bg-[#01329C] text-white text-sm sm:text-base px-4 py-2 flex items-center gap-5">
          <a>
            <div className="flex gap-2 items-center">
              <FaPhoneAlt color="white" size={15} className="mt-0.5" />
              <p className="font-semibold">+2347012345678</p>
            </div>
          </a>

          <a>
            <div className="flex gap-2 items-center">
              <IoMail color="white" size={20} className="mt-.5" />
              <p className="font-semibold">info@eclaboratory.com</p>
            </div>
          </a>
        </aside>
        <header className="py-2 px-4 flex items-center justify-between bg-white">
          <a href="/">
            <img src="/eclab-full-logo.png" className="h-12" alt="Logo" />
          </a>

          <div className="md:hidden">
            <button onClick={() => setMobileNav(!mobileNav)}>
              <TiThMenu size={25} color="#01329C" />
            </button>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-lg font-semibold text-[#808080]">
              <li>
                <a href="">Home</a>
              </li>

              <li>
                <a href="">About us</a>
              </li>

              <li>
                <a href="">Our Services</a>
              </li>

              <li>
                <a href="" className="bg-[#9B0100] px-5 py-3 rounded-full text-white">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
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

      {/* Hero section with swiper */}
      <HeroCarousel />
      {/* <section className="bg-blue-900 min-h-[50vh]"></section> */}

      {/* Different types of services with icons  */}
      <section>
        <div className="max-w-7xl mx-auto grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-stretch px-4 py-14">
          <div className="flex flex-col items-center">
            <div className="border-10 border-[#01329C] rounded-full size-30 grid place-items-center mb-4">
              <IoIosPeople color="#01329C" size={70} />
            </div>
            <h3 className="text-[#01329C] font-semibold text-lg mb-2">Individuals</h3>
            <p className="max-w-60 text-center text-sm text-[#666] font-medium mb-5">
              Personal health testing and consultations
            </p>
            <button className="text-white bg-[#01329C] py-3 px-5 rounded-full font-medium hover:opacity-85 hover:scale-x-105 transition-all">
              Book appointment
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-10 border-[#b855ac] rounded-full size-30 grid place-items-center mb-4">
              <FaBalanceScale color="#b855ac" size={70} />
            </div>
            <h3 className="text-[#b855ac] font-semibold text-lg mb-2">Businesses</h3>
            <p className="max-w-60 text-center text-sm text-[#666] font-medium mb-5">
              Staff testing and health services
            </p>
            <button className="text-white bg-[#b855ac] py-3 px-5 rounded-full font-medium hover:opacity-85 hover:scale-x-105 transition-all">
              Request Quote
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-10 border-[#e65400] rounded-full size-30 grid place-items-center mb-4">
              <FaBuilding color="#e65400" size={70} />
            </div>
            <h3 className="text-[#e65400] font-semibold text-lg mb-2">Corporate Organizations</h3>
            <p className="max-w-60 text-center text-sm text-[#666] font-medium mb-5">
              Large-scale and compliance testing
            </p>
            <button className="text-white bg-[#e65400] py-3 px-5 rounded-full font-medium hover:opacity-85 hover:scale-x-105 transition-all">
              Request Quote
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-10 border-[#0097A9] rounded-full size-30 grid place-items-center mb-4">
              <PiHandshakeFill color="#0097A9" size={70} />
            </div>
            <h3 className="text-[#0097A9] font-semibold text-lg mb-2">Employment & Drug Testing</h3>
            <p className="max-w-60 text-center text-sm text-[#666] font-medium mb-5">
              Screening for hiring and workplace safety
            </p>
            <button className="text-white bg-[#0097A9] py-3 px-5 rounded-full font-medium hover:opacity-85 hover:scale-x-105 transition-all">
              Book appointment
            </button>
          </div>
        </div>
      </section>

      {/* The expert authority you can trust  */}
      <section>
        <header className="bg-[#01329C] text-white px-4 py-3 mb-2">
          <h3 className="text-center text-2xl">The expert authority you can trust</h3>
        </header>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-5 items-start px-4 py-7 md:py-15">
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

      {/* What we offer  */}
      <section>
        <header className="bg-[#01329C] text-white px-4 py-3 mb-5">
          <h3 className="text-center text-2xl">Our Services</h3>
        </header>
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
              <button
                className={`border-2 ${current.borderColor} ${current.textColor} px-8 py-3 rounded-full font-bold hover:${current.color} transition-all`}
              >
                {current.content.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials  */}
      <section>
        <header className="bg-[#01329C] text-white px-4 py-3 mb-5">
          <h3 className="text-center text-2xl">Real reviews from real people</h3>
        </header>
        <div className="max-w-7xl mx-auto px-4 py-7 md:py-10 flex items-center mb-10">
          <button onClick={scrollPrev}>
            <IoChevronBackCircleOutline size={37} />
          </button>
          <div ref={emblaRef} className="overflow-hidden mx-2">
            <div className="flex min-w-0 flex-[0_0_100%] lg:flex-[0_0_25%] transition-transform duration-500 ease-out gap-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="min-w-full md:min-w-[calc(25%-12px)] bg-[#f5f5f5] p-5 flex flex-col h-64"
                >
                  <div className="flex items-center justify-between mb-4">
                    <TrustStars />
                    <div className="flex items-center text-[#696a6a] text-[13px] font-medium">
                      <FaCheckCircle className="mr-1 text-[#696a6a]" />
                      Verified
                    </div>
                  </div>

                  <h3 className="font-bold text-[16px] mb-2 truncate">{review.title}</h3>
                  <p className="text-[14px] line-clamp-5 mb-auto text-[#191919] leading-snug">
                    {review.body}
                  </p>

                  <div className="mt-4 text-[13px] font-bold">
                    {review.author}
                    {review.author != "" && ","}{" "}
                    <span className="font-normal text-[#696a6a]">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={scrollNext}>
            <IoChevronForwardCircleOutline size={37} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
