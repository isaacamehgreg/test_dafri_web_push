import React from 'react';

const ComanyItem = ({ img }) => {
  return (
    <div className="companies-col">
      <div className="company">
        <div className="company__img">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ComanyItem;
