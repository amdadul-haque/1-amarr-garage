'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CarouselSlider = () => {

  const images = [
    '/images/slider/install.jpg',
    '/images/slider/2.jpeg',
    '/images/slider/3.jpeg',
    '/images/slider/4.jpg',
    '/images/slider/5.jpeg',
    '/images/slider/6.jpeg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative shadow select-none" id="home">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      {/* Link for the first image only */}
      {currentIndex === 0 ? (
        <Link href="https://veterangaragedoor.com/garage-doors/" passHref>
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width="1000"
              height="800"
              className="w-full h-[300px] sm:h-[500px] md:h-[600px] xl:min-h-[80vh] xl:max-h-[80vh]"
              loading='lazy'
              onLoadingComplete={() => setLoading(false)}
            />
        </Link>
      ) : (
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width="1000"
          height="800"
          className="w-full h-[300px] sm:h-[500px] md:h-[600px] xl:min-h-[80vh] xl:max-h-[80vh]"
          loading='lazy'
          onLoadingComplete={() => setLoading(false)}
        />
      )}

      <div className="flex items-center justify-center">
        <FaChevronLeft className="absolute left-0 top-1/2 transform -translate-y-[50px] cursor-pointer text-white text-4xl z-10" onClick={handlePrev} />
        <FaChevronRight className="absolute right-0 top-1/2 transform -translate-y-[50px] cursor-pointer text-white text-4xl z-10" onClick={handleNext} />
      </div>

      <div className="absolute bottom-4 w-full mx-auto flex justify-center mb-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3  bg-gray-100 rounded-full mx-2 cursor-pointer ${index === currentIndex ? ' w-8' : ' w-3'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;
