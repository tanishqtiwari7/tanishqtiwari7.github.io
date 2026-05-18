import type { IconType } from "react-icons";
import {
  SiDocker,
  SiExpress,
  SiCanva,
  SiGithub,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiCplusplus,
  SiRedis,
  SiRedux,
  SiGsap,
  SiAxios
} from "react-icons/si";
// import PicoSprite from "./PicoSprite.tsx";

type PicoColor = "yellow" | "blue" | "pink" | "green" | "gray";

type SkillItem = {
  id: string;
  label: string;
  Icon: IconType;
  iconClass: string;
  blockClass: string;
  picoColor: PicoColor;
  heightClass: string;
};

const skills: SkillItem[] = [
  {
    id: "react",
    label: "React",
    Icon: SiReact,
    iconClass: "text-sky-500",
    blockClass: "bg-sky-50",
    picoColor: "blue",
    heightClass: "h-40 sm:h-44",
  },
  {
    id: "typescript",
    label: "TypeScript",
    Icon: SiTypescript,
    iconClass: "text-blue-600",
    blockClass: "bg-blue-50",
    picoColor: "yellow",
    heightClass: "h-32 sm:h-36",
  },
  {
    id: "node",
    label: "Node.js",
    Icon: SiNodedotjs,
    iconClass: "text-green-600",
    blockClass: "bg-green-50",
    picoColor: "green",
    heightClass: "h-44 sm:h-48",
  },
  {
    id: "gsap",
    label: "GSAP",
    Icon: SiGsap,
    iconClass: "text-black-700",
    blockClass: "bg-green-50",
    picoColor: "green",
    heightClass: "h-36 sm:h-40",
  },
  {
    id: "mongodb",
    label: "MongoDB",
    Icon: SiMongodb,
    iconClass: "text-emerald-600",
    blockClass: "bg-emerald-50",
    picoColor: "green",
    heightClass: "h-36 sm:h-40",
  },
  {
    id: "express",
    label: "Express",
    Icon: SiExpress,
    iconClass: "text-neutral-900",
    blockClass: "bg-neutral-50",
    picoColor: "gray",
    heightClass: "h-36 sm:h-44",
  },
  {
    id: "tailwind",
    label: "Tailwind",
    Icon: SiTailwindcss,
    iconClass: "text-cyan-500",
    blockClass: "bg-cyan-50",
    picoColor: "blue",
    heightClass: "h-36 sm:h-40",
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    Icon: SiPostgresql,
    iconClass: "text-slate-600",
    blockClass: "bg-indigo-50",
    picoColor: "pink",
    heightClass: "h-44 sm:h-48",
  },
  {
    id: "docker",
    label: "Docker",
    Icon: SiDocker,
    iconClass: "text-sky-600",
    blockClass: "bg-sky-50",
    picoColor: "blue",
    heightClass: "h-36 sm:h-40",
  },

  {
    id: "canva",
    label: "Canva",
    Icon: SiCanva,
    iconClass: "text-blue-500",
    blockClass: "bg-green-50",
    picoColor: "green",
    heightClass: "h-40 sm:h-44",
  },
  {
    id: "github",
    label: "GitHub",
    Icon: SiGithub,
    iconClass: "text-neutral-900",
    blockClass: "bg-neutral-50",
    picoColor: "gray",
    heightClass: "h-32 sm:h-36",
  },
  {
    id: "redux",
    label: "Redux",
    Icon: SiRedux,
    iconClass: "text-purple-500",
    blockClass: "bg-purple-50",
    picoColor: "pink",
    heightClass: "h-36 sm:h-40",
  },
  {
    id: "cpp",
    label: "C++",
    Icon: SiCplusplus,
    iconClass: "text-blue-700",
    blockClass: "bg-blue-50",
    picoColor: "blue",
    heightClass: "h-36 sm:h-40",
  },
  {
    id: "redis",
    label: "Redis",
    Icon: SiRedis,
    iconClass: "text-orange-500",
    blockClass: "bg-orange-50",
    picoColor: "yellow",
    heightClass: "h-36 sm:h-40",
  },
  {
    id: "axios",
    label: "Axios",
    Icon: SiAxios,
    iconClass: "text-sky-500",
    blockClass: "bg-sky-50",
    picoColor: "blue",
    heightClass: "h-36 sm:h-40",
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at top, rgba(254, 243, 199, 0.7), rgba(255, 255, 255, 0) 65%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 checker-grid" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="mt-3 text-3xl font-semibold">
              Blocks I keep in my toolbox.
            </h2>
          </div>
        </div>

      <div className="mt-12 grid grid-cols-3 items-end gap-x-3 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`group flex flex-col items-center justify-end gap-2 `}
            >
              {/* <div className="transition-transform duration-200 group-hover:-translate-y-1">
                <PicoSprite size="sm" color={skill.picoColor} />
              </div> */}
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-2xl border border-soft bg-white shadow-soft transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-float sm:h-24 sm:w-24 ${skill.blockClass}`}
              >
                <skill.Icon
                  className={`h-9 w-9 sm:h-10 sm:w-10 ${skill.iconClass}`}
                  aria-hidden="true"
                />
              </div>
              <span className="text-xs font-medium text-muted">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
