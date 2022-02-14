import React from 'react';
import { useDispatch } from 'react-redux';
import types from '../../../../../redux/types';
import { closeModal } from '../../../Modal';

const PaymentAgentWithdraw = ({ id, pagination }) => {
  const dispatch = useDispatch();

  const handleReject = () => {
    dispatch({
      type: types.UPDATE_PAYMENT_AGENT_WITHDRAWAL_STATUS_START,
      payload: {
        id,
        operation_status: 'rejected',
        pagination,
      },
    });
  };

  const handleApprove = () => {
    dispatch({
      type: types.UPDATE_PAYMENT_AGENT_WITHDRAWAL_STATUS_START,
      payload: {
        id,
        operation_status: 'confirmed',
        pagination,
      },
    });
  };

  return (
    <div className=" modal">
      <button className="close-modal" type="button" onClick={closeModal}>
        <svg
          className="fill"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.72431 0.281387C1.53527 0.0987908 1.28208 -0.00224601 1.01927 3.78936e-05C0.756455 0.00232179 0.505056 0.107744 0.319214 0.293598C0.133373 0.479452 0.0279575 0.730868 0.0256738 0.993696C0.02339 1.25652 0.12442 1.50973 0.307004 1.69879L6.09551 7.48768L0.306002 13.2766C0.210268 13.369 0.133908 13.4797 0.0813763 13.602C0.0288447 13.7243 0.00119436 13.8558 3.78454e-05 13.9889C-0.00111867 14.122 0.024242 14.254 0.0746405 14.3772C0.125039 14.5004 0.199466 14.6123 0.293578 14.7064C0.38769 14.8005 0.499604 14.875 0.622787 14.9254C0.745971 14.9758 0.877958 15.0011 1.01105 15C1.14414 14.9988 1.27567 14.9712 1.39795 14.9186C1.52024 14.8661 1.63085 14.7897 1.72331 14.694L7.51282 8.90508L13.3013 14.694C13.4904 14.8766 13.7436 14.9776 14.0064 14.9753C14.2692 14.973 14.5206 14.8676 14.7064 14.6818C14.8923 14.4959 14.9977 14.2445 15 13.9817C15.0022 13.7188 14.9012 13.4656 14.7186 13.2766L8.93013 7.48768L14.7186 1.69879C14.9012 1.50973 15.0022 1.25652 15 0.993696C14.9977 0.730868 14.8923 0.479452 14.7064 0.293598C14.5206 0.107744 14.2692 0.00232179 14.0064 3.78936e-05C13.7436 -0.00224601 13.4904 0.0987908 13.3013 0.281387L7.51282 6.07028L1.72431 0.280385V0.281387Z"
            fill="black"
          />
        </svg>
      </button>
      <div className="modal-header">
        <div className="modal-logo">
          <img src="./dist/img/dark-logo.svg" alt="" />
        </div>
      </div>
      <div className="modal-body">
        <div className="modal-text modal-text--type2 ">
          <p>
            This action cannot be reversed, are you sure you want to do this?
          </p>
        </div>
        <div className="form-submit  ">
          <button
            className="button button--big  button--big--round button--sb button--fixed-width1 button--reject"
            type="button"
            onClick={handleReject}
          >
            Reject
            <span className="button-icon">
              <svg
                className="fill"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.341241 0.35617C0.559803 0.137454 0.856198 0.0145854 1.16524 0.0145854C1.47429 0.0145854 1.77069 0.137454 1.98925 0.35617L6.99271 5.36467L11.9962 0.35617C12.1037 0.244741 12.2323 0.155862 12.3745 0.094718C12.5167 0.0335742 12.6696 0.00139017 12.8244 4.40499e-05C12.9791 -0.00130207 13.1326 0.0282163 13.2758 0.0868774C13.4191 0.145538 13.5492 0.232167 13.6586 0.341709C13.7681 0.45125 13.8546 0.581511 13.9132 0.72489C13.9718 0.868269 14.0013 1.0219 14 1.1768C13.9986 1.33171 13.9665 1.4848 13.9054 1.62714C13.8443 1.76948 13.7555 1.89821 13.6442 2.00584L8.64072 7.01434L13.6442 12.0228C13.8565 12.2429 13.974 12.5376 13.9713 12.8435C13.9687 13.1494 13.8461 13.442 13.63 13.6583C13.4139 13.8746 13.1216 13.9973 12.816 14C12.5104 14.0026 12.216 13.885 11.9962 13.6725L6.99271 8.664L1.98925 13.6725C1.76943 13.885 1.47503 14.0026 1.16944 14C0.86385 13.9973 0.57153 13.8746 0.355438 13.6583C0.139346 13.442 0.0167721 13.1494 0.0141166 12.8435C0.0114611 12.5376 0.128937 12.2429 0.341241 12.0228L5.34471 7.01434L0.341241 2.00584C0.122745 1.78705 0 1.49036 0 1.181C0 0.871645 0.122745 0.574952 0.341241 0.35617V0.35617Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
          <button
            className="button  button--big  button--big--round button--sb button--fixed-width1 button--submit"
            type="button"
            onClick={handleApprove}
          >
            Confirm
            <span className="button-icon">
              <svg
                className="fill"
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.6651 0.351359C15.8795 0.576402 16 0.881584 16 1.1998C16 1.51801 15.8795 1.82319 15.6651 2.04823L6.51406 11.6486C6.29955 11.8736 6.00865 12 5.70534 12C5.40202 12 5.11112 11.8736 4.89662 11.6486L0.3211 6.84844C0.112733 6.6221 -0.00256299 6.31897 4.32416e-05 6.00432C0.00264948 5.68967 0.12295 5.38868 0.335034 5.16618C0.547119 4.94368 0.834018 4.81748 1.13394 4.81474C1.43386 4.81201 1.72281 4.93297 1.93854 5.15156L5.70534 9.10333L14.0476 0.351359C14.2622 0.126384 14.553 0 14.8564 0C15.1597 0 15.4506 0.126384 15.6651 0.351359Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentAgentWithdraw;
