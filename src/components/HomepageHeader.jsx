import React from "react";
import { Link } from "react-router-dom";

const HomepageHeader = () => {
  return (
    <header
      className="homepage-header h-[calc(100vh-6rem)] sm:min-h-fit sm:h-[500px]"
      data-scroll-section
    >
      <div className="container flex flex-col items-center justify-center h-full gap-10 text-white text-center">
        <h1 className="text-2xl sm:text-5xl uppercase mt-20">
          We are KNG Tech
        </h1>
        <p className="text-lg sm:text-2xl max-w-2xl">
          We believe that providing world-class software development and
          services which centres on user's experience plays a supportive role to
          your holistic business growth.
        </p>
        <div className="cta">
          <Link
            to="/about"
            className="btn bg-blue-500 text-white flex items-center gap-2"
          >
            Read more
          </Link>
        </div>
        <div className="scroll-indicator mt-auto scale-50 py-5">
          <div className="border-2 border-white w-12 h-24 rounded-full">
            <div className="scrollwheel w-5 h-5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
