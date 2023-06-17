import React, { useState } from "react";
import SliderOne from "./SliderOne";
import SliderTwo from "./SliderTwo";
import SliderThree from "./SliderThree";

function SliderSection() {
  const [activeButton, setActiveButton] = useState(1);

  const buttonHandler = (key) => {
    setActiveButton(key);
  };

  return (
    <article className="mt-[2.5rem] px-[2rem] tablet:px-[169px] mx-auto ">
      <div className="mb-[4.5rem] mx-auto text-center desktop:flex desktop:w-[730px] justify-evenly tablet:border-b  tablet:mb-[4.5rem]">
        <hr />
        <button
          onClick={() => buttonHandler(1)}
          className={`text-[1rem] py-[17px] border-b-4  hover:text-softred ${
            activeButton === 1
              ? "text-darkblue border-softred"
              : " text-grayblue border-transparent"
          } `}
        >
          Simple Bookmarking
        </button>
        <hr />
        <button
          onClick={() => buttonHandler(2)}
          className={`text-[1rem] py-[17px] border-b-4  hover:text-softred ${
            activeButton === 2
              ? "text-darkblue border-softred"
              : " text-grayblue border-transparent"
          } `}
        >
          Speedy Searching
        </button>
        <hr />
        <button
          onClick={() => buttonHandler(3)}
          className={`text-[1rem] py-[17px] border-b-4  hover:text-softred ${
            activeButton === 3
              ? "text-darkblue border-softred"
              : " text-grayblue border-transparent"
          } `}
        >
          Easy Sharing
        </button>
        <hr />
      </div>

      <div className="fade-in  tablet:h-[346px] h-[485px] ">
        {activeButton === 1 && <SliderOne />}
        {activeButton === 2 && <SliderTwo />}
        {activeButton === 3 && <SliderThree />}
      </div>
    </article>
  );
}

export default SliderSection;
