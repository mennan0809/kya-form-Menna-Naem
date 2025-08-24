import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatePicker({ value, onChange, error }) {
  return (
    <div className="flex flex-col">
      <DatePicker
        selected={value ? new Date(value) : null}
        // When the user picks a date, format it to YYYY-MM-DD
        onChange={(date) =>
          onChange(date ? date.toISOString().split("T")[0] : "")
        }
        // Make sure user is at least 18 years old
        maxDate={
          new Date(new Date().setFullYear(new Date().getFullYear() - 18))
        }
        placeholderText="Select your birth date"
        className={`datepicker-input-base ${error ? "datepicker-input-error" : ""}`}
        calendarClassName="datepicker-calendar"
        dateFormat="yyyy-MM-dd"
      />
      {error && <span className="datepicker-input-error">{error}</span>}
    </div>
  );
}
