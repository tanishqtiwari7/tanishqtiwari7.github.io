import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });
    const MessageSplit = SplitText.create(".message-reveal",{
      type: "chars",
    })

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    gsap.to(secMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 80%",
      },
    });
    revealTl.to(".msg-text-scroll", {
      duration: 0.4,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    })
    .from(MessageSplit.chars,{
      yPercent: 200,
      stagger: 0.02,
      opacity:0.2,
      ease: "power2.Out",
    },"-=0.4")
    ;

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top 90%",
        marker: "true",
      },
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 0.4,
      stagger: 0.01,
    });
  });

  return (
    <section className="message-content z-500">
      <div className="container mx-auto flex-center py-28 relative ">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">A developer who treats code as art and</h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="message-reveal text-red-brown">Program</h2>
              </div>
            </div>

            <h1 className="second-message">
            sees it as a way to turn curiosity into creativity.
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Passionate about turning ideas into code, I enjoy building
                everything from playful front-end designs to quirky little
                tools. For me, development is less about rules and more about
                curiosity, creativity, and fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;