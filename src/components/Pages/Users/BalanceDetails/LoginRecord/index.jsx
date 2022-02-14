import React, { useEffect } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { settingsSelector } from '../../../../../redux/users/settings/selectors';
import types from '../../../../../redux/types';
import LoginTableRow from './TableRow';
import EmptyTable from '../../../../Base/EmptyTable';

const LoginRecord = () => {
  const dispatch = useDispatch();
  const settings = useSelector(settingsSelector);
  const loginData = settings.loginRecords?.data;

  useEffect(() => {
    dispatch({ type: types.GET_LOGIN_RECORDS_START });
  }, [dispatch]);

  return (
    <div className="dashboard-col dashboard-col--login-record">
      <div className="profile-block">
        <div className="block-header">
          <p className="block-title">
            {L.translate('Pages.Users.BalanceDetails.LoginRecord.item1')}
          </p>
        </div>

        <div className="profile-block__content">
          <div className="table-box">
            <div className="table table--login-record">
              <div className="table-header">
                <div className="tr">
                  <div className="td">
                    <div className="td-name">
                      {L.translate(
                        'Pages.Users.BalanceDetails.LoginRecord.item2',
                      )}
                    </div>
                  </div>
                  <div className="td">
                    <div className="td-name">
                      {L.translate(
                        'Pages.Users.BalanceDetails.LoginRecord.item3',
                      )}
                    </div>
                  </div>
                  <div className="td">
                    <div className="td-name">
                      {L.translate(
                        'Pages.Users.BalanceDetails.LoginRecord.item4',
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-body">
                {loginData && loginData.length ? (
                  loginData.map(item => (
                    <LoginTableRow
                      key={uuidv4()}
                      date={item.created_at}
                      ip={item.ip}
                      location={item.country}
                    />
                  ))
                ) : (
                  <EmptyTable
                    text={L.translate(
                      'Pages.Users.BalanceDetails.LoginRecord.item5',
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

export default LoginRecord;
