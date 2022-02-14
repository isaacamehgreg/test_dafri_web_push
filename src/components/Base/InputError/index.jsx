import React from 'react';

const InputError = ({ errorText, position = 'flex-start' }) => {
  return (
    <p
      className="error-text"
      style={{ display: 'flex', justifyContent: position }}
    >
      <span className="error-text__icon">
        <svg
          className="fill"
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5.74986V8.5M10 11.4999H10.009M3.79425 15H16.2057C17.5852 15 18.4469 13.5414 17.7572 12.375L11.5514 1.87479C10.8617 0.708402 9.13829 0.708402 8.44856 1.87479L2.24282 12.375C1.55309 13.5414 2.4148 15 3.79425 15Z"
            stroke="#FD5353"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{errorText}</span>
    </p>
  );
};

export default InputError;
