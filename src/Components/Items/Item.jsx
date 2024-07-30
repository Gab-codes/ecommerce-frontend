import React, { useContext } from 'react';
import "./Item.css"; 
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Item = (props) => {
  const handleImageClick = () => {
    window.scrollTo(0, 0);
  };

  const displayMsg = () => {
    toast.success("Item added to cart!");
  };

  const { addToCart } = useContext(ShopContext);

  return (
    <div className='item-container'>
      <div className='image-container'>
        <Link to={`/product/${props.id}`}>
          <img onClick={handleImageClick} src={props.image} alt={`image of ${props.name}`} />
        </Link>
        <div className='item-cart-button-container'>
          <button onClick={() => { addToCart(props.id); displayMsg(); }} className='item-add-to-cart-button'>
            Add to Cart
          </button>
        </div>
      </div>
      <p>{props.name}</p>
      <div className='item-prices'>
        <label className="item-price-new">
          ${props.new_price}
        </label>
        <label className="item-price-old">
          ${props.old_price}
        </label>
      </div>
    </div>
  );
};
