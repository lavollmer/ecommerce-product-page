import React from "react";

const Dropdown = () => {
  return (
    <ul className="absolute fixed top-14 left-0 w-48 bg-white shadow-md border border-gray-100">
      <li className="px-4 py-2 hover:bg-gray-100">Item 1</li>
      <li className="px-4 py-2 hover:bg-gray-100">Item 2</li>
      <li className="px-4 py-2 hover:bg-gray-100">Item 3</li>
    </ul>
  );
};

export default Dropdown;
