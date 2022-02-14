import React from 'react';
import L from 'i18n-react';

const UploadBtn = ({ setBlob }) => {
  return (
    <div className="upload-btn">
      <input
        type="file"
        className="upload-btn__file"
        accept="image/png, image/jpeg"
        onChange={e => setBlob(e)}
      />

      <p className="d-flex upload-btn__text">
        {L.translate(
          'Pages.Users.PaymentAgent.EditPaymentAgent.UploadBtn.item1',
        )}
        <span className="d-flex upload-btn__text-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 18.75C20 19.4404 19.4404 20 18.75 20H1.25C0.559649 20 0 19.4404 0 18.75C0 18.0596 0.559649 17.5 1.25 17.5H18.75C19.4404 17.5 20 18.0596 20 18.75ZM9.11613 14.7902C9.36024 15.0343 9.68008 15.1563 10 15.1563C10.3198 15.1563 10.6398 15.0342 10.8839 14.7902L15.3127 10.3614C15.8009 9.8732 15.8009 9.08176 15.3127 8.59359C14.8245 8.10543 14.0331 8.10543 13.5449 8.59359L11.25 10.8885V1.25C11.25 0.559648 10.6904 0 10 0C9.30965 0 8.75 0.559648 8.75 1.25V10.8885L6.45508 8.59359C5.96692 8.10543 5.17547 8.10543 4.68731 8.59359C4.19914 9.08176 4.19914 9.8732 4.68731 10.3614L9.11613 14.7902Z"
              fill="white"
            />
          </svg>
        </span>
      </p>
    </div>
  );
};

export default UploadBtn;
