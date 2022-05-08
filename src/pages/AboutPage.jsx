import React from "react";

import App from "../App";
import MissionImg from "../imgs/mission.jpg";

const AboutPage = () => {
  return (
    <App>
      <header className="about-header h-[300px]">
        <div className="container flex flex-col items-center justify-center h-full  text-white text-center">
          <h1 className="text-2xl sm:text-5xl font-bold  uppercase mb-2">
            About us
          </h1>
          <p className="text-lg sm:text-2xl  max-w-2xl">
            Our goals. Our mission
          </p>
        </div>
      </header>
      <main className="">
        <div className="work-description text-justify">
          <article className="container sm:py-10 py-5 background border-gray-900">
            <h2 className="text-2xl sm:text-5xl text-blue-500  capitalize font-semibold mb-5">
              Background
            </h2>
            <p className="mb-5 sm:mb-10">
              We are a team of result driven young and resourceful individuals.
              We intend to transform Africa through quality, creative and
              innovative solutions that are very vital for challenges of today
              and the future. To us, building solutions that provide enormous
              value to businesses and their growth is key to success. We develop
              software applications; mobile applications, webs applications,
              websites, web services and also product management services. We
              ensure effective communication with clients to understand their
              processes and requirements quickly, value clients ideas and
              creativity, which helps us to improve our knowledge and experience
              to deliver quality, timely and tailored products to our clients.
            </p>
            <p>
              At KNG Technology, we believe that providing world-class software
              development and services which centres on user's experience plays
              a supportive role to your holistic business growth. To that end,
              we commit our time, energy, our thoughts and our experiences until
              we succeed together and provide the best available solutions above
              clients expectations.
            </p>
          </article>
        </div>
        <section className="mission-and-vision">
          <div className="container flex items-center flex-col justify-center sm:flex-row gap-10">
            <div className="image-wrapper w-full">
              <img
                src={MissionImg}
                alt="mission"
                className="w-72 min-h-[170px] mx-auto rounded-lg shadow-sm  sm:w-[30rem]"
              />
            </div>
            <div className="text">
              <h2 className="text-2xl sm:text-left text-center sm:text-5xl text-blue-500  capitalize font-semibold mb-5">
                Mission & Vision
              </h2>
              <p className="text-justify">
                We aim to play a significant role in the development of
                world-class software development industry in Ghana. A percentage
                of our profits go towards free education for our children
                through the{" "}
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/ghanacodeinitiative/"
                  target="_blank"
                  className="text-blue-500 text-justify"
                >
                  MLM Ghana Codes Initiative
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </App>
  );
};

export default AboutPage;
