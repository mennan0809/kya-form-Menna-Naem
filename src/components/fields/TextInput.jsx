import React from "react";

export default function TextInput({ value, onChange, error, placeholder }) {
  return (
    <div>
      <input
        type="text"
        value={value || ""}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="text-input"
      />
      {error && <p className="text-input-error">{error}</p>}
    </div>
  );
}
