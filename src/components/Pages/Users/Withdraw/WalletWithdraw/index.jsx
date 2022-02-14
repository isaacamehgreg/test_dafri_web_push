import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SupportedCurrency from '../SupportedCurrency';
import { walletSelector } from '../../../../../redux/wallets/selectors';
import types from '../../../../../redux/types';

const WalletWithdraw = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const wallet = useSelector(walletSelector);

  const { isLoading, walletsList, totalUSD } = wallet;

  const [activeTab, setActiveTab] = useState(0);
  const handleSetTab = num => setActiveTab(num);

  const [isShowZeroBalances, setIsShowZeroBalances] = useState(true);
  const [cryptoWallets, setCryptoWallets] = useState([]);
  const [fiatWallets, setFiatWallets] = useState([]);

  const toggleZeroBalancesItems = () => {
    setIsShowZeroBalances(prev => !prev);
  };

  useEffect(() => {
    if (location?.state && location?.state?.type !== 'fiat') {
      setActiveTab(1);
    }
  }, [location?.state]);

  useEffect(() => {
    dispatch({ type: types.GET_PAYMENT_METHODS_START });
  }, []);

  useEffect(() => {
    if (walletsList && walletsList.length && isShowZeroBalances) {
      setFiatWallets(walletsList.filter(item => item.asset.type === 'fiat'));
      setCryptoWallets(walletsList.filter(item => item.asset.type !== 'fiat'));
    } else {
      setFiatWallets(
        walletsList.filter(
          item => item.asset.type === 'fiat' && item.total > 0,
        ),
      );

      setCryptoWallets(
        walletsList.filter(
          item => item.asset.type !== 'fiat' && item.total > 0,
        ),
      );
    }
  }, [wallet, isShowZeroBalances]);

  return (
    <section className="transfer-section">
      <div className="custom-container">
        <p className="section-title section-title--center">
          {L.translate('Pages.Users.Withdraw.WalletWithdraw.item1')}
        </p>

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
              <SupportedCurrency
                isLoading={isLoading}
                data={fiatWallets}
                labels={['Fiat', 'Total', 'Available', 'Locked']}
                onSelectItem={() => {}}
                setFieldValue={() => {}}
                isShowZeroBalances={isShowZeroBalances}
                setIsShowZeroBalances={toggleZeroBalancesItems}
                showZeroBalances
              />
            ) : (
              <SupportedCurrency
                isLoading={isLoading}
                data={cryptoWallets}
                labels={['Coin', 'Total', 'Available', 'Locked']}
                onSelectItem={() => {}}
                setFieldValue={() => {}}
                isShowZeroBalances={isShowZeroBalances}
                setIsShowZeroBalances={toggleZeroBalancesItems}
                showZeroBalances
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletWithdraw;
