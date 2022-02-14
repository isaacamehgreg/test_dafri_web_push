import React from 'react';
import L from 'i18n-react';

const Memo = () => {
  return (
    <div className="transfer-memo">
      <p className="block-title block-title--small">
        {L.translate('Pages.Users.Deposit.Memo.item1')}
      </p>

      <div className="memo">
        <p className="memo__val">103538750</p>
        <button className="copy">
          {L.translate('Pages.Users.Deposit.Memo.item2')}
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
                fill="#D7CFFF"
              />
              <path
                d="M14.2856 1.10692e-09H3.99992C3.05828 -3.3481e-05 2.29288 0.759507 2.28564 1.70112C2.28564 1.70571 2.28564 1.70969 2.28564 1.71428H11.4285C13.0056 1.71616 14.2837 2.99423 14.2856 4.57141V13.7143C14.2902 13.7143 14.2942 13.7143 14.2988 13.7143C15.2404 13.707 15.9999 12.9416 15.9999 12V1.71428C15.9999 0.767509 15.2324 1.10692e-09 14.2856 1.10692e-09Z"
                fill="#D7CFFF"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Memo;
