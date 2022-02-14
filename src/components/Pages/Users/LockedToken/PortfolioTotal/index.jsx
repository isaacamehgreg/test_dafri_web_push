import React from 'react';
import L from 'i18n-react';
import { useSelector } from 'react-redux';
import { walletSelector } from '../../../../../redux/wallets/selectors';
import { toCrop, numberWithCommas } from '../../../../../services/helpers';
import { storeCurentDecimal } from '../../../../../redux/decimals/selectors';

const PortfolioTotal = ({ currency }) => {
  const wallet = useSelector(walletSelector);
  const { dbaAnalysis } = wallet;
  const decimal = useSelector(storeCurentDecimal);

  return (
    <div className="portfolio-total">
      <p className="page-title portfolio-total__title">
        {L.translate('Pages.Users.LockedToken.PortfolioTotal.item1')}
      </p>
      <p className="portfolio-total__subtitle">
        {L.translate('Pages.Users.LockedToken.PortfolioTotal.item2')}
      </p>
      <p className="portfolio-total__value">
        {currency.toUpperCase()}{' '}
        {numberWithCommas(toCrop(decimal)(dbaAnalysis?.portfolioProfit))}{' '}
      </p>
      <p className="portfolio-total__quantity">
        {numberWithCommas(
          toCrop(decimal)(dbaAnalysis?.total_acquired + dbaAnalysis?.referral),
        )}{' '}
        DBA
      </p>
    </div>
  );
};

export default PortfolioTotal;
