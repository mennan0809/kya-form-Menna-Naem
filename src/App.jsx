import React from "react";
import MultiStepForm from "./components/MultiStepForm";
import schema from "./data/kycSchema.json";

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <MultiStepForm schema={schema} />
        </div>
    );
}

export default App;
