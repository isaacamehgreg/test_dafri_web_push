import React from 'react';
import L from 'i18n-react';

const ManualWithdrawalInstructions = () => {
  return (
    <section className="content-section">
      <div className="custom-container">
        <h2 className="section-title section-title--center">
          {L.translate('Pages.Statics.WithdrawalInstructions.item1')}
        </h2>

        <div className="text-content-wrapper text-content-wrapper--type2">
          <div className="bg-text-block">
            <div className="bg-text-block__content">
              <p>{L.translate('Pages.Statics.WithdrawalInstructions.item2')}</p>
              <p>{L.translate('Pages.Statics.WithdrawalInstructions.item3')}</p>
              <p>{L.translate('Pages.Statics.WithdrawalInstructions.item4')}</p>
              <p>{L.translate('Pages.Statics.WithdrawalInstructions.item5')}</p>
              <p>{L.translate('Pages.Statics.WithdrawalInstructions.item6')}</p>
              <p>{L.translate('Pages.Statics.WithdrawalInstructions.item7')}</p>
              <p>{L.translate('Pages.Statics.WithdrawalInstructions.item8')}</p>
              <p>{L.translate('Pages.Statics.WithdrawalInstructions.item9')}</p>
              <p>
                {L.translate('Pages.Statics.WithdrawalInstructions.item10')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualWithdrawalInstructions;
