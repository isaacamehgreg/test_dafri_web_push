import React from 'react';
import L from 'i18n-react';
import legal from '../../../../styles/img/legal.png';
import wave from '../../../../styles/img/top-section-wave.svg';

const Legal = () => {
  return (
    <main className="content">
      <section className="info-wave-section">
        <div className="info-wave-section__inner">
          <div className="section-circle" />
          <div className="custom-container">
            <div className="section-block">
              <p className="section-title">
                {L.translate('Pages.Statics.Legal.item1')}
              </p>
              <div className="section-block__text">
                <p>{L.translate('Pages.Statics.Legal.item2')}</p>
              </div>
            </div>
            <div className="section-img">
              <img src={legal} alt="Legal" />
            </div>
          </div>
        </div>

        <div className="info-wave-section__wave">
          <img src={wave} alt="" />
        </div>
      </section>

      <section className="content-section">
        <div className="custom-container">
          <div className="text-content-wrapper">
            <div className="text-content-block">
              <h2 className="text-content-title  ">
                {L.translate('Pages.Statics.Legal.item3')}
              </h2>
              <p>{L.translate('Pages.Statics.Legal.item4')}</p>
              <p>{L.translate('Pages.Statics.Legal.item5')}</p>
              <h3>{L.translate('Pages.Statics.Legal.item6')}</h3>
              <ul>
                <li>{L.translate('Pages.Statics.Legal.item7')}</li>
                <li>{L.translate('Pages.Statics.Legal.item8')}</li>
                <li>{L.translate('Pages.Statics.Legal.item9')}</li>
                <li>{L.translate('Pages.Statics.Legal.item10')}</li>
                <li>{L.translate('Pages.Statics.Legal.item11')}</li>
                <li>{L.translate('Pages.Statics.Legal.item12')}</li>
                <li>{L.translate('Pages.Statics.Legal.item13')}</li>
                <li>{L.translate('Pages.Statics.Legal.item14')}</li>
                <li>{L.translate('Pages.Statics.Legal.item15')}</li>
              </ul>
              <div className="content-extra-block">
                <p>
                  {L.translate('Pages.Statics.Legal.item16')}{' '}
                  <a href="mailto:KYC@dafrigroup.com">KYC@dafrigroup.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Legal;
