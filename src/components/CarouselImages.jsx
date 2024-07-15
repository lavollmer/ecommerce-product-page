import React from 'react'
import {useState} from 'react';
import ImageProductOne from "../assets/image-product-1.jpg";
import ImageProductTwo from "../assets/image-product-2.jpg";
import ImageProductThree from "../assets/image-product-3.jpg";
import ImageProductFour from "../assets/image-product-4.jpg";


const CarouselImages = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPoppedOut, setIsPoppedOut] = useState(false);

    const images =[
ImageProductOne,
ImageProductTwo,
ImageProductThree
ImageProductFour,
    ]

    const goToNext = () => {
        setCurrentIndex((prevIndex) => {prevIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => {prevIndex - 1 + images.length) % images.length);
    };

    const togglePopOut = () => {
       setIsPoppedOut(!isPoppedOut);
    };

  return (
    <div>CarouselImages</div>
  )
}

export default CarouselImages