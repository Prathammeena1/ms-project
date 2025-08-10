import React, { useState, useEffect } from "react";

const HomeTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card (Parth Sharma)
  const [progress, setProgress] = useState(0); // Timer progress state

  // Testimonials data
  const testimonials = [
    {
      id: 0,
      text: "Meet is one of the most competent and self driven designer I have ever came across. Even as a fresher, he has beautiful portfolio of work done all by himself back in college days. With his field, passion for continuous learning, ability to execute powerful do-er attitude, he make wonders. I wish to work with him again.",
      name: "Shagun Raj",
      title: "Product manager - Synk",
      background:
        "url(https://framerusercontent.com/images/7zXfrnc3994M70M0Ad5wb5yJ2LU.png)",
    },
    {
      id: 1,
      text: "His keen sense of product UX/UI is really world class. He brings a tremendous technical skill set to the table. I found his user journey based design thinking to be really creative and powerful. He's an easy going but headstrong personality at work. I can vouch for his abilities and am sure he'll be a great value-add to any team.",
      name: "Parth Sharma",
      title: "Product Specialist - Cisco",
      background:
        "url(https://framerusercontent.com/images/WYnQ5rHbg0720ff9aRbmCUziw.png)",
    },
    {
      id: 2,
      text: "Meet has demonstrated exceptional competence and design expertise in marketing materials. He has delivered to our brand ensuring that all designs are professional, and effective, bringing attention to detail to integrate design creatively not only in campaigns but also brand's overall identity.",
      name: "Sarah Jenkins",
      title: "Marketing Director - Togada",
      background:
        "url(https://framerusercontent.com/images/cdOsj4MgfPbwBUzLzVOKdxoyHo.png)",
    },
  ];

  // Progress timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % testimonials.length);
          return 0; // Reset progress
        }
        return prev + 2.5; // Increment by 2.5% every 100ms (4 seconds total)
      });
    }, 100);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Reset progress when manually changing slides
  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);

  // Handle card click
  const handleCardClick = (index) => {
    setCurrentIndex(index);
    // Progress will reset automatically due to useEffect
  };

  // Get card position and style based on index
  const getCardStyle = (index) => {
    const position = index - currentIndex;

    if (position === 0) {
      // Center card
      return {
        transform:
          "translateX(0) translateY(-50%) scale(1) rotateY(0deg) rotateX(0deg)",
        zIndex: 10,
        opacity: 1,
        filter: "blur(0px)",
        transformStyle: "preserve-3d",
      };
    } else if (
      position === -1 ||
      (position === 2 && testimonials.length === 3)
    ) {
      // Left card - rotate inward (toward center)
      return {
        transform:
          "translateX(-250px) translateY(-50%) scale(0.9) rotateY(60deg) rotateX(15deg)",
        zIndex: 5,
        opacity: 0.4,
        // filter: "blur(2px)",
        transformStyle: "preserve-3d",
      };
    } else if (
      position === 1 ||
      (position === -2 && testimonials.length === 3)
    ) {
      // Right card - rotate inward (toward center)
      return {
        transform:
          "translateX(250px) translateY(-50%) scale(0.9) rotateY(-60deg) rotateX(15deg)",
        zIndex: 5,
        opacity: 0.4,
        // filter: "blur(2px)",
        transformStyle: "preserve-3d",
      };
    } else {
      // Hidden cards
      return {
        transform: "translateX(0) translateY(-50%) scale(0.5) rotateY(0deg)",
        zIndex: 0,
        opacity: 0,
        filter: "blur(4px)",
        transformStyle: "preserve-3d",
      };
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Small header text */}
        <p
          style={{ transform: "scaleY(2.4)" }}
          className="text-white/60 text-sm md:text-base lg:text-lg font-light tracking-[0.15em] uppercase mb-12 md:mb-16 lg:mb-20"
        >
          TESTIMONIALS
        </p>

        {/* Main heading */}
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-12 leading-[0.9] font-audiowide">
          If words can <br />
          speak louder <br />
          than work?
        </h1>

        {/* Subheading */}
        <p className="text-white/80 text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold max-w-4xl mx-auto leading-relaxed">
          A few voices that shaped the work — and me.
        </p>
      </div>

      <div className="testimonial-slider mt-16 md:mt-20 lg:mt-24 w-full max-w-6xl mx-auto">
        <div
          className="relative h-screen w-full flex items-center justify-center overflow-hidden"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "center center",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute top-1/2 w-[300px] md:w-[350px] lg:w-[400px] h-[380px] md:h-[430px] lg:h-[85vh] rounded-2xl p-6 md:p-8 shadow-2xl cursor-pointer transition-all duration-700 ease-in-out`}
              style={{
                ...getCardStyle(index),
                backfaceVisibility: "hidden",
                willChange: "transform",
                backgroundImage: testimonial.background,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="text-white h-full flex flex-col">
                {/* Animated progress bar on white line */}
                <div className="relative w-full h-1 bg-white/30 rounded-full mb-6 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-100 ease-linear"
                    style={{
                      width: index === currentIndex ? `${progress}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
