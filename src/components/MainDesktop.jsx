import React from "react";
import sneakersMain from "../assets/image-product-1.jpg";
import CarouselImages from "./CarouselImages";
import ImageProductOne from "../assets/image-product-1.jpg";
import ImageProductTwo from "../assets/image-product-2.jpg";
import ImageProductThree from "../assets/image-product-3.jpg";
import ImageProductFour from "../assets/image-product-4.jpg";

const MainDesktop = () => {
  return (
    <div className="flex flex-col p-20 space-y-10">
      <div>
        <img src={sneakersMain} alt="sneakers image" className="rounded-lg" />
      </div>
      <div className="flex flex-row items-center space-x-20 ml-10">
        <img
          src={ImageProductOne}
          alt="product one"
          className="w-20 h-20 rounded-lg"
        />
        <img
          src={ImageProductTwo}
          alt="product two"
          className="w-20 h-20 rounded-lg"
        />
        <img
          src={ImageProductThree}
          alt="product three"
          className="w-20 h-20 rounded-lg"
        />
        <img
          src={ImageProductFour}
          alt="product four"
          className="w-20 h-20 rounded-lg"
        />
      </div>
      <div>
        <CarouselImages />
      </div>
    </div>
  );
};

export default MainDesktop;
