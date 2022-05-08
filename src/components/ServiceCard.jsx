import React from "react";

const ServiceCard = ({ icon, title, text, light }) => {
  return (
    <div
      className={`service-card text-center flex flex-col items-center gap-2 p-3 pb-10 ${
        light ? "bg-white" : "bg-[#1f1f1f]"
      } rounded-lg hover:shadow-md`}
    >
      <div className="service-icon text-3xl text-orange-700">{icon}</div>
      <h3 className="service-title text-orange-700 capitalize font-semibold text-lg mb-2">
        {title}
      </h3>
      <div className="service-description">{text}</div>
    </div>
  );
};

export default ServiceCard;
