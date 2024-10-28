"use client"

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import Carousel1 from '../../assets/Chris6.jpg'
import Carousel2 from '../../assets/Chris2.jpg'
import Carousel3 from '../../assets/Chris3.jpg'
import Carousel4 from '../../assets/Chris4.jpg'
import backGroundImage from '../../assets/bg-image.jpg'

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    {
      src: Carousel1,
      alt: "Wild Landscape",
      caption: "Wild Landscape",
    },
    {
      src: Carousel2,
      alt: "Camera",
      caption: "Camera",
    },
    {
      src: Carousel3,
      alt: "Exotic Fruits",
      caption: "Exotic Fruits",
    },
    {
      src: Carousel4,
      alt: "Exotic Fruits",
      caption: "Exotic Fruits",
    },
  ]

  const totalImages = images.length

  const prev = () => setCurrentIndex((curr) => (curr === 0 ? totalImages - 1 : curr - 1))
  const next = () => setCurrentIndex((curr) => (curr === totalImages - 1 ? 0 : curr + 1))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages)
    }, 5000)

    return () => clearInterval(interval)
  }, [totalImages])

  return (
    <div className="bg-image" style={{backgroundImage: `url(${backGroundImage})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
    <div className="relative w-full h-[60vh] py-5 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            className="w-full h-full object-contain"
            alt={image.alt}
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded">
            {image.caption}
          </div>
        </div>
      ))}
      
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-10 p-2 rounded-full"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6 text-black" />
        <span className="sr-only">Previous slide</span>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-10 p-2 mr-3 rounded-full"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6 text-black" />
        <span className="sr-only">Next slide</span>
      </button>
    </div>
    </div>
  )
}

export default MyCarousel