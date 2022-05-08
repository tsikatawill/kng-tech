import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaHandPaper } from "react-icons/fa";
import Portrait from "../imgs/portrait.png";
import ScheduledCall from "../imgs/scheduled_call.png";
// import Midwife from "../imgs/midwife.png";
import Edit from "../imgs/edit.png";
import Calendar from "../imgs/calendar.png";
import Sideview from "../imgs/side-view.png";
// import Home from "../imgs/home.png";

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
          <OwlCarousel center={true} autoplay={true} loop margin={10} items={1}>
            <div className="slide-item grid bg-[#3b3b3b23] sm:bg-transparent place-content-center h-[96] p-5 rounded-lg">
              <div className="image h-80">
                <img src={Portrait} alt="pic" className="h-full" />
              </div>
              <div className="text text-center">
                <h2 className="font-bold">Amemba Journal</h2>
                <p className="capitalize">The care you deserve</p>
              </div>
            </div>
            <div className="slide-item grid bg-[#3b3b3b23] sm:bg-transparent place-content-center h-[96] p-5 rounded-lg">
              <div className="image h-80">
                <img src={Edit} alt="pic" className="h-full" />
              </div>
              <div className="text text-center">
                <h2 className="font-bold">Amemba Journal</h2>
                <p className="capitalize">The care you deserve</p>
              </div>
            </div>
            <div className="slide-item grid bg-[#3b3b3b23] sm:bg-transparent place-content-center h-[96] p-5 rounded-lg">
              <div className="image h-80">
                <img src={Calendar} alt="pic" className="h-full" />
              </div>
              <div className="text text-center">
                <h2 className="font-bold">Amemba Journal</h2>
                <p className="capitalize">The care you deserve</p>
              </div>
            </div>
            <div className="slide-item grid bg-[#3b3b3b23] sm:bg-transparent place-content-center h-[96] p-5 rounded-lg">
              <div className="image h-80">
                <img src={Sideview} alt="pic" className="h-full" />
              </div>
              <div className="text text-center">
                <h2 className="font-bold">Amemba Journal</h2>
                <p className="capitalize">The care you deserve</p>
              </div>
            </div>
            <div className="slide-item grid bg-[#3b3b3b23] sm:bg-transparent place-content-center h-[96] p-5 rounded-lg">
              <div className="image h-80">
                <img src={ScheduledCall} alt="pic" className="h-full" />
              </div>
              <div className="text text-center">
                <h2 className="font-bold">Moms & Midwives</h2>
                <p className="capitalize">The care you deserve</p>
              </div>
            </div>
            <div className="slide-item grid bg-[#3b3b3b23] sm:bg-transparent place-content-center h-[96] p-5 rounded-lg">
              <div className="image h-80">
                <img src={Sideview} alt="pic" className="h-full" />
              </div>
              <div className="text text-center">
                <h2 className="font-bold">Moms & Midwives</h2>
                <p className="capitalize">The care you deserve</p>
              </div>
            </div>
          </OwlCarousel>

          <div className="instructions flex flex-col items-center gap-2 mt-10">
            <FaHandPaper className="hand-icon" />
            <small>Swipe to scroll</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcaseSection;
