import { projectlists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const ProjectSlider = () => {


  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const sliderRef = useRef();

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollwidth - window.innerWidth;
  if (!isTablet) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-section",
        start: "2% top",
        end: "+=500px",
        scrub: true,
        pin: true,
         invalidateOnRefresh: true, // Helps with mobile resizing
        // markers:true
      },
    });

    tl.to(".project-section", {
      x: "-=2500px",
      ease: "power1.inOut",
      duration: 10,
    });


    //GSAP parallax

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
        duration: 5,
        // markers: true
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -60,
        ease: "power1.inOut",
      })
      .to(
        ".project-text-scroll",
        {
          xPercent: -40,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -20,
          ease: "power1.inOut",
        },
        "<"
      );
    }
  });

  return (
    <div ref={sliderRef} className="slider-wrapper overflow-x-hidden">
      <div className="projectBoxes flex whitespace-nowrap">
        {projectlists.map((projectBoxes) => (
          <div
            key={projectBoxes.name}
            className="relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none "
          >
            <img src={`/images/${projectBoxes.color}-bg.svg`} alt=""/>

            <img
              src={`/images/${projectBoxes.name}-project.png`}
              alt=""
              className="projects md:h-[90%] w-[70%] h-auto -translate-y-16"
            />

            <h1 className=" text-dark-brown">{`${projectBoxes.name}`}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
