import React from "react";
import { useState } from "react";
import ImageProductOne from "../assets/image-product-1.jpg";
import ImageProductTwo from "../assets/image-product-2.jpg";
import ImageProductThree from "../assets/image-product-3.jpg";
import ImageProductFour from "../assets/image-product-4.jpg";
import iconClose from "../assets/icon-close.svg";
import ThumbnailImageProductOne from "../assets/image-product-1-thumbnail.jpg";
import ThumbnailImageProductTwo from "../assets/image-product-2-thumbnail.jpg";
import ThumbnailImageProductThree from "../assets/image-product-3-thumbnail.jpg";
import ThumbnailImageProductFour from "../assets/image-product-4-thumbnail.jpg";

const CarouselImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPoppedOut, setIsPoppedOut] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);

  const images = [
    ImageProductOne,
    ImageProductTwo,
    ImageProductThree,
    ImageProductFour,
  ];

  const thumbnailImages = [
    ThumbnailImageProductOne,
    ThumbnailImageProductTwo,
    ThumbnailImageProductThree,
    ThumbnailImageProductFour,
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const togglePopOut = () => {
    setIsPoppedOut(!isPoppedOut);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
  };

  if (!showCarousel) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div>
        <div className="relative flex items-center justify-center space-x-4 rounded-lg">
          <img
            src={iconClose}
            alt="close icon"
            className="absolute top-0 right-0 text-orange cursor-pointer z-50"
            onClick={closeCarousel}
            style={{ width: "24px", height: "24px" }}
          />
          <div className="flex items-center justify-center space-x-4 rounded-lg">
            <button
              onClick={goToPrev}
              className="p-2 bg-white rounded-full hover:bg-white hover:text-orange0"
            >
              &lt;
            </button>
            <img
              src={images[currentIndex]}
              alt="carousel images"
              // onClick={togglePopOut}
              className={`transition-transform ${
                isPoppedOut ? "scale-150" : "scale-100"
              }`}
              style={{
                maxWidth: "90%",
                maxHeight: "75vh",
                borderRadius: "20px",
              }}
            />
            <button
              onClick={goToNext}
              className="p-2 bg-white rounded-full hover:bg-white hover:text-orange"
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-evenly p-10">
          {thumbnailImages.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`product ${index + 1}`}
              className="w-40 h-40 rounded-lg hover:grayscale transition duration-300 border-2 border-transparent hover:border-orange-800"
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselImages;
