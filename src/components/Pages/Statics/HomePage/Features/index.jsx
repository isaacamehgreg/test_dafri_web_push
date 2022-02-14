import React from 'react';
import L from 'i18n-react';

import feature1 from '../../../../../styles/img/features1.png';
import feature2 from '../../../../../styles/img/features2.png';
import feature3 from '../../../../../styles/img/features3.png';

const Features = () => {
  return (
    <section className="features-section">
      <div className="custom-container">
        <div className="section-text section-text--center">
          <p>{L.translate('Pages.Statics.HomePage.Features.item1')}</p>
        </div>

        <p className="section-smaller-title section-smaller-title--center section-smaller-title--type2">
          {L.translate('Pages.Statics.HomePage.Features.item2')}
        </p>

        <div className="features-wrap">
          <div className="row">
            <div className="col-lg-4">
              <div className="feature">
                <div className="feature__icon">
                  <img src={feature1} alt="" />
                </div>

                <p className="feature__title">
                  {L.translate('Pages.Statics.HomePage.Features.item3')}
                </p>

                <div className="feature__text">
                  <p>{L.translate('Pages.Statics.HomePage.Features.item4')}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="feature">
                <div className="feature__icon">
                  <img src={feature2} alt="" />
                </div>

                <p className="feature__title">
                  {L.translate('Pages.Statics.HomePage.Features.item5')}
                </p>

                <div className="feature__text">
                  <p>{L.translate('Pages.Statics.HomePage.Features.item6')}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="feature">
                <div className="feature__icon">
                  <img src={feature3} alt="" />
                </div>

                <p className="feature__title">
                  {L.translate('Pages.Statics.HomePage.Features.item7')}
                </p>

                <div className="feature__text">
                  <p>{L.translate('Pages.Statics.HomePage.Features.item8')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
