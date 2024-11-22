import React, { useState } from 'react';
import '../assets/styles/InputField.css';

const InputField = ({ label, obfuscate, helperText, error, ...props }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        className={`input-field ${error ? 'error' : ''}`}
        type={obfuscate === "True" ? 'password' : 'text'}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {helperText && (
        <span className={`helper-text ${error ? 'error' : ''}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default InputField;
