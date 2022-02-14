import React from 'react';
import L from 'i18n-react';
import { closeModal, openModal } from '../../../../Modal';
import ThanksForDeposit from '../ThanksForDeposit';
import CircleModal from '../Circle';

import closeIcon from '../../../../../../styles/img/closeIcon.svg';
import logo from '../../../../../../styles/img/dark-logo.svg';

const AgreeAndTerms = ({ onAgree, method, amount, assetID }) => {
  const onAgreeInterceptor = () => {
    onAgree();
    closeModal();
    if (method === null) openModal(() => <ThanksForDeposit />);
    if (method === 'visa_mastercard')
      openModal(() => <CircleModal amount={amount} assetID={assetID} />);
  };

  return (
    <div className="modal modal--medium">
      <button className="close-modal" onClick={closeModal}>
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="modal-header">
        <div className="modal-logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="modal-body">
        <div className="modal-text modal-text--type2 modal-text--left">
          <p>{L.translate('Base.Modals.Users.Deposit.AgreeAndTerms.item1')}</p>

          <p>{L.translate('Base.Modals.Users.Deposit.AgreeAndTerms.item2')}</p>

          <p>{L.translate('Base.Modals.Users.Deposit.AgreeAndTerms.item3')}</p>

          <p>{L.translate('Base.Modals.Users.Deposit.AgreeAndTerms.item4')}</p>

          <p>{L.translate('Base.Modals.Users.Deposit.AgreeAndTerms.item5')}</p>

          <p>{L.translate('Base.Modals.Users.Deposit.AgreeAndTerms.item6')}</p>

          <p>{L.translate('Base.Modals.Users.Deposit.AgreeAndTerms.item7')}</p>
        </div>

        <div className="form-submit ">
          <button
            className="button button--full"
            type="button"
            onClick={onAgreeInterceptor}
          >
            {L.translate('Base.Modals.Users.Deposit.AgreeAndTerms.item8')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgreeAndTerms;
