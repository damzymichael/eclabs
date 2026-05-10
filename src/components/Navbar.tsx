import { useState } from "react"
import { TiThMenu } from "react-icons/ti"
import { FaPhoneAlt } from "react-icons/fa"
import { IoMail } from "react-icons/io5"

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false)
  return (
    <div className="sticky top-0 z-10">
      <div className="">
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
    </div>
  )
}

export default Navbar
