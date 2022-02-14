import React from 'react';
import { useLocation } from 'react-router-dom';
import routes from '../../../../routes';
import HistorySwitcher from './HistorySwitcher';

const History = () => {
  const location = useLocation();

  const locationOpenOrders =
    location.pathname === routes.Profile.HistoryRoutes.OpenOrders.path;

  return (
    <section className="inner-section">
      <div className="custom-container">
        <div
          className={`profile-container ${
            locationOpenOrders ? 'profile-container--full' : ''
          }`}
        >
          <HistorySwitcher />
        </div>
      </div>
    </section>
  );
};

export default History;
