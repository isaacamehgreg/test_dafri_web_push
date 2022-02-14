import React from 'react';
import L from 'i18n-react';
import moment from 'moment';

const LoginTableRow = ({ date, ip, location }) => {
  const dates = new Date(date * 1000);
  const [day, time] = moment(dates).format('YYYY/MM/DD HH:mm:ss').split(' ');

  return (
    <div className="tr">
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.BalanceDetails.LoginRecord.TableRow.item1')}
        </div>
        <p className="table-value">
          {day} <br /> {time}
        </p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.BalanceDetails.LoginRecord.TableRow.item2')}
        </div>
        <p>{ip}</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.BalanceDetails.LoginRecord.TableRow.item3')}
        </div>
        <p className="table-value">{location}</p>
      </div>
    </div>
  );
};

export default LoginTableRow;
