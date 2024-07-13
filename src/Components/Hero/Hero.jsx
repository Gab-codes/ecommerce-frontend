import React from 'react';
import "./Hero.css";
import handIcon from "../Assets/Hero/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import heroImage from "../Assets/Hero/hero_image.png";
import hero1 from "../Assets/Hero/heroImg1.jpg";
import hero2 from "../Assets/Hero/heroImg2.jpg";
import hero3 from "../Assets/Hero/heroImg3.png";
import { ImageSlider } from './ImageSlider';


export const Hero = () => {
    const IMAGES = [
        {url: hero1, alt: "Hero1 image"},
        {url: hero2, alt: "Hero2 image"},
        {url: hero3, alt: "Hero3 image"}
    ];


  return (
    <section className='hero'>
        <div className="hero-container">
            <div className="hero-left">
                <h2> NEW ARIVALS ONLY</h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p>New</p>
                            <img src={handIcon} alt="hand icon" />
                        </div>
                        <p>Collections</p>
                        <p>for everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <div>Latest Collection</div>
                        <img src={arrowIcon} alt="arrow icon" />
                    </div>
            </div>
            <div className="hero-right">
                <img src={heroImage} alt="hero image" />
            </div>
        </div>

        <div className="hero-mobile hero-image-wrapper">
            <ImageSlider images={IMAGES} />
        </div>
    </section>
  )
}
