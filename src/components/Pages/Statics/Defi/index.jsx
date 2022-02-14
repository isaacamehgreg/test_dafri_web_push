import React from 'react';
import L from 'i18n-react';

const DeFi = () => {
  return (
    <section className="content-section">
      <div className="custom-container">
        <h2 className="section-title section-title--center">
          {L.translate('Pages.Statics.Defi.item1')}
        </h2>

        <div className="text-content-wrapper">
          <div className="text-content-block">
            <p>{L.translate('Pages.Statics.Defi.item2')}</p>

            <p>{L.translate('Pages.Statics.Defi.item3')}</p>

            <p>{L.translate('Pages.Statics.Defi.item4')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeFi;
