import React from 'react';
import L from 'i18n-react';

const SuccessUploadImg = () => {
  return (
    <div className="d-flex profile-photo__status">
      <p className="status-item status-item--success">
        {L.translate(
          'Pages.Users.PaymentAgent.EditPaymentAgent.SuccessUploadImg.item1',
        )}
        <span className="d-flex status-item__icon status-item__icon--right">
          <svg
            className="fill"
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9986 1.07798C12.155 1.23426 12.2428 1.4462 12.2428 1.66718C12.2428 1.88815 12.155 2.10009 11.9986 2.25637L5.32601 8.92332C5.16959 9.07955 4.95748 9.16732 4.73631 9.16732C4.51515 9.16732 4.30303 9.07955 4.14662 8.92332L0.810307 5.58984C0.658373 5.43267 0.574303 5.22216 0.576203 5.00365C0.578104 4.78514 0.665823 4.57612 0.820468 4.42161C0.975113 4.2671 1.18431 4.17945 1.403 4.17755C1.6217 4.17566 1.83238 4.25965 1.98969 4.41146L4.73631 7.15574L10.8192 1.07798C10.9757 0.921751 11.1878 0.833984 11.4089 0.833984C11.6301 0.833984 11.8422 0.921751 11.9986 1.07798Z"
              fill="#3DD598"
            />
          </svg>
        </span>
      </p>
    </div>
  );
};

export default SuccessUploadImg;
