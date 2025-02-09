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
    <div className="w-full container px-5 md:px-2 mx-auto mb-8">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-row items-center">
            {/* Step circle */}
            <div className="flex flex-row md:gap-4 items-center">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-sm
                  ${currentStep >= step.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-[#334155bd] text-white'}`}
              >
                {step.id}
              </div>
              <span className={`text-sm hidden md:block ${
                currentStep >= step.id ? 'text-gray-900' : 'text-sidebar-foreground'
              }`}>
                {step.title}
              </span>
            </div>
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="flex-1 flex items-center md:mx-4 ml-4 md:ml-10">
                <div className={`h-[2px] w-[30px] md:w-[100px] rounded-full ${
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