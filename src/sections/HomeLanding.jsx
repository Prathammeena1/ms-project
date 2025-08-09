import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);
const HomeLanding = () => {
  const parentRef = React.useRef(null);
  const imgRef = React.useRef(null);
  const titleRef1 = React.useRef(null);
  const titleRef2 = React.useRef(null);
  const pRef1 = React.useRef(null);
  const pRef2 = React.useRef(null);
  const scrollDivRef = React.useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top 0%",
        end: "top -100%",
        scrub: true,
      },
    });

    tl.fromTo(
      imgRef.current,
      { scale: 3, opacity: 1 },
      { scale: 1, opacity: 1 ,filter: "brightness(1)" }
    ).fromTo(
      [
        titleRef1.current,
        titleRef2.current,
        pRef1.current,
        pRef2.current,
        scrollDivRef.current,
      ],
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  }, [
    parentRef.current,
    imgRef.current,
    scrollDivRef.current,
    titleRef1.current,
    titleRef2.current,
    pRef1.current,
    pRef2.current,
  ]);

  return (
    <div ref={parentRef} className="h-[200vh] w-full relative">
      <div className="h-screen w-full p-6 md:p-12 px-6 md:px-20 lg:px-36 sticky top-0 overflow-hidden">
        <div className="w-full overflow-hidden">
          <h1 ref={titleRef1} className="font-audiowide text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[1]">
            MAVERIK
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between gap-6 md:gap-10 items-start my-6 md:my-10">
          <div className="flex flex-col justify-start h-[20vh] md:h-[40vh] overflow-hidden order-1 md:order-1">
            <p ref={pRef1} className="text-sm md:text-base lg:text-lg">
              Everything in between, <br /> to move your product <br /> forward.
            </p>
          </div>
          <div
            ref={imgRef}
            className="h-[30vh] md:h-[40vh] w-full md:w-[60vh] lg:w-[80vh] overflow-hidden rounded-lg shadow-lg relative z-10 brightness-10 order-2"
          >
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-end h-[20vh] md:h-[40vh] overflow-hidden text-left md:text-right order-3">
            <p ref={pRef2} className="text-sm md:text-base lg:text-lg">
              Everything in between, <br /> to move your product <br /> forward.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div
            ref={scrollDivRef}
            className="scroll-indicator flex items-center gap-3 md:gap-4"
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16 border-2 border-white/60 rounded-full flex items-center justify-center hover:border-white/80 transition-colors cursor-pointer">
              <div
                className="absolute top-[-10%] h-[100%] w-full rounded-t-full"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--bg) 0%, transparent 100%)",
                }}
              ></div>
              <svg
                className="w-4 h-4 md:w-6 md:h-6 text-white/80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
            <div className="text-white/80 font-light">
              <p className="text-sm md:text-lg tracking-wide">Scroll</p>
              <p className="text-sm md:text-lg tracking-wide">Down</p>
            </div>
          </div>

          <div className="overflow-hidden">
            <h1
              ref={titleRef2}
              className="font-audiowide text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[1]"
            >
              SAMUEL
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
