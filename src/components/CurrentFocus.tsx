import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import PicoSprite from "./PicoSprite";

const personalGithub = "https://github.com/tanishqtiwari7";
const teamZemoGithub = "https://github.com/Team-Zemo";

type FocusItem = {
  title: string;
  content: ReactNode;
};

type AccentSprite = {
  id: string;
  top: string;
  left?: string;
  right?: string;
  mobileTop?: string;
  mobileLeft?: string;
  mobileRight?: string;
  size: "xs" | "sm" | "md" | "lg";
  color: "yellow" | "blue" | "pink" | "green" | "gray";
};

const accentSprites: AccentSprite[] = [
  {
    id: "focus-1",

    // desktop
    top: "50%",
    right: "0%",

    // mobile
    mobileTop: "0%",
    mobileRight: "10%",

    size: "sm",
    color: "yellow",
  },

  {
    id: "focus-2",

    // desktop
    top: "150%",
    right: "130%",

    // mobile
    mobileTop: "55%",
    mobileRight: "-10%",

    size: "sm",
    color: "pink",
  },

  {
    id: "focus-3",

    // desktop
    top: "350%",
    right: "40%",

    // mobile
    mobileTop: "200%",
    mobileRight: "20%",

    size: "sm",
    color: "green",
  },
];

const focusItems: FocusItem[] = [
  {
    title: "B.Tech, Third Year",
    content:
      "Currently pursuing my B.Tech in software engineering, balancing academics with building real-world products and improving every day.",
  },

  {
    title: "Open to Opportunities",
    content:
      "Actively looking for internships and opportunities where I can learn from experienced teams, contribute meaningfully, and grow in the industry.",
  },

  {
    title: "Building with Team Zemo",
    content: (
      <>
        I've worked closely with Team Zemo on collaborative projects, learning
        how to communicate ideas, ship features, and work through real product
        challenges. See our work on{" "}
        <a
          href={teamZemoGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline-offset-4 hover:underline"
        >
          GitHub
        </a>
        .
      </>
    ),
  },

  {
    title: "Open to GitHub Contributions",
    content: (
      <>
        Happy to contribute to open-source repos and collaborate on issues or
        features. Find me at{" "}
        <a
          href={personalGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline-offset-4 hover:underline"
        >
          {personalGithub.replace("https://github.com/", "@")}
        </a>
        .
      </>
    ),
  },

  {
    title: "Open to Freelance Projects",
    content:
      "Available for freelance work, from product planning to build and deployment when needed.",
  },
];

export default function CurrentFocus() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <section id="current" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div>
          <h2 className="mt-3 text-3xl font-semibold">What I'm focused on.</h2>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
          }}
          className="relative mt-10 rounded-3xl border border-soft bg-white p-5 sm:p-8 shadow-soft"
        >
          {/* Sprite Cluster */}
          <div className="current-sprite-cluster absolute right-5 top-5 h-16 w-16 sm:right-8 sm:top-8 sm:h-24 sm:w-24">
            <div className="relative h-full w-full">
              {accentSprites.map((sprite, index) => (
                <motion.div
                  key={sprite.id}
                  initial={{
                    top: isMobile ? "650%" : "420%",
                    opacity: 1,
                  }}
                  whileInView={{
                    top: isMobile ? sprite.mobileTop : sprite.top,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.7,
                  }}
                  transition={{
                    delay: index * 0.12,
                    type: "spring",
                    stiffness: 240,
                    damping: 20,
                  }}
                  className="absolute"
                  style={
                    {
                      left: isMobile ? sprite.mobileLeft : sprite.left,

                      right: isMobile ? sprite.mobileRight : sprite.right,
                    } as CSSProperties
                  }
                >
                  <div className="current-sprite-inner">
                    <PicoSprite
                      size={isMobile ? "xs" : sprite.size}
                      color={sprite.color}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl space-y-6 sm:space-y-8 pr-0 sm:pr-24">
            {focusItems.map((item) => (
              <div key={item.title}>
                <h3 className="text-base sm:text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
