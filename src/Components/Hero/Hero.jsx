import React from 'react';
import "./Hero.css";
import handIcon from "../Assets/Hero/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import heroImage from "../Assets/Hero/hero_image.png";
import hero1 from "../Assets/Hero/heroImg1.jpg";
import hero2 from "../Assets/Hero/heroImg2.jpg";
import hero3 from "../Assets/Hero/heroImg3.jpg";
import { ImageSlider } from './ImageSlider';


export const Hero = () => {
    const IMAGES = [
        {url: hero1, alt: "Hero1 image"},
        {url: hero2, alt: "Hero2 image"},
        {url: hero3, alt: "Hero3 image"}
    ];


  return (
    <section className='hero'>
        <div className=" hero-image-wrapper">
            <ImageSlider images={IMAGES} />
        </div>
    </section>
  )
}
