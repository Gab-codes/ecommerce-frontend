import React, { useContext } from 'react';
import "./CartItems.css";
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../Assets/cart_cross_icon.png";
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, selectedQty, setSelectedQty } = useContext(ShopContext);

  const displayMsg = () => {
    toast.error("Item removed from cart!");
  };

  const qtyOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleSelectQty = (id, qty) => {
    setSelectedQty(prevState => ({
      ...prevState,
      [id]: qty
    }));
  };

  // Check if all items in the cart have a quantity of 0
  const isCartEmpty = Object.values(cartItems).every(qty => qty === 0);

  return (
    <div className="cartitems">
      {isCartEmpty ? (
        <div className="cart-empty-message">
          <h2>Your cart is empty</h2>
          <p>Continue shopping to add items to your cart.</p>
          <Link to="/">
          <button className="empty-cart-return-button">Back to Shop</button>
          </Link> 
        </div>
      ) : (
        <>
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <hr className='cartitems-mobile-hr'/>
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div key={e.id}>
                  <div className="cartitems-format-main cartitems-format">
                    <span>
                      <img src={e.image} alt={`${e.name} image`} className='carticon-product-icon'/>
                      <p>{e.name}</p>
                    </span>
                    <label>${e.new_price}</label>
                    <div className='product-display-right-item-count'>
                      <CustomDropdown
                        name={e.id}
                        options={qtyOptions}
                        selected={selectedQty[e.id] || cartItems[e.id]}
                        onSelect={(qty) => handleSelectQty(e.id, qty)}
                      />
                    </div>
                    <label>${e.new_price * (selectedQty[e.id] || cartItems[e.id])}</label>
                    <img className='cartitem-remove-icon' src={remove_icon} alt="remove icon" onClick={() => {removeFromCart(e.id); displayMsg()}} />
                  </div>
                  <div className="cartitems-mobile-format">
                    <img className='cartitem-remove-icon' src={remove_icon} alt="remove icon" onClick={() => {removeFromCart(e.id); displayMsg()}} />
                    <span>
                      <img src={e.image} alt={`${e.name} image`} className='carticon-product-icon'/>
                      <p>{e.name}</p>
                    </span>
                    <div className="cartitems-mobile-container">
                      <div className='cartitems-mobile'>
                        <p>Price:</p>
                        <label>${e.new_price}</label>
                      </div>
                      <div className='cartitems-mobile'>
                        <p>Quantity:</p>
                        <CustomDropdown
                          options={qtyOptions}
                          selected={selectedQty[e.id] || cartItems[e.id]}
                          onSelect={(qty) => handleSelectQty(e.id, qty)}
                        />
                      </div>
                      <div className='cartitems-mobile'>
                        <p>Total:</p>
                        <label>${e.new_price * (selectedQty[e.id] || cartItems[e.id])}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
          <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div>
                <div className="cartitems-total-item">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cartitems-total-item-shipping'>
                  <p>Shipping Fee  <span>(Price may vary depending on the destination. Shop Staff will contact you.)</span></p>
                  <p> $21.00</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                  <h3>Total</h3>
                  <h3>${getTotalCartAmount()}</h3>
                </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
              <p>If you have a promo code, Enter it here</p>
              <div className="cartitems-promobox">
                <input type="text" placeholder="Promo code" name="" id="" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
