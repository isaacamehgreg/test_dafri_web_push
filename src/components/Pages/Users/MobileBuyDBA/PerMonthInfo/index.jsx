import React from 'react';
import L from 'i18n-react';

const PerMonthInfo = ({ stoList }) => {
  const half = Math.ceil(stoList?.length / 2) || 0;

  const firstHalf = stoList?.slice(0, half);
  const secondHalf = stoList?.slice(half);
  return (
    <div className="per-month-info">
      <div className="row">
        <div className="col-lg-6">
          {firstHalf?.length
            ? firstHalf?.map(item => (
                <div className="per-month" key={item?.stage + item?.price}>
                  <p>
                    {L.translate('Pages.Users.MobileBuyDBA.PerMonthInfo.item1')}{' '}
                    {item?.stage}
                  </p>
                  <p className="per-month__value">
                    ${item?.price}{' '}
                    {L.translate('Pages.Users.MobileBuyDBA.PerMonthInfo.item2')}
                  </p>
                </div>
              ))
            : null}
        </div>
        <div className="col-lg-6">
          {secondHalf?.length
            ? secondHalf?.map(item => (
                <div className="per-month" key={item?.stage + item?.price}>
                  <p>
                    {L.translate('Pages.Users.MobileBuyDBA.PerMonthInfo.item1')}{' '}
                    {item?.stage}
                  </p>
                  <p className="per-month__value">
                    ${item?.price}{' '}
                    {L.translate('Pages.Users.MobileBuyDBA.PerMonthInfo.item2')}
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default PerMonthInfo;
