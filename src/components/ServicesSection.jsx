import React from "react";
import {
  FaAndroid,
  FaApple,
  FaBezierCurve,
  FaGlobe,
  FaGlobeAmericas,
  FaPenFancy,
  FaUsers,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="services bg-black text-white" id="services">
      <div className="container">
        <div className="section-header mb-10">
          <h2 className="text-2xl font-semibold text-center mb-1">SERVICES</h2>
          <p className="max-w-xl mx-auto text-center text-slate-300">
            At KNG Tech, we are heaviyly commited to providing our customers
            with the best of the following services
          </p>
        </div>
        <div className="services flex flex-col md:grid md:grid-cols-2 max-w-3xl mx-auto gap-5 sm:gap-10">
          <ServiceCard
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            tempore cumque quae voluptatem, optio mollitia molestiae aliquid
            obcaecati maiores enim omnis quidem provident eveniet eum
            distinctio, odio ipsa cupiditate exercitationem. Deleniti eveniet
            corrupti autem esse provident quasi molestias nulla ut, id sapiente
            placeat eius sequi. Sit ipsa magnam est similique."
            icon={<FaGlobeAmericas />}
            title="Outsourced developers"
          />
          <ServiceCard
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            tempore cumque quae voluptatem, optio mollitia molestiae aliquid
            distinctio, odio ipsa cupiditate exercitationem. Deleniti eveniet
            corrupti autem esse provident quasi molestias nulla ut, id sapiente
            placeat eius sequi. Sit ipsa magnam est similique."
            icon={<FaPenFancy />}
            title="Product design"
          />
          <ServiceCard
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            distinctio, odio ipsa cupiditate exercitationem. Deleniti eveniet
            corrupti autem esse provident quasi molestias nulla ut, id sapiente
            placeat eius sequi. Sit ipsa magnam est similique."
            icon={<FaUsers />}
            title="Project management"
          />
          <ServiceCard
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            tempore cumque quae voluptatem, optio mollitia molestiae aliquid
            obcaecati maiores enim omnis quidem provident eveniet eum
            distinctio, odio ipsa cupiditate exercitationem. Deleniti eveniet
            corrupti autem esse provident quasi molestias nulla ut, id sapiente
            placeat eius sequi. Sit ipsa magnam est similique."
            icon={
              <div className="flex">
                <FaAndroid /> <FaApple />
              </div>
            }
            title="Mobile app developmens"
          />
          <ServiceCard
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            tempore cumque quae voluptatem, optio mollitia molestiae aliquid
            distinctio, odio ipsa cupiditate exercitationem. Deleniti eveniet
            corrupti autem esse provident quasi molestias nulla ut, id sapiente
            placeat eius sequi. Sit ipsa magnam est similique."
            title="Web app development"
            icon={<FaGlobe />}
          />
          <ServiceCard
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            distinctio, odio ipsa cupiditate exercitationem. Deleniti eveniet
            corrupti autem esse provident quasi molestias nulla ut, id sapiente
            placeat eius sequi. Sit ipsa magnam est similique."
            icon={<FaBezierCurve />}
            title="web services"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
