import React from 'react';
import "./CSS/LoginSignup.css";

export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <p className="sub-heading">Enter details to create your account</p>
        <div className="loginsignup-field">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder='Enter your name' />
          
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder='Your Email Address' />
          
          <label htmlFor="number">Phone Number</label>
          <input id="number" type="tel" placeholder='Enter phone number' />
          
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder='Enter password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" id="agree" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
