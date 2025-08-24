export function validateData(stepSchema, formData) {
  const errors = {};

  stepSchema.forEach((f) => {
    const val = formData[f.id];

    if (f.required && (!val || (Array.isArray(val) && val.length === 0))) {
      errors[f.id] = "This field is required";
      return;
    }

    if (f.type === "multi_choice") {
      if (f.min && (!val || val.length < f.min)) {
        errors[f.id] = `Select at least ${f.min}`;
      }
      if (f.max && val && val.length > f.max) {
        errors[f.id] = `Select at most ${f.max}`;
      }
    }

    if (f.type === "date" && val) {
      const selectedDate = new Date(val);
      const today = new Date();
      const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate(),
      );
      if (selectedDate >= eighteenYearsAgo) {
        errors[f.id] = "You must be older than 18 years";
      }
    }
  });

  return { valid: Object.keys(errors).length === 0, errors };
}
