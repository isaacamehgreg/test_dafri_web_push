import React from 'react';
import L from 'i18n-react';
import { Link } from 'react-router-dom';
import routes from '../../../../../routes';

const TransferLimit = ({ amount = '0' }) => {
  return (
    <div className="transfer-limit-block">
      <p className="transfer-limit">
        {L.translate('Pages.Users.Withdraw.TransferLimit.item1')}{' '}
        <span className="green">{amount.toFixed(1)} USD</span> /{' '}
        <span className="red">50 000 USD</span>
      </p>
      <div className="transfer-submit">
        <Link
          className="button button--big  button--big--round button--wide-width"
          to={routes.Profile.Verification.path}
        >
          {L.translate('Pages.Users.Withdraw.TransferLimit.item2')}
        </Link>
      </div>
    </div>
  );
};

export default TransferLimit;
