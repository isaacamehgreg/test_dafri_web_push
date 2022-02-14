/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import L from 'i18n-react';
import routes from '../../../routes';
import bottomWave from '../../../styles/img/bottom-vawe.svg';
import bottomWaveMob from '../../../styles/img/bottom-vawe__mob.svg';
import logo from '../../../styles/img/white-logo.svg';
import seal from '../../../styles/img/pci-seal.svg';
import secureSeal from '../../../styles/img/secure-seal.svg';

const Footers = props => {
  const location = useLocation();
  const history = useHistory();
  const main = location.pathname === routes.Root.path;

  const clickOnLogo = () => {
    if (!main) {
      history.push(routes.Root.path);
    }

    if (props.refAutoScroll?.current && window.pageYOffset > 0) {
      props.refAutoScroll.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="to-bottom">
      {props?.isShowWawe && (
        <div className="bottom-wave">
          <img src={bottomWave} className="bottom-wave__pc" alt="" />
          <img src={bottomWaveMob} className="bottom-wave__mob" alt="" />
        </div>
      )}

      <footer className="footer">
        <div className="custom-container">
          <div className="footer-block">
            <div className="footer-block__left">
              <div className="footer-left">
                <button
                  className="footer-logo"
                  type="button"
                  onClick={clickOnLogo}
                >
                  <img src={logo} alt="Dafri Exchange" />
                </button>

                <div className="footer-company">
                  <div className="footer-company__item">
                    <img src={seal} alt="" />
                  </div>

                  <div className="footer-company__item">
                    <img src={secureSeal} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-block__center">
              <div className="footer-center">
                <div className="footer-center__address">
                  <div className="footer-address">
                    <p className="footer-address__title">Johannesburg Office</p>

                    <div className="footer-address__text">
                      <p>8 Riversands Boulevard, Riversands,</p>
                      <p>Johannesburg,</p>
                      <p>South Africa</p>
                      <p>1684</p>
                    </div>

                    <Link
                      to={{ pathname: 'https://goo.gl/maps/SamavWq4m6Esyfhh7' }}
                      className="footer-address__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {L.translate('Base.Footers.item1')}
                    </Link>
                  </div>

                  <div className="footer-address">
                    <p className="footer-address__title">London UK Office</p>

                    <div className="footer-address__text">
                      <p>York Eco Business Centre</p>
                      <p>Amy Johnson Way</p>
                      <p>York, YO3O 4AG</p>
                      <p>London</p>
                    </div>

                    <Link
                      to={{ pathname: 'https://goo.gl/maps/SMBVnKLzuZJNs7mKA' }}
                      className="footer-address__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {L.translate('Base.Footers.item1')}
                    </Link>
                  </div>
                </div>

                <div className="footer-center__nav">
                  <ul className="f-nav">
                    <li>
                      <Link
                        to={{
                          pathname: routes.Trade.SpotTrade.path,
                          state: { currency: 'dba' },
                        }}
                      >
                        {L.translate('Base.Footers.item2')}
                      </Link>
                    </li>

                    <li>
                      <Link to={routes.Trade.SpotTrade.path}>
                        {L.translate('Base.Footers.item3')}
                      </Link>
                    </li>

                    <li>
                      <Link to={routes.Static.Defi.path}>DeFi</Link>
                    </li>

                    <li>
                      <Link to={routes.Profile.PaymentAgent.path}>
                        {L.translate('Base.Footers.item4')}
                      </Link>
                    </li>

                    {/* <li>
                      <Link to={routes.Root.path}>
                        {L.translate('Base.Footers.item14')}
                      </Link>
                    </li> */}
                  </ul>

                  <ul className="f-nav">
                    <li>
                      <a
                        href={routes.Blog.path}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {L.translate('Base.Footers.item5')}
                      </a>
                    </li>

                    <li>
                      <Link to={routes.Static.Affiliate.path}>
                        {L.translate('Base.Footers.item6')}
                      </Link>
                    </li>

                    <li>
                      <Link to={routes.Static.Careers.path}>
                        {L.translate('Base.Footers.item7')}
                      </Link>
                    </li>

                    <li>
                      <Link to={routes.Static.FAQ.path}>FAQ</Link>
                    </li>

                    <li>
                      <Link to={routes.Static.Contacts.path}>
                        {L.translate('Base.Footers.item8')}
                      </Link>
                    </li>
                  </ul>

                  <ul className="f-nav f-nav--type2">
                    <li>
                      <Link to={routes.Static.Legal.path}>
                        {L.translate('Base.Footers.item9')}
                      </Link>
                    </li>

                    <li>
                      <Link to={routes.Static.TermsAndCondition.path}>
                        {L.translate('Base.Footers.item15')}
                      </Link>
                    </li>

                    <li>
                      <Link to={routes.Static.PrivacyAndTerms.path}>
                        {L.translate('Base.Footers.item10')}
                      </Link>
                    </li>

                    <li>
                      <Link to={routes.Static.AMLPolicy.path}>
                        {L.translate('Base.Footers.item11')}
                      </Link>
                    </li>

                    <li>
                      <Link to={routes.Static.ListingDelisting.path}>
                        {L.translate('Base.Footers.item12')}
                      </Link>
                    </li>

                    <li>
                      <Link to={routes.Static.Security.path}>
                        {L.translate('Base.Footers.item13')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-block__right">
              <div className="footer-right">
                <div className="footer-contact">
                  <p className="d-flex footer-contact__item">
                    <span className="d-flex footer-contact__item-label">
                      t /&nbsp;
                    </span>
                    <a
                      href="tel:+27 11 568 5053"
                      className="footer-contact__item-link"
                    >
                      +27 11 568 5053
                    </a>
                  </p>

                  <p className="d-flex footer-contact__item">
                    <span className="d-flex footer-contact__item-label">
                      e /&nbsp;
                    </span>
                    <a
                      href="mailto:info@dafriexchange.com"
                      className="footer-contact__item-link"
                    >
                      info@dafriexchange.com
                    </a>
                  </p>
                </div>

                <div className="footer-social">
                  <Link
                    to={{ pathname: 'https://www.facebook.com/DafriXchange' }}
                    className="d-flex footer-social__item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="fill"
                      width="12"
                      height="22"
                      viewBox="0 0 12 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5628 0.00457747L8.78558 0C5.66542 0 3.64903 2.12509 3.64903 5.41423V7.91055H0.85662C0.615322 7.91055 0.419922 8.1115 0.419922 8.35937V11.9763C0.419922 12.2241 0.615545 12.4249 0.85662 12.4249H3.64903V21.5514C3.64903 21.7993 3.84443 22 4.08573 22H7.72904C7.97033 22 8.16573 21.799 8.16573 21.5514V12.4249H11.4307C11.672 12.4249 11.8674 12.2241 11.8674 11.9763L11.8688 8.35937C11.8688 8.24036 11.8226 8.12638 11.7409 8.04215C11.6591 7.95793 11.5477 7.91055 11.4318 7.91055H8.16573V5.79439C8.16573 4.77727 8.40168 4.26094 9.6915 4.26094L11.5624 4.26025C11.8035 4.26025 11.9989 4.0593 11.9989 3.81166V0.453169C11.9989 0.205757 11.8037 0.00503522 11.5628 0.00457747Z"
                        fill="white"
                      />
                    </svg>
                  </Link>

                  <Link
                    to={{ pathname: 'https://twitter.com/DafriXchange' }}
                    className="d-flex footer-social__item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="fill"
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5 2.77233C20.7271 3.10027 19.8978 3.32267 19.0264 3.42196C19.9161 2.91181 20.5972 2.10263 20.92 1.1414C20.0854 1.61383 19.1642 1.95688 18.1826 2.14285C17.3966 1.33994 16.2785 0.839844 15.0384 0.839844C12.6593 0.839844 10.7303 2.68691 10.7303 4.9637C10.7303 5.2866 10.7683 5.60199 10.8418 5.90357C7.26201 5.73141 4.08768 4.08917 1.96314 1.59372C1.59176 2.20189 1.38049 2.91053 1.38049 3.66697C1.38049 5.09814 2.14161 6.36093 3.2964 7.09973C2.5904 7.07713 1.92639 6.89116 1.34508 6.58205V6.63357C1.34508 8.63141 2.83056 10.2988 4.80024 10.6783C4.43936 10.7713 4.05882 10.8228 3.66514 10.8228C3.38696 10.8228 3.11794 10.7964 2.85417 10.7461C3.40267 12.3859 4.99315 13.5783 6.87756 13.611C5.40388 14.7167 3.54573 15.3739 1.52749 15.3739C1.17976 15.3739 0.837236 15.3537 0.5 15.3173C2.40671 16.4896 4.67036 17.1732 7.10327 17.1732C15.028 17.1732 19.3597 10.8881 19.3597 5.43741L19.3453 4.90341C20.1917 4.32537 20.9239 3.59912 21.5 2.77233Z"
                        fill="white"
                      />
                    </svg>
                  </Link>

                  <Link
                    to={{
                      pathname:
                        'https://www.linkedin.com/company/dafriexchange-ltd',
                    }}
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex footer-social__item"
                  >
                    <svg
                      className="fill"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9951 20.0008V20H20.0001V12.665C20.0001 9.07667 19.2276 6.3125 15.0326 6.3125C13.0159 6.3125 11.6626 7.41917 11.1101 8.46834H11.0517V6.6475H7.07422V20H11.2159V13.3883C11.2159 11.6475 11.5459 9.96417 13.7017 9.96417C15.8259 9.96417 15.8576 11.9508 15.8576 13.5V20.0008H19.9951Z"
                        fill="white"
                      />
                      <path
                        d="M0.330078 6.64844H4.47675V20.0009H0.330078V6.64844Z"
                        fill="white"
                      />
                      <path
                        d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z"
                        fill="white"
                      />
                    </svg>
                  </Link>

                  <Link
                    to={{ pathname: 'https://www.instagram.com/dafrixchange' }}
                    target="_blank"
                    className="d-flex footer-social__item"
                    rel="noreferrer"
                  >
                    <svg
                      className="fill"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 10C0 5.80863 0 3.71294 1.05041 2.26718C1.38964 1.80026 1.80026 1.38964 2.26718 1.05041C3.71294 0 5.80863 0 10 0C14.1914 0 16.2871 0 17.7328 1.05041C18.1997 1.38964 18.6104 1.80026 18.9496 2.26718C20 3.71294 20 5.80863 20 10C20 14.1914 20 16.2871 18.9496 17.7328C18.6104 18.1997 18.1997 18.6104 17.7328 18.9496C16.2871 20 14.1914 20 10 20C5.80863 20 3.71294 20 2.26718 18.9496C1.80026 18.6104 1.38964 18.1997 1.05041 17.7328C0 16.2871 0 14.1914 0 10ZM10 4.70588C7.07632 4.70588 4.70588 7.07632 4.70588 10C4.70588 12.9237 7.07632 15.2941 10 15.2941C12.9237 15.2941 15.2941 12.9237 15.2941 10C15.2941 7.07632 12.9237 4.70588 10 4.70588ZM10 13.3088C8.17618 13.3088 6.69118 11.8238 6.69118 10C6.69118 8.17485 8.17618 6.69118 10 6.69118C11.8238 6.69118 13.3088 8.17485 13.3088 10C13.3088 11.8238 11.8238 13.3088 10 13.3088ZM16.3966 4.30883C16.3966 4.69844 16.0808 5.01427 15.6912 5.01427C15.3016 5.01427 14.9857 4.69844 14.9857 4.30883C14.9857 3.91923 15.3016 3.60339 15.6912 3.60339C16.0808 3.60339 16.3966 3.91923 16.3966 4.30883Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>

                <p className="copyright">
                  DafriXchange™. All rights reserved. A DafriGroup PLC company
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footers;
