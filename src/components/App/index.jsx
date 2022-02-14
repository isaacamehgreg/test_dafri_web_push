import React, { StrictMode, Suspense, useEffect, useRef } from 'react';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import L from 'i18n-react';
import Headers from '../Base/Headers';
import NewHeader from '../Base/NewHeader';
import routes from '../../routes';
import Footers from '../Base/Footers';
import AuthWrapper from '../Base/AuthWrapper';
import types from '../../redux/types';
import { languages } from '../../languages';
import SocketConnect from '../HOC/SocketConnect';
import { Modal } from '../Base/Modal';
import Loader from '../Base/Loader';
import SocketPrivateNotifications from '../HOC/SocketPrivateNotifications';
import { intervalReguest } from '../../services/axiosInterceptors';
import NewFooter from '../Base/NewFooter';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state?.user?.token);
  const language = useSelector(state => state?.language?.language);
  const isLogin = !!token; // axios.defaults.headers.common.Authorization;
  const location = useLocation();
  const history = useHistory();

  const isMobileApp = new URLSearchParams(useHistory().location.search).get(
    'app',
  );

  const isMobileToken = new URLSearchParams(useHistory().location.search).get(
    'access_token',
  );

  L.setTexts(languages[language]);

  useEffect(() => {
    if (isMobileToken) {
      dispatch({
        type: types.UPDATE_USER_TOKEN_START,
        payload: { token: isMobileToken, isMobile: !!isMobileApp },
      });

      axios.defaults.headers.common.Authorization = `Bearer ${isMobileToken}`;
      intervalReguest();
      return;
    }

    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      intervalReguest();
    }
  }, [token, isMobileToken]);

  const refAutoScroll = useRef(null);
  useEffect(() => {
    if (refAutoScroll?.current && window.pageYOffset > 0) {
      refAutoScroll.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname, refAutoScroll]);

  useEffect(() => {
    if (isLogin) {
      dispatch({ type: types.GET_WALLETS_LIST_START });
      dispatch({
        type: types.GET_WITHDRAW_WHITELIST_ADDRESSES_START,
      });
      dispatch({ type: types.GET_USER_DATA_START });
    }
  }, [isLogin]);

  useEffect(() => {
    dispatch({ type: types.GET_ASSETS_START });
  }, []);

  let headerTheme;
  let isShowFooter = true;
  let isShowWawe = true;

  // Footer switcher
  switch (location.pathname) {
    case routes.Auth.Login.path:
    case routes.Auth.Signup.path:
    case routes.Auth.ResetPassword.path:
    case routes.Auth.ChangePassword.path:
    case routes.Auth.RecoveryPassword.path:
    case routes.Auth.SecurityCheck.path:
    case routes.Profile.BalanceDetails.path:
    case routes.Support.path:
    case routes.Auth.Reset2FA.path:
    case routes.Trade.SpotTrade.path:
    case routes.Profile.HistoryRoutes.TradeHistory.path:
    case routes.Profile.HistoryRoutes.OpenOrders.path:
    case routes.Profile.HistoryRoutes.DepositHistory.path:
    case routes.Profile.HistoryRoutes.WithdrawalHistory.path:
    case routes.Static.BuyDBAFormStep1.path:
    case routes.Static.BuyDBAFormStep2.path:
    case routes.Static.BuyDBAFormStep3.path:
      isShowFooter = false;
      break;

    case routes.Home.path:
    case routes.Root.path:
      isShowWawe = false;
      break;

    default:
      isShowFooter = true;
      isShowWawe = true;
  }

  switch (location.pathname) {
    case routes.Static.Contacts.path:
    case routes.Profile.Deposit.path:
    case routes.Static.AMLPolicy.path:
    case routes.Static.Defi.path:
    case routes.Static.Careers.path:
    case routes.Static.DepositInstructions.path:
    case routes.Static.WithdrawalInstructions.path:
    case routes.Static.FAQ.path:
    case routes.Static.ListingDelisting.path:
    case routes.Static.Security.path:
    case routes.Static.PrivacyAndTerms.path:
    case routes.Static.TermsAndCondition.path:
    case routes.Static.Affiliate.path:
    case routes.Static.Investment.path:
    case routes.Profile.Withdraw.path:
    case routes.Profile.WalletWithdraw.path:
    case routes.Profile.LockedToken.path:
    case routes.Profile.PaymentAgent.path:
      headerTheme = 'white';
      break;

    default:
      headerTheme = 'black';
  }

  // With header
  switch (location.pathname) {
    case routes.Static.Contacts.path:
    case routes.Profile.Deposit.path:
    case routes.Static.AMLPolicy.path:
    case routes.Static.Defi.path:
    case routes.Static.Careers.path:
    case routes.Static.DepositInstructions.path:
    case routes.Static.WithdrawalInstructions.path:
    case routes.Static.FAQ.path:
    case routes.Static.ListingDelisting.path:
    case routes.Static.Security.path:
    case routes.Static.PrivacyAndTerms.path:
    case routes.Static.TermsAndCondition.path:
    case routes.Static.Affiliate.path:
    case routes.Static.Investment.path:
    case routes.Profile.Withdraw.path:
    case routes.Profile.WalletWithdraw.path:
    case routes.Profile.Transfer.path:
    case routes.Profile.LockedToken.path:
    case routes.Profile.PaymentAgent.path:
    case routes.Static.BuyDBAFormStep1.path:
    case routes.Static.BuyDBAFormStep2.path:
    case routes.Static.BuyDBAFormStep3.path:
      headerTheme = 'white';
      break;

    default:
      headerTheme = 'black';
  }

  let header;
  let footer;

  if (!isMobileApp) {
    if (location.pathname === '/') {
      header = <NewHeader />;
      footer = isShowFooter ? <NewFooter /> : null;
    } else {
      header = <Headers isLogin={isLogin} theme={headerTheme} />;
      footer = isShowFooter ? (
        <Footers refAutoScroll={refAutoScroll} isShowWawe={isShowWawe} />
      ) : null;
    }
  }

  return (
    <>
      <Modal />
      <StrictMode>
        <SocketConnect />
        <SocketPrivateNotifications />
        <div ref={refAutoScroll} />
        <div className="wrapper">
          <div className="content">
            {header}
            {/* {!isMobileApp && <Headers isLogin={isLogin} theme={headerTheme} />} */}
            {/* {!isMobileApp && <NewHeader />} */}
            <Suspense fallback={<Loader />}>
              <Switch>
                <AuthWrapper
                  exact
                  path={routes.Root.path}
                  component={routes.Home.component}
                />

                <AuthWrapper
                  path={routes.Trade.ChartPage.path}
                  component={routes.Trade.ChartPage.component}
                />

                <AuthWrapper
                  path={routes.Auth.Login.path}
                  component={routes.Auth.Login.component}
                />

                <AuthWrapper
                  path={routes.Auth.SecurityCheck.path}
                  component={routes.Auth.SecurityCheck.component}
                />

                <AuthWrapper
                  path={routes.Auth.Signup.path}
                  component={routes.Auth.Signup.component}
                />

                <AuthWrapper
                  path={routes.Auth.ResetPassword.path}
                  component={routes.Auth.ResetPassword.component}
                />

                <AuthWrapper
                  path={routes.Auth.RecoveryPassword.path}
                  component={routes.Auth.RecoveryPassword.component}
                />

                <AuthWrapper
                  path={routes.Auth.ChangePassword.path}
                  component={routes.Auth.ChangePassword.component}
                />

                {/* Profile pages */}

                {/* <AuthWrapper
                  path={routes.Profile.BalanceDetails.path}
                  component={routes.Profile.BalanceDetails.component}
                /> */}

                {/* <AuthWrapper
                  path={routes.Profile.Deposit.path}
                  component={routes.Profile.Deposit.component}
                /> */}
                {token && (
                  <AuthWrapper
                    path={routes.Profile.History.path}
                    component={routes.Profile.History.component}
                  />
                )}

                <AuthWrapper
                  path={routes.Profile.Verification.path}
                  component={routes.Profile.Verification.component}
                />
                {token && (
                  <AuthWrapper
                    path={routes.Static.UserAffiliate.path}
                    component={routes.Static.UserAffiliate.component}
                  />
                )}

                {/*
                 <AuthWrapper
                  path={routes.Static.AffiliateRatings.path}
                  component={routes.Static.AffiliateRatings.component}
                />
                */}

                <AuthWrapper
                  path={routes.Profile.PaymentAgent.path}
                  component={routes.Profile.PaymentAgent.component}
                />

                <AuthWrapper
                  path={routes.Profile.PaymentAgentForm.path}
                  component={routes.Profile.PaymentAgentForm.component}
                />

                <AuthWrapper
                  path={routes.Profile.PaymentAgentDetails.path}
                  component={routes.Profile.PaymentAgentDetails.component}
                />

                <AuthWrapper
                  path={routes.Profile.EditPaymentAgent.path}
                  component={routes.Profile.EditPaymentAgent.component}
                />

                {/* Support */}
                <Route
                  path={routes.Support.path}
                  component={routes.Support.component}
                />

                {/* Static pages */}
                <Route
                  path={routes.Static.AMLPolicy.path}
                  component={routes.Static.AMLPolicy.component}
                />

                <Route
                  path={routes.Static.Defi.path}
                  component={routes.Static.Defi.component}
                />

                <Route
                  path={routes.Static.Affiliate.path}
                  component={routes.Static.Affiliate.component}
                />

                <Route
                  path={routes.Static.Careers.path}
                  component={routes.Static.Careers.component}
                />

                <Route
                  path={routes.Static.FAQ.path}
                  component={routes.Static.FAQ.component}
                />

                <Route
                  path={routes.Static.Legal.path}
                  component={routes.Static.Legal.component}
                />

                <Route
                  path={routes.Static.ListingDelisting.path}
                  component={routes.Static.ListingDelisting.component}
                />

                <Route
                  path={routes.Static.Security.path}
                  component={routes.Static.Security.component}
                />

                <Route
                  path={routes.Static.PrivacyAndTerms.path}
                  component={routes.Static.PrivacyAndTerms.component}
                />

                <Route
                  path={routes.Static.TermsAndCondition.path}
                  component={routes.Static.TermsAndCondition.component}
                />

                <Route
                  path={routes.Static.Contacts.path}
                  component={routes.Static.Contacts.component}
                />

                <Route
                  path={routes.Static.DepositInstructions.path}
                  component={routes.Static.DepositInstructions.component}
                />

                <Route
                  path={routes.Static.WithdrawalInstructions.path}
                  component={routes.Static.WithdrawalInstructions.component}
                />

                <Route
                  path={routes.Auth.Reset2FA.path}
                  component={routes.Auth.Reset2FA.component}
                />

                <Route
                  path={routes.Static.MobileBuyDBA.path}
                  component={routes.Static.MobileBuyDBA.component}
                />

                <Route
                  path={routes.Static.BuyDBA.path}
                  component={routes.Static.BuyDBA.component}
                />

                <Route
                  path={routes.Static.BuyDBAFormStep1.path}
                  component={routes.Static.BuyDBAFormStep1.component}
                />

                <Route
                  path={routes.Static.BuyDBAFormStep2.path}
                  component={routes.Static.BuyDBAFormStep2.component}
                />

                <Route
                  path={routes.Static.BuyDBAFormStep3.path}
                  component={routes.Static.BuyDBAFormStep3.component}
                />

                <AuthWrapper
                  path={routes.Static.Investment.path}
                  component={routes.Static.Investment.component}
                />
                {token && (
                  <AuthWrapper
                    path={routes.Profile.BalanceDetails.path}
                    component={routes.Profile.BalanceDetails.component}
                  />
                )}

                <AuthWrapper
                  path={routes.Trade.SpotTrade.path}
                  component={routes.Trade.SpotTrade.component}
                />

                {token && (
                  <AuthWrapper
                    path={routes.Profile.Deposit.path}
                    component={routes.Profile.Deposit.component}
                  />
                )}

                {token && (
                  <AuthWrapper
                    path={routes.Profile.Withdraw.path}
                    component={routes.Profile.Withdraw.component}
                  />
                )}

                {token && (
                  <AuthWrapper
                    path={routes.Profile.WalletWithdraw.path}
                    component={routes.Profile.WalletWithdraw.component}
                  />
                )}
                {token && (
                  <AuthWrapper
                    path={routes.Profile.Transfer.path}
                    component={routes.Profile.Transfer.component}
                  />
                )}

                <AuthWrapper
                  path={routes.Profile.WithdrawalWhiteListAddresses.path}
                  component={
                    routes.Profile.WithdrawalWhiteListAddresses.component
                  }
                />
                {token && (
                  <AuthWrapper
                    path={routes.Profile.LockedToken.path}
                    component={routes.Profile.LockedToken.component}
                  />
                )}

                <Redirect to={routes.Auth.Login.path} />
              </Switch>
            </Suspense>
            {/* {isShowFooter && !isMobileApp && ( */}
            {/*   <Footers refAutoScroll={refAutoScroll} isShowWawe={isShowWawe} /> */}
            {/* )} */}
            {!!footer && footer}
          </div>
        </div>
      </StrictMode>
    </>
  );
};

export default React.memo(App);
