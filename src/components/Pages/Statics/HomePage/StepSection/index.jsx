import React from 'react';
import StepSlider from './StepSlider';

const StepSection = () => {
  return (
    <section className="home-step-section">
      <div className="custom-container">
        <div className="step-row justify-content-center ">
          <StepSlider />
        </div>
      </div>
    </section>
  );
};

export default StepSection;
