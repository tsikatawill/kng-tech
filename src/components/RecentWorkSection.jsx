import React from "react";
import Phone from "../imgs/home.png";
import Phone2 from "../imgs/midwife.png";

const RecentWorkSection = () => {
  return (
    <section
      className="recent-work bg-slate-800 text-white"
      data-scroll-section
    >
      <div className="container">
        <div className="section-header mb-10">
          <h2 className="text-2xl font-semibold text-center text-slate-300">
            OUR MOST RECENT WORK
          </h2>
        </div>
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row  mx-auto">
          <article className="description w-full md:w-1/2 mx-auto text-justify md:text-left">
            <h3 className="font-semibold mb-5 text-2xl text-center sm:text-left">
              Moms and Midwives
            </h3>
            <p>
              The professional and personalized health care you deserve.
              Discover a thriving community of pregnant women and mothers with
              group chats. Stay connected with your personal midwife with
              inbuilt chats, voice and video calls. <br />
              <br />
              Mom & Midwives is an app built to holistically provide care for
              expectant mothers throughout the entire period of pregnancy.
              Pregnant women can chat with health professionals and express
              concerns that need immediate attention. Our midwives provide
              unique individualized care for mothers and their children.
            </p>
            <br />
            <p className="mb-10">
              Pregnant women have access to daily tips and reminders to help
              make your pregnancy and life easier.
            </p>
            <div className="cta text-center sm:text-left">
              <a
                rel="noreferrer"
                href="https://momsandmidwives.com/"
                target="_blank"
                title="Moms &amp; Midwives"
                className="btn border hover:bg-white text-center hover:text-slate-900"
              >
                Read more
              </a>
            </div>
          </article>
          <div className="images w-full md:w-1/2 flex justify-center h-80 sm:h-[500px]">
            <img
              src={Phone2}
              alt="iphone"
              className="h-80 translate-x-24 sm:translate-x-44 hover:z-30 hover:translate-x-20 sm:hover:translate-x-36  sm:w-[250px] sm:h-auto"
            />
            <img
              src={Phone}
              alt="iphone"
              className="h-80 -translate-x-28 sm:-translate-x-44 sm:w-[250px] sm:h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorkSection;
