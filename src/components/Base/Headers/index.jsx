import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import L from 'i18n-react';
import classNames from 'classnames';
import { dataUserSelector } from '../../../redux/auth/selectors';
import routes from '../../../routes';
import types from '../../../redux/types';
import { languages } from '../../../languages';
import { firstLatterToUppercase } from '../../../services/helpers';

import user from '../../../styles/img/user.jpg';
import logo from '../../../styles/img/white-logo.svg';
import logo2 from '../../../styles/img/dark-logo.svg';

const Headers = ({ isLogin, theme }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userData = useSelector(dataUserSelector);
  const { language } = useSelector(store => store.language);

  const headerTheme = classNames('header', {
    'header--type2': theme === 'white',
  });

  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const [isToggleLanguage, setIstoggleLanguage] = useState(false);

  // Get user and generate profile name

  let userLogin;
  if (userData) userLogin = isLogin ? userData.email.split('@')[0] : '';

  const [isToggleUserMenu, setIstoggleUserMenu] = useState(false);
  const node = useRef();

  const handleOutSideClick = e => {
    if (!node?.current?.contains(e.target)) {
      setIstoggleUserMenu(false);
      setIstoggleLanguage(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutSideClick);
    return () => document.removeEventListener('mousedown', handleOutSideClick);
  }, []);

  const handleToggleMenu = () => {
    setIsToggleMenu(!isToggleMenu);
  };

  const handleCloseMenu = () => {
    if (isToggleUserMenu) {
      setIsToggleMenu(false);
      return;
    }

    setIsToggleMenu(false);
  };

  const handleToggleUserMenu = () => {
    setIstoggleUserMenu(!isToggleUserMenu);

    if (isToggleLanguage) {
      setIstoggleLanguage(false);
    }

    if (isToggleUserMenu) {
      setIsToggleMenu(false);
    }
  };

  const handleToggleLanguage = () => {
    setIstoggleLanguage(!isToggleLanguage);

    if (isToggleUserMenu) {
      setIstoggleUserMenu(false);
    }
  };

  const handleCurrentLanguage = e => {
    const { id } = e.currentTarget;

    if (id) {
      dispatch({ type: types.SET_LANGUAGE_START, payload: id });
      setIstoggleLanguage(false);

      if (isToggleMenu) {
        setIsToggleMenu(false);
      }
    }
  };

  const handleLogout = () => {
    dispatch({ type: types.LOGOUT_START, payload: { history, type: 'back' } });
  };

  return (
    <header className={headerTheme}>
      <div className="custom-container">
        <div className="header-block">
          <div className="d-flex header-block__logo">
            <NavLink to={routes.Root.path}>
              <img src={theme === 'black' ? logo : logo2} alt="" />
            </NavLink>
          </div>

          <div className={`main-nav ${isToggleMenu ? 'active' : ''}`}>
            <div className="main-nav__inner">
              <ul className="nav-list">
                <li>
                  <NavLink
                    to={routes.Root.path}
                    onClick={handleCloseMenu}
                    exact
                  >
                    {L.translate('Base.Headers.item21')}
                  </NavLink>
                </li>

                {isLogin && (
                  <>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to={routes.Profile.WalletWithdraw.path}
                        onClick={handleCloseMenu}
                      >
                        {L.translate('Base.Headers.item5')}
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to={routes.Profile.Deposit.path}
                        onClick={handleCloseMenu}
                      >
                        {L.translate('Base.Headers.item22')}
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to={routes.Profile.Withdraw.path}
                        onClick={handleCloseMenu}
                      >
                        {L.translate('Base.Headers.item23')}
                      </NavLink>
                    </li>
                  </>
                )}

                <li>
                  <NavLink
                    to={routes.Trade.SpotTrade.path}
                    onClick={handleCloseMenu}
                  >
                    {L.translate('Base.Headers.item1')}
                  </NavLink>
                </li>

                {isLogin && (
                  <li>
                    <NavLink
                      to={routes.Profile.Transfer.path}
                      onClick={handleCloseMenu}
                    >
                      {L.translate('Base.Headers.item8')}
                    </NavLink>
                  </li>
                )}

                <li>
                  <Link
                    className="nav-link"
                    to={{
                      pathname: routes.Profile.Deposit.path,
                    }}
                    onClick={handleCloseMenu}
                  >
                    {L.translate('Base.Headers.item20')}
                  </Link>
                </li>

                <li>
                  <Link
                    to={{
                      pathname: routes.Trade.SpotTrade.path,
                      state: { currency: 'dba' },
                    }}
                    onClick={handleCloseMenu}
                  >
                    {L.translate('Base.Headers.item24')} DBA
                  </Link>
                </li>
                {isLogin && (
                  <li>
                    <button onClick={handleLogout}>
                      {L.translate('Base.Headers.item19')}
                    </button>
                  </li>
                )}
              </ul>

              {!isLogin ? (
                <div className="header-group" ref={node}>
                  <div className="header-authorization">
                    <NavLink
                      to={routes.Auth.Login.path}
                      className="header-authorization__link"
                      onClick={handleCloseMenu}
                    >
                      {L.translate('Base.Headers.item12')}
                    </NavLink>

                    <NavLink
                      to={routes.Auth.Signup.path}
                      className="button button--small-width"
                      onClick={handleCloseMenu}
                    >
                      {L.translate('Base.Headers.item13')}
                    </NavLink>
                  </div>

                  <div
                    className={`lang-drop ${isToggleLanguage ? 'active' : ''}`}
                  >
                    <button className="lang-btn" onClick={handleToggleLanguage}>
                      {firstLatterToUppercase(language.toLowerCase())}
                      <span className="d-flex lang-btn__arrow">
                        <svg
                          className="fill"
                          width="11"
                          height="7"
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.379357 0.542859C-0.0121098 0.933402 -0.0121095 1.5666 0.379357 1.95714L4.63223 6.19999C5.0237 6.59053 5.65839 6.59053 6.04986 6.19999C6.05353 6.19633 6.05716 6.19265 6.06076 6.18895L10.3028 1.95694C10.6942 1.5664 10.6942 0.9332 10.3028 0.542657C9.9113 0.152114 9.27661 0.152115 8.88514 0.542658L5.34096 4.07848L1.79698 0.542859C1.40552 0.152316 0.770823 0.152316 0.379357 0.542859Z"
                            fill="#9195A4"
                          />
                        </svg>
                      </span>
                    </button>

                    <div className="dropdown">
                      <div className="dropdown__inner">
                        <ul className="dropdown-nav">
                          {languages
                            ? Object.keys(languages).map(key => (
                                <li key={key}>
                                  <button
                                    id={key}
                                    type="button"
                                    onClick={handleCurrentLanguage}
                                  >
                                    {firstLatterToUppercase(key.toLowerCase())}
                                  </button>
                                </li>
                              ))
                            : null}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="header-group" ref={node}>
                  <div
                    className={`header-user ${
                      isToggleUserMenu ? 'active' : ''
                    }`}
                  >
                    <button
                      className="header-user-btn"
                      onClick={handleToggleUserMenu}
                    >
                      <span className="header-user-btn__img">
                        <img src={user} alt="avatar" />
                      </span>

                      <span className="header-user-btn__text">{userLogin}</span>

                      <span className="header-user-btn__arrow">
                        <svg
                          className="stroke"
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L7 7L13 1"
                            stroke="#9195A4"
                            strokeWidth="1.92"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    <div className="dropdown">
                      <div className="dropdown__inner">
                        <div className="dropdown-user">
                          <p className="dropdown-user__name">User menu</p>
                          <p className="dropdown-user__email">
                            {userData?.email}
                          </p>
                        </div>

                        <ul className="dropdown-nav">
                          <li>
                            <NavLink
                              to={routes.Profile.BalanceDetails.path}
                              onClick={handleToggleUserMenu}
                            >
                              {L.translate('Base.Headers.item14')}
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to={routes.Static.UserAffiliate.path}
                              onClick={handleToggleUserMenu}
                            >
                              {L.translate('Base.Headers.item15')}
                            </NavLink>
                          </li>

                          {!!userData?.payment_agent && (
                            <li>
                              <NavLink
                                to={
                                  routes.Profile.PaymentAgentDetails.Deposit
                                    .path
                                }
                                onClick={handleToggleUserMenu}
                              >
                                {L.translate('Base.Headers.item16')}
                              </NavLink>
                            </li>
                          )}

                          <li>
                            <NavLink
                              to={routes.Auth.ChangePassword.path}
                              onClick={handleToggleUserMenu}
                            >
                              {L.translate('Base.Headers.item17')}
                            </NavLink>
                          </li>

                          {!!userData?.payment_agent && (
                            <li>
                              <NavLink
                                to={routes.Profile.EditPaymentAgent.path}
                                onClick={handleToggleUserMenu}
                              >
                                {L.translate('Base.Headers.item18')}
                              </NavLink>
                            </li>
                          )}

                          <li>
                            <NavLink
                              to={
                                routes.Profile.HistoryRoutes.TradeHistory.path
                              }
                              onClick={handleToggleUserMenu}
                            >
                              {L.translate('Base.Headers.item25')}
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to={routes.Profile.LockedToken.path}
                              onClick={handleToggleUserMenu}
                            >
                              {L.translate('Base.Headers.item26')}
                            </NavLink>
                          </li>

                          {/*
                            <li>
                              <NavLink
                                to={routes.Root.path}
                                onClick={handleToggleUserMenu}
                                exact
                              >
                                {L.translate('Base.Headers.item27')}
                              </NavLink>
                            </li>
                          */}

                          <li>
                            <NavLink
                              to={routes.Profile.PaymentAgent.path}
                              onClick={handleToggleUserMenu}
                            >
                              {L.translate('Base.Headers.item28')}
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to={routes.Support.path}
                              onClick={handleToggleUserMenu}
                            >
                              {L.translate('Base.Headers.item29')}
                            </NavLink>
                          </li>
                          {/* <li>
                            <button onClick={handleLogout}>
                              {L.translate('Base.Headers.item19')}
                            </button>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`lang-drop ${isToggleLanguage ? 'active' : ''}`}
                  >
                    <button className="lang-btn" onClick={handleToggleLanguage}>
                      {firstLatterToUppercase(language.toLowerCase())}
                      <span className="d-flex lang-btn__arrow">
                        <svg
                          className="fill"
                          width="11"
                          height="7"
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.379357 0.542859C-0.0121098 0.933402 -0.0121095 1.5666 0.379357 1.95714L4.63223 6.19999C5.0237 6.59053 5.65839 6.59053 6.04986 6.19999C6.05353 6.19633 6.05716 6.19265 6.06076 6.18895L10.3028 1.95694C10.6942 1.5664 10.6942 0.9332 10.3028 0.542657C9.9113 0.152114 9.27661 0.152115 8.88514 0.542658L5.34096 4.07848L1.79698 0.542859C1.40552 0.152316 0.770823 0.152316 0.379357 0.542859Z"
                            fill="#9195A4"
                          />
                        </svg>
                      </span>
                    </button>

                    <div className="dropdown">
                      <div className="dropdown__inner">
                        <ul className="dropdown-nav">
                          {languages
                            ? Object.keys(languages).map(key => (
                                <li key={key}>
                                  <button
                                    id={key}
                                    type="button"
                                    onClick={handleCurrentLanguage}
                                  >
                                    {firstLatterToUppercase(key.toLowerCase())}
                                  </button>
                                </li>
                              ))
                            : null}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            className="nav-btn"
            type="button"
            onMouseDown={handleToggleMenu}
          >
            <svg
              className="fill"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="18" height="2" rx="1" fill="white" />
              <rect y="6" width="18" height="2" rx="1" fill="white" />
              <rect y="12" width="18" height="2" rx="1" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Headers);
