import React from "react";

export default function FileUpload({ onChange, error }) {
  return (
    <div>
      <input
        type="file"
        onChange={(e) => onChange(e.target.files[0])}
        className="file-upload-input"
      />
      {error && <p className="file-upload-error">{error}</p>}
    </div>
  );
}
