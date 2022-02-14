import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScrollList from '../../../../../Base/InfiniteScrollList';
import TableItem from './TableItem';
import EmptyTable from '../../../../../Base/EmptyTable';
import types from '../../../../../../redux/types';

const AgentsTable = ({ agentsList, onSelectAgent, selectedId, tableRef }) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const paymentAgentsLastPage = agentsList?.last_page;

  useEffect(() => {
    dispatch({
      type: types.GET_PUBLIC_PAYMENT_AGENTS_LIST_START,
      payload: {
        params: {
          current_page: currentPage,
          per_page: 10,
        },
      },
    });
  }, [currentPage]);

  const handleNextData = () => {
    if (paymentAgentsLastPage) {
      if (currentPage === paymentAgentsLastPage) {
        setHasMoreItems(false);
        return;
      }

      setCurrentPage(currentPage + 1);
    }
  };

  const handleSelectAgent = id => {
    onSelectAgent(...agentsList?.data?.filter(agent => agent.id === id));
  };

  return (
    <div className="table table--mob-scroll table--agent-list table--auto-td-height">
      <div className="table-header">
        <div className="tr">
          <div className="td">
            <div className="td-name">
              {L.translate(
                'Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.item1',
              )}
            </div>
          </div>

          <div className="td">
            <div className="td-name">
              {L.translate(
                'Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.item2',
              )}
            </div>
          </div>

          <div className="td">
            <div className="td-name">
              {L.translate(
                'Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.item3',
              )}
            </div>
          </div>

          <div className="td">
            <div className="td-name">
              {L.translate(
                'Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.item4',
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="table-body">
        <InfiniteScrollList
          data={agentsList?.data || []}
          handleNext={handleNextData}
          hasMore={hasMoreItems}
          parentRef={tableRef}
        >
          {agentsList?.data && agentsList?.data?.length ? (
            agentsList?.data.map(item => (
              <TableItem
                key={item.id}
                onClick={handleSelectAgent}
                selectedId={selectedId}
                {...item}
              />
            ))
          ) : (
            <EmptyTable
              text={L.translate(
                'Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.item5',
              )}
            />
          )}
        </InfiniteScrollList>
      </div>
    </div>
  );
};

export default AgentsTable;
