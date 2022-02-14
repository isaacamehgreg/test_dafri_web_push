import React from 'react';
import L from 'i18n-react';
import DetailsSwitcher from './DetailsSwitcher';

const Details = () => {
  return (
    <section className="inner-section inner-section--agent">
      <div className="custom-container">
        <div className="profile-container profile-container--full">
          <p className="section-title section-title--center">
            {L.translate('Pages.Users.PaymentAgent.Details.item1')}
          </p>

          <DetailsSwitcher />
        </div>
      </div>
    </section>
  );
};

export default Details;
