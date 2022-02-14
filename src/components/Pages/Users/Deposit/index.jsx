import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import routes from '../../../../routes';
import DepositFiat from './Fiat';
import DepositCrypto from './Crypto';
import DepositHistory from './DepositHistory';
import { walletSelector } from '../../../../redux/wallets/selectors';
import types from '../../../../redux/types';
import { tokenSelector, userSelector } from '../../../../redux/auth/selectors';

const Deposit = () => {
  const dispatch = useDispatch();
  const wallet = useSelector(walletSelector);

  const [activeTab, setActiveTab] = useState(0);

  const { isLoading, walletsList, totalUSD } = wallet;
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
        <p className="section-title section-title--center">
          {L.translate('Pages.Users.Deposit.item1')}
        </p>

        <div className="transfer-box">
          <div className="transfer-box__content">
            <div className="transfer-top">
              <div className="my-balance">
                <p className="item-title item-title--bigger my-balance__title">
                  {L.translate('Pages.Users.Deposit.item2')}
                </p>

                <p className="my-balance__value">${totalUSD}</p>
              </div>

              <div className="transfer-hint">
                <span className="transfer-hint__icon">
                  <svg
                    className="fill"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.6668 7.00016C13.6668 8.76827 12.9644 10.464 11.7142 11.7142C10.464 12.9644 8.76827 13.6668 7.00016 13.6668C5.23205 13.6668 3.53636 12.9644 2.28612 11.7142C1.03588 10.464 0.333496 8.76827 0.333496 7.00016C0.333496 5.23205 1.03588 3.53636 2.28612 2.28612C3.53636 1.03588 5.23205 0.333496 7.00016 0.333496C8.76827 0.333496 10.464 1.03588 11.7142 2.28612C12.9644 3.53636 13.6668 5.23205 13.6668 7.00016ZM7.00016 4.50016C6.85374 4.50002 6.70987 4.53846 6.58304 4.6116C6.4562 4.68475 6.35087 4.79003 6.27766 4.91683C6.2248 5.01506 6.15276 5.10168 6.0658 5.17155C5.97884 5.24142 5.87874 5.29311 5.77143 5.32358C5.66412 5.35404 5.55178 5.36266 5.44108 5.3489C5.33038 5.33515 5.22357 5.29931 5.12698 5.24351C5.03039 5.1877 4.94599 5.11308 4.87877 5.02405C4.81156 4.93503 4.7629 4.83341 4.73569 4.72523C4.70847 4.61705 4.70325 4.50451 4.72034 4.39428C4.73743 4.28404 4.77647 4.17836 4.83516 4.0835C5.11034 3.60692 5.53509 3.23446 6.04352 3.02388C6.55195 2.8133 7.11565 2.77636 7.64722 2.91879C8.17878 3.06123 8.64849 3.37507 8.98351 3.81166C9.31853 4.24825 9.50014 4.78318 9.50016 5.3335C9.50031 5.85068 9.34011 6.35518 9.04163 6.77754C8.74314 7.19989 8.32106 7.51932 7.8335 7.69183V7.8335C7.8335 8.05451 7.7457 8.26647 7.58942 8.42275C7.43314 8.57903 7.22118 8.66683 7.00016 8.66683C6.77915 8.66683 6.56719 8.57903 6.41091 8.42275C6.25463 8.26647 6.16683 8.05451 6.16683 7.8335V7.00016C6.16683 6.77915 6.25463 6.56719 6.41091 6.41091C6.56719 6.25463 6.77915 6.16683 7.00016 6.16683C7.22118 6.16683 7.43314 6.07903 7.58942 5.92275C7.7457 5.76647 7.8335 5.55451 7.8335 5.3335C7.8335 5.11248 7.7457 4.90052 7.58942 4.74424C7.43314 4.58796 7.22118 4.50016 7.00016 4.50016ZM7.00016 11.1668C7.22118 11.1668 7.43314 11.079 7.58942 10.9228C7.7457 10.7665 7.8335 10.5545 7.8335 10.3335C7.8335 10.1125 7.7457 9.90052 7.58942 9.74424C7.43314 9.58796 7.22118 9.50016 7.00016 9.50016C6.77915 9.50016 6.56719 9.58796 6.41091 9.74424C6.25463 9.90052 6.16683 10.1125 6.16683 10.3335C6.16683 10.5545 6.25463 10.7665 6.41091 10.9228C6.56719 11.079 6.77915 11.1668 7.00016 11.1668Z"
                      fill="#FD5353"
                    />
                  </svg>
                </span>

                <Link
                  to={routes.Static.DepositInstructions.path}
                  style={{ color: 'black' }}
                >
                  {L.translate('Pages.Users.Deposit.item3')}
                </Link>
              </div>
            </div>

            {!mobileData && (
              <div className="switcher">
                <button
                  className={`switcher__item ${!activeTab ? 'active' : ''}`}
                  onClick={() => handleSetTab(0)}
                >
                  {L.translate('Pages.Users.Deposit.item4')}
                </button>

                <button
                  className={`switcher__item ${activeTab ? 'active' : ''}`}
                  onClick={() => handleSetTab(1)}
                >
                  {L.translate('Pages.Users.Deposit.item5')}
                </button>
              </div>
            )}

            {!activeTab ? (
              <>
                <DepositFiat
                  isActive={activeTab}
                  fiatData={fiatWallets}
                  mobileData={mobileData}
                />
              </>
            ) : (
              <>
                <DepositCrypto
                  isActive={activeTab}
                  isLoading={isLoading}
                  cryptoData={cryptoWallets}
                />
              </>
            )}
          </div>
        </div>

        <DepositHistory isActive={activeTab} />
      </div>
    </section>
  );
};

export default Deposit;
