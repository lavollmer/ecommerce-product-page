import React from "react";
import sneakersMain from "../assets/image-product-1.jpg";

const MainDesktop = () => {
  return (
    <div className="flex flex-row p-20">
      <div>
        <img src={sneakersMain} alt="sneakers" />
      </div>
    </div>
  );
};

export default MainDesktop;
