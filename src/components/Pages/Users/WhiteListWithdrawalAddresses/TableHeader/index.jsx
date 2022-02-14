import React from 'react';
import L from 'i18n-react';

const TableHeader = () => {
  return (
    <div className="table-header">
      <div className="tr">
        <div className="td">
          <div className="td-name">
            {L.translate(
              'Pages.Users.WhiteListWithdrawalAddresses.TableHeader.item1',
            )}
          </div>
        </div>
        <div className="td">
          <div className="td-name">
            {L.translate(
              'Pages.Users.WhiteListWithdrawalAddresses.TableHeader.item2',
            )}
          </div>
        </div>
        <div className="td">
          <div className="td-name">
            {L.translate(
              'Pages.Users.WhiteListWithdrawalAddresses.TableHeader.item3',
            )}
          </div>
        </div>
        <div className="td td--center">
          <div className="td-name" />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
