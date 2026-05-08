import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-[#222222] text-white font-sans">
      {/* Top Section: Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap gap-10">
        {/* Column 1: About */}
        <div className="max-w-70">
          <h3 className="text-[#1d5fb9] font-bold mb-6">About EC Labs</h3>
          <p className="text-sm leading-relaxed mb-8">
            Established in August 2004, AlphaBiolabs is an award winning DNA Paternity, Drug and
            Alcohol Testing Laboratory. We provide testing to the legal profession, corporations and
            members of the public.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="min-w-50">
          <h3 className="text-[#1d5fb9] font-bold mb-6">Quick links</h3>
          <ul className="space-y-4 text-sm">
            <li className="">
              <a href="">Home</a>
            </li>

            <li className="">
              <a href="">About Us</a>
            </li>

            <li className="">
              <a href="">Our Services</a>
            </li>

            <li className="">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact container */}
        <div className="md:min-w-120">
          <h3 className="text-[#1d5fb9] font-bold mb-6">Contact us</h3>
          <div className="flex flex-wrap gap-4">
            <div>
              <div className="text-sm space-y-1 mb-6">
                <p className="font-semibold text-base">Head office – Benin-City</p>
                <p>2nd CONOIL Filling Station</p>
                <p>Adjacent Winners Chapel</p>
                <p>Airport Road, Benin City</p>
                <p>Edo State</p>
              </div>
              <div className="text-sm space-y-2">
                <p>0903 359 6255</p>
                <p>0912 905 4546</p>
                <p>0905 626 1339</p>
                <p>
                  <span className="hover:underline cursor-pointer">info@alphabiolabs.com</span>
                </p>
              </div>
            </div>

            <div className="max-w-54">
              <div className="text-sm space-y-1 mb-6">
                <p className="font-semibold text-base">Edo Central Branch (Irrua)</p>
                <p>Km 87, Benin-Auchi Road</p>
                <p>Opposite Irrua Specialist Teaching Hospital</p>
                <p>Irrua, Edo State</p>
              </div>
              <div className="text-sm space-y-2">
                <p>0815 458 9202</p>
                <p>0912 905 4546</p>
                <p>0905 626 1339</p>
                <p>
                  <span className="hover:underline cursor-pointer">info@alphabiolabs.com</span>
                </p>
              </div>
            </div>

            <div>
              <div className="text-sm space-y-1 mb-6">
                <p className="font-semibold text-base">Edo North Branch (Auchi)</p>
                <p>Medical Plaza, No. 37,</p>
                <p> Igbei Road, Auchi</p>
              </div>
              <div className="text-sm space-y-2">
                <p>0905 898 9034</p>
                <p>0912 905 4546</p>
                <p>0905 626 1339</p>
                <p>
                  <span className="hover:underline cursor-pointer">info@alphabiolabs.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Utility Links */}
      {/* <div className="bg-[#333333] border-y border-gray-700">
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
        </div> */}

      {/* Bottom Section: Copyright & Social */}
      <div className="bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} EC Labs Ltd - 2nd CONOIL Filling Station Adjacent Winners
            Chapel Airport Road, Benin City Edo State
          </p>

          <div className="hidden gap-6">
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
  )
}

export default Footer
