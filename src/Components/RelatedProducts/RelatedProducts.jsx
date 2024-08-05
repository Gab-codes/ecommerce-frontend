import React from 'react';
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import { Item } from "../Items/Item";
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const RelatedProducts = () => {
  const scrollLeft = () => {
    document.querySelector(".relatedproducts-item").scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    document.querySelector(".relatedproducts-item").scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <section>
      <div className="relatedproducts">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-wrapper">
          <button className="arrow left" onClick={scrollLeft}><ArrowLeft /> </button>
          <div className="relatedproducts-item">
            {data_product.map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
          </div>
          <button className="arrow right" onClick={scrollRight}><ArrowRight /> </button>
        </div>
      </div>
    </section>
  )
};
