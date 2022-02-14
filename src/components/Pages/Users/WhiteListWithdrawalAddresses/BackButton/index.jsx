import React from 'react';
import L from 'i18n-react';
import ArrowLeftIcon from '../ArrowLeftIcon';

const BackButton = ({ handleBack }) => {
  return (
    <button className="back-btn" type="button" onClick={handleBack}>
      <span className="d-flex back-btn__icon">
        <ArrowLeftIcon />
      </span>
      {L.translate('Pages.Users.WhiteListWithdrawalAddresses.BackButton.item1')}
    </button>
  );
};

export default BackButton;
