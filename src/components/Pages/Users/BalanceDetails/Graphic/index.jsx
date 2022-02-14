import React, { useEffect } from 'react';
import L from 'i18n-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { walletSelector } from '../../../../../redux/wallets/selectors';
import CircleeChart from '../../../Statics/Charts/PieChart';
import routes from '../../../../../routes';
import { convertValueToDecimal } from '../../../../../services/helpers';

const Graphic = () => {
  const wallets = useSelector(walletSelector);
  const { availableInBTC, frozenInBTC } = wallets;

  const data = [
    {
      name: 'Balance Details 1',
      value: Number(frozenInBTC),
    },

    {
      name: 'Balance Details 2',
      value: Number(availableInBTC),
    },
  ];

  const chartColors = [
    { start: '#66DC91', end: '#53B9AB' },
    { start: '#DADADA', end: '#DADADA' },
  ];

  const settings = {
    width: 250,
    heigth: 250,
    cx: 120,
    cy: 120,
    innerRadius: 95,
    outerRadius: 120,
    fill: '#0088FE',
    paddingAngle: 2,
    dataKey: 'value',
    cornerRadius: 50,
    startAngle: 240,
    endAngle: -120,
  };

  return (
    <div className="dashboard-col dashboard-col--balance">
      <div className="profile-block">
        <div className="block-header">
          <p className="block-title">
            {L.translate('Pages.Users.BalanceDetails.Graphic.item1')}
          </p>

          <Link
            to={routes.Profile.Verification.path}
            className="block-header__link"
          >
            {L.translate('Pages.Users.BalanceDetails.Graphic.item2')}
          </Link>
        </div>

        <div className="profile-block__content">
          <div className="balance-list">
            <div className="balance-item">
              <p className="balance-item__name">
                {L.translate('Pages.Users.BalanceDetails.Graphic.item3')}
              </p>

              <p className="balance-item__value">
                {convertValueToDecimal(
                  Number(availableInBTC) + Number(frozenInBTC),
                  8,
                )}{' '}
                BTC
              </p>
            </div>
          </div>

          <div className="balance-chart-wrap">
            <div className="balance-chart">
              <div className="balance-chart__item">
                <CircleeChart
                  data={data}
                  colors={chartColors}
                  settings={settings}
                />

                <p className="chart-value">
                  {convertValueToDecimal(
                    Number(availableInBTC) + Number(frozenInBTC),
                  )}

                  <span>BTC</span>
                </p>
              </div>

              <div className="balance-chart__legend">
                <div className="chart-legend chart-legend--type1">
                  <div
                    className="chart-legend__color"
                    style={{
                      background:
                        'linear-gradient(121.96deg, #66DC91 4.89%, #53B9AB 100.17%)',
                    }}
                  />

                  <div className="chart-legend__info">
                    <p className="chart-legend__info-name">In order:</p>

                    <p className="chart-legend__info-value">
                      {convertValueToDecimal(frozenInBTC, 8)} BTC
                    </p>
                  </div>
                </div>

                <div className="chart-legend chart-legend--type2">
                  <div
                    className="chart-legend__color"
                    style={{ background: '#DADADA' }}
                  />

                  <div className="chart-legend__info">
                    <p className="chart-legend__info-name">
                      {L.translate('Pages.Users.BalanceDetails.Graphic.item4')}
                    </p>

                    <p className="chart-legend__info-value">
                      {convertValueToDecimal(availableInBTC, 8)} BTC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphic;
