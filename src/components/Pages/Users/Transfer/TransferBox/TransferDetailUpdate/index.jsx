import React from 'react';
import L from 'i18n-react';
import { killExponential, toCrop } from '../../../../../../services/helpers';

const TransferDetailUpdate = ({ rate, onUpdateRate }) => {
  return (
    <div className="transfer-detail">
      <p className="transfer-detail__name">
        {L.translate('Pages.Users.Transfer.PaymentAgent.item8')}
      </p>

      <div
        className="transfer-detail__value"
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
        }}
      >
        <span>{rate || '0'}</span>

        <div
          className="methods-row__icon"
          style={{
            position: 'static',
            transform: 'translate(0, 0)',
            width: '25px',
            height: '25px',
            cursor: 'pointer',
            marginLeft: '10px',
          }}
          title="Update conversion rate"
          onClick={onUpdateRate}
        >
          <svg
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: '17px',
              height: '17px',
            }}
          >
            <path
              d="M23.972 13.8126C23.8611 13.6829 23.7236 13.5786 23.5688 13.5069C23.414 13.4352 23.2456 13.3977 23.075 13.397H23.0279C22.7331 13.4006 22.4494 13.5098 22.2283 13.7049C22.0072 13.8999 21.8634 14.1677 21.8229 14.4597C21.5622 16.1599 20.8088 17.7464 19.6558 19.0228C18.5028 20.2993 17.0009 21.2097 15.3359 21.6414C13.5569 22.1164 11.6748 22.032 9.94541 21.3996C8.21605 20.7672 6.72341 19.6176 5.67044 18.107C5.62804 18.0461 5.60316 17.9747 5.5985 17.9006C5.59384 17.8265 5.60957 17.7525 5.64399 17.6867C5.67842 17.6209 5.73021 17.5658 5.79374 17.5274C5.85728 17.489 5.93013 17.4687 6.00437 17.4688H8.125C8.34049 17.4688 8.54715 17.3832 8.69952 17.2308C8.8519 17.0785 8.9375 16.8718 8.9375 16.6563C8.9375 16.4408 8.8519 16.2342 8.69952 16.0818C8.54715 15.9294 8.34049 15.8438 8.125 15.8438H1.625V22.3438C1.625 22.5593 1.7106 22.766 1.86298 22.9183C2.01535 23.0707 2.22201 23.1563 2.4375 23.1563C2.65299 23.1563 2.85965 23.0707 3.01202 22.9183C3.1644 22.766 3.25 22.5593 3.25 22.3438V20.1744C3.2501 20.0896 3.27675 20.007 3.32621 19.9381C3.37567 19.8691 3.44546 19.8174 3.52579 19.7902C3.60612 19.763 3.69296 19.7616 3.77413 19.7862C3.8553 19.8108 3.92673 19.8602 3.97841 19.9274C5.33386 21.6932 7.17763 23.0225 9.28124 23.7505C11.3848 24.4785 13.6558 24.5733 15.8128 24.0232C17.9698 23.473 19.9179 22.302 21.4158 20.6554C22.9137 19.0088 23.8956 16.9588 24.2397 14.7595C24.266 14.5917 24.2557 14.4202 24.2095 14.2568C24.1633 14.0933 24.0823 13.9418 23.972 13.8126Z"
              fill="white"
            />
            <path
              d="M17.8757 10.1562H24.3757V3.65625C24.3757 3.44076 24.2901 3.23409 24.1377 3.08172C23.9854 2.92935 23.7787 2.84375 23.5632 2.84375C23.3477 2.84375 23.1411 2.92935 22.9887 3.08172C22.8363 3.23409 22.7507 3.44076 22.7507 3.65625V5.82562C22.7506 5.91044 22.7239 5.9931 22.6745 6.06201C22.625 6.13092 22.5552 6.18262 22.4749 6.20986C22.3946 6.2371 22.3077 6.23851 22.2266 6.2139C22.1454 6.18929 22.074 6.13988 22.0223 6.07262C20.6698 4.31057 18.8311 2.98305 16.7329 2.25389C14.6348 1.52472 12.369 1.42581 10.2153 1.96937C8.06159 2.51293 6.11414 3.67517 4.61328 5.31267C3.11243 6.95016 2.12384 8.99125 1.76952 11.1841C1.7423 11.3583 1.75314 11.5363 1.80128 11.706C1.84943 11.8756 1.93375 12.0328 2.04844 12.1668C2.16313 12.3007 2.30547 12.4083 2.46568 12.482C2.62588 12.5557 2.80014 12.5938 2.97649 12.5937C3.26965 12.5908 3.55212 12.4832 3.77302 12.2905C3.99393 12.0977 4.13876 11.8324 4.18142 11.5424C4.47082 9.78844 5.27684 8.1607 6.49638 6.86735C7.71593 5.574 9.29355 4.67384 11.0275 4.28201C12.7614 3.89017 14.5728 4.02447 16.23 4.66773C17.8872 5.31099 19.3148 6.43397 20.3303 7.89303C20.3727 7.95398 20.3975 8.02539 20.4022 8.09949C20.4069 8.17359 20.3911 8.24755 20.3567 8.31334C20.3223 8.37912 20.2705 8.43422 20.207 8.47264C20.1434 8.51105 20.0706 8.53132 19.9963 8.53125H17.8757C17.6602 8.53125 17.4536 8.61685 17.3012 8.76922C17.1488 8.9216 17.0632 9.12826 17.0632 9.34375C17.0632 9.55923 17.1488 9.7659 17.3012 9.91827C17.4536 10.0706 17.6602 10.1562 17.8757 10.1562Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TransferDetailUpdate;
