import React, { useState, useEffect, useRef, useContext } from 'react';
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/Navbar/cart_icon.png";
import navMenu from "../Assets/Navbar/menu.svg";
import closeMenu from "../Assets/Navbar/closeMenu.svg";
import account from "../Assets/Navbar/account.svg";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("shop");
  const navRef = useRef();
  const { getTotalCartItems} = useContext(ShopContext);


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
            <li onClick={() => { setMenu("shop"); setMenuOpen(!menuOpen); window.scrollTo(0,0) }}>
              <Link style={{ all: "unset" }} to="/">Shop</Link>
              {menu === "shop" ? <hr /> : <></>}
            </li>
            <li onClick={() => { setMenu("mens"); setMenuOpen(!menuOpen); window.scrollTo(0,0)}}>
              <Link style={{ all: "unset" }} to="/mens">Men</Link>
              {menu === "mens" ? <hr /> : <></>}
            </li>
            <li onClick={() => { setMenu("womens"); setMenuOpen(!menuOpen); window.scrollTo(0,0) }}>
              <Link style={{ all: "unset" }} to="/womens">Women</Link>
              {menu === "womens" ? <hr /> : <></>}
            </li>
            <li onClick={() => { setMenu("kids"); setMenuOpen(!menuOpen); window.scrollTo(0,0) }}>
              <Link style={{ all: "unset"}} to="/kids">Kids</Link>
              {menu === "kids" ? <hr /> : <></>}
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
