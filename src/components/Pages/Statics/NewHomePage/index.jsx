import React, { useEffect } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MarketsTable from './MarketsTable';
import Loader from '../../../Base/Loader';
import {
  marketsDataSelector,
  marketsLoadingSelector,
} from '../../../../redux/statics/newHomePage/selectors';
import { tokenSelector } from '../../../../redux/auth/selectors';
import types from '../../../../redux/types';
import routes from '../../../../routes';

const NewHomePage = () => {
  const dispatch = useDispatch();
  const marketsData = useSelector(marketsDataSelector);
  const loading = useSelector(marketsLoadingSelector);
  const isLoggedIn = useSelector(tokenSelector);

  useEffect(() => {
    dispatch({ type: types.GET_MARKETS_DATA_START });
  }, []);

  return (
    <div className="new-home">
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="banner-text text-center">
                <h1>
                  {L.translate('Pages.Statics.NewHomePage.item1')}{' '}
                  <span>{L.translate('Pages.Statics.NewHomePage.item2')}</span>
                </h1>
                <p>{L.translate('Pages.Statics.NewHomePage.item3')}</p>
                <Link
                  to={
                    isLoggedIn
                      ? routes.Trade.SpotTrade.path
                      : routes.Auth.Login.path
                  }
                  className="btn btn-primary"
                >
                  {L.translate('Pages.Statics.NewHomePage.item4')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slide-cards">
        <div className="container">
          <div className="row">
            <Link
              to={
                isLoggedIn
                  ? routes.Profile.Transfer.path
                  : routes.Auth.Login.path
              }
              className="col-md-6 col-xl-3"
            >
              <div className="card slide-card">
                <div className="slide-number">1</div>
                <div className="title">
                  <h3>{L.translate('Pages.Statics.NewHomePage.item5')}</h3>
                </div>
                <div className="slide-icon">
                  <i className="bi bi-cash-coin" />
                </div>
              </div>
            </Link>

            <Link
              to={
                isLoggedIn
                  ? routes.Trade.SpotTrade.path
                  : routes.Auth.Login.path
              }
              className="col-md-6 col-xl-3"
            >
              <div className="card slide-card">
                <div className="slide-number">2</div>
                <div className="title">
                  <h3>{L.translate('Pages.Statics.NewHomePage.item6')}</h3>
                </div>
                <div className="slide-icon">
                  <i className="bi bi-cash-stack" />
                </div>
              </div>
            </Link>

            <Link
              to={routes.Profile.PaymentAgent.path}
              className="col-md-6 col-xl-3"
            >
              <div className="card slide-card">
                <div className="slide-number">3</div>
                <div className="title">
                  <h3>{L.translate('Pages.Statics.NewHomePage.item7')}</h3>
                </div>
                <div className="slide-icon">
                  <i className="bi bi-globe2" />
                </div>
              </div>
            </Link>

            <Link
              to={
                isLoggedIn
                  ? routes.Trade.SpotTrade.path
                  : routes.Auth.Login.path
              }
              className="col-md-6 col-xl-3"
            >
              <div className="card slide-card">
                <div className="slide-number">4</div>
                <div className="title">
                  <h3>{L.translate('Pages.Statics.NewHomePage.item8')}</h3>
                </div>
                <div className="slide-icon">
                  <i className="bi bi-currency-exchange" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="coins-cards-list">
        <div className="container">
          <h3 className="section-heading mb-4">
            {L.translate('Pages.Statics.NewHomePage.item9')}
          </h3>

          {loading ? <Loader /> : <MarketsTable data={marketsData} />}
        </div>
      </section>

      <section className="section curve-bottom-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="ready-text">
                <h3 className="section-heading text-white">
                  {L.translate('Pages.Statics.NewHomePage.item10')}
                </h3>

                <p>{L.translate('Pages.Statics.NewHomePage.item11')}</p>

                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <i className="fab fa-android" /> Google Play
                </a>

                <a
                  href="https://www.apple.com/app-store/"
                  className="btn btn-primary btn-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-apple" /> Apple Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewHomePage;
