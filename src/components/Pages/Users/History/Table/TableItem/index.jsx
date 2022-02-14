import React from 'react';
import L from 'i18n-react';
import moment from 'moment';
import classNames from 'classnames';
import notification from '../../../../../../services/notification';
// table-status--active, table-status--inprogress

const TableItem = props => {
  const { amount, asset_name, icon, information, status, created_at } = props;
  const [date, time] = moment(new Date(created_at * 1000)).isValid()
    ? moment(new Date(created_at * 1000))
        .format('YYYY/MM/DD HH:mm:ss')
        .split(' ')
    : ['', ''];

  const statusClass = classNames('table-status', {
    'table-status--active': status === 'confirmed',
    'table-status--inprogress': status === 'unconfirmed',
    'table-status--error': status === 'canceled' || status === 'error',
  });

  const handleCopy = () => {
    window.navigator.clipboard.writeText(information);

    notification({
      type: 'info',
      timeOut: 2500,
      message: 'Information has been copied',
    });
  };

  return (
    <div className="tr">
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.History.Table.TableItem.item1')}
        </div>
        <p>
          {date}
          <br />
          {time}
        </p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.History.Table.TableItem.item2')}
        </div>
        <p className={statusClass}>{status}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.History.Table.TableItem.item3')}
        </div>
        <div className="table-coin">
          <div className="table-coin__icon">
            <img src={icon} alt="" />
          </div>

          <p className="table-coin__name">{asset_name.toUpperCase()}</p>
        </div>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.History.Table.TableItem.item4')}
        </div>

        <p>{amount}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.History.Table.TableItem.item5')}
        </div>

        <div className="table-info">
          {information && (
            <button className="copy" type="button" onClick={handleCopy}>
              <span className="d-flex copy__icon">
                <svg
                  className="fill"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4285 2.85693H1.71428C0.767509 2.85693 0 3.62444 0 4.57122V14.2855C0 15.2322 0.767509 15.9997 1.71428 15.9997H11.4285C12.3753 15.9997 13.1428 15.2322 13.1428 14.2855V4.57122C13.1428 3.62444 12.3753 2.85693 11.4285 2.85693Z"
                    fill="#D7CFFF"
                  />
                  <path
                    d="M14.2856 1.10692e-09H3.99992C3.05828 -3.3481e-05 2.29288 0.759507 2.28564 1.70112C2.28564 1.70571 2.28564 1.70969 2.28564 1.71428H11.4285C13.0056 1.71616 14.2837 2.99423 14.2856 4.57141V13.7143C14.2902 13.7143 14.2942 13.7143 14.2988 13.7143C15.2404 13.707 15.9999 12.9416 15.9999 12V1.71428C15.9999 0.767509 15.2324 1.10692e-09 14.2856 1.10692e-09Z"
                    fill="#D7CFFF"
                  />
                </svg>
              </span>
            </button>
          )}

          <p>{information || '-'}</p>
        </div>
      </div>
    </div>
  );
};

export default TableItem;
