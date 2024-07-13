import { useEffect, useState } from "react";
import { useSwipeable } from 'react-swipeable';
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import React from "react";
import "./ImageSlider.css"




export function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(index => (index === images.length - 1 ? 0 : index + 1));
    }, 15000);

    return () => clearInterval(interval);
  }, [images]);

  function showNextImage() {
    setImageIndex(index => (index === images.length - 1 ? 0 : index + 1));
  }

  function showPreviousImage() {
    setImageIndex(index => (index === 0 ? images.length - 1 : index - 1));
  }

  const handlers = useSwipeable({
    onSwipedLeft: showNextImage,
    onSwipedRight: showPreviousImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <section style={{ width: "100%", height: "100%", position: "relative" }} {...handlers}>
      <div className="hero-slider-container">
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            src={url}
            className="hero-slider-img"
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
          />
        ))}
      </div>
      <button className="hero-slider-btn" aria-label="View Previous Image" style={{ left: 0 }} onClick={showPreviousImage}>
        <ArrowBigLeft aria-hidden />
      </button>
      <button className="hero-slider-btn" aria-label="View Next Image" style={{ right: 0 }} onClick={showNextImage}>
        <ArrowBigRight aria-hidden />
      </button>

      <div className="hero-slider-index-btn">
        {images.map((_, index) => (
          <button key={index} aria-label={`View Image ${index + 1}`} className="hero-slider-dot-btn" onClick={() => setImageIndex(index)}>
            {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
          </button>
        ))}
      </div>
    </section>
  );
}
