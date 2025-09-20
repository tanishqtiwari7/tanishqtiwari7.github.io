import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const HeroSection = () => {
  useGSAP(() => {
    // Wait for fonts to load before creating SplitText
    gsap.delayedCall(0.3, () => {
      const nameSplit = SplitText.create(".hero-title", { type: "chars" });
      const tl = gsap.timeline({ delay: 1 });

      tl.to(".hero-content", {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
      })
        .to(
          ".hero-text-scroll",
          {
            duration:1,
            // delay: 0.1,
            clipPath: "polygon(100% 0, 0% 0, 0% 100%, 100% 100%)",
            ease: "circ.inOut",
          },
          "-=0.5"
        )
        .from(
          nameSplit.chars,
          {
            yPercent: 200,
            stagger: 0.02,
            ease: "power2.Out",
          },
          "-=0.6"
        );
    });

    const hero_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    hero_tl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <div className="hero-content opacity-0 md:mt-10">
          <div className="overflow-hidden">
            <h1 className="hero-title">Tanishq Tiwari</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
         
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Giga-Developer</h1>
            </div>
          </div>
          <h2 className="md:mt-10">
            I'm a developer who loves turning ideas into little
            experiments—sometimes they're websites, sometimes tools, sometimes
            just fun console stuff. Coding, for me, is where art and play meet.
          </h2>
          <div className="hero-button">
            <p>Know more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
