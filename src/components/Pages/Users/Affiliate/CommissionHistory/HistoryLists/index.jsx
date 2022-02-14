import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import L from 'i18n-react';
import { v4 as uuidv4 } from 'uuid';
import usePrevious from '../../../../../../hooks/usePrevious';
import types from '../../../../../../redux/types';
import { affiliateSelector } from '../../../../../../redux/users/affiliate/selectors';
import InfiniteScrollList from '../../../../../Base/InfiniteScrollList';
import HistoryItem from '../HistoryItem';

const nothingToShowStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '75px',
};

const HistoryLists = ({ type, currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const affiliate = useSelector(affiliateSelector);

  const { referralDeductionList } = affiliate;
  const [data, setData] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const prevType = usePrevious(type);

  const referralDeductionListLastPage = referralDeductionList[type]?.last_page;

  useEffect(() => {
    if (prevType !== type) {
      setData([]);
      setHasMoreItems(true);

      dispatch({
        type: types.CLEAR_LIST_REFERRAL_DEDUCTIONS,
      });
    }

    dispatch({
      type: types.GET_LIST_REFERRAL_DEDUCTIONS_START,
      payload: {
        params: {
          type,
          current_page: currentPage,
          per_page: 9,
        },
      },
    });
  }, [type, currentPage]);

  useEffect(() => {
    if (
      referralDeductionList[type] &&
      referralDeductionList[type]?.data?.length
    ) {
      setData(prev => [...prev, ...referralDeductionList[type]?.data]);
    }
  }, [referralDeductionList, type]);

  const handleNextData = () => {
    if (referralDeductionListLastPage) {
      if (currentPage === referralDeductionListLastPage) {
        setHasMoreItems(false);
        return;
      }

      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="table-body">
      <InfiniteScrollList
        data={data}
        handleNext={handleNextData}
        hasMore={hasMoreItems}
        parentRef={`commision-history-${type}-component-table`}
      >
        {data.length ? (
          data?.map(referral => (
            <HistoryItem key={uuidv4()} referral={referral} />
          ))
        ) : (
          <div className="nothing-to-show" style={nothingToShowStyles}>
            {L.translate(
              'Pages.Users.Affiliate.CommissionHistory.HistoryLists.item1',
            )}
          </div>
        )}
      </InfiniteScrollList>
    </div>
  );
};

export default HistoryLists;
