import React from "react";

const SneakerCounter = () => {
  return (
    <div className="custom-number-input h-10 w-32">
      <label
        for="custom-input-number"
        className="w-full text-gray-700 text-sm font-semibold"
      >
        {" "}
        Counter
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-1 cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center"
        ></input>
      </div>
    </div>
  );
};

export default SneakerCounter;
