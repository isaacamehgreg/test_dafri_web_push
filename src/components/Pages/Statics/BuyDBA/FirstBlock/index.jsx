import React from 'react';
import L from 'i18n-react';
import topSectionWawe from '../../../../../styles/img/top-section-wave2.svg';

const FirstBlock = () => {
  return (
    <section className="info-wave-section info-wave-section--type2 info-wave-section--buy-dba">
      <div className="info-wave-section__inner">
        <div className="section-circle" />

        <div className="custom-container">
          <div className="section-block">
            <p className="section-title">
              {L.translate('Pages.Statics.BuyDBA.FirstBlock.item1')}
            </p>
            <div className="section-block__text">
              <p>{L.translate('Pages.Statics.BuyDBA.FirstBlock.item2')}</p>
            </div>

            <div className="section-block__subtitle">
              <p>{L.translate('Pages.Statics.BuyDBA.FirstBlock.item3')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="info-wave-section__wave info-wave-section__wave--type2">
        <img src={topSectionWawe} alt="" />
      </div>
    </section>
  );
};

export default FirstBlock;
