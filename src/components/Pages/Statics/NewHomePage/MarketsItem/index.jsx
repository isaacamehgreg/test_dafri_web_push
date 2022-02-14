import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../../../routes';

const MarketsItem = ({
  name,
  currency,
  icon,
  last_price,
  change_24_hour,
  market,
}) => {
  const percentChange = change_24_hour > 0 ? 'text-success' : 'text-danger';

  return (
    <Link
      to={{
        pathname: routes.Trade.SpotTrade.path,
        state: { currency },
      }}
      className="list-group-item"
      style={{ color: '#000' }}
    >
      <div className="row g-0">
        <div className="col-7 col-md-4">
          <div className="coin-title">
            <div className="coin-bedge">
              <img src={icon} alt="DBA" />
            </div>

            <h3>{name}</h3>

            <p>{currency.toUpperCase()}</p>
          </div>
        </div>

        <div className="col-5 col col-md-4">
          <p className="desc text-sm-end text-md-start">{`$${last_price}`}</p>

          <span
            className={`d-sm-block d-md-none text-sm-end text-success ${percentChange}`}
          >
            {change_24_hour}%
          </span>
        </div>

        <div className="col d-sm-none d-md-block">
          <p className={`desc ${percentChange}`}>{change_24_hour}%</p>
        </div>

        <div className="col d-sm-none d-md-block">
          <p className="desc">{`$${market}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default MarketsItem;
