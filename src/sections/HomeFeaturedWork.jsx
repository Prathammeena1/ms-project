import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);
const HomeFeaturedWork = () => {
  useGSAP(() => {
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".feature-card-parent",
    //     start: "top 100%",
    //     // end: "top 2%",
    //     // scrub: true,
    //   },
    // });

    // tl.from(".feature-card", {
    //   top: "120%",
    //   opacity:0,
    //   stagger: .5,
    //   duration: .7,
    //   rotate: 25,
    //   ease: "power4.inOut",
    // });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".feature-card-parent",
        start: "top -2%%",
        end: "top -200%",
        scrub: true,
      },
    });

    t2.to(".feature-card:not(:first-child)", {
      top: "-200%",
      stagger: -3,
      duration: 3,
      scale: 1.8,
      rotate: 35,
      ease: "linear",
    });
  }, []);

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Small header text */}
        <p
          style={{ transform: "scaleY(2.4)" }}
          className="text-white/60 text-sm md:text-base lg:text-lg font-light tracking-[0.15em] uppercase mb-8"
        >
          FEATURED WORK
        </p>

        {/* Main heading */}
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 leading-tight font-audiowide">
          Beyond aesthetics
        </h1>

        {/* Subheading */}
        <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-light mb-8 md:mb-10 lg:mb-12">
          Shaping strategy, systems & scalable solutions
        </h2>

        {/* Warning/Heads-up section */}
        <div className="flex items-start justify-center gap-3 md:gap-4 max-w-2xl mx-auto">
          <div className="text-yellow-400 text-lg md:text-2xl flex-shrink-0 mt-1">
            ⚠️
          </div>
          <div className="text-left">
            <p className="text-white/80 text-base font-light leading-[1.2]">
              <span className="font-bold">Heads-up:</span> These case studies go
              beyond the visuals, diving deep into the thinking, <br />
              process and strategy behind each solution. Each tells a story of
              challenges, iterations, and impact.
            </p>
          </div>
        </div>
      </div>

      <div className="feature-card-parent h-[300vh] w-full">
        <div className="h-screen w-full sticky top-0 overflow-hidden ">
          <div className="feature-card h-[70%] w-[80%] overflow-hidden absolute top-[56%] scale-[.92] left-1/2 -translate-1/2 rounded-xl">
            <img
              className="h-full w-full object-cover rounded-xl"
              src="https://framerusercontent.com/images/95rllQjNYSf7Iqu2tFIPlM3eFw.png"
              alt=""
            />
          </div>
          <div className="feature-card h-[70%] w-[80%] overflow-hidden absolute top-[53%] scale-[.93] left-1/2 -translate-1/2 rounded-xl">
            <img
              className="h-full w-full object-cover rounded-xl"
              src="https://framerusercontent.com/images/sQ6hBe0tGgjdMnYIbtBXziFlHg.jpg"
              alt=""
            />
          </div>
          <div className="feature-card h-[70%] w-[80%] overflow-hidden absolute top-[50%] scale-[.94] left-1/2 -translate-1/2 rounded-xl">
            <img
              className="h-full w-full object-cover rounded-xl"
              src="https://framerusercontent.com/images/95rllQjNYSf7Iqu2tFIPlM3eFw.png"
              alt=""
            />
          </div>
          <div className="feature-card h-[70%] w-[80%] overflow-hidden absolute top-[47%] scale-[.95] left-1/2 -translate-1/2 rounded-xl">
            <img
              className="h-full w-full object-cover rounded-xl"
              src="https://framerusercontent.com/images/sQ6hBe0tGgjdMnYIbtBXziFlHg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedWork;
