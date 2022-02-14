import React from 'react';

function PercentButtons({ countOrder, percentButtonCountValue }) {
  return (
    <div className="quick-place">
      <button
        className="quick-place__btn"
        onClick={countOrder}
        value={percentButtonCountValue(0.25)}
      >
        25%
      </button>
      <button
        className="quick-place__btn"
        onClick={countOrder}
        value={percentButtonCountValue(0.5)}
      >
        50%
      </button>
      <button
        className="quick-place__btn"
        onClick={countOrder}
        value={percentButtonCountValue(0.75)}
      >
        75%
      </button>
      <button
        className="quick-place__btn"
        onClick={countOrder}
        value={percentButtonCountValue(1)}
      >
        100%
      </button>
    </div>
  );
}

export default PercentButtons;
