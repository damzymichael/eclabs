import { Link } from "react-router-dom";
import { 
  FaCheckCircle, FaMicroscope, FaBullseye, FaHandshake, FaHeart, 
  FaBolt, FaShieldAlt, FaUserMd, FaHome, FaStar, FaFlask
} from "react-icons/fa";

function AboutUs() {
  const coreValues = [
    { title: "Excellence", icon: <FaMicroscope />, desc: "Delivering world-class diagnostics without compromise." },
    { title: "Accuracy", icon: <FaBullseye />, desc: "Every result is precise, reliable, and trustworthy." },
    { title: "Integrity", icon: <FaHandshake />, desc: "Honest, ethical, and confidential—always." },
    { title: "Compassion", icon: <FaHeart />, desc: "Caring for every client with dignity and respect." },
    { title: "Timeliness", icon: <FaBolt />, desc: "Fast turnaround without compromising quality." },
    { title: "Quality & Safety", icon: <FaShieldAlt />, desc: "Quality systems ensuring safe, dependable laboratory services." },
    { title: "Innovation", icon: <FaFlask />, desc: "Advancing diagnostics through cutting-edge technology." },
    { title: "Expertise", icon: <FaUserMd />, desc: "Experienced specialists delivering trusted diagnostic excellence." },
    { title: "Convenience", icon: <FaHome />, desc: "Home and office sample collection at your convenience." },
    { title: "Customer Focus", icon: <FaStar />, desc: "Your health, comfort, and satisfaction come first." }
  ];

  const whoWeWorkWith = [
    'Individuals (Members of the public)', 
    'Healthcare Providers', 
    'Hospitals & Clinics', 
    'Corporate Organizations', 
    'Public Institutions'
  ];

  return (
    <div className="w-full font-sans text-gray-800 bg-white">
      {/* Breadcrumbs */}
      <nav className="bg-gray-50 py-4 px-6 md:px-12 lg:px-24 border-b border-gray-200">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:underline hover:text-[#01329C] transition-colors">
              Home
            </Link>
          </li>
          <li>»</li>
          <li className="text-gray-700 font-medium">About Us</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-28 px-6 text-center border-b border-gray-100 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/about-us-background.jpg')" }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#01329C] mb-6 tracking-tight">
            About EC-Lab
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Delivering accurate, timely, and reliable laboratory results that support better healthcare decisions.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-gray-700 text-[1.05rem] leading-relaxed">
            <h2 className="text-3xl font-bold text-[#01329C] mb-4">Who we are</h2>
            <p>
              EC-Lab (Express Clinical Laboratory) Ltd is a leading provider of world-class diagnostic and pathology services in Nigeria, committed to delivering accurate, timely, and reliable laboratory results that support better healthcare decisions and improved patient outcomes.
            </p>
            <p>
              Our strength lies in our multidisciplinary team of highly experienced Consultant Pathologists, Medical Laboratory Scientists, Molecular Biologists, and Healthcare Information Professionals who work together to provide comprehensive diagnostic solutions tailored to the needs of individuals, healthcare providers, hospitals, corporate organizations, and public institutions.
            </p>
            <p>
              At EC-Lab, quality is at the heart of everything we do. We operate a robust Quality Management System and utilize state-of-the-art laboratory equipment, advanced molecular technologies, and internationally recognized best practices to ensure precision, reliability, and consistency in every test we perform. Our commitment to excellence has earned us a reputation for dependable results and exceptional customer service.
            </p>
            <p>
              Beyond laboratory testing, our clients enjoy access to expert pathology consultations and professional guidance that help clinicians and patients better understand and utilize laboratory findings for optimal healthcare outcomes.
            </p>
            <p>
              We pride ourselves on providing a warm, welcoming, and client-friendly environment where every client is treated with professionalism, respect, and compassion. Our dedicated staff are always available to guide you through every step of your laboratory experience.
            </p>
            <p>
              For your convenience, EC-Lab offers Home and Office Sample Collection Services, bringing quality diagnostics directly to your doorstep. Whether at home, in the workplace, or at our modern facility, we make healthcare accessible, convenient, and stress-free.
            </p>
            <p className="font-semibold text-gray-900 mt-8 pt-4 border-t border-gray-100">
              When accuracy matters, trust EC-Lab. Visit us today and experience diagnostic excellence delivered by experts who care about your health.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:mt-16">
            <img 
              src="/lab-girl-testing.png" 
              alt="Lab Scientist Testing" 
              className="w-full h-[320px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" 
            />
            <img 
              src="/microscope-lab.png" 
              alt="Microscope in Lab" 
              className="w-full h-[320px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" 
            />
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-[#01329C] text-white py-10 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">Who we work with</h2>
        </div>
      </section>
      
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          {whoWeWorkWith.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              <FaCheckCircle className="text-[#01329C] text-2xl flex-shrink-0" />
              <span className="text-lg text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#01329C] text-white py-10 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">Our Core Values</h2>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {coreValues.map((value, index) => (
             <div 
               key={index} 
               className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 transform hover:-translate-y-1"
             >
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#01329C] text-2xl mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-[#01329C] inline-block relative">
             Meet Our Leadership
             <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#01329C] rounded-full"></span>
           </h2>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 flex flex-col items-center">
               <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-full lg:h-auto rounded-2xl overflow-hidden shadow-2xl mb-8 group">
                 <img 
                   src="/dr_ephraim.png" 
                   alt="Dr. Ephraim Ogbaini-Emovon" 
                   className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </div>
               <div className="text-center lg:text-left w-full">
                  <h3 className="text-2xl font-bold text-gray-900">Dr. Ephraim Ogbaini-Emovon</h3>
                  <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">FMCPath, MBBS, MPH, CPF (UK)</p>
                  <div className="h-px w-full bg-gray-200 my-4"></div>
                  <p className="text-[#01329C] font-bold text-lg">Founder & Chief Executive Officer</p>
                  <p className="text-gray-700 font-medium mt-1">Express Clinical Laboratory</p>
                  <p className="text-gray-700 font-medium">Global LabConnect (GLC)</p>
               </div>
            </div>

            <div className="lg:col-span-8 space-y-6 text-gray-700 text-[1.05rem] leading-relaxed">
               <blockquote className="relative p-6 bg-blue-50 rounded-xl border-l-4 border-[#01329C] mb-8">
                  <span className="absolute top-2 left-2 text-4xl text-blue-200 font-serif leading-none">"</span>
                  <p className="relative z-10 italic text-xl font-medium text-gray-800 ml-4">
                    Strong laboratories are the foundation of quality healthcare, resilient health systems, and global health security.
                  </p>
               </blockquote>
               
               <div className="space-y-5">
                 <p>Dr. Ephraim Ogbaini-Emovon is a distinguished Pathologist, Laboratory Physician, Consultant Medical Microbiologist, and Clinical Research Scientist with more than two decades of experience in diagnostic medicine, laboratory systems strengthening, biosafety and biosecurity, outbreak preparedness, infection prevention and control, clinical research, and public health.</p>
                 <p>A Fellow of the National Postgraduate Medical College of Nigeria and recipient of the prestigious Commonwealth Professional Fellowship (United Kingdom), he has established an outstanding record of leadership in laboratory medicine and infectious disease control at national and international levels.</p>
                 <p>He previously served as Director of the Institute for Viral and Emergent Pathogens Control and Research, Irrua Specialist Teaching Hospital, where he led the establishment of one of Nigeria's foremost Biosafety Level 3 molecular diagnostic and research laboratories, significantly strengthening the country's capacity for infectious disease diagnosis, surveillance, and clinical research.</p>
                 <p>Dr. Ogbaini-Emovon has played strategic roles in Nigeria's response to Lassa fever, Ebola Virus Disease, and COVID-19. During the COVID-19 pandemic, he chaired the Nigerian Medical Association Outbreak Response Team in Edo State and later served on the National Isolation Centre Assessment and Accreditation Committee constituted by the Federal Ministry of Health. He has also contributed to numerous national technical working groups involving the World Health Organization (WHO), Nigeria Centre for Disease Control (NCDC), AFENET, and the Federal Ministry of Health, supporting policy development, laboratory strengthening, and emergency preparedness.</p>
                 <p>Internationally, he has served as a Clinical Fellow at the Rare and Imported Pathogens Laboratory and the National Microbiology Reference Laboratory in England and as a World Health Organization consultant supporting laboratory strengthening and outbreak preparedness initiatives in Liberia and South Sudan. He currently serves as Faculty Member of the Georgetown University Lassa Fever Case Management Fellowship Programme. Dr. Ephraim Ogbaini-Emovon has received Awards of Excellent from the NMA, the Nigeria Centre for Disease Control (NCDC) and was honoured with a commendation from the United States Centers for Disease Control and Prevention (US CDC) in recognition of his contributions to global health.</p>
                 <p>An accomplished researcher with more than 60 peer-reviewed scientific publications, Dr. Ogbaini-Emovon has led several landmark initiatives, including the development of the first WHO International Lassa Virus Antibody Standard and the establishment of Nigeria's first hospital-based infectious disease biobank, advancing diagnostics, translational research, and global health security.</p>
                 <p>He holds Bachelor of Medicine, Bachelor of Surgery (MBBS) and Master of Public Health (MPH) degrees from the University of Benin and Postgraduate Certificate in Clinical Trials from the University of London. He has undertaken advanced professional training in Outbreak Response, Project Management, Advanced Diagnostics, and Biobanking through leading institutions in the United Kingdom and France.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

export default AboutUs;
