import React, { useState } from 'react';
import L from 'i18n-react';
import { useDispatch } from 'react-redux';
import types from '../../../../redux/types';
import { emailValid } from '../../../../services/helpers';
import notification from '../../../../services/notification';

import topWaweBackgrounImage from '../../../../styles/img/top-section-wave2.svg';
import RatingsInfoTable from './RatingsInfoTable';

const AffiliateRatings = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const [data, setData] = useState([]);

  const handleSearch = e => {
    setSearch(e.target.value);

    if (!e.target.value.trim()) {
      setData([]);

      dispatch({
        type: types.GET_REFERRAL_RATINGS_START,
        payload: {
          params: {
            current_page: 1,
            per_page: 15,
          },
        },
      });
    }
  };

  const handleSearchSubmit = () => {
    if (!emailValid(search)) {
      notification({
        type: 'error',
        title: 'Rate',
        message: 'Email not valid',
      });
      return;
    }

    dispatch({
      type: types.GET_REFERRAL_RATINGS_START,
      payload: {
        params: {
          current_page: 1,
          per_page: 1,
          search,
        },
      },
    });
  };

  return (
    <>
      <section className="info-wave-section info-wave-section--type2">
        <div className="info-wave-section__inner">
          <div className="section-circle" />
          <div className="custom-container">
            <div className="section-block">
              <p className="section-title">
                {L.translate('Pages.Users.AffiliateRatings.item1')}
              </p>
              <div className="section-block__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse eu ullamcorper pulvinar nulla nisl tristique
                  mauris.
                </p>
              </div>
            </div>
            <div className="affiliate-search ">
              <div className="field-wrap">
                <input
                  type="text"
                  className="input input--type2 input--big input--icon-right"
                  placeholder="Search by Email"
                  value={search}
                  onChange={handleSearch}
                />
                <button
                  className="field-icon"
                  type="button"
                  onClick={handleSearchSubmit}
                  disabled={!search.trim()}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.04938 16.0928C9.83702 16.0928 11.5735 15.4963 12.9838 14.3977L18.3045 19.7191C18.7019 20.103 19.3353 20.092 19.7192 19.6945C20.0936 19.3067 20.0936 18.6919 19.7192 18.3042L14.3985 12.9828C17.1243 9.47344 16.4895 4.41858 12.9807 1.69241C9.47196 -1.03376 4.41791 -0.398932 1.69215 3.11039C-1.03361 6.61971 -0.398872 11.6746 3.10992 14.4007C4.52252 15.4983 6.26058 16.0937 8.04938 16.0928ZM3.77429 3.77179C6.13538 1.4103 9.96347 1.41025 12.3246 3.7717C14.6857 6.13315 14.6858 9.96181 12.3247 12.3233C9.9636 14.6848 6.13551 14.6848 3.77438 12.3234C3.77434 12.3234 3.77434 12.3234 3.77429 12.3233C1.4132 9.97906 1.39929 6.16436 3.74318 3.80291C3.75354 3.79251 3.76389 3.78215 3.77429 3.77179Z"
                      fill="#969696"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="info-wave-section__wave info-wave-section__wave--type2">
          <img src={topWaweBackgrounImage} alt="" />
        </div>
      </section>

      <RatingsInfoTable search={search} data={data} setData={setData} />
    </>
  );
};

export default AffiliateRatings;
