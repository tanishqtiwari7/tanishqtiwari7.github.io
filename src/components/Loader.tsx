import { motion } from "framer-motion";
import { useEffect } from "react";

type LoaderProps = {
  onComplete: () => void;
};

export default function Loader({
  onComplete,
}: LoaderProps) {
  useEffect(() => {
    const timer =
      window.setTimeout(() => {
        onComplete();
      }, 2200);

    return () =>
      window.clearTimeout(
        timer,
      );
  }, [onComplete]);

  return (
    <motion.div
      className="
        fixed inset-0 z-999
        flex items-center justify-center
        bg-white/70
        backdrop-blur-2xl
      "
      exit={{
        opacity: 0,
        filter: "blur(8px)",
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Clip wrapper */}
      <div className="overflow-hidden">
        <motion.h1
          className="
            font-hero
            text-[clamp(4rem,12vw,9rem)]
            font-bold
            tracking-tight
            text-neutral-900
            select-none
          "
          initial={{
            clipPath:
              "inset(100% 0% 0% 0%)",
            filter:
              "blur(10px)",
          }}
          animate={{
            clipPath:
              "inset(0% 0% 0% 0%)",
            filter:
              "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Tanishq
        </motion.h1>
      </div>
    </motion.div>
  );
}