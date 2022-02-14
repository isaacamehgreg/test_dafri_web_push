import React from 'react';
import L from 'i18n-react';
import { closeModal } from '../../../Modal';
import { firstLatterToUppercase } from '../../../../../services/helpers';
import closeIcon from '../../../../../styles/img/closeIcon.svg';
import EmptyImage from '../../../EmptyImage';

const PaymentAgentModal = ({
  photo_path,
  name,
  surname,
  commission_rate,
  country,
  min_deposit_withdrawal,
  address,
  payment_methods,
  email,
  phone,
  id,
  description,
}) => {
  return (
    <div className="modal modal--bigger">
      <button className="close-modal" onClick={closeModal}>
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="agent-header">
        <div className="agent-avatar">
          {photo_path ? (
            <img src={photo_path} alt="" />
          ) : (
            <EmptyImage width="110px" height="110px" radius={30} />
          )}
        </div>

        <div className="agent-header__info">
          <p className="item-title agent-header__info-name">
            {firstLatterToUppercase(name) || 'Agent'}{' '}
            {firstLatterToUppercase(surname) || id}
          </p>

          <p className="agent-rate">
            {L.translate('Base.Modals.Users.PaymentAgentModal.item1')}{' '}
            {commission_rate}%
          </p>
        </div>
      </div>

      <div className="modal-body">
        <div className="modal-agent-info">
          <div className="row">
            <div className="col-md-6">
              <div className="modal-detail modal-detail--type2">
                <p className="modal-detail__name">
                  {L.translate('Base.Modals.Users.PaymentAgentModal.item2')}
                </p>

                <p className="modal-detail__value">
                  {firstLatterToUppercase(country)}
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="modal-detail modal-detail--type2">
                <p className="modal-detail__name">
                  {L.translate('Base.Modals.Users.PaymentAgentModal.item3')}
                </p>

                <p className="modal-detail__value">{min_deposit_withdrawal}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="modal-detail modal-detail--type2">
                <p className="modal-detail__name">
                  {L.translate('Base.Modals.Users.PaymentAgentModal.item4')}
                </p>

                <p className="modal-detail__value">{address}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="modal-detail modal-detail--type2">
                <p className="modal-detail__name">
                  {L.translate('Base.Modals.Users.PaymentAgentModal.item5')}
                </p>

                <p className="modal-detail__value">{payment_methods}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="modal-detail modal-detail--type2">
                <p className="modal-detail__name">
                  {L.translate('Base.Modals.Users.PaymentAgentModal.item6')}
                </p>

                <a
                  href={`mailto:${email}`}
                  style={{ color: '#000' }}
                  className="modal-detail__value"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="modal-detail modal-detail--type2">
                <p className="modal-detail__name">
                  {L.translate('Base.Modals.Users.PaymentAgentModal.item7')}
                </p>

                <a
                  href={`tel:${phone}`}
                  style={{ color: '#000' }}
                  className="phone modal-detail__value"
                >
                  {phone}
                </a>
              </div>
            </div>

            <div className="col-12">
              <div className="modal-detail modal-detail--type2">
                <p className="modal-detail__name">
                  {L.translate('Base.Modals.Users.PaymentAgentModal.item8')}
                </p>

                <p className="modal-detail__value">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentAgentModal;
