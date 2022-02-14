import React from 'react';
import L from 'i18n-react';

const TableItem = props => {
  const { name, country, commission_rate, id, phone, onClick, selectedId } =
    props;
  return (
    <>
      <div
        className={`tr ${selectedId === id ? 'selected' : ''}`}
        onClick={() => onClick(id)}
      >
        <div className="td">
          <div className="td-hidden-name">
            {L.translate(
              'Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.TableItem.item1',
            )}
          </div>
          <p className="table-value">{name}</p>
        </div>

        <div className="td selected">
          <div className="td-hidden-name">
            {L.translate(
              'Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.TableItem.item2',
            )}
          </div>
          <p>{country}</p>
        </div>

        <div className="td">
          <div className="td-hidden-name">
            {L.translate(
              'Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.TableItem.item3',
            )}
          </div>
          <p className="table-value">{commission_rate}%</p>
        </div>

        <div className="td">
          <div className="td-hidden-name">
            {L.translate(
              'Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.TableItem.item4',
            )}
          </div>

          <p>{phone}</p>
        </div>
      </div>
    </>
  );
};

export default TableItem;
