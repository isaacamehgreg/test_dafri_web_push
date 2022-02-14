import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import L from 'i18n-react';
import types from '../../../../../redux/types';
import Switcher from '../Switcher';
import HistoryLists from './HistoryLists';
import TableHead from './TableHead';

const CommissionHistory = () => {
  const [currentTab, setCurrentTab] = useState('buy');
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const handleTab = e => {
    setCurrentTab(e.target.name);
    setCurrentPage(1);
  };

  useEffect(() => {
    return () => {
      dispatch({
        type: types.CLEAR_LIST_REFERRAL_DEDUCTIONS,
      });
    };
  }, []);

  return (
    <section className="page-section">
      <div className="custom-container">
        <p className="section-title section-title--center">
          {L.translate('Pages.Users.Affiliate.CommissionHistory.item1')}
        </p>
        <div className="affiliate-commission-wrap">
          <Switcher currentTab={currentTab} handleTab={handleTab} />

          <div className="commission-history-wrap">
            <div
              className="commission-history"
              id={`commision-history-${currentTab}-component-table`}
            >
              <div className="table table--auto-td-height table--affiliate-commission">
                <TableHead />
                <HistoryLists
                  type={currentTab}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommissionHistory;
