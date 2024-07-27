import React, { useState } from 'react';
import "./CustomDropdown.css";
import arrow_up from "./arrow_up.png";
import arrow_down from "./arrow_down.png";


const CustomDropdown = ({ options, selected, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="custom-dropdown">
            <div className="custom-dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                <span>{selected}</span>
                <div className="arrows">
                    <img src={arrow_up} className="arrow up" />
                    <img src={arrow_down} className="arrow down" />
                </div>
            </div>
            {isOpen && (
                <ul className="custom-dropdown-list">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleSelect(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
