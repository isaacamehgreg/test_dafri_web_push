import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import L from 'i18n-react';
// import LastTrade from './LastTrade';
import types from '../../../../../redux/types';
import { numberWithCommas, toCrop } from '../../../../../services/helpers';
import { storeDecimalPairs } from '../../../../../redux/decimals/selectors';

const Markets = () => {
  const dispatch = useDispatch();
  const allStore = useSelector(state => state);
  const decimalPairs = useSelector(storeDecimalPairs);
  const assetPairs = allStore?.assetPairs?.assetPairs;
  const currentPair = allStore?.currentPair;
  const currentPairInfo = assetPairs.find(
    pair => pair.code === currentPair.pair,
  );
  const [search, setSearch] = useState('');
  const [assetPairsSearch, setAssetPairsSearch] = useState(currentPair);

  const getDecimals = cod => {
    return decimalPairs[cod];
  };

  const changeSearchHandler = e => setSearch(e.target.value);

  useEffect(() => {
    setAssetPairsSearch(
      assetPairs.filter(pair =>
        pair.code
          .replace('_', '/')
          .toLowerCase()
          .includes(search.toLowerCase()),
      ),
    );
  }, [search, assetPairs]);

  return (
    <div className="trade-col trade-bottom__right">
      <div className="grid-markers">
        <div className="trade-block trade-block--markers">
          <div className="trade-header ">
            <p className="trade-title">
              {L.translate('Pages.Trade.SpotTrade.MarketsSpot.item1')}
            </p>
            <div className="trade-block-search">
              <div className="field-wrap">
                <input
                  type="text"
                  className="trade-input trade-input--type2 trade-input--icon-right"
                  placeholder={L.translate(
                    'Pages.Trade.SpotTrade.MarketsSpot.item2',
                  )}
                  value={search}
                  onChange={changeSearchHandler}
                />
                <span className="field-icon">
                  <svg
                    className="fill"
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
                </span>
              </div>
            </div>
          </div>
          <div className="trades-table-box">
            <div className="trade-table-header">
              <div className="trades-tr">
                <div className="trades-td trades-td--pair">
                  <p className="trade-td-name">
                    {L.translate('Pages.Trade.SpotTrade.MarketsSpot.item3')}
                  </p>
                </div>
                <div className="trades-td trades-td--price ">
                  <p className="trade-td-name">
                    {L.translate('Pages.Trade.SpotTrade.MarketsSpot.item4')}
                  </p>
                </div>
                <div className="trades-td trades-td--vol">
                  <p className="trade-td-name">
                    {L.translate('Pages.Trade.SpotTrade.MarketsSpot.item5')}
                  </p>
                </div>
                <div className="trades-td trades-td--change">
                  <p className="trade-td-name">
                    {L.translate('Pages.Trade.SpotTrade.MarketsSpot.item6')} %
                  </p>
                </div>
              </div>
            </div>
            <div className="trades-table trades-table--markers">
              <div className="trades-table__body">
                {assetPairsSearch.length ? (
                  assetPairsSearch.map(pair => (
                    <div className="trades-tr" key={pair?.id}>
                      <div className="trades-td trades-td--pair">
                        <p>{pair.code.replace('_', '/').toUpperCase()}</p>
                      </div>
                      <div className="trades-td trades-td--price">
                        <p>
                          {' '}
                          {numberWithCommas(
                            toCrop(getDecimals(pair?.code))(
                              pair.last_price || 0,
                            ),
                          )}
                        </p>
                      </div>
                      <div className="trades-td trades-td--vol">
                        <p className="">{toCrop(2)(pair.volume24h)}</p>
                      </div>
                      <div className="trades-td trades-td--change">
                        <p className="">{toCrop(2)(pair.change_24_hour)}%</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="nothing-to-show">
                    {L.translate('Pages.Trade.SpotTrade.MarketsSpot.item7')}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Markets);
