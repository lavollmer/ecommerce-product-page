import React from "react";
import { useState } from "react";
import ImageProductOne from "../assets/image-product-1.jpg";
import ImageProductTwo from "../assets/image-product-2.jpg";
import ImageProductThree from "../assets/image-product-3.jpg";
import ImageProductFour from "../assets/image-product-4.jpg";

const CarouselImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPoppedOut, setIsPoppedOut] = useState(false);

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

  return (
    <div className="flex items-center justify-center space-x-4 rounded-lg">
      <button
        onClick={goToPrev}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        &lt;{" "}
      </button>
      <img
        src={images[currentIndex]}
        alt="carousel"
        onClick={togglePopOut}
        className={`transition-transform ${
          isPoppedOut ? "scale-150" : "scale-100"
        }` }
        style={{ maxWidth: "90%", maxHeight: "75vh" }}
      />
      <button
        onClick={goToNext}
        className="p-2 bg-gray-200 rounded-full hvoer:bg-gray-300"
      >
        &gt;
      </button>
    </div>
  );
};

export default CarouselImages;
