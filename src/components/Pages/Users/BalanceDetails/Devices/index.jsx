import React, { useEffect } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { settingsSelector } from '../../../../../redux/users/settings/selectors';
import types from '../../../../../redux/types';
import DeviceRow from './DeviceRow';
import EmptyTable from '../../../../Base/EmptyTable';

const Devices = () => {
  const dispatch = useDispatch();
  const settings = useSelector(settingsSelector);
  const deviceState = settings?.devices;

  const handleDelete = id =>
    dispatch({ type: types.DELETE_DEVICES_LIST_START, payload: id });

  useEffect(() => {
    dispatch({ type: types.GET_DEVICES_LIST_START });
  }, [dispatch]);

  return (
    <div className="dashboard-col dashboard-col--devices">
      <div className="profile-block">
        <div className="block-header">
          <p className="block-title">
            {L.translate('Pages.Users.BalanceDetails.Devices.item1')}
          </p>
          <div className="block-header__warning">
            <p className="highlight-label">
              {L.translate('Pages.Users.BalanceDetails.Devices.item2')}
            </p>
          </div>
        </div>
        <div className="profile-block__content">
          <div className="table-box">
            <div className="table table--devices">
              <div className="table-header">
                <div className="tr">
                  <div className="td">
                    <div className="td-name">
                      {L.translate('Pages.Users.BalanceDetails.Devices.item3')}
                    </div>
                  </div>
                  <div className="td">
                    <div className="td-name">
                      {L.translate('Pages.Users.BalanceDetails.Devices.item4')}
                    </div>
                  </div>
                  <div className="td">
                    <div className="td-name">
                      {L.translate('Pages.Users.BalanceDetails.Devices.item5')}
                    </div>
                  </div>
                  <div className="td">
                    <div className="td-name">
                      {L.translate('Pages.Users.BalanceDetails.Devices.item6')}
                    </div>
                  </div>
                  <div className="td td--center">
                    <div className="td-name">
                      {L.translate('Pages.Users.BalanceDetails.Devices.item7')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-body">
                {deviceState && deviceState.length ? (
                  deviceState.map(item => (
                    <DeviceRow
                      key={uuidv4()}
                      id={item.id}
                      device={item.last_login?.device}
                      location={item.last_login?.country}
                      time={item.last_login?.created_at}
                      ip={item.last_login?.ip}
                      onDelete={handleDelete}
                    />
                  ))
                ) : (
                  <EmptyTable
                    text={L.translate(
                      'Pages.Users.BalanceDetails.Devices.item8',
                    )}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
