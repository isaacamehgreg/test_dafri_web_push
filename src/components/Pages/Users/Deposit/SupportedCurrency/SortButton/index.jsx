import React, { useState } from 'react';

const SortButton = ({ sort, order, toggleSort }) => {
  const [thisSort, setThisSort] = useState(sort?.sort || 'asc');

  const thisToggleSort = e => {
    if (e?.target?.dataset?.id !== 'search') {
      setThisSort(thisSort === 'asc' ? 'desc' : 'asc');
      toggleSort({ sort: thisSort === 'asc' ? 'desc' : 'asc', order });
    }
  };

  return (
    <div
      className="td-sort"
      onClick={thisToggleSort}
      data-order={order}
      data-sort={thisSort}
    >
      <button type="button">
        <svg
          className="fill"
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 0.857422L0 6.21456H10L5 0.857422Z" fill="#969696" />
        </svg>
      </button>

      <button type="button">
        <svg
          className="fill"
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 6.14307L10 0.785924L2.37568e-06 0.785924L5 6.14307Z"
            fill="#969696"
          />
        </svg>
      </button>
    </div>
  );
};

export default SortButton;
