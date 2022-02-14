import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import L from 'i18n-react';
import types from '../../../../../redux/types';
import { affiliateSelector } from '../../../../../redux/users/affiliate/selectors';

const ReferralAccountInfo = () => {
  const dispatch = useDispatch();
  const affiliate = useSelector(affiliateSelector);
  const { info } = affiliate;

  useEffect(() => {
    dispatch({
      type: types.GET_REFERRAL_INFO_START,
    });
  }, [dispatch]);

  return (
    <div className="affiliate-box__col">
      <p className="block-title">
        {L.translate('Pages.Users.Affiliate.ReferralAccountInfo.item1')}
      </p>
      <div className="total-info-box">
        <div className="total-info">
          <p className="total-info__name">
            {L.translate('Pages.Users.Affiliate.ReferralAccountInfo.item2')}
          </p>
          <div className="total-info__value">
            <p>{info?.commission_rate}%</p>
          </div>
        </div>
        <div className="total-info">
          <p className="total-info__name">
            {L.translate('Pages.Users.Affiliate.ReferralAccountInfo.item3')}
          </p>
          <div className="total-info__value">
            <p>{info?.earned_DBA} DBA</p>
          </div>
        </div>
        <div className="total-info">
          <p className="total-info__name">
            {L.translate('Pages.Users.Affiliate.ReferralAccountInfo.item4')}
          </p>
          <div className="total-info__value">
            <p>{info?.total_number_of_friends}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralAccountInfo;
