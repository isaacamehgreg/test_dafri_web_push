import React from 'react';
import L from 'i18n-react';
import EmptyTable from '../../../../Base/EmptyTable';
import Loader from '../../../../Base/Loader';
import { LockedIcon, SuccessIcon } from '../../LockedToken/StatusIcons';

const STOOverviewTable = ({ stoList, loading }) => {
  return (
    <div className="table-body">
      {loading && <Loader />}
      {stoList?.length ? (
        stoList?.map(item => (
          <div className="tr" key={item?.stage + item?.price}>
            <div className="td">
              <div className="td-hidden-name">
                {L.translate('Pages.Users.MobileBuyDBA.STOOverviewTable.item1')}
              </div>
              <p className="table-value">
                {L.translate('Pages.Users.MobileBuyDBA.STOOverviewTable.item1')}{' '}
                {item?.stage}
              </p>
            </div>
            <div className="td">
              <div className="td-hidden-name">
                {L.translate('Pages.Users.MobileBuyDBA.STOOverviewTable.item2')}
              </div>
              <p className="table-value">$ {item?.price}</p>
            </div>
            <div className="td">
              <div className="td-hidden-name">
                {L.translate('Pages.Users.MobileBuyDBA.STOOverviewTable.item3')}
              </div>
              <p className="table-value">{item?.quantity} DBA</p>
            </div>
            <div className="td">
              <div className="td-hidden-name">
                {L.translate('Pages.Users.MobileBuyDBA.STOOverviewTable.item4')}
              </div>
              <p className="table-value red">{item?.quantity_sold} DBA</p>
            </div>
            <div className="td">
              <div className="td-hidden-name">
                {L.translate('Pages.Users.MobileBuyDBA.STOOverviewTable.item5')}
              </div>
              {item?.status === 'active' && (
                <SuccessIcon status={item?.status} />
              )}
              {item?.status === 'locked' && (
                <LockedIcon status={item?.status} />
              )}
            </div>
          </div>
        ))
      ) : (
        <EmptyTable
          text={L.translate('Pages.Users.MobileBuyDBA.STOOverviewTable.item6')}
        />
      )}
    </div>
  );
};

export default STOOverviewTable;
