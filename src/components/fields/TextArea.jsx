import React from "react";

export default function TextArea({ value, onChange, error, placeholder }) {
  return (
    <div>
      <textarea
        value={value || ""}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="textarea-input"
        rows={4}
      />
      {error && <p className="textarea-error">{error}</p>}
    </div>
  );
}
