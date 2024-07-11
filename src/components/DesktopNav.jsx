import React from "react";
import logo from "../assets/logo.svg"; // Import logo from assets folder
import cart from "../assets/icon-cart.svg"; // Import cart from assets folder
import avatar from "../assets/image-avatar.png"; // Import avatar from assets folder

const DesktopNav = () => {
  return (
    <div className="fixed top-0 left-0 w-full right-0">
      <div className="flex flex-row justify-evenly items-center">
        <div className="mt-10 ml-10">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <ul className="flex flex-row items-center justify-center space-x-10 mt-10 ml-10">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex flex-row items-center mt-10 ml-10 space-x-6">
          <img src={cart} alt="cart icon" />
          <img src={avatar} alt="avatar" className="h-10 w-10" />
        </div>
      </div>
      <hr className="mt-10" />
    </div>
  );
};

export default DesktopNav;
