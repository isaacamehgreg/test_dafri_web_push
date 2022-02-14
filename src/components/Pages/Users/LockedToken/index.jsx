import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import types from '../../../../redux/types';
import { walletSelector } from '../../../../redux/wallets/selectors';
import AcquiredDetails from './AcquiredDetails';
import AcquiredHistory from './AcquiredHistory';
import CurrencyDropdown from './CurrencyDropdown';
import PortfolioAnalysis from './PortfolioAnalysis';
import PortfolioTotal from './PortfolioTotal';
import WithdrawCoinsList from './WithdrawCoinsList';

const LockedToken = () => {
  const dispatch = useDispatch();
  const wallet = useSelector(walletSelector);
  const { walletsList } = wallet;
  const currencyFiat = walletsList.filter(item => item.asset.type === 'fiat');

  const [currentCurrencyCode, setCurrentCurrencyCode] = useState('zar');

  useEffect(() => {
    dispatch({
      type: types.GET_DBA_ANALYSIS_START,
      payload: {
        params: {
          currency_code: currentCurrencyCode,
        },
      },
    });
  }, [currentCurrencyCode]);

  return (
    <section className="transfer-section">
      <div className="custom-container">
        <p className="section-title section-title--center">
          {L.translate('Pages.Users.LockedToken.item1')}
        </p>
        <div className="transfer-box">
          <div className="transfer-box__content">
            {/* <WithdrawCoinsList /> */}
            <PortfolioTotal currency={currentCurrencyCode} />
            {currencyFiat?.length ? (
              <CurrencyDropdown
                currencyFiat={currencyFiat}
                currentCurrencyCode={currentCurrencyCode}
                onSelect={setCurrentCurrencyCode}
              />
            ) : null}
            <PortfolioAnalysis selectedCurrency={currentCurrencyCode} />
            {/* <AcquiredDetails />
            <AcquiredHistory /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LockedToken;
