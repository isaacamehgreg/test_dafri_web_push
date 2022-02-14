import React from 'react';
import L from 'i18n-react';
import { openModal } from '../../../../../Base/Modal';
import PaymentModal from '../../../../../Base/Modals/Users/PaymentAgentModal';
import EmptyImage from '../../../../../Base/EmptyImage';

const AgentCard = props => {
  const { photo_path, name, surname, id, commission_rate, address, phone } =
    props;

  return (
    <div className="public-agents__card">
      <div className="agent">
        {photo_path ? (
          <div className="agent-avatar">
            <img src={photo_path} alt="" />
          </div>
        ) : (
          <EmptyImage width="120px" height="120px" />
        )}

        <p className="item-title agent__name">
          {name || 'Agent'} {surname || id}
        </p>

        <p className="agent__rate">
          {L.translate(
            'Pages.Users.PaymentAgent.PublicPaymentAgents.AgentCard.item1',
          )}
          : {commission_rate}%
        </p>

        <div className="agent-address">
          <span className="d-flex agent-address__icon">
            <svg
              className="fill"
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99967 0C2.80452 0 0.205078 2.59944 0.205078 5.79456C0.205078 9.75981 5.39067 15.581 5.61145 15.8269C5.81883 16.0579 6.18089 16.0575 6.38789 15.8269C6.60867 15.581 11.7943 9.75981 11.7943 5.79456C11.7942 2.59944 9.1948 0 5.99967 0ZM5.99967 8.70997C4.39211 8.70997 3.0843 7.40213 3.0843 5.79456C3.0843 4.187 4.39214 2.87919 5.99967 2.87919C7.6072 2.87919 8.91502 4.18703 8.91502 5.79459C8.91502 7.40216 7.6072 8.70997 5.99967 8.70997Z"
                fill="#292929"
              />
            </svg>
          </span>
          <p className="agent-address__value">{address}</p>
        </div>

        <a href={`tel:${phone}`} className="agent-phone">
          <p className="phone">
            <span>{phone}</span>
          </p>
        </a>

        <button
          className="agent-more"
          type="button"
          onClick={() => openModal(() => <PaymentModal {...props} />)}
        >
          {L.translate(
            'Pages.Users.PaymentAgent.PublicPaymentAgents.AgentCard.item2',
          )}
          <span className="d-flex agent-more__icon">
            <svg
              className="fill"
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4.35C0.641015 4.35 0.35 4.64102 0.35 5C0.35 5.35899 0.641015 5.65 1 5.65L1 4.35ZM13.4596 5.45962C13.7135 5.20578 13.7135 4.79422 13.4596 4.54038L9.32304 0.403805C9.0692 0.149964 8.65765 0.149964 8.40381 0.403805C8.14996 0.657646 8.14996 1.0692 8.40381 1.32304L12.0808 5L8.40381 8.67695C8.14997 8.9308 8.14997 9.34235 8.40381 9.59619C8.65765 9.85003 9.0692 9.85003 9.32305 9.59619L13.4596 5.45962ZM1 5.65L13 5.65L13 4.35L1 4.35L1 5.65Z"
                fill="#292929"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default AgentCard;
