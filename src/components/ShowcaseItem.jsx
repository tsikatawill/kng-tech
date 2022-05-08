import React from "react";
import Phone from "../imgs/iphone2.png";

const ShowcaseItem = () => {
  return (
    <div className="showcase-item">
      <div className="flex flex-col-reverse items-center gap-10">
        <div className="description w-full text-center md:w-2/3">
          <h3 className="font-semibold mb-2">Moms and Midwives</h3>
          <p className="w-full sm:max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            dicta! Repudiandae quis voluptates ea, doloremque dolor aut nemo
            nobis, rerum magnam asperiores, iure quibusdam mollitia harum
            consectetur? Vel, dignissimos necessitatibus.
          </p>
          <button className="btn border hover:bg-white hover:text-slate-900 mt-5">
            Read more
          </button>
        </div>
        <div className="image">
          <img src={Phone} alt="iphone" className="h-96" />
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
