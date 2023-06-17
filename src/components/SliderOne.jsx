import React from "react";
import tabOne from "../assets/illustration-features-tab-1.svg";

function SliderOne() {
  return (
    <article className="fade-in mx-auto tablet:flex gap-[7.8125rem]">
      <div className="mb-[4.3125rem] relative">
        <img src={tabOne} />
        <div className="hero-back-one absolute bottom-[-2.5rem] left-[-300px] tablet:left-[-600px] tablet:bottom-[-3.875rem] bg-softblue rounded-full z-[-2] w-[577px] h-[203px] tablet:w-[1000px] tablet:h-[352px]" />
      </div>

      <div className="text-center tablet:w-[445px] tablet:text-start tablet:mt-[3.5625rem]">
        <p className="font-bold text-darkblue text-sec-head-mb leading-[52px] tablet:text-sec-head-dk tablet:mb-[1rem]">
          Bookmark in one click
        </p>
        <p className="text-grayblue text-body-mb mb-[1rem] tablet:text-body-dk tablet:mb-[2rem]">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <button className="bg-softblue font-bold px-[1.5rem] py-[10px] text-white rounded mx-auto">
          More Info
        </button>
      </div>
    </article>
  );
}

export default SliderOne;
