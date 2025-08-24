import React, { useState } from "react";
import FieldRenderer from "./FieldRenderer";
import StepNavigator from "./StepNavigator";
import useLocalStorage from "../hooks/useLocalStorage";
import ThemeToggle from "./ThemeToggle";

import { validateData } from "../lib/validation";

export default function MultiStepForm({ schema }) {
  const fieldsPerStep = 3;
  const steps = Math.ceil(schema.length / fieldsPerStep);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useLocalStorage("kyc-form", {});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const start = currentStep * fieldsPerStep;
  const end = start + fieldsPerStep;
  const stepFields = schema.slice(start, end);

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
    setErrors((prev) => ({ ...prev, [id]: null }));
  };

  const handleNext = () => {
    const { valid, errors: stepErrors } = validateData(stepFields, formData);
    setErrors(stepErrors);
    if (valid && currentStep < steps - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    const { valid, errors: formErrors } = validateData(schema, formData);
    setErrors(formErrors);
    if (valid) {
      console.log("Collected responses:", formData);
      setSubmitted(true);
      setFormData({});
      setCurrentStep(0);
    }
  };

  if (submitted) {
    return (
      <div className="multi-step-form-wrapper">
        {/* Theme Toggle */}
        <div className="theme-toggle-wrapper">
          <ThemeToggle />
        </div>
        {/* Submission */}
        <div className="submission-card animate-fadeIn">
          <svg
            className="submission-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <h2 className="submission-heading">Submission Successful!</h2>
          <p className="submission-text">
            Thank you for completing the form. You can submit another response
            below.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="submission-btn"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="multi-step-form-wrapper">
      {/* Theme Toggle */}
      <div className="theme-toggle-wrapper">
        <ThemeToggle />
      </div>
      <div className="multi-step-form-card">
        {/* Stepper */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center justify-between w-full">
            {Array.from({ length: steps }).map((_, i) => (
              <React.Fragment key={i}>
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                    i <= currentStep
                      ? "stepper-circle-active"
                      : "stepper-circle-inactive"
                  }`}
                >
                  {i + 1}
                </div>
                {i < steps - 1 && <div className="stepper-line"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Fields Rendering*/}
        <div className="flex-[5] flex flex-col justify-center gap-4 py-4">
          {stepFields.map((f) => (
            <div key={f.id} className="form-field-wrapper">
              <label className="form-field-label">{f.label}</label>
              <FieldRenderer
                field={f}
                value={formData[f.id] || ""}
                onChange={(v) => handleChange(f.id, v)}
              />
              {errors[f.id] && (
                <span className="form-field-error">{errors[f.id]}</span>
              )}
            </div>
          ))}
        </div>

        {/* Navigator */}
        <div className="flex-1">
          <StepNavigator
            currentStep={currentStep}
            totalSteps={steps}
            onNext={currentStep === steps - 1 ? handleSubmit : handleNext}
            onBack={handleBack}
            isLastStep={currentStep === steps - 1}
          />
        </div>
      </div>
    </div>
  );
}
