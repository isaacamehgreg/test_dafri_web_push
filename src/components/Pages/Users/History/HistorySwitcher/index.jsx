import React from 'react';
import L from 'i18n-react';
import { NavLink, Switch } from 'react-router-dom';
import AuthWrapper from '../../../../Base/AuthWrapper';
import routes from '../../../../../routes';

const HistorySwitcher = () => {
  return (
    <div className="history-switcher">
      <div className="switcher">
        <NavLink
          className="switcher__item"
          to={routes.Profile.HistoryRoutes.TradeHistory.path}
        >
          {L.translate('Pages.Users.History.HistorySwitcher.item1')}
        </NavLink>

        <NavLink
          className="switcher__item"
          to={routes.Profile.HistoryRoutes.OpenOrders.path}
        >
          {L.translate('Pages.Users.History.HistorySwitcher.item2')}
        </NavLink>
        <NavLink
          className="switcher__item"
          to={routes.Profile.HistoryRoutes.SwapHistory.path}
        >
          {L.translate('Pages.Users.History.HistorySwitcher.item5')}
        </NavLink>

        <NavLink
          className="switcher__item"
          to={routes.Profile.HistoryRoutes.DepositHistory.path}
        >
          {L.translate('Pages.Users.History.HistorySwitcher.item3')}
        </NavLink>

        <NavLink
          className="switcher__item"
          to={routes.Profile.HistoryRoutes.WithdrawalHistory.path}
        >
          {L.translate('Pages.Users.History.HistorySwitcher.item4')}
        </NavLink>
      </div>

      <Switch>
        <AuthWrapper
          path={routes.Profile.HistoryRoutes.TradeHistory.path}
          component={routes.Profile.HistoryRoutes.TradeHistory.component}
        />

        <AuthWrapper
          path={routes.Profile.HistoryRoutes.OpenOrders.path}
          component={routes.Profile.HistoryRoutes.OpenOrders.component}
        />
        <AuthWrapper
          path={routes.Profile.HistoryRoutes.SwapHistory.path}
          component={routes.Profile.HistoryRoutes.SwapHistory.component}
        />
        <AuthWrapper
          path={routes.Profile.HistoryRoutes.DepositHistory.path}
          component={routes.Profile.HistoryRoutes.DepositHistory.component}
        />

        <AuthWrapper
          path={routes.Profile.HistoryRoutes.WithdrawalHistory.path}
          component={routes.Profile.HistoryRoutes.WithdrawalHistory.component}
        />
      </Switch>
    </div>
  );
};

export default HistorySwitcher;
