import React from "react";
import sneakersMain from "../assets/image-product-1.jpg";
import { useState } from "react";
import CarouselImages from "./CarouselImages";
import ThumbnailImageProductOne from "../assets/image-product-1-thumbnail.jpg";
import ThumbnailImageProductTwo from "../assets/image-product-2-thumbnail.jpg";
import ThumbnailImageProductThree from "../assets/image-product-3-thumbnail.jpg";
import ThumbnailImageProductFour from "../assets/image-product-4-thumbnail.jpg";

const MainDesktop = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  const handleThumbnailClick = () => {
    setShowCarousel(true);
  };

  return (
    <div className="flex flex-col p-20 space-y-10">
      <div className="flex items-center justify-center">
        <img
          src={sneakersMain}
          alt="sneakers image"
          className="rounded-lg h-100 w-100"
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <img
          src={ThumbnailImageProductOne}
          alt="product one"
          className="w-40 h-40 rounded-lg hover:grayscale transition duration-300 border-2 border-transparent hover:border-orange-800"
          onClick={handleThumbnailClick}
        />
        <img
          src={ThumbnailImageProductTwo}
          alt="product two"
          className="w-40 h-40 rounded-lg hover:grayscale transition duration-300 border-2 border-transparent hover:border-orange-800"
          onClick={handleThumbnailClick}
        />
        <img
          src={ThumbnailImageProductThree}
          alt="product three"
          className="w-40 h-40 rounded-lg hover:grayscale transition duration-300 border-2 border-transparent hover:border-orange-800"
          onClick={handleThumbnailClick}
        />
        <img
          src={ThumbnailImageProductFour}
          alt="product four"
          className="w-40 h-40 rounded-lg hover:grayscale transition duration-300 border-2 border-transparent hover:border-orange-800"
          onClick={handleThumbnailClick}
        />
      </div>
      {showCarousel && <CarouselImages />}
    </div>
  );
};

export default MainDesktop;
