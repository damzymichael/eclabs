export const tabs = [
  {
    id: 0,
    label: "Clinical Pathology",
    color: "bg-[#1d5fb9]",
    borderColor: "border-[#1d5fb9]",
    textColor: "text-[#1d5fb9]",
    content: {
      preHeading: "",
      listItems: [
        { label: "Microbiology" },
        { label: "Hematology" },
        { label: "Chemistry" },
        { label: "Immunology" },
        { label: "Histopathology" },
        { label: "Molecular Diagnostics" },
      ],
      footerNote: "",
      cta: "Book appointment",
    },
  },
  {
    id: 1,
    label: "DNA Testing",
    color: "bg-[#b356a1]",
    borderColor: "border-[#b356a1]",
    textColor: "text-[#b356a1]",
    content: {
      preHeading: "Peace of Mind", // [cite: 8]
      listItems: [
        { label: "Paternity Testing (Legal & Peace of Mind)" }, // [cite: 9]
        { label: "Maternity Testing" }, // [cite: 9]
        {
          label: "Prenatal Screening", //
          subItems: ["Paternity", "Sex determination", "Baby gender test", "Genetic Disease test"], //
        },
      ],
      footerNote: "* All our Prenatal DNA tests are non-invasive. We use maternal blood.", // [cite: 14]
      cta: "Get a Quote",
    },
  },
  {
    id: 2,
    label: "General Health Screening",
    color: "bg-[#e56000]",
    borderColor: "border-[#e56000]",
    textColor: "text-[#e56000]",
    content: {
      preHeading: "",
      listItems: [
        { label: "Diabetes and Hypertension" }, // [cite: 17]
        { label: "Kidney, Heart and Liver" }, // [cite: 17]
        { label: "Cancer Screening" }, // [cite: 18]
        { label: "Pre-employment Screening" }, // [cite: 18]
        { label: "Pre-school Screening" }, // [cite: 18]
        { label: "Travel Screening" }, // [cite: 19]
      ],
      footerNote: "",
      cta: "Get a Quote",
    },
  },
  {
    id: 3,
    label: "Drug Testing",
    color: "bg-[#0094a8]",
    borderColor: "border-[#0094a8]",
    textColor: "text-[#0094a8]",
    content: {
      preHeading: "Designed for workplace, schools and home. For legal and peace of mind.", // [cite: 23]
      listItems: [
        { label: "Cannabis" }, // [cite: 25]
        { label: "Amphetamine" }, // [cite: 27]
        { label: "Cocaine" }, // [cite: 28]
        { label: "Benzodiazepine" }, // [cite: 29]
        { label: "Methadone" }, // [cite: 29]
        { label: "Opiate (Heroin)" }, // [cite: 30]
        { label: "Tramadol" }, // [cite: 31]
        { label: "Buprenorphine" }, // [cite: 32]
      ],
      footerNote: "We use Urine, Saliva, or Hair depending on the purpose.", // [cite: 34, 37]
      cta: "Book appointment",
    },
  },
  {
    id: 4,
    label: "Sexually Transmitted Infection test",
    color: "bg-[#9B0100]",
    borderColor: "border-[#9B0100]",
    textColor: "text-[#9B0100]",
    content: {
      preHeading: "",
      listItems: [
        { label: "HIV" }, // [cite: 40]
        { label: "Gonorrhea" }, // [cite: 45]
        { label: "Chlamydia" }, // [cite: 46]
        { label: "Herpes" }, // [cite: 46]
        { label: "Hepatitis B and C" }, // [cite: 47]
      ],
      footerNote: "Strictly Confidential Reports.", // [cite: 55]
      cta: "Book appointment",
    },
  },
]

export const reviews = [
  {
    id: 1,
    title: "They are reliable",
    body: "For the past four years, this lab has been my go-to for all my tests. Results are always ready quickly, and the staff treat you with respect and kindness. Truly dependable service.",
    author: "A. D",
    date: "24 Dec, 2025",
  },
  {
    id: 2,
    title: "Express Clinical Laborat...",
    body: "Express Clinical Laboratory has earned my trust over the years. Their speed, accuracy, and courteous staff make every visit smooth and reassuring.",
    author: "E. A",
    date: "26 April, 2026",
  },
  {
    id: 3,
    title: "Supportive Patient Care",
    body: "We have consistently referred samples to Express Clinical Laboratory, and their quality and reliability have greatly supported our patient care. Their professionalism and expertise are commendable.",
    author: "",
    date: "12 Jan, 2026",
  },
  {
    id: 4,
    title: "A valuable partner",
    body: "Express Clinical Laboratory has been a valuable partner in diagnostics. Their timely results, consistency, and high standards have strengthened our clinical decision-making.",
    author: "",
    date: "24 April, 2026",
  },
  {
    id: 5,
    title: "Commitment to Accuracy",
    body: "Our collaboration with Express Clinical Laboratory has been excellent. Their commitment to quality and accuracy continues to enhance the care we provide to our patients.",
    author: "H. O",
    date: "15 Aug, 2025",
  },
  {
    id: 6,
    title: "Confidential and Professional",
    body: "I used their DNA testing service and was impressed by how confidential and professional the entire process was. The results came faster than expected. Highly satisfied.",
    author: "M. S",
    date: "02 Feb, 2026",
  },
  {
    id: 7,
    title: "Complete Peace of Mind",
    body: "Express Clinical Laboratory handled my paternity test with complete privacy and efficiency. The quick turnaround time gave me peace of mind.",
    author: "",
    date: "19 Nov, 2025",
  },
  {
    id: 8,
    title: "Confidence in My Health",
    body: "As someone managing diabetes and hypertension, I rely on Express Clinical Laboratory for routine monitoring. Their accuracy and consistency give me confidence in my health.",
    author: "R. K",
    date: "10 Mar, 2026",
  },
  {
    id: 9,
    title: "Excellent Routine Service",
    body: "I regularly check my blood sugar and organ function here, and the service has been excellent. I recommend this lab to anyone managing chronic conditions.",
    author: "",
    date: "05 Oct, 2025",
  },
  {
    id: 10,
    title: "Instrumental Health Support",
    body: "They’ve been instrumental in helping me stay on top of my health. Reliable results, friendly staff, and a smooth process every time.",
    author: "J. B",
    date: "22 Jan, 2026",
  },
  {
    id: 11,
    title: "Stress-Free Home Service",
    body: "I appreciated the confidentiality and professionalism of their STI testing service. The home service option made everything convenient and stress-free.",
    author: "L. W",
    date: "14 Sep, 2025",
  },
  {
    id: 12,
    title: "Discreet and Reliable",
    body: "Express Clinical Laboratory handled my tests with complete privacy. Their discreet approach and reliable results gave me confidence.",
    author: "",
    date: "30 Mar, 2026",
  },
  {
    id: 13,
    title: "Comfortable Experience",
    body: "Their home service and strict confidentiality stood out to me. I felt comfortable and well cared for throughout the process.",
    author: "C. T",
    date: "11 Dec, 2025",
  },
]
