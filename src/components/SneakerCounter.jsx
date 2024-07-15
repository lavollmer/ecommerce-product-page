import React from "react";
import { useState } from "react";

const SneakerCounter = () => {
  //Initialize state
  const [count, setCount] = useState(0);

  //Increment and decrement functions
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="custom-number-input h-10 w-32">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-grayish-blue mt-1">
        <button
          data-action="decrement"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-1 cursor-pointer outline-none"
          onClick={decrement}
        >
          <span className="m-auto text-2xl font-thin text-orange">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center"
          value={count}
          readOnly
        />
        <button
          data-action="increment"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          onClick={increment}
        >
          <span className="m-auto text-2xl font-thin text-orange">+</span>
        </button>
      </div>
    </div>
  );
};

export default SneakerCounter;
