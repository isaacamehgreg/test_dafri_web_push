import React from 'react';
import L from 'i18n-react';

const TableHead = () => {
  return (
    <div className="table-header">
      <div className="tr">
        <div className="td">
          <div className="td-name">
            {L.translate(
              'Pages.Users.Affiliate.CommissionHistory.TableHead.item1',
            )}
          </div>
        </div>
        <div className="td">
          <div className="td-name">
            {L.translate(
              'Pages.Users.Affiliate.CommissionHistory.TableHead.item2',
            )}
          </div>
        </div>
        <div className="td">
          <div className="td-name">
            {L.translate(
              'Pages.Users.Affiliate.CommissionHistory.TableHead.item3',
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHead;
