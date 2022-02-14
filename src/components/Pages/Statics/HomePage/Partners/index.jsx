import React from 'react';
import L from 'i18n-react';
import CompanyItem from './CompanyItem';
import imagesArray from './images';
import wawe from '../../../../../styles/img/parthners-wave.svg';

const Partners = () => {
  return (
    <section className="parthners-section">
      {/* <div className="parthners-section__inner">
        <div className="custom-container">
          <p className="home-title">
            {L.translate('Pages.Statics.HomePage.Partners.item1')}
          </p>
          <div className="home-companies">
            <div className="home-companies__list">
              <div className="companies-row">
                {imagesArray.map((item, i) => {
                  return <CompanyItem key={item + i} img={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="d-flex parthners-section__wave">
        <img src={wawe} alt="" />
      </div>
    </section>
  );
};

export default Partners;
