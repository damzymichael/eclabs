import { useState } from "react"
import { tabs } from "../lib/data"

function OurServices() {
  const [activeTab, setActiveTab] = useState(0)
  const current = tabs[activeTab]
  return (
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
                    <span className={`${current.textColor} font-bold text-lg leading-none`}>•</span>
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <a
                href="/book-appointment"
                className={`border-2 ${current.borderColor} ${current.textColor} px-8 py-3 rounded-full font-bold hover:${current.color} transition-all text-center`}
              >
                {current.content.cta}
              </a>
              <a
                href="/ec_labs_full_test_menu.pdf"
                className="bg-[#9B0100] text-white border-2 border-red-500 px-8 py-3 rounded-full font-bold hover:bg-[#7a0100] transition-all text-center"
              >
                Download test menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
