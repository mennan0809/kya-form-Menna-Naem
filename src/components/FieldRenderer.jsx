import React from "react";
import * as Fields from "./fields";

export default function FieldRenderer({ field, value, onChange, error }) {
    const FieldComponent = {
        text: Fields.TextInput,
        textarea: Fields.TextArea,
        radio_buttons: Fields.RadioGroup,
        multi_choice: Fields.MultiChoice,
        drop_down: Fields.Dropdown,
        date_picker: Fields.DatePicker,
        file_upload: Fields.FileUpload
    }[field.type];

    if (!FieldComponent) return null;

    return <FieldComponent {...field} value={value} onChange={onChange} error={error} />;
}
