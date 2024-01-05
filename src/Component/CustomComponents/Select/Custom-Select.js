// CustomSelect.js
import React, { useState, useEffect, useRef } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';
import ArrowUpright from '../../SVGIcons/ArrowUpright/ArrowUpright';
import './Custom-Select.css';

const CustomSelect = ({ options, word, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const containerRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className={`custom-select-container ${className || ''}`}>
      <div className={`select-header ${isOpen ? 'open' : ''}`}>
        {selectedOption ? (
          <span className="selected-option">{selectedOption.label}</span>
        ) : (
          <span className="word text-start">{word}</span>
        )}
      </div>
      <div onClick={toggleDropdown}>
          <IoChevronDownOutline
          icon={IoChevronUpOutline}
          className={`icon ${isOpen ? 'rotate' : ''}`}
          />
      </div>
      {isOpen && (
        <div className="options-container">
          {options.map((option) => (
            <div
              key={option.value}
              className={`option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
              {selectedOption === option && <ArrowUpright />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;