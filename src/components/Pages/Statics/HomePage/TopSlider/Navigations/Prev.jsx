import React from 'react';

const PrevBtn = ({ btnRef }) => {
  return (
    <button
      className="slider-arrow slider-arrow--prev"
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
          d="M27 47L2 23.7742L27 2"
          stroke="#969696"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default PrevBtn;
