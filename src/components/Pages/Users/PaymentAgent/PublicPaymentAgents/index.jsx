import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AgentsTable from './AgentsTable';
import AgentCard from './AgentCard';
import {
  dataUserSelector,
  tokenSelector,
} from '../../../../../redux/auth/selectors';
import {
  paymentAgentsListSelector,
  paymentAgentsLoadingSelector,
} from '../../../../../redux/paymentAgent/selectors';
import types from '../../../../../redux/types';
import routes from '../../../../../routes';

import agentLine from '../../../../../styles/img/agennt-line.svg';

const PublicPaymentAgents = () => {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const userData = useSelector(dataUserSelector);
  const agentsList = useSelector(paymentAgentsListSelector);

  const refID = 'payment-table';

  const [selectedAgent, setSelectedAgent] = useState(null);

  useEffect(() => {
    setSelectedAgent(agentsList?.data[0]);
  }, [agentsList]);

  useEffect(() => {
    return () => {
      dispatch({
        type: types.CLEAR_ALL_PUBLIC_PAYMENT_AGENTS_LIST,
      });
    };
  }, []);

  return (
    <section className="public-agent-section">
      <div className="section-circle" />

      <div className="custom-container">
        <p className="section-title ">
          {L.translate('Pages.Users.PaymentAgent.PublicPaymentAgents.item1')}
        </p>

        <div className="section-content">
          <div className="public-agents">
            <div className="public-agents__list">
              <div className="table-box" id={refID}>
                <AgentsTable
                  agentsList={agentsList}
                  onSelectAgent={setSelectedAgent}
                  selectedId={selectedAgent?.id}
                  tableRef={refID}
                />
              </div>

              {token && !userData?.payment_agent && (
                <div className="form-extra">
                  <div className="form-line">
                    <img src={agentLine} alt="" />
                  </div>

                  <div className="form-hint">
                    <span className="d-flex  form-hint__icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="path-stroke"
                          d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z"
                          stroke="#9195A4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="path-stroke"
                          d="M11.125 11.125H12V17.25H12.875"
                          stroke="#9195A4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="path-fill"
                          d="M12 8.5C12.7249 8.5 13.3125 7.91237 13.3125 7.1875C13.3125 6.46263 12.7249 5.875 12 5.875C11.2751 5.875 10.6875 6.46263 10.6875 7.1875C10.6875 7.91237 11.2751 8.5 12 8.5Z"
                          fill="#9195A4"
                        />
                      </svg>
                    </span>
                    {L.translate(
                      'Pages.Users.PaymentAgent.PublicPaymentAgents.item2',
                    )}{' '}
                    -{' '}
                    <Link to={routes.Profile.PaymentAgentForm.path}>
                      {L.translate(
                        'Pages.Users.PaymentAgent.PublicPaymentAgents.item3',
                      )}
                    </Link>
                    .
                  </div>
                </div>
              )}
            </div>

            <AgentCard {...selectedAgent} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicPaymentAgents;
