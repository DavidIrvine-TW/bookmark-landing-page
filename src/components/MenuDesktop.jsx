import React from "react";

function MenuDesktop() {
  return (
    <div className="menu-desktop flex ">
      <ul className="flex gap-[3rem] items-center uppercase text-[0.8125rem] text-darkblue tracking-[1.5px] leading-[17px] ">
        <li className="hover:text-softred cursor-pointer">features</li>
        <li className="hover:text-softred cursor-pointer">pricing</li>
        <li className="hover:text-softred cursor-pointer">contact</li>
        <li>
          {" "}
          <button className="w-[111px] h-[40px] border rounded font-bold tracking-[1.5px] hover:border-softred hover:bg-white hover:text-softred text-white bg-softred">
            LOGIN
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MenuDesktop;
