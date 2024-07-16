import React from "react";
import PropTypes from "prop-types";
import cart from "../assets/icon-cart.svg";

const AddToCart = ({ setCount }) => {
  return (
    <div className="flex flex-row w-full h-full items-center justify-center">
      <button onClick={() => setCount((prevCount) => prevCount + 1)} className="flex flex-row items-center bg-orange text-black font-bold text-lg rounded-lg py-6 px-16 md:py-3 md:px-6" >
        <img src={cart} alt="cart icon" className="mr-2 font-black" />
        Add to Cart
      </button>
    </div>
  );
};


export default AddToCart;
