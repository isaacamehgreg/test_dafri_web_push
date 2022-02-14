import React from 'react';
import L from 'i18n-react';
import { closeModal } from '../../../../Modal';

import closeIcon from '../../../../../../styles/img/closeIcon.svg';
import logo from '../../../../../../styles/img/dark-logo.svg';

const ThanksForDeposit = () => {
  return (
    <div className="modal modal--medium">
      <button className="close-modal" type="button" onClick={closeModal}>
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="modal-header">
        <div className="modal-logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="modal-body">
        <div className="modal-text modal-text--type2 modal-text--left">
          <p>
            {L.translate('Base.Modals.Users.Deposit.ThanksForDeposit.item1')}
          </p>
        </div>

        <div className="modal-note" style={{ color: '#3dd598' }}>
          <p>
            <strong>
              {L.translate('Base.Modals.Users.Deposit.ThanksForDeposit.item2')}
            </strong>{' '}
            {L.translate('Base.Modals.Users.Deposit.ThanksForDeposit.item3')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThanksForDeposit;
