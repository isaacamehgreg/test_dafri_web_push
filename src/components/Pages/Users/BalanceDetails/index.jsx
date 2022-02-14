import React from 'react';
import L from 'i18n-react';
import Graphic from './Graphic';
import Switchers from './Switchers';
import Devices from './Devices';
import LoginRecord from './LoginRecord';

const BalanceDetails = () => {
  return (
    <section className="profile-section">
      <div className="custom-container">
        <h1 className="section-title">
          {L.translate('Pages.Users.BalanceDetails.item1')}
        </h1>
        <div className="dashboard-wrap">
          <div className="row">
            <Graphic />
            <Switchers />
          </div>

          <div className="row">
            <Devices />
            <LoginRecord />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BalanceDetails;
