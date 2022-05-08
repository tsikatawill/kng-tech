import React from "react";
import ShowcaseItem from "./ShowcaseItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaHandPaper } from "react-icons/fa";

const WorkShowcaseSection = () => {
  return (
    <section className="work-showcase bg-black text-white">
      <div className="container">
        <div className="section-header mb-10">
          <h2 className="text-2xl font-semibold text-center mb-1">SHOWCASE</h2>
          <p className="max-w-xl mx-auto text-center">
            KNG Tech has proudly worked with some of the most wonderful clients
            to deliver brilliant services showcased here.
          </p>
        </div>
        <div className="mx-5">
          <OwlCarousel autoplay={true} loop margin={0} items={1}>
            <ShowcaseItem />
            <ShowcaseItem />
            <ShowcaseItem />
          </OwlCarousel>

          <div className="instructions flex flex-col items-center gap-2 mt-10">
            <FaHandPaper />
            <small>Swipe to scroll</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcaseSection;
