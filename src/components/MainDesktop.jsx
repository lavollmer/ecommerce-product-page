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
      <div className="flex items-center justify-center">
        <img src={sneakersMain} alt="sneakers image" className="rounded-lg h-100 w-100" />
      </div>
      <div className="flex flex-row items-center justify-between">
        <img
          src={ImageProductOne}
          alt="product one"
          className="w-40 h-40 rounded-lg hover:grayscale transition duration-300 border-2 border-transparent hover:border-orange-800"
        />
        <img
          src={ImageProductTwo}
          alt="product two"
          className="w-40 h-40 rounded-lg hover:grayscale transition duration-300 border-2 border-transparent hover:border-orange-800"
        />
        <img
          src={ImageProductThree}
          alt="product three"
          className="w-40 h-40 rounded-lg hover:grayscale transition duration-300 border-2 border-transparent hover:border-orange-800"
        />
        <img
          src={ImageProductFour}
          alt="product four"
          className="w-40 h-40 rounded-lg hover:grayscale transition duration-300 border-2 border-transparent hover:border-orange-800"
        />
      </div>
      {/* <div>
        <CarouselImages />
      </div> */}
    </div>
  );
};

export default MainDesktop;
