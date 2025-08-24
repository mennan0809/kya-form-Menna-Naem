import React from "react";

export default function RadioGroup({ options, value, onChange, error }) {
  return (
    <div>
      <div className="radio-group-container">
        {options.map((opt) => (
          <label key={opt} className="radio-group-label">
            <input
              type="radio"
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="form-radio radio-group-input-color"
            />
            <span className="radio-group-text">{opt}</span>
          </label>
        ))}
      </div>
      {error && <p className="radio-group-error">{error}</p>}
    </div>
  );
}
