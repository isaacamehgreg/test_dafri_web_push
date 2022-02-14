import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import WithdrawHistory from './WithdrawHistory';
import WithdrawalFiat from './Fiat';
import WithdrawCrypto from './Crypto';
import { walletSelector } from '../../../../redux/wallets/selectors';
import types from '../../../../redux/types';
import { tokenSelector, userSelector } from '../../../../redux/auth/selectors';
import routes from '../../../../routes';

const Withdraw = ({ name = L.translate('Pages.Users.Withdraw.item5') }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const wallet = useSelector(walletSelector);

  const { isLoading, walletsList, totalUSD } = wallet;

  const [activeTab, setActiveTab] = useState(0);
  const handleSetTab = num => setActiveTab(num);

  const cryptoWallets = walletsList.filter(item => item.asset.type !== 'fiat');
  const fiatWallets = walletsList.filter(item => item.asset.type === 'fiat');

  useEffect(() => {
    if (location?.state && location?.state?.type !== 'fiat') {
      setActiveTab(1);
    }
  }, [location?.state]);

  useEffect(() => {
    dispatch({ type: types.GET_PAYMENT_METHODS_START });
  }, []);

  // Mobile detecting
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);

  const isMobileApp = new URLSearchParams(useHistory().location.search).get(
    'app',
  );
  const isMobileToken = new URLSearchParams(useHistory().location.search).get(
    'access_token',
  );
  const mobileAmount = new URLSearchParams(useHistory().location.search).get(
    'amount',
  );
  const mobileAssetID = new URLSearchParams(useHistory().location.search).get(
    'asset_id',
  );
  const mobilePaymentType = new URLSearchParams(
    useHistory().location.search,
  ).get('payment_type');

  if (!token && !user) {
    return <Redirect to={routes.Auth.Login.path} />;
  }

  const isMobileAppBoolean = !!(
    isMobileApp &&
    isMobileToken &&
    mobileAmount &&
    mobileAssetID &&
    mobilePaymentType
  );

  const mobileData = isMobileAppBoolean
    ? {
        amount: mobileAmount,
        paymentType: mobilePaymentType,
        assetId: mobileAssetID,
      }
    : null;

  return (
    <section className="transfer-section">
      <div className="custom-container">
        <p className="section-title section-title--center">{name}</p>

        <div className="transfer-box">
          <div className="transfer-box__content">
            <div className="transfer-top">
              <div className="my-balance">
                <p className="item-title item-title--bigger my-balance__title">
                  {L.translate('Pages.Users.Withdraw.item2')}
                </p>

                <p className="my-balance__value">${totalUSD}</p>
              </div>
            </div>

            <div className="switcher">
              <button
                className={`switcher__item ${!activeTab ? 'active' : ''}`}
                onClick={() => handleSetTab(0)}
              >
                {L.translate('Pages.Users.Withdraw.item3')}
              </button>

              <button
                className={`switcher__item ${activeTab ? 'active' : ''}`}
                onClick={() => handleSetTab(1)}
              >
                {L.translate('Pages.Users.Withdraw.item4')}
              </button>
            </div>

            {!activeTab ? (
              <>
                <WithdrawalFiat
                  fiatData={fiatWallets}
                  location={location}
                  mobileData={mobileData}
                />
              </>
            ) : (
              <>
                <WithdrawCrypto
                  isActive={activeTab}
                  isLoading={isLoading}
                  cryptoData={cryptoWallets}
                  location={location}
                />
              </>
            )}
          </div>
        </div>

        <WithdrawHistory isActive={activeTab} />
      </div>
    </section>
  );
};

export default Withdraw;
