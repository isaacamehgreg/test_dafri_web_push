import React from 'react';
import L from 'i18n-react';
import MarketsItem from '../MarketsItem';
import SocketMarkets from '../../../../HOC/SocketMarkets';

const MarketsTable = ({ data }) => {
  return (
    <>
      <SocketMarkets />
      <ul className="list-group coin-list">
        <li className="list-group-item head d-sm-none d-md-block">
          <div className="row g-0">
            <div className="col col-md-4">
              <strong>
                {L.translate('Pages.Statics.NewHomePage.MarketsTable.item1')}
              </strong>
            </div>

            <div className="col col-md-4">
              <strong>
                {L.translate('Pages.Statics.NewHomePage.MarketsTable.item2')}
              </strong>
            </div>

            <div className="col">
              <strong>
                {L.translate('Pages.Statics.NewHomePage.MarketsTable.item3')}
              </strong>
            </div>

            <div className="col">
              <strong>
                {L.translate('Pages.Statics.NewHomePage.MarketsTable.item4')}
              </strong>
            </div>
          </div>
        </li>

        {data &&
          data.length &&
          data.map((item, i) => (
            <MarketsItem key={i + item.last_price} {...item} />
          ))}
      </ul>
    </>
  );
};

export default MarketsTable;
