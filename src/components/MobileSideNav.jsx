import React from "react";
import closeIcon from "../assets/icon-close.svg";
import { useState } from "react";

const MobileSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="fixed top-4 left-4 z-50 text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Menu
      </button>
      <div className={`fixed top-0 right-0 h-full bg-white shadow-md z-40 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-64`}>
        <img src={closeIcon} alt="Close" className="cursor-pointer p-4" onClick={() => setIsOpen(false)} />
        {/* Sidebar content goes here */}
        <div className="p-4">
          <div className="mb-4">Link 1</div>
          <div className="mb-4">Link 2</div>
          <div className="mb-4">Link 3</div>
        </div>
      </div>
    </>
  );
};

export default MobileSideNav;