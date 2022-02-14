import React from 'react';
import L from 'i18n-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { walletSelector } from '../../../../../redux/wallets/selectors';
import routes from '../../../../../routes';
import {
  transformData,
  numberWithCommas,
  toCrop,
} from '../../../../../services/helpers';
import { storeCurentDecimal } from '../../../../../redux/decimals/selectors';
import Loader from '../../../../Base/Loader';

const PortfolioAnalysis = ({ selectedCurrency }) => {
  const wallet = useSelector(walletSelector);
  const { dbaAnalysis, isLoading } = wallet;
  const decimal = useSelector(storeCurentDecimal);

  return (
    <div className="portfolio-analysis">
      <p className="item-title item-title--centered">
        {L.translate('Pages.Users.LockedToken.PortfolioAnalysis.item1')}
      </p>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="analysis-wrap">
            <div className="analysis-block">
              <div className="analysis-block__col">
                <div className="analysis">
                  <div className="analysis__dot analysis__dot--type1" />
                  <div className="analysis__info">
                    <p className="analysis__info-title">
                      {L.translate(
                        'Pages.Users.LockedToken.PortfolioAnalysis.item2',
                      )}
                    </p>
                    <p className="analysis__info-value">
                      {transformData(dbaAnalysis?.ICO_date, 'D MMMM YYYY')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="analysis-block__col">
                <div className="analysis">
                  <div className="analysis__dot analysis__dot--type2" />
                  <div className="analysis__info">
                    <p className="analysis__info-title">
                      {L.translate(
                        'Pages.Users.LockedToken.PortfolioAnalysis.item3',
                      )}
                    </p>
                    <p className="analysis__info-value">
                      {numberWithCommas(
                        toCrop(decimal)(dbaAnalysis?.ICO_growth),
                      )}
                      %
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="analysis-block">
              <div className="analysis-block__col">
                <div className="analysis">
                  <div className="analysis__dot analysis__dot--type2" />
                  <div className="analysis__info">
                    <p className="analysis__info-title">
                      {L.translate(
                        'Pages.Users.LockedToken.PortfolioAnalysis.item4',
                      )}
                    </p>
                    <p className="analysis__info-value">
                      {dbaAnalysis?.ICO_price}{' '}
                      <span>{selectedCurrency.toUpperCase()}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="analysis-block__col">
                <div className="analysis">
                  <div className="analysis__dot analysis__dot--type1" />
                  <div className="analysis__info">
                    <p className="analysis__info-title">
                      {L.translate(
                        'Pages.Users.LockedToken.PortfolioAnalysis.item5',
                      )}
                    </p>
                    <p className="analysis__info-value">
                      {numberWithCommas(
                        toCrop(decimal)(dbaAnalysis?.net_profit),
                      )}{' '}
                      <span>{selectedCurrency.toUpperCase()}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="analysis-block">
              <div className="analysis-block__col">
                <div className="analysis">
                  <div className="analysis__dot analysis__dot--type3" />
                  <div className="analysis__info">
                    <p className="analysis__info-title">
                      {L.translate(
                        'Pages.Users.LockedToken.PortfolioAnalysis.item6',
                      )}
                    </p>
                    <p className="analysis__info-value">
                      {numberWithCommas(toCrop(decimal)(dbaAnalysis?.capital))}{' '}
                      <span>{selectedCurrency.toUpperCase()}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="analysis-block__col">
                <div className="analysis">
                  <div className="analysis__dot analysis__dot--type3" />
                  <div className="analysis__info">
                    <p className="analysis__info-title">
                      {L.translate(
                        'Pages.Users.LockedToken.PortfolioAnalysis.item7',
                      )}
                    </p>
                    <p className="analysis__info-value">
                      {transformData(dbaAnalysis?.harvest, 'D MMMM YYYY')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="analysis-block">
              <div className="analysis-block__col">
                <div className="analysis">
                  <div className="analysis__dot analysis__dot--type4" />
                  <div className="analysis__info">
                    <p className="analysis__info-title">
                      {L.translate(
                        'Pages.Users.LockedToken.PortfolioAnalysis.item8',
                      )}
                    </p>
                    <p className="analysis__info-value">
                      {numberWithCommas(
                        toCrop(decimal)(dbaAnalysis?.total_acquired),
                      )}{' '}
                      <span>DBA</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="analysis-block__col">
                <div className="analysis">
                  <div className="analysis__dot analysis__dot--type4" />
                  <div className="analysis__info">
                    <p className="analysis__info-title">
                      {L.translate(
                        'Pages.Users.LockedToken.PortfolioAnalysis.item9',
                      )}
                    </p>
                    <p className="analysis__info-value">
                      {dbaAnalysis?.release_percent}% /{' '}
                      {dbaAnalysis?.release_period}{' '}
                      {L.translate(
                        'Pages.Users.LockedToken.PortfolioAnalysis.item10',
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="analysis-block">
              {/* <div className="analysis-block__col">
                <div className="analysis">
                  <div className="analysis__dot analysis__dot--type2" />
                  <div className="analysis__info">
                    <p className="analysis__info-title">
                      {L.translate(
                        'Pages.Users.LockedToken.PortfolioAnalysis.item11',
                      )}
                    </p>
                    <p className="analysis__info-value">
                      {dbaAnalysis?.current_price}{' '}
                      <span> {selectedCurrency.toUpperCase()}</span>
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="analysis-block__col">
                <div className="analysis">
                  <div className="analysis__dot analysis__dot--type1" />
                  <div className="analysis__info">
                    <p className="analysis__info-title">
                      {L.translate(
                        'Pages.Users.LockedToken.PortfolioAnalysis.item12',
                      )}
                    </p>
                    <p className="analysis__info-value">
                      {numberWithCommas(toCrop(decimal)(dbaAnalysis?.referral))}{' '}
                      <span>DBA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-submit">
            <Link
              to={{
                pathname: routes.Trade.SpotTrade.path,
                state: { currency: 'dba' },
              }}
              className="button button--wide button--big button--big--round"
            >
              {L.translate('Pages.Users.LockedToken.PortfolioAnalysis.item13')}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default PortfolioAnalysis;
