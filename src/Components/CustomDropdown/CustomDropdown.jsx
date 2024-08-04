import React, { useState, useEffect, useRef } from 'react';
import "./CustomDropdown.css";
import arrow_up from "./arrow_up.png";
import arrow_down from "./arrow_down.png";

const CustomDropdown = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef();

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-dropdown" ref={selectRef}>
      <div
        className="custom-dropdown-header"
        role="button"
        tabIndex="0"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(!isOpen)}
      >
        <label>{selected}</label>
        <div className="arrows">
          <img src={arrow_up} alt="Arrow up" className={`arrow ${isOpen ? 'visible' : ''}`} />
          <img src={arrow_down} alt="Arrow down" className={`arrow ${!isOpen ? 'visible' : ''}`} />
        </div>
      </div>
      {isOpen && (
        <ul className="custom-dropdown-list">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)} role="option" tabIndex="0">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
