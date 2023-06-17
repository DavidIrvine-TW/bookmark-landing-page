import React from "react";
import dots from "../assets/bg-dots.svg";
import chrome from "../assets/logo-chrome.svg";
import firefox from "../assets/logo-firefox.svg";
import opera from "../assets/logo-opera.svg";

function Download() {
  return (
    <article className="px-[2rem] mt-[4.8125rem] tablet:mt-[14.875rem] ">
      <div className="text-center mb-[2.5rem] tablet:w-[541px] mx-auto tablet:mb-[3rem]">
        <h3 className="text-sec-head-mb tablet:text-sec-head-dk text-darkblue font-bold">
          Download the extension
        </h3>
        <p className="text-body-mb tablet:text-body-dk text-grayblue">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className="tablet:flex tablet:mx-auto tablet:w-[911px] justify-between">
        <div className="card h-[371px] flex flex-col px-[1.5rem] pb-[1.5rem] pt-[3rem] items-center rounded-lg mb-[2.5rem] tablet:w-[280px]">
          <img className="mb-[2rem]" src={chrome} />
          <p className="text-[1.25rem] text-darkblue font-bold font-rubik leading-[23px] tracking-[0.25px] mb-[0.5rem]">
            Add to Chome
          </p>
          <p className="text-[0.9375rem] text-grayblue mb-[2rem]">
            Minimum version 62e
          </p>
          <div className="w-full h-[4px] mb-[1.5rem]">
            <img src={dots} />
          </div>
          <button className="hover:border hover:border-softblue hover:text-softblue hover:bg-white bg-softblue text-white w-full h-full rounded-lg text-[0.875rem] leading-[28px] tracking-[0.25px] font-bold">
            Add & Install Extension
          </button>
        </div>

        <div className="card h-[371px] flex flex-col px-[1.5rem] pb-[1.5rem] pt-[3rem] items-center rounded-lg  mb-[2.5rem] tablet:w-[280px] tablet:mt-[2rem]">
          <img className="mb-[2rem]" src={firefox} />
          <p className="text-[1.25rem] text-darkblue font-bold font-rubik leading-[23px] tracking-[0.25px] mb-[0.5rem]">
            Add to Firefox
          </p>
          <p className="text-[0.9375rem] text-grayblue mb-[2rem]">
            Minimum version 55
          </p>
          <div className="w-full h-[4px] mb-[1.5rem]">
            <img src={dots} />
          </div>
          <button className="hover:border hover:border-softblue hover:text-softblue hover:bg-white bg-softblue text-white w-full h-full rounded-lg text-[0.875rem] leading-[28px] tracking-[0.25px] font-bold">
            Add & Install Extension
          </button>
        </div>

        <div className="card h-[371px] flex flex-col px-[1.5rem] pb-[1.5rem] pt-[3rem] items-center rounded-lg  mb-[2.5rem] tablet:w-[280px] tablet:mt-[4rem]">
          <img className="mb-[2rem]" src={opera} />
          <p className="text-[1.25rem] text-darkblue font-bold font-rubik leading-[23px] tracking-[0.25px] mb-[0.5rem]">
            Add to Opera
          </p>
          <p className="text-[0.9375rem] text-grayblue mb-[2rem]">
            Minimum version 46
          </p>
          <div className="w-full h-[4px] mb-[1.5rem]">
            <img src={dots} />
          </div>
          <button className="hover:border hover:border-softblue hover:text-softblue hover:bg-white bg-softblue text-white w-full h-full rounded-lg text-[0.875rem] leading-[28px] tracking-[0.25px] font-bold">
            Add & Install Extension
          </button>
        </div>
      </div>
    </article>
  );
}

export default Download;
