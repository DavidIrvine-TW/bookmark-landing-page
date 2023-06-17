import React from "react";
import herosvg from "../assets/illustration-hero.svg";

function Hero() {
  return (
    <article className="py-[2.5rem] tablet:py-[0px] px-[1rem]  flex flex-col tablet:ml-[10.3125rem] tablet:px-[0px] tablet:w-[1184px] tablet:h-[386px] tablet:flex-row-reverse tablet:mt-[6.75rem] ">
      <div className="mb-[5.875em] max-w-[579px] relative mx-auto">
        <img className="w-full" src={herosvg} />
        <div className="hero-back-one absolute bottom-[-0.875rem] left-[50px] tablet:left-[150px] tablet:bottom-[-7.875rem] bg-softblue rounded-full z-[-1] w-[577px] h-[203px] tablet:w-[1000px] tablet:h-[352px]" />
      </div>

      <div className="text-center  tablet:w-[540px] tablet:text-start tablet:mt-[3rem]">
        <h1 className="font-rubik text-pri-head-mb tablet:text-pri-head-dk text-darkblue mb-[1rem]">
          A Simple Bookmark Manager
        </h1>
        <p className="font-rubik tablet:text-body-dk ext-body-mb text-grayblue mb-[2rem]">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex items-center justify-center gap-[14px] tablet:w-[343px] tablet:justify-start">
          <button className="hero-btn h-[48px] w-[151px] text-[0.875rem] leading-[28px] font-bold  bg-softblue text-white rounded tracking-[0.25px] hover:border hover:border-softblue hover:text-softblue hover:bg-white">
            Get it on Chrome
          </button>
          <button className="hero-btn h-[48px] w-[151px] text-[0.875rem] leading-[28px] font-bold  bg-offwhite text-grayblue rounded tracking-[0.25px]  hover:border hover:border-darkblue hover:text-darkblue hover:bg-white">
            Get it on Firefox
          </button>
        </div>
      </div>
    </article>
  );
}

export default Hero;
