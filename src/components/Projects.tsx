import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import PicoSprite from "./PicoSprite.tsx";

const wavePath =
  "M799.0039672851562,32.47011184692383C717.4213024902344,49.5019835281372,432.6394439697266,83.10855434417725,369.62152099609375,122.11154174804688C306.6035980224609,161.11452915191649,536.991046655178,186.65337860107422,467.3306884765625,237.74899291992188C397.6703302979469,288.8446072387695,91.2131568980217,361.91132904052733,2.9880568981170654,391.03582763671875";

const projects = [
  {
    title: "Quasar",
    description:
      "AI-powered hiring platform with voice interviews, STAR scoring, live coding, and automated candidate progression for recruiters and candidates. Designed to reduce manual screening overhead while giving hiring teams structured, measurable signals across every interview stage. Built with real-time evaluation workflows, asynchronous assessments, and recruiter analytics at its core.",
    link: "https://quasar.teamzemo.tech/",
    linkLabel: "Project link",
    color: "yellow" as const,
  },

  {
    title: "CDC Placement Platform",
    description:
      "Enterprise placement system with JWT/RBAC/MFA, analytics dashboards, eligibility filters, recruiter workflows, and async performance tooling. Created to handle large campus recruitment cycles where thousands of students, recruiters, and administrators interact across different access layers. Focused heavily on operational reliability, auditability, and secure workflow orchestration.",
    link: "https://cdc.acropolis.teamzemo.tech/",
    linkLabel: "Project link",
    color: "pink" as const,
  },

  {
    title: "Alumni Portal",
    description:
      "Role-based alumni network with verified posts, mentorship discovery, jobs, events, and moderation workflows. Built to reconnect graduates with their institution through meaningful professional interactions, community knowledge sharing, and long-term career support. Includes trust-driven verification systems and scalable engagement features.",
    link: "#",
    linkLabel: "Delivering Soon",
    color: "green" as const,
  },

  {
    title: "Metal",
    description:
      "Backend traffic orchestration and caching framework with routing, balancing, rate limits, WAF middleware, and observability. Designed as an application-layer infrastructure toolkit that simplifies service-level traffic control without requiring full edge deployment. Focused on clean abstractions for scaling backend systems under real production workloads.",
    link: "https://www.npmjs.com/package/metal-lb-cache",
    linkLabel: "Project link",
    color: "blue" as const,
  },
];

const cardVariants = {
  rest: { y: 0, boxShadow: "var(--shadow-soft)" },
  hover: { y: -6, boxShadow: "var(--shadow-float)" },
};

const spriteVariants = {
  rest: { y: 0 },
  hover: { y: -4 },
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollY } = useScroll();
  const [range, setRange] = useState({ start: 0, end: 1 });

  useLayoutEffect(() => {
    const updateRange = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = rect.height;

      const start = sectionTop - viewHeight * 0.65;
      const end =
        sectionHeight <= viewHeight
          ? sectionTop
          : sectionTop + (sectionHeight - viewHeight);

      setRange({ start, end });
    };

    updateRange();
    const timeout = window.setTimeout(updateRange, 200);
    window.addEventListener("resize", updateRange);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("resize", updateRange);
    };
  }, []);

  const pathLength = useTransform(scrollY, [range.start, range.end], [0, 1], {
    clamp: true,
  });
  const waveOpacity = useTransform(
    scrollY,
    [range.start, range.start + (range.end - range.start) * 0.25],
    [0, 0.4],
    { clamp: true },
  );

  return (
    <section id="projects" ref={sectionRef} className="relative  py-24">
      <motion.svg
        className="pointer-events-none absolute h-full w-full origin-top scale-100 "
        viewBox="0 0 800 450"
        preserveAspectRatio="none"
        style={{ opacity: waveOpacity }}
      >
        <defs>
          <linearGradient id="projectsWave" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="hsl(30, 100%, 50%)" offset="0" />
            <stop stopColor="hsl(30, 100%, 70%)" offset="1" />
          </linearGradient>
        </defs>
        <motion.path
          d={wavePath}
          fill="none"
          stroke="url(#projectsWave)"
          strokeWidth="31"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </motion.svg>
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between gap-6">
          <div>
            <h2 className="mt-4 text-3xl font-semibold">
              Puzzle pieces I&apos;ve shipped.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="project-card flex flex-col rounded-2xl border border-soft bg-white p-6 shadow-soft"
              initial="rest"
              animate="rest"
              whileHover="hover"
              variants={cardVariants}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <motion.div variants={spriteVariants}>
                <div className="project-sprite">
                  <PicoSprite size="sm" color={project.color} />
                </div>
              </motion.div>
              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <a
                href={project.link !== "#" ? project.link : undefined}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative z-20 mt-5 inline-flex items-center gap-2 text-sm font-medium"
              >
                <span>{project.linkLabel}</span>
                <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4">
                  <path
                    d="M4 12L12 4M5.5 4H12V10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
