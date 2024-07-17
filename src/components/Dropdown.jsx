import React from "react";
import { useState } from "react";
import ThumbnailImageProductOne from "../assets/image-product-1-thumbnail.jpg";
import iconTrash from "../assets/icon-delete.svg";

const Dropdown = ({ count}) => {
  const [total, setTotal] = useState(125.0 * count);


  return (
    <div className="absolute fixed top-14 left-0 w-full bg-white shadow-md border border-gray-100">
      <h1 className="font-kumbhs text-dark-grayish-blue font-bold mb-4 p-2">
        Cart
      </h1>
      <hr />
      <div className="flex flex-row items-center space-x-4 m-2">
        <div className="flex flex-col">
          <img
            src={ThumbnailImageProductOne}
            alt="Thumbnail"
            className="h-14 w-16 rounded-lg"
          />
        </div>
        <div >
          <div className="font-kumbhs text-md text-grayish-blue">
            <h2>Fall Limited Edition Sneakers</h2>
          </div>
          <div className="flex flex-row font-kumbhs text-md text-grayish-blue">
            <p>$125.00 X</p>
            <p> {count}</p>
            <p className="font-bold ml-2 text-black">${total}</p>
          </div>
        </div>
        <img
          src={iconTrash}
          alt="Delete icon"
          className="h-4 w-3 cursor-pointer"
        />
      </div>
      <div className="flex flex-col p-6">
        <button className="flex flex-row items-center justify-center bg-orange text-black font-bold text-lg rounded-lg py-2 px-4 w-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
