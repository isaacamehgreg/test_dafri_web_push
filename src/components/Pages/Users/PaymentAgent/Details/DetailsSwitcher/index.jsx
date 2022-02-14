import React from 'react';
import L from 'i18n-react';
import { NavLink, Switch } from 'react-router-dom';
import routes from '../../../../../../routes';
import AuthWrapper from '../../../../../Base/AuthWrapper';

const DetailsSwitcher = () => {
  return (
    <div className="history-switcher">
      <div className="switcher">
        <NavLink
          className="switcher__item"
          to={routes.Profile.PaymentAgentDetails.Deposit.path}
        >
          {L.translate(
            'Pages.Users.PaymentAgent.Details.DetailsSwitcher.item1',
          )}
        </NavLink>

        <NavLink
          className="switcher__item"
          to={routes.Profile.PaymentAgentDetails.Withdrawal.path}
        >
          {L.translate(
            'Pages.Users.PaymentAgent.Details.DetailsSwitcher.item2',
          )}
        </NavLink>

        <NavLink
          className="switcher__item"
          to={routes.Profile.PaymentAgentDetails.Transfer.path}
        >
          {L.translate(
            'Pages.Users.PaymentAgent.Details.DetailsSwitcher.item3',
          )}
        </NavLink>
      </div>

      <Switch>
        <AuthWrapper
          path={routes.Profile.PaymentAgentDetails.Deposit.path}
          component={routes.Profile.PaymentAgentDetails.Deposit.component}
        />

        <AuthWrapper
          path={routes.Profile.PaymentAgentDetails.Withdrawal.path}
          component={routes.Profile.PaymentAgentDetails.Withdrawal.component}
        />

        <AuthWrapper
          path={routes.Profile.PaymentAgentDetails.Transfer.path}
          component={routes.Profile.PaymentAgentDetails.Transfer.component}
        />
      </Switch>
    </div>
  );
};

export default DetailsSwitcher;
