import React from "react";
import { useState } from "react";

const SneakerCounter = ({ onAddToCart }) => {

  // Initialize count state
  const [count, setCount] = useState(0);

   // Increment function
  const increment = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      onAddToCart(newCount);
      return newCount;
    });
  };

  // Decrement function
  const decrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount > 0 ? prevCount - 1 : 0;
      onAddToCart(newCount);
      return newCount;
    });
  };

  return (
    <div className="flex md:flex-row h-full w-3/4 md:w-1/2 rounded-full "> 
      <div className="flex flex-row relative bg-light-grayish-blue mt-1">
        <button
          data-action="decrement"
          className="bg-light-grayish-blue text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-1 cursor-pointer outline-none"
          onClick={decrement}
        >
          <span className="m-auto text-2xl font-thin text-orange">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-light-grayish-blue font-bold text-lg hover:text-black focus:text-black md:text-basecursor-default flex items-center"
          value={count}
          readOnly
        />
        <button
          data-action="increment"
          className="bg-light-grayish-blue text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          onClick={increment}
        >
          <span className="m-auto text-2xl font-thin text-orange">+</span>
        </button>
      </div>
    </div>
  );
};

export default SneakerCounter;
