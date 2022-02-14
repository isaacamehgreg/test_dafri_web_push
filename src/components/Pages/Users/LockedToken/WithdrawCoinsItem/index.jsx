import React from 'react';
import { useHistory } from 'react-router-dom';
import routes from '../../../../../routes';

const WithdrawCoinsItem = ({
  asset,
  balance,
  frozen_balance,
  total,
  id,
  network,
}) => {
  const history = useHistory();

  const handleClick = () => {
    const state = {
      type: asset?.type,
      item: {
        id,
        assetID: asset.id,
        type: asset.type,
        name: asset.name,
        code: asset.code,
        network,
        publicAdress: asset?.public_address,
      },
    };

    history.push(routes.Profile.Withdraw.path, state);
  };

  return (
    <div className="tr" onClick={handleClick} role="presentation">
      <div className="td">
        <div className="coin-card">
          <div className="coin-card__img">
            <img src={asset?.img_path} alt="" />
          </div>
          <div className="coin-card__info">
            <p
              className="coin-card__info-name"
              style={{ textTransform: 'uppercase' }}
            >
              {asset?.code}
            </p>
            <p className="coin-card__info-text">{asset?.name}</p>
          </div>
        </div>
      </div>
      <div className="td">
        <p className="table-value">{total}</p>
      </div>
      <div className="td">
        <p className="table-value">{balance}</p>
      </div>
      <div className="td">
        <p className="table-value">{frozen_balance}</p>
      </div>
    </div>
  );
};

export default WithdrawCoinsItem;
