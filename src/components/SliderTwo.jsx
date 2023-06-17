import React from "react";
import tabTwo from "../assets/illustration-features-tab-2.svg";

function SliderTwo() {
  return (
    <article className="fade-in tablet:flex justify-between ">
      <div className="mb-[2.3125rem] relative">
        <img className="tablet:w-[468px]" src={tabTwo} />
        <div className="hero-back-one absolute bottom-[-1.5rem] left-[-300px] tablet:left-[-650px] tablet:bottom-[-1.875rem] bg-softblue rounded-full z-[-2] w-[577px] h-[203px] tablet:w-[1000px] tablet:h-[352px]" />
      </div>

      <div className="text-center tablet:w-[445px] tablet:text-start tablet:mt-[3.5625rem]">
        <p className="font-bold text-darkblue text-sec-head-mb leading-[52px] tablet:text-sec-head-dk tablet:mb-[1rem]">
          Intelligent search
        </p>
        <p className="text-grayblue text-body-mb mb-[1rem] tablet:text-body-dk tablet:mb-[2rem]">
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <button className="bg-softblue font-bold px-[1.5rem] py-[10px] text-white rounded mx-auto">
          More Info
        </button>
      </div>
    </article>
  );
}

export default SliderTwo;
