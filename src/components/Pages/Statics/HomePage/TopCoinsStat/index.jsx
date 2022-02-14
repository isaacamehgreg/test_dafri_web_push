import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CoinCard from './CoinCard';
import SocketAssetsPairs from '../../../../HOC/SocketAssetsPairs';
import { assetPairsSelector } from '../../../../../redux/pairs/selectors';
import types from '../../../../../redux/types';

const TopCoinsStat = () => {
  const dispatch = useDispatch();
  const { assetPairs, topPairs } = useSelector(assetPairsSelector);
  const [fullData, setFullData] = useState(null);

  const getTopPairsData = () => {
    const data = [];

    assetPairs.forEach(aPair => {
      topPairs.forEach(tPair => {
        if (tPair.pair_code === aPair.code) data.push(aPair);
      });
    });

    return data;
  };

  useEffect(() => {
    dispatch({ type: types.GET_TOP_PAIRS_START });
    dispatch({ type: types.GET_ASSET_PAIRS_START });
  }, [dispatch]);

  useEffect(() => {
    setFullData(getTopPairsData());
  }, [assetPairs, topPairs]);

  return (
    <section className="home-coins-section">
      <SocketAssetsPairs />

      <div className="custom-container">
        <div className="coins-cards-block">
          <div className="coins-cards">
            {fullData &&
              fullData.length &&
              fullData.map(card => (
                <CoinCard
                  key={card.id}
                  img={card.icon_base_asset}
                  pair={card.code}
                  cryptoValue={card.change_24_hour}
                  percentChange={card.volume24h}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCoinsStat;
