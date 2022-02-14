import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paymentAgentSelector } from '../../../../../redux/paymentAgent/selectors';
import types from '../../../../../redux/types';
import notification from '../../../../../services/notification';
import { openModal } from '../../../../Base/Modal';
import PaymentAgentModal from '../../../../Base/Modals/Users/PaymentAgentModal';
import PaymentAgentsTable from '../PaymentAgentsTable';
import EmptyImage from '../../../../Base/EmptyImage';

const PaymentAgent = ({
  selectedPaymentAgent,
  handleSelectedPaymentAgent,
  type,
}) => {
  const dispatch = useDispatch();
  const paymentAgent = useSelector(paymentAgentSelector);
  const { privateAgentsList } = paymentAgent;
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    dispatch({
      type: types.GET_PRIVATE_PAYMENT_AGENTS_LIST_START,
      payload: {
        params: {
          current_page: 1,
          per_page: 15,
        },
      },
    });
  }, [dispatch]);

  useEffect(() => {
    if (type === 'withdrawal') {
      if (
        privateAgentsList?.data &&
        !privateAgentsList?.data?.last_payment_agent?.withdrawal
      ) {
        handleSelectedPaymentAgent(privateAgentsList?.data?.data[0]);
      } else {
        handleSelectedPaymentAgent(
          privateAgentsList?.data?.last_payment_agent?.withdrawal,
        );
      }
    } else if (
      privateAgentsList?.data &&
      !privateAgentsList?.data?.last_payment_agent?.deposit
    ) {
      handleSelectedPaymentAgent(privateAgentsList?.data?.data[0]);
    } else {
      handleSelectedPaymentAgent(
        privateAgentsList?.data?.last_payment_agent?.deposit,
      );
    }
  }, [privateAgentsList]);

  const handleAgentsChange = () => {
    setIsChange(true);
  };

  const handleShowMore = () => {
    openModal(() => <PaymentAgentModal {...selectedPaymentAgent} />);
  };

  const handleCopyToClipBoard = copyData => {
    window.navigator.clipboard.writeText(copyData);
    notification({
      type: 'success',
      timeOut: 2500,
      message: 'Phone number has been copied to clipboard',
    });
  };

  return (
    <div className="transfer-block">
      <div className="selected-agent">
        <div className="agent-avatar">
          {selectedPaymentAgent?.photo_path ? (
            <img src={selectedPaymentAgent?.photo_path} alt="" />
          ) : (
            <EmptyImage width="80px" height="80px" radius={20} textSize={12} />
          )}
        </div>
        <div className="selected-agent__info">
          <p className="block-title">
            {selectedPaymentAgent?.name} {selectedPaymentAgent?.surname}
          </p>
          <p className="selected-agent__info-rate">
            Commission Rate: {selectedPaymentAgent?.commission_rate}%
          </p>
          <div className="agent-phone">
            <button
              className="phone"
              type="button"
              onClick={() => handleCopyToClipBoard(selectedPaymentAgent?.phone)}
            >
              <span className="d-flex phone__icon">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00183 0.333984H6.9985C3.32266 0.333984 0.333496 3.32398 0.333496 7.00065C0.333496 8.45898 0.803496 9.81065 1.60266 10.9081L0.771829 13.3848L3.33433 12.5656C4.3885 13.264 5.646 13.6673 7.00183 13.6673C10.6777 13.6673 13.6668 10.6765 13.6668 7.00065C13.6668 3.32482 10.6777 0.333984 7.00183 0.333984Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M10.8806 9.74781C10.7198 10.202 10.0815 10.5786 9.5723 10.6886C9.22397 10.7628 8.76897 10.822 7.2373 10.187C5.27813 9.37531 4.01647 7.38448 3.91813 7.25531C3.82397 7.12615 3.12646 6.20115 3.12646 5.24448C3.12646 4.28781 3.6123 3.82198 3.80813 3.62198C3.96897 3.45781 4.2348 3.38281 4.4898 3.38281C4.5723 3.38281 4.64647 3.38698 4.71313 3.39031C4.90897 3.39865 5.0073 3.41031 5.13647 3.71948C5.2973 4.10698 5.68897 5.06365 5.73563 5.16198C5.78313 5.26031 5.83063 5.39365 5.76397 5.52281C5.70147 5.65615 5.64647 5.71531 5.54813 5.82865C5.4498 5.94198 5.35647 6.02865 5.25813 6.15031C5.16813 6.25615 5.06647 6.36948 5.1798 6.56531C5.29313 6.75698 5.6848 7.39615 6.26147 7.90948C7.00563 8.57198 7.60897 8.78365 7.8248 8.87365C7.98563 8.94031 8.1773 8.92448 8.2948 8.79948C8.44397 8.63865 8.62813 8.37198 8.81563 8.10948C8.94897 7.92115 9.1173 7.89781 9.29397 7.96448C9.47397 8.02698 10.4265 8.49781 10.6223 8.59531C10.8181 8.69365 10.9473 8.74031 10.9948 8.82281C11.0415 8.90531 11.0415 9.29281 10.8806 9.74781Z"
                    fill="#2DDD9D"
                  />
                </svg>
              </span>
              <p style={{ color: '#fff' }}>({selectedPaymentAgent?.phone})</p>
              <span className="d-flex copy__icon">
                <svg
                  className="fill"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4285 2.85693H1.71428C0.767509 2.85693 0 3.62444 0 4.57122V14.2855C0 15.2322 0.767509 15.9997 1.71428 15.9997H11.4285C12.3753 15.9997 13.1428 15.2322 13.1428 14.2855V4.57122C13.1428 3.62444 12.3753 2.85693 11.4285 2.85693Z"
                    fill="#e2fff4"
                  />
                  <path
                    d="M14.2856 1.10692e-09H3.99992C3.05828 -3.3481e-05 2.29288 0.759507 2.28564 1.70112C2.28564 1.70571 2.28564 1.70969 2.28564 1.71428H11.4285C13.0056 1.71616 14.2837 2.99423 14.2856 4.57141V13.7143C14.2902 13.7143 14.2942 13.7143 14.2988 13.7143C15.2404 13.707 15.9999 12.9416 15.9999 12V1.71428C15.9999 0.767509 15.2324 1.10692e-09 14.2856 1.10692e-09Z"
                    fill="#e2fff4"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="selected-agent__address">
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
            <p className="agent-address__value">
              {selectedPaymentAgent?.address}
            </p>
          </div>
        </div>
        <button className="agent-more" type="button" onClick={handleShowMore}>
          SHOW MORE
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
      {isChange ? (
        <PaymentAgentsTable
          selectedAgent={handleSelectedPaymentAgent}
          setChange={setIsChange}
        />
      ) : (
        <div className="form-submit">
          <button
            className="button button--regular"
            type="button"
            onClick={handleAgentsChange}
          >
            Change
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentAgent;
