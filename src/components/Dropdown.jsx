import React from "react";
import { useState } from "react";
import ThumbnailImageProductOne from "../assets/image-product-1-thumbnail.jpg";

const Dropdown = () => {
  return (
    <div className="absolute fixed top-14 left-0 w-64 p-4 bg-white shadow-md border border-gray-100">
      <h1 className="font-kumbhs text-dark-grayish-blue font-bold">Cart</h1>
      <hr />
      <div className="flex flex-col items-center">
        <p>Product 1</p>
        <button className="flex flex-row items-center justify-center bg-orange text-black font-bold text-lg rounded-lg py-3 px-6 w-full">Checkout</button>
    </div>
    </div>
  );
};

export default Dropdown;
