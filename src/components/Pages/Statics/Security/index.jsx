import React from 'react';
import L from 'i18n-react';
import { Link } from 'react-router-dom';
import routes from '../../../../routes';

const Security = () => {
  return (
    <section className="content-section">
      <div className="custom-container">
        <h2 className="section-title section-title--center">
          {L.translate('Pages.Statics.Security.item1')}
        </h2>
        <div className="text-content-wrapper">
          <div className="text-content-block">
            <h2 className="text-content-title">
              {L.translate('Pages.Statics.Security.item2')}
            </h2>
            <h3>{L.translate('Pages.Statics.Security.item3')}</h3>
            <p>{L.translate('Pages.Statics.Security.item4')}</p>
            <p>{L.translate('Pages.Statics.Security.item5')}</p>
            <h3>{L.translate('Pages.Statics.Security.item6')}</h3>
            <p>{L.translate('Pages.Statics.Security.item7')}</p>
            <p>{L.translate('Pages.Statics.Security.item8')}</p>
            <h2 className="text-content-title text-content-title--pt">
              {L.translate('Pages.Statics.Security.item9')}
            </h2>
            <h3>{L.translate('Pages.Statics.Security.item10')}</h3>
            <p>{L.translate('Pages.Statics.Security.item11')}</p>
            <p>{L.translate('Pages.Statics.Security.item12')}</p>
            <h3>{L.translate('Pages.Statics.Security.item13')}</h3>
            <p>{L.translate('Pages.Statics.Security.item14')}</p>
            <p>{L.translate('Pages.Statics.Security.item15')}</p>
            <h2 className="text-content-title text-content-title--pt">
              {L.translate('Pages.Statics.Security.item16')}
            </h2>
            <h3>{L.translate('Pages.Statics.Security.item17')}</h3>
            <p>{L.translate('Pages.Statics.Security.item18')}</p>
            <p>{L.translate('Pages.Statics.Security.item19')}</p>
            <h3>{L.translate('Pages.Statics.Security.item20')}</h3>
            <p>{L.translate('Pages.Statics.Security.item21')}</p>
            <p>
              {L.translate('Pages.Statics.Security.item22')}
              <Link to={routes.Static.PrivacyAndTerms.path}>
                {L.translate('Pages.Statics.Security.item23')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
