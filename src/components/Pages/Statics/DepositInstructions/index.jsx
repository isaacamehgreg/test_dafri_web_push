import React from 'react';
import L from 'i18n-react';

const ManualDepositInstructions = () => {
  return (
    <section className="content-section">
      <div className="custom-container">
        <h2 className="section-title section-title--center">
          {L.translate('Pages.Statics.DepositInstructions.item1')}
        </h2>

        <div className="text-content-wrapper text-content-wrapper--type2">
          <div className="bg-text-block">
            <p className="bg-text-block__title">
              {L.translate('Pages.Statics.DepositInstructions.item2')}
            </p>
            <div className="bg-text-block__content">
              <p>
                <strong>1.</strong>{' '}
                {L.translate('Pages.Statics.DepositInstructions.item3')}
              </p>
              <p>
                <strong>2. </strong>
                {L.translate('Pages.Statics.DepositInstructions.item4')}
              </p>
            </div>
          </div>
          <div className="text-content-block">
            <p>{L.translate('Pages.Statics.DepositInstructions.item5')}</p>
            <p>{L.translate('Pages.Statics.DepositInstructions.item6')}</p>
            <p>{L.translate('Pages.Statics.DepositInstructions.item7')}</p>
            <p>{L.translate('Pages.Statics.DepositInstructions.item8')}</p>
            <p>{L.translate('Pages.Statics.DepositInstructions.item9')}</p>
            <p>{L.translate('Pages.Statics.DepositInstructions.item10')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualDepositInstructions;
