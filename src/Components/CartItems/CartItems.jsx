import React, { useContext } from 'react';
import "./CartItems.css";
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../Assets/cart_cross_icon.png";

export const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>

        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id] > 0){
                return <div key={e.id}>
                            <div className="cartitems-format-main cartitems-format">
                                <span>
                                    <img src={e.image} alt={`${e.name} image`} className='carticon-product-icon'/>
                                    <p>{e.name}</p>
                                </span>
                                <label>${e.new_price}</label>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <label>${e.new_price*cartItems[e.id]}</label>
                                <img className='cartitem-remove-icon' src={remove_icon} alt="remove icon" onClick={()=>{removeFromCart(e.id)}}/>
                            </div>
                        </div>
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
                        <p>Shipping Fee</p>
                        <span>Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</span>
                    </div>
                    <hr />
                    <div className='cartitems-total-item' >
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
    </div>
  )
}
