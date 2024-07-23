import React from 'react';
import "./Footer1.css";
import account from "../Assets/Footer/Account.png";
import support from "../Assets/Footer/Support.png";
import savings from "../Assets/Footer/Saving.png";

export const Footer1 = () => {
  return (
    <div className='footer1-container'>
        <ul className='footer1'>
            <li className='footer1-item'>
                <img src={support} alt="support icon image" />
                <h2>Product Support</h2>
                <p>Lifetime warranty on all our products for your peace of mind</p>
            </li>
            <li className='footer1-item'>
                <img src={account} alt="account icon image" />
                <h2>Personal Account</h2>
                <p>With big discounts, on-time delivery and a dedicated support specialist</p>
            </li>
            <li className='footer1-item'>
                <img src={savings} alt="savings icon image" />
                <h2>Amazing Savings</h2>
                <p>
                Special discounts for regular customers.             Coupons up to N100,000
                </p>
            </li>
        </ul>
    </div>
  )
}
