import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import L from 'i18n-react';
import coinLogo from '../../../../../styles/img/table-coin3.png';
import types from '../../../../../redux/types';
import { storeDecimalPairs } from '../../../../../redux/decimals/selectors';
import { numberWithCommas, toCrop } from '../../../../../services/helpers';

const InfoOfPairs = ({ currency }) => {
  const node = useRef();
  const dispatch = useDispatch();
  const allStore = useSelector(state => state);
  const assetPairs = allStore?.assetPairs?.assetPairs;
  const currentPair = allStore?.currentPair;
  const currentPairInfo = assetPairs.find(
    pair => pair.code === currentPair.pair,
  );
  const [isToggleMenu, setIstoggleMenu] = useState(false);
  const [search, setSearch] = useState('');
  const [assetPairsSearch, setAssetPairsSearch] = useState(currentPair);

  const handleOutSideClick = e =>
    !node?.current?.contains(e.target) ? setIstoggleMenu(false) : null;

  const decimalPairs = useSelector(storeDecimalPairs);
  const getDecimals = cod => {
    return decimalPairs[cod];
  };

  const handleToggleMenu = () => {
    setIstoggleMenu(!isToggleMenu);
  };

  const changePair = pair => {
    if (!pair || currentPair.pair === pair) return;
    dispatch({ type: types.SET_CURRENT_PAIR_START, payload: pair });
  };

  const changeSearchHandler = e => setSearch(e.target.value);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutSideClick);
    return () => document.removeEventListener('mousedown', handleOutSideClick);
  }, []);

  useEffect(() => {
    dispatch({ type: types.GET_ASSET_PAIRS_START });
  }, [dispatch]);

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

  useEffect(() => {
    if (assetPairs && assetPairs.length) {
      const [selectedPair] = assetPairs.filter(pair => {
        const pairCode = pair.code.split('_');

        return pairCode[0] === currency && pairCode[1] === 'usdt';
      });

      if (selectedPair) changePair(selectedPair.code);
    }
  }, [currency]);

  return (
    <div className="grid-panel" ref={node}>
      <div className="trade-panel">
        <div className="trade-panel-block">
          <div className={`selected-pair ${isToggleMenu ? 'active' : ''}`}>
            <button className="selected-pair-btn" onClick={handleToggleMenu}>
              <span className="selected-pair-btn__icon">
                <img src={currentPairInfo?.icon_base_asset} alt="" />
              </span>
              <span className="trade-info selected-pair-btn__info">
                <span className="trade-info__name ">
                  {L.translate('Pages.Trade.SpotTrade.InfoOfPairsSpot.item13')}
                </span>
                <span className="trade-info__value">
                  {currentPairInfo?.code?.replace('_', '/').toUpperCase()}
                </span>
              </span>
              <span className="selected-pair-btn__arrow">
                <svg
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.23417 1.0844C0.727298 1.59007 0.727298 2.40993 1.23417 2.9156L6.74078 8.40923C7.24765 8.91491 8.06945 8.91491 8.57632 8.40923C8.58029 8.40527 8.58423 8.40129 8.58814 8.39729L14.083 2.91538C14.5899 2.40971 14.5899 1.58985 14.083 1.08417C13.5761 0.578499 12.7543 0.578499 12.2475 1.08417L7.65848 5.66234L3.06971 1.0844C2.56284 0.578721 1.74104 0.578721 1.23417 1.0844Z"
                    fill="#292929"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className={`trade-search-window ${isToggleMenu ? 'active' : ''}`}>
          <div className="search-window-input">
            <div className="field-wrap">
              <input
                type="text"
                className="trade-input trade-input--type2 trade-input--icon-right"
                placeholder="Search"
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

          <div className="trade-search-table">
            <div className="trades-table-box">
              <div className="trade-table-header">
                <div className="trades-tr">
                  <div className="trades-td trades-td--pair">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.InfoOfPairsSpot.item1',
                      )}
                    </p>
                  </div>
                  <div className="trades-td trades-td--price ">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.InfoOfPairsSpot.item2',
                      )}
                    </p>
                  </div>
                  <div className="trades-td trades-td--change">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.InfoOfPairsSpot.item3',
                      )}
                    </p>
                  </div>
                  <div className="trades-td trades-td--high">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.InfoOfPairsSpot.item4',
                      )}
                    </p>
                  </div>
                  <div className="trades-td trades-td--low">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.InfoOfPairsSpot.item5',
                      )}
                    </p>
                  </div>
                  <div className="trades-td trades-td--volume">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.InfoOfPairsSpot.item6',
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="trades-table trades-table--search">
                <div className="trades-table__body">
                  {assetPairsSearch.length ? (
                    assetPairsSearch.map(pair => (
                      <div
                        className="trades-tr"
                        key={pair?.id}
                        onClick={() => changePair(pair.code)}
                        onKeyDown={changePair}
                        style={{ cursor: 'pointer' }}
                        aria-hidden="true"
                      >
                        <div className="trades-td trades-td--pair">
                          <p>{pair.code.replace('_', '/').toUpperCase()}</p>
                        </div>
                        <div className="trades-td trades-td--price">
                          <p className="table-price">
                            {numberWithCommas(
                              toCrop(getDecimals(pair?.code))(
                                pair.last_price || 0,
                              ),
                            )}
                            /
                            <span>
                              $
                              {numberWithCommas(
                                toCrop(getDecimals(pair?.code))(
                                  pair.last_price_usd || 0,
                                ),
                              )}
                            </span>
                          </p>
                        </div>
                        <div className="trades-td trades-td--change">
                          <p>
                            <span
                              className={`${
                                pair.change_24_hour >= 0 ? 'green' : 'red'
                              }`}
                            >
                              {toCrop(2)(pair.change_24_hour)}%
                            </span>
                          </p>
                        </div>
                        <div className="trades-td trades-td--high">
                          <p className="">{pair.high24}</p>
                        </div>
                        <div className="trades-td trades-td--low">
                          <p className="">{pair.low24}</p>
                        </div>
                        <div className="trades-td trades-td--low">
                          <p className="">{pair.volume24h}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="nothing-to-show">
                      {L.translate(
                        'Pages.Trade.SpotTrade.InfoOfPairsSpot.item7',
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex trade-panel__list">
          <div className="trade-panel-block">
            <div className="trade-info-block">
              <span className="trade-info ">
                <span className="trade-info__name ">
                  {L.translate('Pages.Trade.SpotTrade.InfoOfPairsSpot.item8')}
                </span>
                <span className="trade-info__value">
                  {numberWithCommas(
                    toCrop(getDecimals(currentPairInfo?.code))(
                      currentPairInfo?.last_price || 0,
                    ),
                  )}{' '}
                  /
                  <span>
                    $
                    {numberWithCommas(
                      toCrop(getDecimals(currentPairInfo?.code))(
                        currentPairInfo?.last_price_usd || 0,
                      ),
                    )}
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className="trade-panel-block">
            <div className="trade-info-block">
              <span className="trade-info ">
                <span className="trade-info__name ">
                  {L.translate('Pages.Trade.SpotTrade.InfoOfPairsSpot.item9')}
                </span>
                <span
                  className={`trade-info__value ${
                    currentPairInfo?.change_24_hour >= 0 ? 'green' : 'red'
                  }`}
                >
                  {toCrop(2)(currentPairInfo?.change_24_hour)}%
                </span>
              </span>
            </div>
          </div>
          <div className="trade-panel-block">
            <div className="trade-info-block">
              <span className="trade-info ">
                <span className="trade-info__name ">
                  {L.translate('Pages.Trade.SpotTrade.InfoOfPairsSpot.item10')}
                </span>
                <span className="trade-info__value">
                  {currentPairInfo?.high24}
                </span>
              </span>
            </div>
          </div>
          <div className="trade-panel-block">
            <div className="trade-info-block">
              <span className="trade-info ">
                <span className="trade-info__name ">
                  {L.translate('Pages.Trade.SpotTrade.InfoOfPairsSpot.item11')}
                </span>
                <span className="trade-info__value">
                  {currentPairInfo?.low24}
                </span>
              </span>
            </div>
          </div>
          <div className="trade-panel-block">
            <div className="trade-info-block">
              <span className="trade-info ">
                <span className="trade-info__name ">
                  {L.translate('Pages.Trade.SpotTrade.InfoOfPairsSpot.item12')}
                </span>
                <span className="trade-info__value">
                  {currentPairInfo?.volume24h}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default InfoOfPairs;
export default React.memo(InfoOfPairs);
