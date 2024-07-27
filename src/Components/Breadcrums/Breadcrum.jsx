import React from 'react';
import "./Breadcrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png"

export const Breadcrum = (props) => {
    const {product} = props;

  return (
    <div className="breadcrums">
        HOME <img src={arrow_icon} alt="arrow icon" /> SHOP <img src={arrow_icon} alt="arrow icon" /> 
        {product.category} <img src={arrow_icon} alt="arrow icon" />
        {product.name}
    </div>
  )
}

