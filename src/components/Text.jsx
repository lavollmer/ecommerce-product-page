import React from "react";

const Text = () => {
  return (
    <div className="flex flex-col flex-start p-4 md:p-20 space-y-4 font-kumbh">
      <h1 className="text-dark-grayish-blue font-bold font-kumbh text-md">SNEAKER COMPANY</h1>
      <h2 className="text-black font-bold text-4xl font-kumbh">
        Fall Limited Edition Sneakers
      </h2>
      <h3 className="text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </h3>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row space-x-4">
          <h3 className="font-bold text-black text-2xl">$125.00</h3>
          <h3 className="flex flex-row items-center justify-center font-bold bg-black rounded-lg text-white px-4">
            50%
          </h3>
        </div>
        <div className="flex text-lg mr-4">
        <h3 className="text-dark-grayish-blue font-bold line-through">
          $250.00
        </h3>
        </div>
      </div>
    </div>
  );
};

export default Text;
