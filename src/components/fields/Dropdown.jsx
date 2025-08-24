import React from "react";

export default function Dropdown({ options, value, onChange, error }) {
  return (
    <div>
      <select
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className={`dropdown-base ${error ? "dropdown-error" : ""}`}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="dropdown-error">{error}</p>}
    </div>
  );
}
