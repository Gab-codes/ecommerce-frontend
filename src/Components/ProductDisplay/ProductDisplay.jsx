import React, { useState, useContext } from 'react';
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import { toast } from 'react-toastify';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const displayMsg = () => {
        toast.success("Item added to cart!");
      };
    const [selectedQty, setSelectedQty] = useState(1);

    const qtyOptions = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <section className="product-display">
            <div className="product-display-left">
                <div className='product-display-img-list'>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img className='product-display-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-stars">
                    <img src={star_icon} alt="star icon" />
                    <img src={star_icon} alt="star icon" />
                    <img src={star_icon} alt="star icon" />
                    <img src={star_icon} alt="star icon" />
                    <img src={star_dull_icon} alt="dull star icon" />
                    <p>(122)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-price-old"> ${product.old_price} </div>
                    <div className="product-display-right-price-new"> ${product.new_price} </div>
                </div>
                <div className="product-display-right-description">
                    A light weight, casually knitted, pullover shirt, that is a nice and wonder to wear in any season without worry.
                    One of the special cloth made by the governor himself. He spent a whole year working on this masterpiece.
                </div>
                <hr />
                <div className="product-display-right-size">
                    <div className='product-display-right-size-radio-container'>
                        <h2>Colors:</h2>
                        <div className="product-display-right-radio-input">
                            <input type="radio" name='product-color'/>
                            <input type="radio" name='product-color'/>
                        </div>
                    </div>
                    {/* <div className="product-display-right-size-container">
                        <h2>Select Size</h2>
                        <div className="product-display-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>  
                        </div>
                    </div> */}
                </div>
                    {/* <div className='product-display-right-item-count'>
                        <span>Qty:</span>
                        <CustomDropdown options={qtyOptions} selected={selectedQty} onSelect={setSelectedQty} />
                    </div> */}
                    <button onClick={() => { addToCart(product.id), displayMsg() }}>ADD TO CART</button>
                <p className='product-display-right-category'><span>Category:</span> Women, T-Shirt, Crop Top</p>
                <p className='product-display-right-category'><span>Tags:</span> Modern, Latest</p>
            </div>
        </section>
    )
}
