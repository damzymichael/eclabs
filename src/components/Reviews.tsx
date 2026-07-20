import { useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { reviews } from "../lib/data"
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5"
import { IoStarSharp } from "react-icons/io5"
import { FaCheckCircle } from "react-icons/fa"

function Reviews() {
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
  )
}

export default Reviews
