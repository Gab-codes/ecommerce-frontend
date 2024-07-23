import { useEffect, useState, useRef } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import React from "react";
import "./ImageSlider.css";

export function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!dragging) {
        setImageIndex(index => (index === images.length - 1 ? 0 : index + 1));
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [images, dragging]);

  function showNextImage() {
    setImageIndex(index => (index === images.length - 1 ? 0 : index + 1));
  }

  function showPreviousImage() {
    setImageIndex(index => (index === 0 ? images.length - 1 : index - 1));
  }

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const diff = startX - e.clientX;
    if (diff > 50) {
      showNextImage();
      setDragging(false);
    } else if (diff < -50) {
      showPreviousImage();
      setDragging(false);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleTouchStart = (e) => {
    setDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    const diff = startX - e.touches[0].clientX;
    if (diff > 50) {
      showNextImage();
      setDragging(false);
    } else if (diff < -50) {
      showPreviousImage();
      setDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  return (
    <section
      style={{ width: "100%", height: "100%", position: "relative" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={sliderRef}
    >
      <div className="hero-slider-container">
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            src={url}
            className={`hero-slider-img ${imageIndex === index ? 'active' : ''}`}
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
