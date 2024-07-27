import React from 'react';
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <section className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitate buying and selling 
               of products or services over the internet and serves as a virtual marketplace where 
               business and individuals showcase their products, interact with customers, and conduct 
               transactions without the need of a physical presence. E-commerce websites have gained 
               immense popularity due to the convenince and accessibility, and glocal reach they offer.
            </p>
            <p>
                E-commerce websites typically displays products or services with detailed decription, 
                images, prices and any availabole varities (e.g., sizes, colors). Each product usually 
                has its own dedication with relevant informations.
            </p>
        </div>
    </section>
  )
}
