import React from "react";
import AddToCart from "./AddToCart";
import SneakerCounter from "./SneakerCounter"

const Text = () => {
  return (
    <div className="flex flex-col flex-start p-20 space-y-6 font-kumbh">
      <h1 className="text-dark-grayish-blue font-bold">SNEAKER COMPANY</h1>
      <h2 className="text-black font-bold text-4xl">
        Fall Limited Edition Sneakers
      </h2>
      <h3 className="text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </h3>
      <div className="flex flex-row space-x-4">
        <h3 className="font-bold text-black text-2xl">$125.00</h3>
        <h3 className="flex flex-row items-center justify-center font-bold bg-black rounded-lg text-white px-4">50%</h3>
      </div>
      <div className="flex flew-row items-center">
        <SneakerCounter />
        <AddToCart />
      </div>
    </div>
  );
};

export default Text;
