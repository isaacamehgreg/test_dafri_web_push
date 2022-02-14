import React from 'react';

import rateOneIcon from '../../../../../styles/img/rate1.png';
import rateTwoIcon from '../../../../../styles/img/rate2.png';
import rateThreeIcon from '../../../../../styles/img/rate3.png';
import rateFourIcon from '../../../../../styles/img/rate4.png';

const getRatingIcon = position => {
  switch (true) {
    case position === 1:
      return rateOneIcon;
    case position === 2:
      return rateTwoIcon;
    case position === 3:
      return rateThreeIcon;
    case position > 3 && position <= 10:
      return rateFourIcon;

    default:
      return '';
  }
};

const RatingsInfoItem = ({ position, email, quantity_referrals, profit }) => {
  return (
    <div className="tr ">
      <div className="td">
        <div className="td-hidden-name">E-mail</div>
        <div className="rated-item">
          <p className="rated-item__number">{position}</p>
          {position <= 10 && (
            <div className="d-flex rated-item__icon">
              <img src={getRatingIcon(position)} alt="" />
            </div>
          )}

          <p className="rated-item__value">{email}</p>
        </div>
      </div>
      <div className="td">
        <div className="td-hidden-name">Amount of money earned</div>
        <p className="table-value">$ {profit}</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">Referrals number</div>
        <p className="table-value">{quantity_referrals}</p>
      </div>
    </div>
  );
};

export default RatingsInfoItem;
