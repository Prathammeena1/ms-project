import React from "react";
import HomeLanding from "../sections/HomeLanding";
import HomeCaseStudy from "../sections/HomeCaseStudy";
import HomeService from "../sections/HomeService";

const Home = () => {
  return (
    <div className="min-h-screen text-zinc-200 ">
      <HomeLanding />
      <HomeCaseStudy />
      <HomeService />
    </div>
  );
};

export default Home;
