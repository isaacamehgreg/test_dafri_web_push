import React from 'react';

const NextBtn = ({ btnRef }) => {
  return (
    <button
      className="slider-arrow slider-arrow--next"
      type="button"
      ref={btnRef}
    >
      <svg
        className="stroke"
        width="29"
        height="49"
        viewBox="0 0 29 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L27 25.2258L2 47"
          stroke="#969696"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default NextBtn;
