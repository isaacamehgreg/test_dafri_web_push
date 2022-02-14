import React from 'react';
import L from 'i18n-react';
import PaymentDetail from './PaymentDetail';
import TransferDetailUpdate from './TransferDetailUpdate';
import TransferDetail from './TransferDetail';
import {
  cropNumber,
  killExponential,
  toCrop,
} from '../../../../../services/helpers';

const TransferBox = ({
  firstQuantity,
  secondQuantity,
  firstAsset,
  secondAsset,
  rate,
  rateExchange,
  onClickExchange,
  onUpdateRate,
}) => {
  const fee = rateExchange?.fee * firstQuantity;
  const totalBefore = rateExchange?.rate * firstQuantity;
  const totalAfter = totalBefore ? totalBefore - fee : totalBefore;

  const finalSum =
    !!totalAfter && !!firstQuantity ? cropNumber(totalAfter, 8) : '0';

  return (
    <div className="transfer-details-box">
      <p className="item-title">
        {L.translate('Pages.Users.Transfer.PaymentAgent.item6')}
      </p>

      <div className="payment-details">
        <PaymentDetail
          quantity={firstQuantity}
          img={firstAsset?.img_path}
          code={firstAsset?.code}
        />

        <div className="d-flex payment-details__icon">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7109 17.5586L19.2409 10.0626C19.8069 9.49861 19.8069 8.50061 19.2409 7.93461L11.7109 0.438609C11.1229 -0.145391 10.1729 -0.143391 9.58892 0.444609C9.00492 1.03261 9.00492 1.98061 9.59292 2.56661L14.5469 7.50061L1.83691 7.50061C1.00691 7.50061 0.336914 8.17261 0.336914 9.00061C0.336914 9.82861 1.00691 10.5006 1.83691 10.5006L14.5469 10.5006L9.59291 15.4326C9.29891 15.7266 9.15292 16.1106 9.15292 16.4966C9.15292 16.8786 9.29892 17.2626 9.58892 17.5546C10.1729 18.1406 11.1229 18.1426 11.7109 17.5586"
              fill="#292929"
            />
          </svg>
        </div>

        <PaymentDetail
          quantity={secondQuantity}
          img={secondAsset?.img_path}
          code={secondAsset?.code}
        />
      </div>

      <div className="transfer-details-block">
        <TransferDetail
          label={L.translate('Pages.Users.Transfer.PaymentAgent.item7')}
          value={firstQuantity || '0'}
          coin={firstAsset?.code}
        />

        <TransferDetailUpdate rate={rate} onUpdateRate={onUpdateRate} />

        <TransferDetail
          label={L.translate('Pages.Users.Transfer.Swap.item11')}
          value={
            rateExchange?.fee
              ? cropNumber(rateExchange?.fee * firstQuantity, 8)
              : '0'
          }
          coin={secondAsset?.code}
        />

        <TransferDetail
          label={L.translate('Pages.Users.Transfer.PaymentAgent.item9')}
          value={finalSum || '0'}
          coin={secondAsset?.code}
        />

        <div className="d-flex transfer-details-box__btn">
          <button
            type="button"
            className="button button--big button--big--round "
            onClick={onClickExchange}
            disabled={finalSum <= 0}
          >
            {L.translate('Pages.Users.Transfer.PaymentAgent.item10')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferBox;
