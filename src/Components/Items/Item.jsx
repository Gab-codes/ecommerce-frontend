import React from 'react'
import "./Item.css"

export const Item = (props) => {
  return (
    <div className='item-container'>
        <img src={props.image} alt="" />
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
