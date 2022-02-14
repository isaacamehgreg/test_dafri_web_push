import React from 'react';
import L from 'i18n-react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import buy from '../../styles/img/cred-info1.svg';
import trade from '../../styles/img/cred-info2.svg';
import store from '../../styles/img/cred-info3.svg';

const Auth = ({ children }) => {
  return (
    <section className="cred-section cred-section--type2">
      <div className="cred-section__circle" />
      <div className="cred-section__wave" />
      <div className="cred-section__big-circle" />
      <div className="cred-section__inner">
        <div className="custom-container">
          <div className="cred-container">
            <div className="cred-container__left">
              <p className="section-title">{L.translate('HOC.item1')}</p>
            </div>
          </div>
          <div className="cred-container">
            <div className="cred-container__left">
              <div className="cred-info-block">
                <div className="cred-info-list">
                  <div className="cred-info">
                    <div className="cred-info__icon">
                      <img src={buy} alt="" />
                    </div>
                    <div className="cred-info__main">
                      <p className="cred-info__main-title">
                        {L.translate('HOC.item2')}
                      </p>
                      <p className="cred-info__main-text">
                        {L.translate('HOC.item3')}
                      </p>
                    </div>
                  </div>
                  <div className="cred-info">
                    <div className="cred-info__icon">
                      <img src={trade} alt="" />
                    </div>
                    <div className="cred-info__main">
                      <p className="cred-info__main-title">
                        {L.translate('HOC.item4')}
                      </p>
                      <p className="cred-info__main-text">
                        {L.translate('HOC.item5')}
                      </p>
                    </div>
                  </div>
                  <div className="cred-info">
                    <div className="cred-info__icon">
                      <img src={store} alt="" />
                    </div>
                    <div className="cred-info__main">
                      <p className="cred-info__main-title">
                        {L.translate('HOC.item6')}
                      </p>
                      <p className="cred-info__main-text">
                        {L.translate('HOC.item7')}{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
