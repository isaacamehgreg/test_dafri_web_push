import React from 'react';
import { convertValueToDecimal } from '../../../../../../services/helpers';
import SocketAssetsPairs from '../../../../../HOC/SocketAssetsPairs';

const CoinCard = ({ img, pair, cryptoValue, percentChange }) => {
  const [coinName1] = pair.split('_').map(word => word.toUpperCase());

  const slicedCryptoValue = cryptoValue
    ? convertValueToDecimal(cryptoValue, 4)
    : '0.00';

  return (
    <div className="coins-cards__col">
      <div className="coin-block">
        <div className="coin-pair">
          <div className="coin-pair__img">
            <img src={img} alt="" />
          </div>

          <p className="coin-pair__name">{coinName1 || ''}</p>
        </div>

        <div className="coin-block-extra">
          <div className="coin-block-extra__left">
            <div className="coin-block-info">
              <p className="coin-block-info__name">24 hour volume</p>
              <p className="coin-block-info__value coin-block-info__value--type1">
                {slicedCryptoValue}
              </p>
            </div>
          </div>

          <div className="coin-block-extra__right">
            <div className="coin-block-info">
              <p className="coin-block-info__name">24 hour change</p>
              <p className="coin-block-info__value coin-block-info__value--type2">
                {percentChange || '0.00'}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
