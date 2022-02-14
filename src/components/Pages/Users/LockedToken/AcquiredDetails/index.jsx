import React from 'react';
import L from 'i18n-react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { walletSelector } from '../../../../../redux/wallets/selectors';
import AcquiredDetailsItem from '../AcquiredDetailsItem';

const AcquiredDetails = () => {
  const wallet = useSelector(walletSelector);
  const { dbaAnalysis } = wallet;
  const acquiredDetails = dbaAnalysis?.acquire?.details;

  return (
    <div className="transfer-history transfer-history--acquired">
      <p className="page-title">
        {L.translate('Pages.Users.LockedToken.AcquiredDetails.item1')}
      </p>
      <div className="table-box">
        <div className="table table--auto-td-height table--acquired-details">
          <div className="table-header">
            <div className="tr">
              <div className="td">
                <div className="td-name">
                  {L.translate('Pages.Users.LockedToken.AcquiredDetails.item2')}
                </div>
              </div>
              <div className="td">
                <div className="td-name">
                  {L.translate('Pages.Users.LockedToken.AcquiredDetails.item3')}
                </div>
              </div>
              <div className="td">
                <div className="td-name">
                  {L.translate('Pages.Users.LockedToken.AcquiredDetails.item4')}{' '}
                  $
                </div>
              </div>

              <div className="td ">
                <div className="td-name">
                  {L.translate('Pages.Users.LockedToken.AcquiredDetails.item5')}
                </div>
              </div>
            </div>
          </div>
          <div className="table-body">
            {acquiredDetails?.length ? (
              acquiredDetails?.map((detail, idx) => (
                <AcquiredDetailsItem key={uuidv4()} idx={idx} {...detail} />
              ))
            ) : (
              <p style={{ textAlign: 'center', padding: '15px 0' }}>
                {L.translate('Pages.Users.LockedToken.AcquiredDetails.item6')}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcquiredDetails;
