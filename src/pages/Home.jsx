import React from "react";
import HomeLanding from "../sections/HomeLanding";
import HomeCaseStudy from "../sections/HomeCaseStudy";
import HomeService from "../sections/HomeService";
import HomeIntroText from "../sections/HomeIntroText";
import HomeFeaturedWork from "../sections/HomeFeaturedWork";
import HomeTestimonial from "../sections/HomeTestimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen text-zinc-200 ">
      <HomeLanding />
      <HomeCaseStudy />
      <HomeService />
      <HomeIntroText />
      <HomeFeaturedWork />

      <HomeTestimonial />

      <Footer />
    </div>
  );
};

export default Home;
