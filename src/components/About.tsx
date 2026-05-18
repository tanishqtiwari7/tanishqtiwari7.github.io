import { motion, type Variants } from "framer-motion";
import type { IconType } from "react-icons";

import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import greenPico from "../assets/Greenpico.png";
import peachPico from "../assets/Peachpico.png";
import purplePico from "../assets/Purplepico.png";
import yellowPico from "../assets/Yellowpico.png";

const badges = [
  "Sketches",
  "Music",
  "Ideas",
];

const socials = [
  {
    id: "github",
    label: "GitHub",
    username: "@tanishqtiwari7",
    color: "var(--pico-yellow)",
    image: yellowPico,
    href: "https://github.com/tanishqtiwari7",
  },

  {
    id: "discord",
    label: "Discord",
    username: "@tanishq_tiwari_86534",
    color: "var(--pico-purple)",
    image: purplePico,
    href: "https://discord.com",
  },

  {
    id: "linkedin",
    label: "LinkedIn",
    username: "@tanishq-tiwari-dev",
    color: "var(--pico-green)",
    image: greenPico,
    href: "https://www.linkedin.com/in/tanishq-tiwari-dev",
  },

  {
    id: "instagram",
    label: "Instagram",
    username: "@tanishqtiwari2025",
    color: "#f3a3ba",
    image: peachPico,
    href: "https://www.instagram.com/tanishqtiwari2025",
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

const stripVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      stiffness: 180,
      damping: 18,
    },
  },
};

const iconClassName =
  "h-6 w-6 text-neutral-900";

const socialIcons: Record<string, IconType> = {
  github: FaGithub,
  discord: FaDiscord,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
};

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

        {/* DESKTOP */}
        <motion.div
          className="hidden overflow-hidden rounded-[15px] border border-soft bg-white lg:block"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.4,
          }}
        >
          <div className="grid h-70 grid-cols-4">
            {socials.map((social) => (
              <motion.a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col items-center justify-between border-r border-neutral-900/20 px-3 py-6 last:border-r-0"
                style={{
                  background: social.color,
                }}
                variants={stripVariants}
              >
                {/* icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900/10 hover:border-neutral-900/50">
                  {(() => {
                    const Icon =
                      socialIcons[social.id];

                    return (
                      <Icon
                        className={iconClassName}
                        aria-hidden="true"
                      />
                    );
                  })()}
                </div>

                {/* pico + username */}
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={social.image}
                    alt=""
                    aria-hidden="true"
                    className="h-12 w-12 select-none"
                  />

                  <span className="text-[11px] font-medium text-neutral-900/90">
                    {social.username}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold">
            A little about me.
          </h2>

          <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-muted">
            I’m Tanishq. I like building things,
            figuring out how they work,
            and improving them until they feel right.

            Most of my time goes into
            learning, experimenting,
            and getting better at what I do.

            When I’m not working,
            I’m usually sketching,
            listening to music,
            or just thinking through ideas.

            I don’t like rushing work.
            I prefer doing things properly,
            even if it takes longer.
          </p>

          {/* badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-soft px-4 py-2 text-xs font-medium text-neutral-800"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* MOBILE */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-soft lg:hidden">
            {socials.map((social) => {
              const Icon =
                socialIcons[social.id];

              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-neutral-900/10 px-4 py-4 last:border-b-0"
                  style={{
                    background:
                      social.color,
                  }}
                >
                  {/* left */}
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-neutral-900" />

                    <span className="text-sm font-medium text-neutral-900">
                      {social.label}
                    </span>
                  </div>

                  {/* pico */}
                  <img
                    src={social.image}
                    alt=""
                    className="h-8 w-8 select-none"
                  />

                  {/* username */}
                  <span className="max-w-25 truncate text-sm text-neutral-900/70">
                    {social.username}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}