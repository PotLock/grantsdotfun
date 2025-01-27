import React from 'react';

interface ProgressStepsProps {
  currentStep: number;
}

const steps = [
  { id: 1, title: 'Basic Information' },
  { id: 2, title: 'Token Configuration' },
  { id: 3, title: 'Platform Integration' },
  { id: 4, title: 'Grant Canvas' },
  { id: 5, title: 'Wallet Configuration' },
];

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  return (
    <div className="w-full container px-2 mx-auto mb-8">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-row items-center">
            {/* Step circle */}
            <div className="flex flex-row gap-4 items-center">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-sm
                  ${currentStep >= step.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-400 text-white'}`}
              >
                {step.id}
              </div>
              <span className={`text-sm ${
                currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {step.title}
              </span>
            </div>
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="flex-1 flex items-center mx-4 ml-10">
                <div className={`h-[2px] w-[100px] rounded-full ${
                  currentStep > step.id ? 'bg-blue-600' : 'bg-gray-400'
                }`} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps; 