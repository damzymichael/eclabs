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
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { HeroCarousel } from "./HeroSection"
import { TiThMenu } from "react-icons/ti"

function App() {
  // For services we offer
  const [activeTab, setActiveTab] = useState(0)
  const current = tabs[activeTab]

  const [mobileNav, setMobileNav] = useState(false)

  // reviews carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" })

  //@ts-ignore
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi])

  // Star Component using React Icons
  const TrustStars = () => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="bg-[#00b67a] p-[2px]">
          <IoStarSharp className="text-white text-[12px]" />
        </div>
      ))}
    </div>
  )
  return (
    <div className="min-w-xs">
      <div className="sticky top-0 z-10">
        <aside className="bg-[#01329C] text-white px-4 py-2 flex items-center gap-5">
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
                <a href="">Contact us</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      {mobileNav && (
        <nav className="md:hidden bg-white w-full fixed left-0 top-26 z-10">
          <ul className="flex flex-col font-semibold text-lg text-[#808080] px-4 pb-30">
            <li className="border-b border-t py-7 flex items-center justify-between">
              <a href="">Home</a>
            </li>

            <li className="border-b py-7 flex items-center justify-between">
              <a href="">About us</a>
            </li>

            <li className="border-b py-7 flex items-center justify-between">
              <a href="">Our Services</a>
            </li>

            <li className="border-b py-7 flex items-center justify-between">
              <a href="">Contact us</a>
            </li>
          </ul>
        </nav>
      )}

      {/* Hero section with swiper */}
      <HeroCarousel />

      {/* Different types of services with icons  */}
      <section>
        <div className="max-w-7xl mx-auto grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center px-4 py-14">
          <div className="flex flex-col items-center">
            <div className="border-10 border-[#01329C] rounded-full size-30 grid place-items-center mb-4">
              <IoIosPeople color="#01329C" size={70} />
            </div>
            <h3 className="text-[#01329C] font-semibold text-lg mb-2">Testing for the public</h3>
            <p className="max-w-60 text-center text-sm text-[#666] font-medium mb-5">
              Award-winning services including DNA, Drug, Alcohol and Health testing, as well as
              testing for official matters
            </p>
            <button className="text-white bg-[#01329C] py-3 px-5 rounded-full font-medium hover:opacity-85 hover:scale-x-105 transition-all">
              Learn more
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-10 border-[#b855ac] rounded-full size-30 grid place-items-center mb-4">
              <FaBalanceScale color="#b855ac" size={70} />
            </div>
            <h3 className="text-[#b855ac] font-semibold text-lg mb-2">Testing for the public</h3>
            <p className="max-w-60 text-center text-sm text-[#666] font-medium mb-5">
              Award-winning services including DNA, Drug, Alcohol and Health testing, as well as
              testing for official matters
            </p>
            <button className="text-white bg-[#b855ac] py-3 px-5 rounded-full font-medium hover:opacity-85 hover:scale-x-105 transition-all">
              Learn more
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-10 border-[#e65400] rounded-full size-30 grid place-items-center mb-4">
              <FaBuilding color="#e65400" size={70} />
            </div>
            <h3 className="text-[#e65400] font-semibold text-lg mb-2">Testing for the public</h3>
            <p className="max-w-60 text-center text-sm text-[#666] font-medium mb-5">
              Award-winning services including DNA, Drug, Alcohol and Health testing, as well as
              testing for official matters
            </p>
            <button className="text-white bg-[#e65400] py-3 px-5 rounded-full font-medium hover:opacity-85 hover:scale-x-105 transition-all">
              Learn more
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-10 border-[#0097A9] rounded-full size-30 grid place-items-center mb-4">
              <PiHandshakeFill color="#0097A9" size={70} />
            </div>
            <h3 className="text-[#0097A9] font-semibold text-lg mb-2">Testing for the public</h3>
            <p className="max-w-60 text-center text-sm text-[#666] font-medium mb-5">
              Award-winning services including DNA, Drug, Alcohol and Health testing, as well as
              testing for official matters
            </p>
            <button className="text-white bg-[#0097A9] py-3 px-5 rounded-full font-medium hover:opacity-85 hover:scale-x-105 transition-all">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* The expert authority you can trust  */}
      <section>
        <header className="bg-[#01329C] text-white px-4 py-3 mb-5">
          <h3 className="text-center text-2xl">The expert authority you can trust</h3>
        </header>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-5 items-start px-4 py-7 md:py-10">
          <article className="w-full md:w-1/2">
            <header className="mb-3">
              <h3 className="text-[#01329C] font-bold text-2xl">Why Choose EC Laboratory</h3>
            </header>
            <ul className="text-sm space-y-4">
              <li className="flex gap-2 items-center text-[#666]">
                <SiTicktick color="#01329C" />
                <p>Rapid results guaranteed</p>
              </li>
              <li className="flex gap-2 items-center text-[#666]">
                <SiTicktick color="#01329C" />
                <p>Rated ‘Excellent’ on Trustpilot</p>
              </li>
              <li className="flex gap-2 items-center text-[#666]">
                <SiTicktick color="#01329C" />
                <p>Testing performed at our state-of-the-art UK laboratories</p>
              </li>
              <li className="flex gap-2 items-center text-[#666]">
                <SiTicktick color="#01329C" />
                <p> Court-approved testing for legal matterss</p>
              </li>
              <li className="flex gap-2 items-center text-[#666]">
                <SiTicktick color="#01329C" />
                <p>Award-winning</p>
              </li>
              <li className="flex gap-2 items-center text-[#666]">
                <SiTicktick color="#01329C" />
                <p>UKAS 17025, Lab 51 and UKAS 9001 accredited</p>
              </li>
            </ul>
          </article>

          <article className="w-full md:w-1/2">
            <header className="mb-3">
              <h3 className="text-[#01329C] font-bold text-2xl">Nationwide sample collection</h3>
            </header>
            <div className="grid md:grid-cols-3 gap-8 items-start mb-8 text-[#666]">
              <div className="md:col-span-2 space-y-4">
                <p className="leading-relaxed">
                  Our UK-wide network of professional sample collectors are available 24/7, 365 days
                  of the year, to collect samples from your home, office, or any other location.
                </p>
                <p className="leading-relaxed">
                  Our collectors are specially trained to collect a range of samples including cheek
                  cell DNA, urine, hair, nails and more.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <img src="map.webp" alt="UK Map" className="opacity-80" />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* What we offer  */}
      <section>
        <header className="bg-[#01329C] text-white px-4 py-3 mb-5">
          <h3 className="text-center text-2xl">What we offer</h3>
        </header>
        <div className="max-w-7xl mx-auto px-4 py-7 md:py-10">
          <div className="">
            {/* Tab Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-4 items-end gap-1 px-4">
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
              <div className="space-y-6 text-gray-600 leading-relaxed">
                {current.content.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-gray-800 mb-4 text-lg">Find out more...</h4>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {current.content.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`${current.color} text-white px-5 py-2 rounded-full text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`border-2 ${current.borderColor} ${current.textColor} px-6 py-2 rounded-full font-bold hover:${current.color} transition-all`}
                >
                  {current.content.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials  */}
      <section>
        <header className="bg-[#01329C] text-white px-4 py-3 mb-5">
          <h3 className="text-center text-2xl">Hear from our previous customers</h3>
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
                  className="min-w-full md:min-w-[calc(25%-12px)] bg-[#f5f5f5] p-5 flex flex-col h-60"
                >
                  <div className="flex items-center justify-between mb-4">
                    <TrustStars />
                    <div className="flex items-center text-[#696a6a] text-[13px] font-medium">
                      <FaCheckCircle className="mr-1 text-[#696a6a]" />
                      Verified
                    </div>
                  </div>

                  <h3 className="font-bold text-[16px] mb-2 truncate">{review.title}</h3>
                  <p className="text-[14px] line-clamp-3 mb-auto text-[#191919] leading-snug">
                    {review.body}
                  </p>

                  <div className="mt-4 text-[13px] font-bold">
                    {review.author},{" "}
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

      <footer className="bg-[#222222] text-white font-sans">
        {/* Top Section: Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-[#1d5fb9] font-bold mb-6">About AlphaBiolabs</h3>
            <p className="text-sm leading-relaxed mb-8">
              Established in August 2004, AlphaBiolabs is an award winning DNA Paternity, Drug and
              Alcohol Testing Laboratory. We provide testing to the legal profession, corporations
              and members of the public.
            </p>
          </div>

          {/* Column 2: Blog Posts */}
          <div>
            <h3 className="text-[#1d5fb9] font-bold mb-6">From the blog</h3>
            <ul className="space-y-4 text-sm">
              {[
                "Alcohol misuse in the UK: What the latest evidence means for family proceedings",
                "Coeliac Awareness Month: How genetic testing can support early diagnosis",
                "Beyond the cut-off: How AlphaBiolabs interprets drug and alcohol test results for family cases",
                "Key changes to UKVI guidance in 2026: what they mean for immigration DNA testing",
                "Drug testing in family law: understanding drug groups, classifications and misuse",
              ].map((post, i) => (
                <li key={i} className="flex items-start gap-2 group cursor-pointer">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                  <span className="group-hover:underline">{post}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-[#1d5fb9] font-bold mb-6">Contact us</h3>
            <div className="text-sm space-y-1 mb-6">
              <p>14 Webster Court</p>
              <p>Carina Park</p>
              <p>Warrington</p>
              <p>Cheshire</p>
              <p>WA5 8WD</p>
              <p>United Kingdom</p>
            </div>
            <div className="text-sm space-y-2">
              <p>T: 0333 600 1300</p>
              <p>Int: (+44)1925 255450</p>
              <p>
                E: <span className="hover:underline cursor-pointer">info@alphabiolabs.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section: Utility Links */}
        <div className="bg-[#333333] border-y border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-[13px] font-medium">
              {[
                "Cookie Policy",
                "Terms & Conditions",
                "Privacy",
                "Complaints Policy",
                "Carbon Reduction Plan",
                "Environmental Policy",
                "Quote Forms",
                "AlphaBiolabs USA",
                "AlphaBiolabs Ireland",
                "Discount Codes",
              ].map((link) => (
                <li key={link} className="hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Social */}
        <div className="bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-gray-400">
              © 2026 AlphaBiolabs Ltd - 14 Webster Court, Carina Park, Warrington WA5 8WD
            </p>

            <div className="flex gap-6">
              <FaFacebookF
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                size={20}
              />
              <FaTwitter
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                size={20}
              />
              <FaLinkedinIn
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                size={20}
              />
              <FaInstagram
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                size={20}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
