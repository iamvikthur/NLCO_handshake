// CustomCheckbox.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Custom-Checkbox.css'

const CustomCheckbox = ({ checked, onChange, label, customStyles, bootstrapClasses }) => {
  const [isChecked, setChecked] = useState(checked);

  const handleChange = () => {
    setChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <div className={`custom-checkbox ${bootstrapClasses}`} style={customStyles}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {label && <label>{label}</label>}
    </div>
  );
};

CustomCheckbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  customStyles: PropTypes.object,
  bootstrapClasses: PropTypes.string,
};

export default CustomCheckbox;