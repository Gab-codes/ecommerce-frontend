import React from 'react';
import "./Item.css"; 
import { Link } from 'react-router-dom';

export const Item = (props) => {
  return (
    <div className='item-container'>
        <Link to={`/product/${props.id}`}>
          <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
        </Link>
        <p>{props.name}</p>
        <div htmlFor="item prices" className='item-prices'>
            <label htmlFor="item price" className="item-price-new">
                ${props.new_price}
            </label>
            <label htmlFor="item price" className="item-price-old">
                ${props.old_price}
            </label>
        </div>
    </div>
  )
}
