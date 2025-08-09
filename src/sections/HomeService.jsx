import React from "react";
import ServiceScene from "../components/ServiceScene";

const HomeService = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="text-center py-12 md:py-16 lg:py-20 px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 font-audiowide">
          From discovery to delivery
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-light">
          ...and everything in between, to move your product forward.
        </p>
      </div>
      
      {/* Service Components */}
      <div className="space-y-8 md:space-y-12">
        <ServiceScene />
        <ServiceScene />
        <ServiceScene />
      </div>
    </div>
  );
};

export default HomeService;
