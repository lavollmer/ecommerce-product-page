import React from "react";
import cart from "../assets/icon-cart.svg";

const AddToCart = ({ setCount }) => {
  return (
    <div className="flex flex-row">
      <button className="flex flex-row items-center bg-orange text-black font-bold text-lg rounded-lg py-3 px-6" onClick={() => setCount((prevCount) => prevCount + 1)}>
        <img src={cart} alt="cart icon" className="mr-2 font-black" />
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
