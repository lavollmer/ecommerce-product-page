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
    <div className="relative">
      <div className="relative">
        <button
          onClick={goToPrev}
          className="absolute z-40 p-2 bg-white rounded-full hover:bg-white hover:text-orange"
          style={{
            top: "50%",
            left: "25%",
            transform: "translate(-50%, -50%)",
            marginLeft: "-50px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            color: "black",
            fontWeight: "bold",
          }}
        >
          &lt;
        </button>
        <div className="relative">
          <img
            src={images[currentIndex]}
            alt="carousel images"
            className={`transition-transform ${
              isPoppedOut ? "scale-100" : "scale-100"
            }`}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <button
          onClick={goToNext}
          className="absolute z-40 p-2 bg-white rounded-full hover:bg-white hover:text-orange"
          style={{
            top: "50%",
            right: "25%",
            transform: "translate(-50%, -50%)",
            marginRight: "-100px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            color: "black",
            fontWeight: "bold",
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CarouselImages;
