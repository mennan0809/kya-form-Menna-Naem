import React from "react";

export default function MultiChoice({ options, value = [], onChange, error }) {
  const toggleOption = (opt) => {
    if (value.includes(opt)) onChange(value.filter((v) => v !== opt));
    else onChange([...value, opt]);
  };

  return (
    <div>
      <div className="multi-choice-container">
        {options.map((opt) => (
          <label key={opt} className="multi-choice-label">
            <input
              type="checkbox"
              checked={value.includes(opt)}
              onChange={() => toggleOption(opt)}
              className="form-checkbox multi-choice-checkbox-color"
            />
            <span className="multi-choice-text">{opt}</span>
          </label>
        ))}
      </div>
      {error && <p className="multi-choice-error">{error}</p>}
    </div>
  );
}
