import React from 'react';
import L from 'i18n-react';
import Info from './Info';

import topWaweBackgrounImage from '../../../../styles/img/top-section-wave2.svg';
import CommissionHistory from './CommissionHistory';

const Affiliate = () => {
  return (
    <>
      <section className="info-wave-section info-wave-section--type2">
        <div className="info-wave-section__inner">
          <div className="section-circle" />
          <div className="custom-container">
            <div className="section-block">
              <p className="section-title">
                {L.translate('Pages.Users.Affiliate.item1')}
              </p>
              <div className="section-block__subtitle">
                <p>{L.translate('Pages.Users.Affiliate.item2')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="info-wave-section__wave info-wave-section__wave--type2">
          <img src={topWaweBackgrounImage} alt="" />
        </div>
      </section>
      <Info />
      <CommissionHistory />
    </>
  );
};

export default Affiliate;
