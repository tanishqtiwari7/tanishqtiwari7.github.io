import { motion, type Variants } from "framer-motion";

import accentureCert from "../assets/cert/Accenture_ux.png";
import ibmCert from "../assets/cert/IBM_fullstack.png";
import microsoftCert from "../assets/cert/Microsoft_cpp.png";
import scrimbaCert from "../assets/cert/Scrimba_Typescript.png";

import greenPico from "../assets/Greenpico.png";
import peachPico from "../assets/Peachpico.png";
import purplePico from "../assets/Purplepico.png";
import yellowPico from "../assets/Yellowpico.png";

const certifications = [
  {
    title: "Digital Skills: User Experience",
    org: "Accenture",
    image: accentureCert,
    pico: yellowPico,
    link: "https://www.futurelearn.com/certificates/8u1l5oy",
    offsetBg: "bg-yellow-50",
  },
  {
    title: "Microsoft Introduction to C++ Programming",
    org: "Microsoft",
    image: microsoftCert,
    pico: greenPico,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/K5VWQOHQC834",
    offsetBg: "bg-green-50",
  },
  {
    title: "IBM Full-Stack JavaScript Developer",
    org: "IBM",
    image: ibmCert,
    pico: purplePico,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/8JW4HPLNJFQX",
    offsetBg: "bg-purple-50",
  },
  {
    title: "Learn TypeScript",
    org: "Scrimba",
    image: scrimbaCert,
    pico: peachPico,
    link: "https://www.coursera.org/account/accomplishments/verify/4NYE1U2C0955",
    offsetBg: "bg-orange-50",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 18,
    },
  },
  hover: {},
};

const picoVariants: Variants = {
  hidden: { y: 0 },
  show: {
    y: [0, -10, 0],
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    y: [0, -10, 0],
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-6xl px-2 sm:px-4 lg:px-0">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold">
              Certifications & Achievements
            </h2>
          </div>

          {/* <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            <img
              src={BluePico}
              alt=""
              aria-hidden="true"
              className="h-6 w-6"
            />
            Certified Work
          </div> */}
        </div>

        {/* Cards */}
        <motion.div
          className="mt-10 grid gap-8 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert) => (
            <motion.article
              key={cert.title}
              className="relative"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Offset Layer */}
              <div
                className={`absolute inset-0 translate-x-1.5 translate-y-1.5 sm:translate-x-3 sm:translate-y-3 rounded-3xl border border-neutral-900/15 ${cert.offsetBg}`}
              />

              {/* Main Card */}
              <div className="relative flex flex-col items-center rounded-3xl border border-soft bg-white p-4 sm:items-stretch shadow-soft">
                {/* Certificate */}
                <div className="mt-4 mx-auto aspect-4/3 w-full max-w-65 sm:max-w-[320px] rounded-2xl bg-white overflow-hidden">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Bottom */}
                <div className="mt-4 flex items-center justify-between gap-4">
                  {/* Left content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold leading-snug">
                      {cert.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-2 text-sm text-muted">
                      <span>{cert.org}</span>

                      <span>·</span>

                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium hover:text-black transition"
                      >
                        Certificate
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
                          <path
                            d="M4 12L12 4M5.5 4H12V10.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Pico on right */}
                  <motion.img
                    src={cert.pico}
                    alt=""
                    aria-hidden="true"
                    className="h-12 w-12 mr-2 scale-110 shrink-0 object-contain"
                    variants={picoVariants}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
