import React from "react";
import logo from "../assets/logo-bookmark.svg";
import MenuDesktop from "./MenuDesktop";

function Navbar({ setMenuOpen, menuOpen }) {
  const menuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  const cross = menuOpen ? "cross" : "";

  return (
    <nav className="flex justify-between items-center pt-[2.5rem] px-[2rem]  mx-auto tablet:pt-[3rem] desktop:px-[0px] tablet:max-w-[1104px]">
      <div>
        <img src={logo} />
      </div>

      <div
        className={`nav-menu hamburger-menu ${cross} overflow-hidden`}
        onClick={menuHandler}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <MenuDesktop />
    </nav>
  );
}

export default Navbar;
