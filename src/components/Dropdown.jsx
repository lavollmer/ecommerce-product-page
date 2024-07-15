import React from "react";
import { useState } from "react";
import ThumbnailImageProductOne from "../assets/image-product-1-thumbnail.jpg";

const Dropdown = ({ count }) => {
  const [total, setTotal] = useState(125.0 * count);

  return (
    <div className="absolute fixed top-14 left-0 w-64 p-4 bg-white shadow-md border border-gray-100">
      <h1 className="font-kumbhs text-dark-grayish-blue font-bold">Cart</h1>
      <hr />
      <div className="flex ">
        <div>
          <img
            src={ThumbnailImageProductOne}
            alt="Thumbnail"
            className="h-10 w-10"
          />
        </div>
        <div>
          <h2 className="font-kumbhs font-sm">Fall Limited Edition Sneakers</h2>
        </div>
        <div className="flex flex-row">
          <p>$125.00 X</p>
          <p> {count}</p>
          <p>${total}</p>
        </div>
      </div>
      <button className="flex flex-row items-center justify-center bg-orange text-black font-bold text-lg rounded-lg py-3 px-6 w-full">
        Checkout
      </button>
    </div>
  );
};

export default Dropdown;
