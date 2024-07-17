import React from "react";
import cart from "../assets/icon-cart.svg";

const AddToCart = ({ setCount }) => {

  const handleAddToCart = () => {
    setCount(prevCount); // Increment count
  };

  return (
    <div className="flex flex-row w-full h-full items-center justify-center font-kumbh font-bold font-lg">
      <button
        onClick={handleAddToCart}
        className="flex flex-row items-center bg-orange text-black rounded-lg py-6 px-16"
      >
        <img src={cart} alt="cart icon" className="mr-2" />
        <p className="font-bold">Add to Cart</p>
      </button>
    </div>
  );
};

export default AddToCart;
