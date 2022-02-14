import React from 'react';
import L from 'i18n-react';
import moment from 'moment';
import deleteIcon from '../../../../../../styles/img/delete.svg';

const DeviceRow = ({ id, device, location, time, ip, onDelete }) => {
  const date = new Date(time * 1000);
  const formattedTime = moment(date).format('YYYY/MM/DD/HH:mm:ss');

  return (
    <div className="tr">
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.BalanceDetails.Devices.DeviceRow.item1')}
        </div>
        <p className="table-value">{device}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.BalanceDetails.Devices.DeviceRow.item2')}
        </div>
        <p className="table-value">{location || 'N/A'}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.BalanceDetails.Devices.DeviceRow.item3')}
        </div>
        <p>{formattedTime}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.BalanceDetails.Devices.DeviceRow.item4')}
        </div>
        <p>{ip || 'N/A'}</p>
      </div>

      <div className="td td--center">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.BalanceDetails.Devices.DeviceRow.item5')}
        </div>
        <div className="table-action">
          <button
            className="action-btn"
            type="button"
            onClick={() => onDelete(id)}
          >
            <img src={deleteIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceRow;
