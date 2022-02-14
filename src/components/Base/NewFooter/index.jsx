import React from 'react';
import L from 'i18n-react';
import { Link } from 'react-router-dom';
import routes from '../../../routes';

import logo from '../../../styles/img/white-logo.svg';
import pci from '../../../styles/img/pci-seal.svg';
import secure from '../../../styles/img/secure-seal.svg';

const NewFooter = () => {
  return (
    <footer>
      <div className="container">
        <div className="hr-line" />

        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
              <img src={logo} className="logo-img" alt="Dafri Exchange" />
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link to={routes.Root.path}>
                    <img src={pci} className="img" alt="pci seal" />
                  </Link>
                </li>

                <li className="list-inline-item">
                  <Link to={routes.Root.path}>
                    <img src={secure} className="img" alt="secure seal" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 col-sm-3">
            <div className="address-box">
              <h4>{L.translate('Base.NewFooter.item1')}</h4>

              <address>
                {L.translate('Base.NewFooter.item2')}
                <br /> {L.translate('Base.NewFooter.item3')} <br />{' '}
                {L.translate('Base.NewFooter.item4')} <br /> 1684
              </address>

              <Link
                to={{ pathname: 'https://goo.gl/maps/SamavWq4m6Esyfhh7' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {L.translate('Base.NewFooter.item5')}
              </Link>
            </div>

            <div className="address-box mb-0">
              <h4>{L.translate('Base.NewFooter.item6')}</h4>

              <address>
                {L.translate('Base.NewFooter.item7')} <br />{' '}
                {L.translate('Base.NewFooter.item8')} <br />{' '}
                {L.translate('Base.NewFooter.item9')} <br /> London
              </address>

              <Link
                to={{ pathname: 'https://goo.gl/maps/SMBVnKLzuZJNs7mKA' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {L.translate('Base.NewFooter.item10')}
              </Link>
            </div>
          </div>

          <div className="col-6 col-sm-3">
            <div className="row">
              <div className="col-6 col-sm-6">
                <ul className="list-unstyled list-nav">
                  <li>
                    <Link
                      to={{
                        pathname: routes.Trade.SpotTrade.path,
                        state: { currency: 'dba' },
                      }}
                    >
                      {L.translate('Base.NewFooter.item11')}
                    </Link>
                  </li>

                  <li>
                    <Link to={routes.Trade.SpotTrade.path}>
                      {L.translate('Base.NewFooter.item12')}
                    </Link>
                  </li>

                  <li>
                    <Link to={routes.Static.Defi.path}>
                      {L.translate('Base.NewFooter.item13')}
                    </Link>
                  </li>

                  <li>
                    <Link to={routes.Profile.PaymentAgent.path}>
                      {L.translate('Base.NewFooter.item14')}
                    </Link>
                  </li>

                  {/* <li>
                    <Link to={routes.Root.path}>
                      {L.translate('Base.NewFooter.item26')}
                    </Link>
                  </li> */}
                </ul>
              </div>

              <div className="col-6 col-sm-6">
                <ul className="list-unstyled list-nav">
                  <li>
                    <a href={routes.Blog.path} target="_blank" rel="noreferrer">
                      {L.translate('Base.NewFooter.item15')}
                    </a>
                  </li>

                  <li>
                    <Link to={routes.Static.Affiliate.path}>
                      {L.translate('Base.NewFooter.item16')}
                    </Link>
                  </li>

                  <li>
                    <Link to={routes.Static.Careers.path}>
                      {L.translate('Base.NewFooter.item17')}
                    </Link>
                  </li>

                  <li>
                    <Link to={routes.Static.FAQ.path}>
                      {L.translate('Base.NewFooter.item18')}
                    </Link>
                  </li>

                  <li>
                    <Link to={routes.Static.Contacts.path}>
                      {L.translate('Base.NewFooter.item19')}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-12">
                <ul className="list-unstyled list-nav">
                  <li>
                    <Link to={routes.Static.Legal.path}>
                      {L.translate('Base.NewFooter.item20')}
                    </Link>
                  </li>

                  <li>
                    <Link to={routes.Static.TermsAndCondition.path}>
                      {L.translate('Base.NewFooter.item27')}
                    </Link>
                  </li>

                  <li>
                    <Link to={routes.Static.PrivacyAndTerms.path}>
                      {L.translate('Base.NewFooter.item21')}
                    </Link>
                  </li>

                  <li>
                    <Link to={routes.Static.AMLPolicy.path}>
                      {L.translate('Base.NewFooter.item22')}
                    </Link>
                  </li>

                  <li>
                    <Link to={routes.Static.ListingDelisting.path}>
                      {L.translate('Base.NewFooter.item23')}
                    </Link>
                  </li>

                  <li>
                    <Link to={routes.Static.Security.path}>
                      {L.translate('Base.NewFooter.item24')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="contact-box">
              <a href="tel:+27 11 568 5053">
                <span>t /</span> +27 11 568 5053
              </a>

              <a href="mailto:info@dafriexchange.com">
                <span>e /</span> info@dafriexchange.com{' '}
              </a>
            </div>

            <ul className="list-inline list-social">
              <li className="list-inline-item">
                <Link
                  to={{ pathname: 'https://www.facebook.com/DafriXchange' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook" />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link
                  to={{ pathname: 'https://twitter.com/DafriXchange' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-twitter" />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link
                  to={{
                    pathname:
                      'https://www.linkedin.com/company/dafriexchange-ltd',
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin" />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link
                  to={{ pathname: 'https://www.instagram.com/dafrixchange' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram" />
                </Link>
              </li>
            </ul>

            <p className="copy-right">
              DafriXchange™. {L.translate('Base.NewFooter.item25')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
