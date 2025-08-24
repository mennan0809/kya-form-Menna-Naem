import React from "react";

export default function StepNavigator({
  currentStep,
  onNext,
  onBack,
  isLastStep,
}) {
  return (
    <div className="step-navigator">
      {/* Navigation Button Back */}
      <button
        type="button"
        onClick={onBack}
        disabled={currentStep === 0}
        className={`step-btn-back ${currentStep === 0 ? "step-btn-back-disabled" : "step-btn-back-active"}`}
      >
        Back
      </button>

      {/* Navigation Button Next */}
      <button
        type="button"
        onClick={onNext}
        className={`step-btn-next ${isLastStep ? "step-btn-next-green" : "step-btn-next-blue"}`}
      >
        {isLastStep ? "Submit" : "Next"}
      </button>
    </div>
  );
}
