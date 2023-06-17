import React from "react";
import tabThree from "../assets/illustration-features-tab-3.svg";

function SliderThree() {
  return (
    <article className="fade-in tablet:flex justify-between">
      <div className="mb-[2.3125rem] relative">
        <img src={tabThree} />
        <div className="hero-back-one absolute bottom-[-1.5rem] left-[-300px] tablet:left-[-650px] tablet:bottom-[-2.875rem] bg-softblue rounded-full z-[-2] w-[577px] h-[203px] tablet:w-[1000px] tablet:h-[352px]" />
      </div>

      <div className="text-center tablet:w-[445px]  tablet:text-start tablet:mt-[3.5625rem]">
        <p className="font-bold text-darkblue text-sec-head-mb leading-[52px]  tablet:text-sec-head-dk tablet:mb-[1rem]">
          Share your bookmarks
        </p>
        <p className="text-grayblue text-body-mb mb-[1rem] tablet:text-body-dk tablet:mb-[2rem]">
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </p>
        <button className="bg-softblue font-bold px-[1.5rem] py-[10px] text-white rounded mx-auto">
          More Info
        </button>
      </div>
    </article>
  );
}

export default SliderThree;
