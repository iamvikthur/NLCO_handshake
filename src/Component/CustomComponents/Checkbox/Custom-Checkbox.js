import React, { useState, useEffect } from 'react';
import CheckIcon from '../../SVGIcons/CheckIcon/CheckIcon'
import './Custom-Checkbox.css';

const CustomCheckbox = ({ label, onCheck, onUncheck, controlledBy }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);

    if (newCheckedState && onCheck) {
      onCheck();
    } else if (!newCheckedState && onUncheck) {
      onUncheck();
    }
  };

  useEffect(() => {
    if (controlledBy !== undefined) {
      setIsChecked(controlledBy);
    }
  }, [controlledBy]);

  return (
    <label className={`custom-checkbox ${isChecked ? 'checked' : ''}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="checkmark">
        {isChecked ? <CheckIcon className="checky"/> : ''}
      </span>
      {label && <span className="label">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;