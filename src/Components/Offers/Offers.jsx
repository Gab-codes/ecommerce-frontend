import React from 'react';
import "./Offers.css";
import sunglass from "../Assets/Offers/offers_sunglass.png";
import perfume from "../Assets/Offers/perfume.jpg";

export const Offers = () => {
  return (
    <section className='offers'>
        <div className="offer-card">
          <img src={sunglass} alt="Image of a male and a female wearing sunglasses" />
          <h2>Eyewear</h2>
          <button>Buy</button>
        </div>
        <div className="offer-card">
          <img src={perfume} alt="Image of perfumes" />
          <h2>Perfumes</h2>
          <button>Buy</button>
        </div>
    </section>
  )
}
