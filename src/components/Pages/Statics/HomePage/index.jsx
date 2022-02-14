import React from 'react';
import TopSlider from './TopSlider';
import TopCoinsStat from './TopCoinsStat';
import Partners from './Partners';
import StepSection from './StepSection';
import Solutions from './Solutions';
import Features from './Features';
import GetStarted from './GetStarted';

const HomePage = () => {
  return (
    <>
      <section className="home-section">
        <div className="section-circle" />
        <div className="section-circle section-circle--type2" />

        <div className="custom-container">
          <TopSlider />
        </div>
      </section>

      <TopCoinsStat />
      <Partners />
      <StepSection />
      <Solutions />
      <Features />
      <GetStarted />
    </>
  );
};

export default React.memo(HomePage);
