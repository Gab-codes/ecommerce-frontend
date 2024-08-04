import React, { useState, useEffect, useRef, useContext } from 'react';
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/Navbar/cart_icon.png";
import navMenu from "../Assets/Navbar/menu.svg";
import closeMenu from "../Assets/Navbar/closeMenu.svg";
import account from "../Assets/Navbar/account.svg";
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleClickOutside);
    };
  }, []);

  return (
    <nav className='navbar' ref={navRef}>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOP</p>
      </div>
      <div className="navContainer">
        <div className='navMenu'>
          <img 
            src={menuOpen ? closeMenu : navMenu} 
            onClick={() => { setMenuOpen(!menuOpen) }} 
            className="menuBtn" 
            alt="menu button" 
          />
          <ul className={`menuItems ${menuOpen && "menuOpen"}`}>
            <li className={location.pathname === "/" ? "active" : ""} onClick={() => { setMenuOpen(!menuOpen); window.scrollTo(0,0) }}>
              <Link style={{ all: "unset" }} to="/">Shop</Link>
              {location.pathname === "/" ? <hr /> : <></>}
            </li>
            <li className={location.pathname === "/mens" ? "active" : ""} onClick={() => { setMenuOpen(!menuOpen); window.scrollTo(0,0) }}>
              <Link style={{ all: "unset" }} to="/mens">Men</Link>
              {location.pathname === "/mens" ? <hr /> : <></>}
            </li>
            <li className={location.pathname === "/womens" ? "active" : ""} onClick={() => { setMenuOpen(!menuOpen); window.scrollTo(0,0) }}>
              <Link style={{ all: "unset" }} to="/womens">Women</Link>
              {location.pathname === "/womens" ? <hr /> : <></>}
            </li>
            <li className={location.pathname === "/kids" ? "active" : ""} onClick={() => { setMenuOpen(!menuOpen); window.scrollTo(0,0) }}>
              <Link style={{ all: "unset" }} to="/kids">Kids</Link>
              {location.pathname === "/kids" ? <hr /> : <></>}
            </li>
          </ul>
        </div>
        <div className="nav-login-cart">
          <Link to="/login">
            <button>login</button>
          </Link>
          <Link to="/login">
            <img src={account} className='nav-account' alt="person icon" />
          </Link>
          <Link to="/cart">
            <img src={cart_icon} className='cartIcon' alt="cart icon" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </nav>
  );
};
