import React from "react";
import { useState } from "react";
import logo from "../assets/logo.svg"; // Import logo from assets folder
import cart from "../assets/icon-cart.svg"; // Import cart from assets folder
import avatar from "../assets/image-avatar.png"; // Import avatar from assets folder
import Dropdown from "./Dropdown"; // Import Dropdown component

const DesktopNav = () => {
  const [showDropdownCart, setShowDropdownCart] = useState(false);

  const handleCartClick = () => {
    setShowDropdownCart(!showDropdownCart);
  };

  return (
    <div className="font-kumbh bg-white">
      <div className="flex flex-row w-full justify-evenly items-center">
        <div className="mt-10 ml-10">
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

          {showDropdownCart && <Dropdown  />}
        </div>
      </div>
      <hr className="mt-10" />
    </div>
  );
};

export default DesktopNav;
