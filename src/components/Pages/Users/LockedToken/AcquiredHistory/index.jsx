import React from 'react';
import L from 'i18n-react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { walletSelector } from '../../../../../redux/wallets/selectors';
import AcquiredHistoryItem from '../AcquiredHistoryItem';

const AcquiredHistory = () => {
  const wallet = useSelector(walletSelector);
  const { dbaAnalysis } = wallet;
  const acquiredHistory = dbaAnalysis?.acquire?.history;

  return (
    <div className="transfer-history transfer-history--acquired">
      <p className="page-title">
        {L.translate('Pages.Users.LockedToken.AcquiredHistory.item1')}
      </p>
      <div className="table-box">
        <div className="table table--auto-td-height table--acquired-history">
          <div className="table-header">
            <div className="tr">
              <div className="td">
                <div className="td-name">
                  {L.translate('Pages.Users.LockedToken.AcquiredHistory.item2')}
                </div>
              </div>
              <div className="td">
                <div className="td-name">
                  {L.translate('Pages.Users.LockedToken.AcquiredHistory.item3')}{' '}
                  DBA
                </div>
              </div>
              <div className="td">
                <div className="td-name">
                  {L.translate('Pages.Users.LockedToken.AcquiredHistory.item4')}{' '}
                  $
                </div>
              </div>
              <div className="td">
                <div className="td-name">
                  {L.translate('Pages.Users.LockedToken.AcquiredHistory.item5')}
                </div>
              </div>
              <div className="td ">
                <div className="td-name">
                  {L.translate('Pages.Users.LockedToken.AcquiredHistory.item6')}
                </div>
              </div>
            </div>
          </div>
          <div className="table-body">
            {acquiredHistory?.length ? (
              acquiredHistory?.map((history, idx) => (
                <AcquiredHistoryItem key={uuidv4()} idx={idx} {...history} />
              ))
            ) : (
              <p style={{ textAlign: 'center', padding: '15px 0' }}>
                {L.translate('Pages.Users.LockedToken.AcquiredHistory.item7')}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcquiredHistory;
