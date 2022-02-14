import React from 'react';
import L from 'i18n-react';
import { Link } from 'react-router-dom';
import getStarted from '../../../../../styles/img/get-started.png';
import getStartedWawe from '../../../../../styles/img/get-started-wave.svg';
import routes from '../../../../../routes';

const GetStarted = () => {
  return (
    <section className="get-started-section">
      <div className="get-started-wave">
        <img src={getStartedWawe} alt="" />
      </div>

      <div className="get-started-circle">
        <svg
          width="850"
          height="1188"
          viewBox="0 0 850 1188"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.2"
            width="903.069"
            height="903.069"
            rx="451.535"
            transform="matrix(0.394724 -0.9188 -0.9188 -0.394724 492.652 1187.12)"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="949.829"
              y1="630.8"
              x2="705.132"
              y2="304.97"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2DDD9D" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="get-started-wrap">
        <div className="custom-container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="get-started">
                <h2 className="section-smaller-title ">
                  {L.translate('Pages.Statics.HomePage.GetStarted.item1')}
                </h2>

                <div className="section-text">
                  <p>
                    {L.translate('Pages.Statics.HomePage.GetStarted.item2')}
                  </p>
                </div>

                <div className="get-started__btn">
                  <Link
                    to={routes.Trade.SpotTrade.path}
                    className="button button--uppercase button--big"
                  >
                    {L.translate('Pages.Statics.HomePage.GetStarted.item3')}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="get-started-img">
                <img src={getStarted} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
