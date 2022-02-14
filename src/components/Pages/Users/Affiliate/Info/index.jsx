import React from 'react';
import { Link } from 'react-router-dom';
import L from 'i18n-react';
import routes from '../../../../../routes';
import InviteInfo from '../InviteInfo';
import ReferralAccountInfo from '../ReferralAccountInfo';

const Info = () => {
  return (
    <div className="affiliate-info-wrap">
      <div className="custom-container">
        <div className="affiliate-box">
          <div className="affiliate-box__col">
            <p className="block-title">
              {L.translate('Pages.Users.Affiliate.Info.item1')}
            </p>
            <div className="affiliate-description">
              <p>{L.translate('Pages.Users.Affiliate.Info.item2')}</p>
            </div>
            <InviteInfo />
          </div>
          <ReferralAccountInfo />
        </div>
        {/*
          <div className="affiliate-to-rate">
            <Link
              className="button button--wide button--big button--big--round"
              to={routes.Static.AffiliateRatings.path}
            >
              {L.translate('Pages.Users.Affiliate.Info.item3')}
            </Link>
          </div>
        */}
      </div>
    </div>
  );
};

export default Info;
