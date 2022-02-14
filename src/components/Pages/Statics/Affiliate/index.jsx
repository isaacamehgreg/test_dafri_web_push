import React from 'react';
import L from 'i18n-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userAuthBool } from '../../../../redux/auth/selectors';
import routes from '../../../../routes';

const Affiliate = () => {
  const isLogin = useSelector(userAuthBool);
  const route = isLogin
    ? routes.Static.UserAffiliate.path
    : routes.Auth.Login.path;

  return (
    <section className="content-section">
      <div className="custom-container">
        <h2 className="section-title section-title--center">
          {L.translate('Pages.Statics.Affiliate.item1')}
        </h2>

        <div className="text-content-wrapper">
          <div className="text-content-block">
            <h3>{L.translate('Pages.Statics.Affiliate.item2')}</h3>
            <h3>{L.translate('Pages.Statics.Affiliate.item3')}</h3>
            <p>
              <strong>1.</strong> {L.translate('Pages.Statics.Affiliate.item4')}
            </p>
            <p>
              <strong>2.</strong> {L.translate('Pages.Statics.Affiliate.item5')}
            </p>
            <p>
              <strong>3.</strong> {L.translate('Pages.Statics.Affiliate.item6')}
            </p>

            <p>{L.translate('Pages.Statics.Affiliate.item7')}</p>
            <p>
              <strong>1.</strong> {L.translate('Pages.Statics.Affiliate.item8')}
            </p>
            <p>
              <strong>2.</strong> {L.translate('Pages.Statics.Affiliate.item9')}
            </p>
            <p>{L.translate('Pages.Statics.Affiliate.item10')}</p>
            <p>{L.translate('Pages.Statics.Affiliate.item11')}</p>
          </div>
          {/*
            <div className="text-content-btn">
              <Link
                to={route}
                className="button button--wide button--big button--uppercase"
              >
                {L.translate('Pages.Statics.Affiliate.item12')}
              </Link>
            </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Affiliate;
