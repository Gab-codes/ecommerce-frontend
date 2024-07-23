import React from 'react';
import facebook from "../Assets/Footer/facebook.png";
import instagram from "../Assets/Footer/instagram.png";
import "./Footer2.css"

export const Footer2 = () => {
  return (
    <div className="footer2-container">
    <div className='newsletter'>
      <div className='newsletter-item'>
        <h1>Sign Up To Our Newsletter.</h1>
        <p>Be the first to hear about our latest offers.</p>
    </div>
    <form action="">
        <div className='newsletter-subscribe'> 
                <input type="email"  placeholder='Your Email'/>
                <button type='submit'>Subscribe</button>
        </div>
    </form>
    </div>
    <div className='footer2-items-container'>
      <ul className='footer2-items'>
        <h2>Products</h2>
        <li>Sunglass</li>
        <li>Belt</li>
        <li>Perfume</li>
        <li>Wristwatch</li>
        <li>About Us</li>
      </ul>
      <ul className='footer2-address'>
        <h2>Address</h2>
        <li>Address: 123 best address waterline</li>
        <li>Phones: (234) 700 000</li>
        <li>We are open: Monday-Friday: 9:00 AM - 6:00PM</li>
        <li>Saturday: 10:00 AM - 5:00 PM</li>
        <li>E-mail: support@email.com</li>
      </ul>
    </div>

    <hr />

    <div className="footer2-icon-container">
      <div className='footer2-icon-items'>
        <img src={facebook} alt="facebook icon" />
        <img src={instagram} alt="instagram icon" />
      </div>
      <p>Copyright &copy; 2024 Deewhy. Ltd.</p>
    </div>
  </div>
  )
}
