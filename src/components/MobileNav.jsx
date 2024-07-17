import React from "react";
import { useState } from "react";
import logo from "../assets/logo.svg"; // Import logo from assets folder
import cart from "../assets/icon-cart.svg"; // Import cart from assets folder
import avatar from "../assets/image-avatar.png"; // Import avatar from assets folder
import Dropdown from "./Dropdown"; // Import Dropdown component
import menu from "../assets/icon-menu.svg"; // Import menu from assets folder
import iconClose from "../assets/icon-close.svg";

const DesktopNav = () => {
  const [showDropdownCart, setShowDropdownCart] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleCartClick = () => {
    setShowDropdownCart(!showDropdownCart);
  };

  const toggleNav = () => {
    setIsNavVisible((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col z-50 font-kumbh bg-white">
      <div className="flex flex-row w-full justify-evenly items-center">
        <div className="mt-10 ml-10">
          <img
            src={menu}
            alt="menu icon"
            className="cursor-pointer"
            style={{ width: "16px", height: "16px" }}
            onClick={toggleNav}
          />
        </div>
        <div className="mt-10 ml-6">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-row relative items-center mt-10 ml-10 w-81 space-x-6">
          <img
            src={cart}
            onClick={handleCartClick}
            alt="cart icon"
            className="cursor-pointer"
          />
          <img
            src={avatar}
            onClick={handleCartClick}
            alt="avatar icon"
            className="h-10 w-10 cursor-pointer transition-colors duration-300 border-transparent b-2 hover:border-orange-800"
          />

          {showDropdownCart && <Dropdown />}
        </div>
        {/* Side Navigation */}
        <div
          className={`fixed top-0 left-0 w-1/2 h-full text-kumbhs bg-white transform ${
            isNavVisible ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div>
            <div>
              <img
                src={iconClose}
                alt="close icon"
                className="absolute top-4 left-4 text-orange cursor-pointer z-50"
                onClick={toggleNav}
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <div className="font-bold font-kumbh mt-20 ml-4 space-y-6 text-dark-grayish-blue">
              <p>Collections</p>
              <p>Men</p>
              <p>Women</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10" />
    </div>
  );
};

export default DesktopNav;
