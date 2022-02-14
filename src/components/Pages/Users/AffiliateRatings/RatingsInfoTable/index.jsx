import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import types from '../../../../../redux/types';
import { affiliateSelector } from '../../../../../redux/users/affiliate/selectors';
import notification from '../../../../../services/notification';
import EmptyTable from '../../../../Base/EmptyTable';
import InfiniteScrollList from '../../../../Base/InfiniteScrollList';
import Loader from '../../../../Base/Loader';
import RatingsInfoItem from '../RatingsInfoItem';

const RatingsInfoTable = ({ search, data, setData }) => {
  const dispatch = useDispatch();
  const affiliate = useSelector(affiliateSelector);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const { ratings, loading } = affiliate;

  const ratingsLastPage = ratings?.last_page;

  useEffect(() => {
    dispatch({
      type: types.GET_REFERRAL_RATINGS_START,
      payload: {
        params: {
          current_page: currentPage,
          per_page: 15,
        },
      },
    });
  }, [currentPage]);

  useEffect(() => {
    if (search.trim()) {
      if (ratings && ratings?.data?.length) {
        setData(ratings?.data);
      } else {
        setData([]);
        notification({
          type: 'error',
          title: 'Rate',
          message: 'Email not found',
        });
      }
      return;
    }

    if (ratings && ratings?.data?.length) {
      setData(prev => [...prev, ...ratings?.data]);
    } else {
      setData([]);
    }
  }, [ratings]);

  const handleNextData = () => {
    if (ratingsLastPage) {
      if (currentPage === ratingsLastPage) {
        setHasMoreItems(false);
        return;
      }

      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="affiliate-info-wrap">
      <div className="custom-container">
        <div className="rate-table">
          <div
            id="affilate-ratings-history-component-table-box"
            className="table-box"
          >
            <div className="table table--rating">
              <div className="table-header">
                <div className="tr">
                  <div className="td">
                    <div className="td-name">E-mail</div>
                  </div>
                  <div className="td">
                    <div className="td-name">Amount of money earned</div>
                  </div>
                  <div className="td">
                    <div className="td-name">Referrals number</div>
                  </div>
                </div>
              </div>
              <div className="table-body">
                <InfiniteScrollList
                  data={data}
                  handleNext={handleNextData}
                  hasMore={hasMoreItems}
                  parentRef="affilate-ratings-history-component-table-box"
                >
                  {data && data?.length ? (
                    data.map((item, idx) => (
                      <RatingsInfoItem
                        key={item.id}
                        position={idx + 1}
                        {...item}
                      />
                    ))
                  ) : loading ? (
                    <Loader />
                  ) : (
                    <EmptyTable text="Rating is empty" />
                  )}
                </InfiniteScrollList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsInfoTable;
