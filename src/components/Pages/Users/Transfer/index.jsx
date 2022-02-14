import React from 'react';
import { useSelector } from 'react-redux';
import L from 'i18n-react';
import TransferHistory from './TransferHistory';
import { walletSelector } from '../../../../redux/wallets/selectors';
import { toCrop } from '../../../../services/helpers';
import Swap from './Swap';

const Transfer = () => {
  const wallet = useSelector(walletSelector);

  return (
    <section className="transfer-section">
      <div className="custom-container">
        <p className="section-title section-title--center">
          {L.translate('Pages.Users.Transfer.item1')}
        </p>

        <div className="transfer-box">
          <div className="transfer-box__content">
            <div className="transfer-top">
              <div className="my-balance">
                <p className="item-title item-title--bigger my-balance__title">
                  {L.translate('Pages.Users.Transfer.item2')}
                </p>
                <p className="my-balance__value">
                  ${toCrop(2)(wallet?.totalUSD)}
                </p>
              </div>
            </div>

            <Swap />
          </div>
        </div>

        {/* <TransferHistory /> */}
      </div>
    </section>
  );
};

export default Transfer;
