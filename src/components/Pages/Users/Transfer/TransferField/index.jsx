import React from 'react';
import L from 'i18n-react';
import { killExponential, toCrop } from '../../../../../services/helpers';

const TransferField = ({ quantity, onChange, selectedCoin, label, name }) => {
  return (
    <div className="methods-col">
      <div className="transfer-info">
        <p className="transfer-info__name">{label}</p>

        <div className="transfer-send-field transfer-info__field">
          <div className="field-wrap">
            <input
              type="text"
              className="input input--with-currency"
              name={name}
              placeholder="0"
              required
              value={quantity}
              onChange={onChange}
            />
            <span className="input-currency">
              {selectedCoin?.code?.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferField;
