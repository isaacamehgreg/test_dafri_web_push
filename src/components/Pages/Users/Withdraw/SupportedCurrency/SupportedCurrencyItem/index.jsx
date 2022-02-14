import React from 'react';

const SupportedCurrencyItem = ({
  id,
  asset,
  balance,
  frozen_balance,
  total,
  selected,
  onSelectItem,
  setFieldValue,
  network,
  networks,
}) => {
  const onSelect = () => {
    onSelectItem({
      id,
      assetID: asset.id,
      type: asset.type,
      name: asset.name,
      code: asset.code,
      network,
      networks,
      balance,
      publicAdress: asset?.public_address,
    });

    if (asset.type !== 'fiat') {
      setFieldValue('address', '');
    }
  };

  return (
    <div className={`tr ${selected ? 'selected' : ''}`} onClick={onSelect}>
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

export default SupportedCurrencyItem;
