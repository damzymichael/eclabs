import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
// Specific brand blue hex
const BRAND_BLUE = "#01329C"

const slides = [
  {
    id: 1,
    title: "DNA, Drug, Alcohol & Health Testing",
    body: ["The UK’s No.1 testing laboratory"],
    image: "path-to-microscope.jpg", // image_8.png
  },
  {
    id: 2,
    title: "UK-wide sample collection",
    body: [
      "Nationwide network of sample collectors",
      "Expertly-trained to collect hair, nail, breath, urine, oral fluid, blood & fingerprint samples",
      "Chain of custody followed for legal and workplace sample collections",
    ],
    image: "path-to-swab.jpg", // image_9.png
  },
  {
    id: 3,
    title: "Rapid turnaround times",
    body: [
      "Highly competitive prices",
      "All tests performed at our state-of-the-art UK laboratory",
      "Accurate and reliable",
    ],
    image: "path-to-pipette.jpg", // image_10.png
  },
]

export const HeroCarousel = () => {
  // Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  // Hover and visibility state
  const [isHovered, setIsHovered] = useState(false)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  // Scroll functions
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  // Handle slide selection to manage button disabled states (even with looping)
  const onSelect = useCallback((emblaApi) => {
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    // onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div
      className="relative w-full aspect-21/9 md:aspect-3/1 overflow-hidden group min-h-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Embla Viewport */}
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        {/* 2. Embla Flex Container */}
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
              {/* Image Layer (Hidden on mobile) */}
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover hidden md:block"
              />

              {/* Visual Overlay Layer (Gradient + Custom Blue)
                On Mobile: Uses solid BRAND_BLUE.
                On Desktop (md:): Adds gradient overlay on top of the image.
              */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  backgroundColor: BRAND_BLUE, // Mobile solid background
                }}
              >
                {/* Desktop-only Gradient Overlay */}
                <div className="hidden md:block absolute inset-0 bg-linear-to-r from-[#01329C] via-[#01329C]/80 to-transparent" />
              </div>

              {/* Content Layer (Always visible, Z-indexed) */}
              <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-8 md:px-12">
                <div className="text-white max-w-2xl font-sans">
                  {/* Dynamic Title */}
                  <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
                    {slide.title}
                  </h1>

                  {/* Dynamic Body (handles single sentence and lists) */}
                  {slide.body.length === 1 ? (
                    <p className="text-lg md:text-2xl font-light opacity-90">{slide.body[0]}</p>
                  ) : (
                    <ul className="space-y-2 text-sm md:text-lg font-light list-disc list-inside opacity-90">
                      {slide.body.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Arrows (Visibility controlled by JS state: isHovered) */}
      {isHovered && (
        <>
          {/* Left Arrow */}
          <button
            className={`absolute top-1/2 left-4 z-30 -translate-y-1/2 text-white hover:text-gray-300 transition-all ${!canScrollPrev ? "opacity-30" : ""}`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <FaChevronLeft size={40} />
          </button>

          {/* Right Arrow */}
          <button
            className={`absolute top-1/2 right-4 z-30 -translate-y-1/2 text-white hover:text-gray-300 transition-all ${!canScrollNext ? "opacity-30" : ""}`}
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            <FaChevronRight size={40} />
          </button>
        </>
      )}
    </div>
  )
}
