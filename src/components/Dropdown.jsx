import React from "react";

const Dropdown = () => {
  return (
    <div className="absolute fixed top-14 left-0 w-48 p-4 bg-white shadow-md border border-gray-100">
      <h1 className="font-kumbhs text-dark-grayish-blue font-bold">Cart</h1>
      <hr />
        <p>Product 1</p>
        <button className="flex flex-row items-center bg-orange text-black font-bold text-lg rounded-lg py-3 px-6 w-full">Checkout</button>
    </div>
  );
};

export default Dropdown;
