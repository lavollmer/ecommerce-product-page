import React from "react";
import { useState } from "react";
import ImageProductOne from "../assets/image-product-1.jpg";
import ImageProductTwo from "../assets/image-product-2.jpg";
import ImageProductThree from "../assets/image-product-3.jpg";
import ImageProductFour from "../assets/image-product-4.jpg";
import iconClose from "../assets/icon-close.svg";

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
    <div className="flex flex-col p-10 flex items-center justify-center">
      <div>
        <div className="flex items-center justify-center space-x-4 rounded-lg">
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
              className={`transition-transform ${
                isPoppedOut ? "scale-100" : "scale-100"
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
      </div>
    </div>
  );
};

export default CarouselImages;
