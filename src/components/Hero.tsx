import type { CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PicoSprite from "./PicoSprite.tsx";

type Sprite = {
  id: string;

  // desktop positions
  top: string;
  left?: string;
  right?: string;

  // mobile positions
  mobileTop?: string;
  mobileLeft?: string;
  mobileRight?: string;

  side: "left" | "right";
  speed: number;

  picoColor: "yellow" | "blue" | "pink" | "green" | "gray";
  size: "xs" | "sm";

  floatX: number;
  floatY: number;
  floatRotate: number;
  floatDuration: number;
  floatDelay: number;
};

const sprites: Sprite[] = [
  {
    id: "s1",
    top: "16%",
    left: "15%",
    mobileTop: "55%",
    mobileLeft: "4%",
    side: "left",
    speed: 3,
    picoColor: "blue",
    size: "sm",
    floatX: 10,
    floatY: 8,
    floatRotate: 4,
    floatDuration: 6.4,
    floatDelay: 0.2,
  },

  {
    id: "s2",
    top: "30%",
    left: "10%",
    mobileTop: "68%",
    mobileLeft: "28%",
    side: "left",
    speed: 2,
    picoColor: "green",
    size: "sm",
    floatX: 8,
    floatY: 6,
    floatRotate: 3,
    floatDuration: 5.6,
    floatDelay: 0.6,
  },

  {
    id: "s3",
    top: "9%",
    right: "12%",
    mobileTop: "40%",
    mobileRight: "5%",
    side: "right",
    speed: 1.5,
    picoColor: "pink",
    size: "sm",
    floatX: 9,
    floatY: 7,
    floatRotate: 4,
    floatDuration: 6.8,
    floatDelay: 0.1,
  },

  {
    id: "s4",
    top: "75%",
    left: "18%",
    mobileTop: "20%",
    mobileLeft: "15%",
    side: "left",
    speed: 1.8,
    picoColor: "yellow",
    size: "sm",
    floatX: 7,
    floatY: 9,
    floatRotate: 3,
    floatDuration: 6.1,
    floatDelay: 0.4,
  },

  {
    id: "s5",
    top: "36%",
    right: "22%",
    mobileTop: "60%",
    mobileRight: "18%",
    side: "right",
    speed: 1.8,
    picoColor: "gray",
    size: "sm",
    floatX: 8,
    floatY: 5,
    floatRotate: 3,
    floatDuration: 5.4,
    floatDelay: 0.8,
  },

  // hidden on mobile
  {
    id: "s6",
    top: "46%",
    left: "22%",
    side: "left",
    speed: 1.6,
    picoColor: "pink",
    size: "sm",
    floatX: 6,
    floatY: 7,
    floatRotate: 2,
    floatDuration: 6.2,
    floatDelay: 0.3,
  },

  {
    id: "s7",
    top: "70%",
    right: "26%",
    side: "right",
    speed: 3,
    picoColor: "green",
    size: "sm",
    floatX: 10,
    floatY: 8,
    floatRotate: 4,
    floatDuration: 7.1,
    floatDelay: 0.5,
  },

  {
    id: "s8",
    top: "55%",
    right: "15%",
    side: "right",
    speed: 2.4,
    picoColor: "yellow",
    size: "sm",
    floatX: 7,
    floatY: 6,
    floatRotate: 3,
    floatDuration: 5.9,
    floatDelay: 0.7,
  },

  {
    id: "s9",
    top: "70%",
    left: "35%",
    side: "left",
    speed: 2.2,
    picoColor: "gray",
    size: "sm",
    floatX: 5,
    floatY: 7,
    floatRotate: 2,
    floatDuration: 6.3,
    floatDelay: 0.4,
  },

  {
    id: "s10",
    top: "65%",
    right: "5%",
    side: "right",
    speed: 1.8,
    picoColor: "blue",
    size: "sm",
    floatX: 8,
    floatY: 5,
    floatRotate: 3,
    floatDuration: 5.4,
    floatDelay: 0.8,
  },
];

export default function Hero() {
  const { scrollY } = useScroll();

  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-x-hidden px-6"
    >
      <div className="pointer-events-none absolute inset-0 -top-16 opacity-60 checker-grid checker-grid-fade" />

      <div className="hero-sprite-layer absolute inset-0">
        {sprites.map((sprite, index) => {
          // show only first 5 on mobile
          if (isMobile && index > 4) return null;

          const travel = 140 * sprite.speed;

          const x = useTransform(
            scrollY,
            [0, 300],
            [0, sprite.side === "left" ? -travel : travel],
          );

          const floatStyle = {
            "--float-x": `${sprite.floatX}px`,
            "--float-y": `${sprite.floatY}px`,
            "--float-rotate": `${sprite.floatRotate}deg`,
            "--float-duration": `${sprite.floatDuration}s`,
            "--float-delay": `${sprite.floatDelay}s`,
          } as CSSProperties;

          return (
            <motion.div
              key={sprite.id}
              initial={{
                x: sprite.side === "left" ? -260 : 260,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              style={{
                x,

                top: isMobile
                  ? sprite.mobileTop
                  : sprite.top,

                left: isMobile
                  ? sprite.mobileLeft
                  : sprite.left,

                right: isMobile
                  ? sprite.mobileRight
                  : sprite.right,
              }}
              className="absolute"
              aria-hidden="true"
            >
              <div
                className="hero-sprite-float"
                style={floatStyle}
              >
                <div className="hero-sprite">
                  <div className="hero-sprite-inner">
                    <PicoSprite
                      size={isMobile ? "sm" : sprite.size}
                      color={sprite.picoColor}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mx-auto flex h-full min-h-[70vh] max-w-5xl flex-col items-center justify-center gap-4 pt-24 text-center">
        <h1 className="text-balance font-hero text-[clamp(3.8rem,9vw,6rem)] tracking-tight">
          Tanishq Tiwari
        </h1>

        <p className="max-w-2xl md:text-lg text-muted">
          Software Engineer crafting products, systems, and experiences.
        </p>
      </div>
    </section>
  );
}