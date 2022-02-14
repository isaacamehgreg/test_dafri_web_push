import React from 'react';
import L from 'i18n-react';

const Switcher = ({ currentTab, handleTab }) => {
  return (
    <div className="commission-switcher">
      <div className="switcher">
        <button
          className={`switcher__item ${currentTab === 'buy' ? 'active' : ''} `}
          type="button"
          name="buy"
          onClick={handleTab}
        >
          {L.translate('Pages.Users.Affiliate.Switcher.item1')}
        </button>
        <button
          className={`switcher__item ${currentTab === 'sell' ? 'active' : ''} `}
          type="button"
          name="sell"
          onClick={handleTab}
        >
          {L.translate('Pages.Users.Affiliate.Switcher.item2')}
        </button>
        <button
          className={`switcher__item ${
            currentTab === 'withdraw' ? 'active' : ''
          } `}
          type="button"
          name="withdraw"
          onClick={handleTab}
        >
          {L.translate('Pages.Users.Affiliate.Switcher.item3')}
        </button>
      </div>
    </div>
  );
};

export default Switcher;
