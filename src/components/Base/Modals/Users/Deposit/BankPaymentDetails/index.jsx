import React from 'react';
import L from 'i18n-react';
import { closeModal } from '../../../../Modal';
import closeIcon from '../../../../../../styles/img/closeIcon.svg';

const BankPaymentDetails = ({ bankInfo }) => {
  const {
    country,
    bank_name,
    account_hold,
    branch_code,
    account_type,
    account_number,
  } = bankInfo;
  return (
    <div className="modal modal--medium">
      <button className="close-modal" onClick={closeModal}>
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="modal-header">
        <p className="modal-title">
          {L.translate('Base.Modals.Users.Deposit.BankPaymentDetails.item1')}
        </p>
      </div>

      <div className="modal-body">
        <div className="modal-payment-info">
          <div className="row">
            <div className="col-md-6">
              <div className="modal-detail">
                <p className="modal-detail__name">
                  {L.translate(
                    'Base.Modals.Users.Deposit.BankPaymentDetails.item2',
                  )}
                </p>

                <p className="modal-detail__value">{`${bank_name} ${country}`}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="modal-detail">
                <p className="modal-detail__name">
                  {L.translate(
                    'Base.Modals.Users.Deposit.BankPaymentDetails.item3',
                  )}
                </p>

                <p className="modal-detail__value">{branch_code || '-'}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="modal-detail">
                <p className="modal-detail__name">
                  {L.translate(
                    'Base.Modals.Users.Deposit.BankPaymentDetails.item4',
                  )}
                </p>
                <p className="modal-detail__value">{account_type || '-'}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="modal-detail">
                <p className="modal-detail__name">
                  {L.translate(
                    'Base.Modals.Users.Deposit.BankPaymentDetails.item5',
                  )}
                </p>
                <p className="modal-detail__value">{account_hold || '-'}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="modal-detail">
                <p className="modal-detail__name">
                  {L.translate(
                    'Base.Modals.Users.Deposit.BankPaymentDetails.item6',
                  )}
                </p>
                <p className="modal-detail__value">{account_number || '-'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-submit ">
          <button
            className="button button--wider"
            type="button"
            onClick={closeModal}
          >
            {L.translate('Base.Modals.Users.Deposit.BankPaymentDetails.item7')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankPaymentDetails;
