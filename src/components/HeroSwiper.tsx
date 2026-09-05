import { useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { FaBoltLightning, FaHouseMedical, FaShieldHalved, FaUserDoctor } from "react-icons/fa6"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

const benefits = [
  // { text: "Certified Laboratory", icon: FaCircleCheck },
  { text: "Fast Turnaround", icon: FaBoltLightning },
  { text: "Home Sample Collection", icon: FaHouseMedical },
  { text: "Confidential Results", icon: FaShieldHalved },
  { text: "Free medical consult", icon: FaUserDoctor },
]

function HeroSwiper() {
  const [isHovered, setIsHovered] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5500 })])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="overflow-hidden relative w-full"
      ref={emblaRef}
    >
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
              Accurate and Reliable Testing in One Place
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90 max-w-150 mb-10">
              Book all screening, diagnostic and wellness test with access to free expert
              consultation
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/book-appointment"
                className="bg-white text-[#01329C] text-lg py-3 px-5 rounded-full hover:opacity-85 hover:scale-x-105 transition-all font-bold text-center"
              >
                Request a quote
              </a>
              <a
                href="/book-appointment"
                className="bg-[#9B0100] text-lg px-5 py-3 rounded-full hover:opacity-85 hover:scale-x-105 transition-all text-white font-bold text-center"
              >
                Book appointment
              </a>
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
            <h1 className="text-3xl font-bold leading-tight md:text-5xl max-w-85 md:max-w-150 mb-8">
              Your Trusted Partner in Laboratory Diagnosis
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

        {/*4. Global labconnect  */}
        <section className="relative flex-[0_0_100%] min-h-75 md:min-h-150 flex items-center bg-[#01329C] py-20">
          <img
            src="/global-labconnect-hero.JPG"
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
            <img
              src="/global-labconnect-logo.png"
              alt="Global labconnect"
              className="size-27 md:size-30 mb-5"
            />
            <h1 className="text-3xl font-bold leading-tight md:text-5xl max-w-2xl mb-4">
                Global Labconnect
              </h1>
            <h1 className="text-2xl font-bold leading-tight md:text-3xl max-w-2xl">
              Access to global laboratory innovation and diagnostic
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90 max-w-150 mb-13">
              Through sustainable patnerships and evidence based solutions, GLC helps build resilient
              laboratory systems that proves patient outcome and public health
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-3"> */}
            <a
              href="/global-labconnect-brochure.pdf"
              download
              className="bg-[#9B0100] text-lg px-5 py-3 rounded-full hover:opacity-85 hover:scale-x-105 transition-all text-white font-bold text-center"
            >
              Download Brochure
            </a>
            {/* </div> */}
          </div>
        </section>
      </div>
      {isHovered && (
        <div>
          <button 
            className="absolute top-1/2 hidden sm:block left-1 sm:text-3xl lg:text-4xl text-white opacity-70 hover:opacity-100 transition-opacity -translate-y-1/2 cursor-pointer z-20"
            onClick={scrollPrev}
          >
            <FaChevronLeft />
          </button>

          <button 
            className="absolute top-1/2 hidden sm:block right-1 sm:text-3xl lg:text-4xl text-white opacity-70 hover:opacity-100 transition-opacity -translate-y-1/2 cursor-pointer z-20"
            onClick={scrollNext}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}

export default HeroSwiper
