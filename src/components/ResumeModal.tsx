import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import resumePdf from "../assets/resume_tanishqtiwari_.pdf";

const contactLinks = {
  location: "Indore, MP",
  phone: "+91-9285518233",
  email: "tanishqtiwari2020@gmail.com",
  linkedin: "https://www.linkedin.com/in/tanishq-tiwari-12a3a6302/",
  github: "https://github.com/tanishqtiwari7",
};

const skills = [
  { label: "Languages", value: "C++, JavaScript" },
  { label: "Frontend", value: "React.js, Tailwind CSS, Framer Motion, GSAP" },
  {
    label: "Backend/DB",
    value: "Node.js, Express.js, MongoDB, PostgreSQL, Redis",
  },
  { label: "Tools", value: "Git, Docker, Postman, VS Code, Vite, Zustand" },
  {
    label: "Concepts",
    value: "State Management, Responsive Design, Performance Optimization",
  },
  { label: "Problem Solving", value: "Solved 150+ DSA problems" },
];

const projects = [
  {
    name: "CDC Placement Portal",
    link: "https://cdc.acropolis.teamzemo.tech/",
    linkLabel: "Live",
    date: "Dec 2025 -- Present",
    bullets: [
      "Built a scalable placement portal with role-based authentication and secure JWT-based access control.",
      "Designed and implemented dynamic dashboards supporting real-time data filtering and efficient state updates.",
      "Optimized frontend performance using lazy loading and memoization techniques to reduce load time.",
      "Improved system efficiency by structuring reusable components and minimizing unnecessary re-renders.",
    ],
  },
  {
    name: "Omninet Core",
    link: "https://github.com/Team-Zemo/omninet-core",
    linkLabel: "GitHub",
    date: "Jun 2025 -- Aug 2026",
    bullets: [
      "Developed a real-time collaborative workspace with modular and scalable frontend architecture.",
      "Designed reusable UI components to ensure consistency and maintainability across the application.",
      "Integrated APIs for messaging, AI assistant, and file handling with efficient state management.",
    ],
  },
  {
    name: "Team Zemo Portfolio",
    link: "https://teamzemo.tech/",
    linkLabel: "Live",
    date: "Dec 2025 -- Jan 2026",
    bullets: [
      "Developed a performant and responsive organization portfolio using React and modern frontend practices.",
      "Optimized rendering and interactions to ensure smooth performance across devices.",
      "Implemented modular and reusable components for maintainable UI architecture.",
    ],
  },
];

const education = [
  {
    school: "Acropolis Institute of Technology and Research",
    location: "Indore, MP",
    detail: "B.Tech. in Computer Science & Engineering (CGPA: 7.7)",
    date: "2023 -- 2027",
  },
  {
    school: "Garima Vidya Vihar Sr. Sec. School",
    location: "Indore, MP",
    detail: "Class XII (76.8%) & Class X (82.2%) -- CBSE",
    date: "2021 -- 2023",
  },
];

const leadership = [
  {
    org: "Spectra Club (AITR)",
    location: "Indore, MP",
    role: "Design Lead",
    date: "Present",
    bullets: [
      "Led the design team to deliver high-quality visual assets for departmental events.",
      "Collaborated with cross-functional teams to maintain consistency across platforms.",
      "Improved audience engagement through structured and user-focused design execution.",
    ],
  },
];

const certifications = [
  "NPTEL (IIT Madras): Design and Analysis of Algorithms",
  "Accenture (FutureLearn): User Experience & Digital Skills",
  "Acropolis Institute (CDC): Certificate of Appreciation for developing the Placement Portal by Group Director",
];

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 py-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
            tabIndex={-1}
            className="max-h-[85vh] w-full max-w-4xl overflow-y-auto scrollbar-hide rounded-3xl border border-soft bg-white p-8 shadow-float"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-2">
             
                <h1
                  id="resume-title"
                  className="text-3xl font-semibold uppercase tracking-wide"
                >
                  Tanishq Tiwari
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                  <span className="inline-flex items-center gap-1">
                    <FaLocationDot aria-hidden="true" />
                    {contactLinks.location}
                  </span>
                  <span className="text-neutral-300">|</span>
                  <span className="inline-flex items-center gap-1">
                    <FaPhone aria-hidden="true" />
                    {contactLinks.phone}
                  </span>
                  <span className="text-neutral-300">|</span>
                  <a
                    href={`mailto:${contactLinks.email}`}
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    <FaEnvelope aria-hidden="true" />
                    {contactLinks.email}
                  </a>
                  <span className="text-neutral-300">|</span>
                  <a
                    href={contactLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    <FaLinkedinIn aria-hidden="true" />
                    LinkedIn
                  </a>
                  <span className="text-neutral-300">|</span>
                  <a
                    href={contactLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-soft px-3 py-1.5 text-xs font-medium"
                aria-label="Close resume"
              >
                Close
              </button>
            </div>

            <div className="mt-8 space-y-8">
              <section>
                <h2 className="border-b border-neutral-900/20 pb-1 text-xs font-semibold uppercase tracking-[0.25em]">
                  Summary
                </h2>
                <p className="mt-3 text-sm text-muted">
                  Software Engineer experienced in developing scalable web
                  applications using modern JavaScript frameworks, with a focus
                  on performance optimization, system design, and delivering
                  intuitive, user-centric interfaces.
                </p>
              </section>

              <section>
                <h2 className="border-b border-neutral-900/20 pb-1 text-xs font-semibold uppercase tracking-[0.25em]">
                  Technical Skills
                </h2>
                <div className="mt-3 space-y-2 text-sm text-muted">
                  {skills.map((skill) => (
                    <p key={skill.label}>
                      <span className="font-semibold text-neutral-900">
                        {skill.label}:
                      </span>{" "}
                      {skill.value}
                    </p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="border-b border-neutral-900/20 pb-1 text-xs font-semibold uppercase tracking-[0.25em]">
                  Projects
                </h2>
                <div className="mt-4 space-y-6">
                  {projects.map((project) => (
                    <div key={project.name}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="text-sm font-semibold">
                          {project.name}{" "}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-medium text-neutral-600 hover:text-neutral-900"
                          >
                            | {project.linkLabel}
                          </a>
                        </div>
                        <span className="text-xs text-muted">
                          {project.date}
                        </span>
                      </div>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                        {project.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="border-b border-neutral-900/20 pb-1 text-xs font-semibold uppercase tracking-[0.25em]">
                  Education
                </h2>
                <div className="mt-4 space-y-4">
                  {education.map((item) => (
                    <div key={item.school}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="text-sm font-semibold">
                          {item.school}
                        </div>
                        <span className="text-xs text-muted">{item.date}</span>
                      </div>
                      <div className="text-sm text-muted">{item.detail}</div>
                      <div className="text-xs text-muted">{item.location}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="border-b border-neutral-900/20 pb-1 text-xs font-semibold uppercase tracking-[0.25em]">
                  Leadership & Experience
                </h2>
                <div className="mt-4 space-y-4">
                  {leadership.map((item) => (
                    <div key={item.org}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="text-sm font-semibold">{item.org}</div>
                        <span className="text-xs text-muted">{item.date}</span>
                      </div>
                      <div className="text-sm text-muted">
                        {item.role} | {item.location}
                      </div>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="border-b border-neutral-900/20 pb-1 text-xs font-semibold uppercase tracking-[0.25em]">
                  Certifications
                </h2>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                  {certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href={resumePdf}
                download
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-soft"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
