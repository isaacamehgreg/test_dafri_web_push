import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import moment from 'moment';
import classNames from 'classnames';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { kycUserSelector } from '../../../../redux/auth/selectors';
import {
  kycTokenSelector,
  kycTokenUrlSelector,
} from '../../../../redux/users/verification/selectors';
import { hideEmail } from '../../../../services/helpers';
import { openModal } from '../../../Base/Modal';
import types from '../../../../redux/types';
import ModalIframe from './ModalIframe';
import routes from '../../../../routes';

const Verification = () => {
  const dispatch = useDispatch();
  const user = useSelector(kycUserSelector);
  const tokenSelector = useSelector(kycTokenSelector);
  const kycUrl = useSelector(kycTokenUrlSelector);

  const [token, setToken] = useState('');

  // Word person status
  const [personStatus, setPersonStatus] = useState(null);

  const sumsub = user?.sumsub;
  const isMobilePhone = /Mobi/.test(navigator.userAgent);

  const getWordKYCStatus = status => {
    const statusCode = status?.status;

    switch (statusCode) {
      case null:
        setPersonStatus('Unverified');
        break;

      case 0:
        setPersonStatus('Rejected');
        break;

      case 1:
        setPersonStatus('Verified');
        break;

      default:
        setPersonStatus('Unverified');
    }
  };

  useEffect(() => {
    dispatch({ type: types.GET_SUMSUB_TOKEN_START });
  }, []);

  useEffect(() => {
    if (tokenSelector) setToken(tokenSelector);
  }, [tokenSelector]);

  useEffect(() => {
    getWordKYCStatus(sumsub);
  }, [dispatch, user]);

  const redirectLocation = useLocation().search;

  if (!user.isMobile && !user?.token && isMobilePhone) {
    return <Redirect to={routes.Auth.Login.path} />;
  }

  const formattedDate = moment(new Date(user?.last_login * 1000)).format(
    'yyyy-MM-DD HH:mm:ss',
  );

  const firstName = !user?.data?.first_name
    ? 'USER'
    : user?.data?.first_name.slice(0, 1);

  const lastName = !user?.data?.last_name
    ? ''
    : user?.data?.last_name.slice(0, 1);

  const userStatusClasses = classNames('acc-status', {
    'acc-status--unverified': sumsub?.status !== 1,
    'acc-status--verified': sumsub?.status === 1,
  });

  const hiddenEmail = hideEmail(user?.email, 3);

  const handleOpenSumSubModal = () => {
    openModal(() => (
      <ModalIframe
        accessToken={token}
        url={kycUrl || ''}
        name="basic-kyc"
        email={user?.data?.email}
        phone={user?.data?.phone || ''}
        messages=""
      />
    ));
  };

  return (
    <section className="account-section">
      <div className="custom-container">
        <p className="block-main-title">
          {L.translate('Pages.Users.Verification.item1')}
        </p>

        <div className="account-wrap">
          <div className="account-box">
            <div className="account-top-panel">
              <div className="protect-personal">
                <p className="block-title">
                  {L.translate('Pages.Users.Verification.item2')}
                </p>

                <Link
                  to={{
                    pathname: routes.Static.PrivacyAndTerms.path,
                    search: redirectLocation,
                  }}
                  className="protect-personal-btn"
                >
                  <span className="d-flex protect-personal-btn__icon">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 7.81429V8.50429C15.9991 10.1216 15.4754 11.6953 14.507 12.9907C13.5386 14.286 12.1775 15.2336 10.6265 15.6922C9.07557 16.1508 7.41794 16.0957 5.90085 15.5352C4.38376 14.9747 3.08849 13.9389 2.20822 12.5821C1.32795 11.2253 0.909843 9.62034 1.01626 8.00653C1.12267 6.39271 1.7479 4.85654 2.79871 3.6271C3.84951 2.39766 5.26959 1.54083 6.84714 1.1844C8.42469 0.827975 10.0752 0.991046 11.5525 1.64929"
                        stroke="black"
                        strokeWidth="1.38"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 2.50439L8.5 10.0119L6.25 7.76189"
                        stroke="#00D496"
                        strokeWidth="1.38"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {L.translate('Pages.Users.Verification.item3')}
                  <span className="d-flex protect-personal-btn__arrow">
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11L6 6L1 1"
                        stroke="#080A0D"
                        strokeWidth="1.67107"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>

              <div className={userStatusClasses}>{personStatus}</div>
            </div>

            <div className="account-user">
              <div className="account-user__name">
                <p>
                  {firstName}
                  {lastName}
                </p>
              </div>

              <div className="account-user__info">
                <div className="acc-details">
                  <p className="acc-details__email">{hiddenEmail}</p>
                </div>

                <div className="acc-extra">
                  <p>
                    {L.translate('Pages.Users.Verification.item4')}{' '}
                    {formattedDate}
                  </p>

                  <p>IP: {user?.data?.last_login_ip}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="account-box account-box--type2">
            <div className="account-box__title">
              <p className="block-title">
                {L.translate('Pages.Users.Verification.item5')}
              </p>
            </div>

            <div className="account-item">
              <div className="account-item__main">
                <div className="account-info">
                  <div className="personal-info">
                    <div className="d-flex personal-info__icon">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="14"
                          cy="14"
                          r="13"
                          stroke="#121214"
                          strokeWidth="2"
                        />
                        <path
                          d="M13.9998 13.2222C15.718 13.2222 17.1109 11.8293 17.1109 10.1111C17.1109 8.39289 15.718 7 13.9998 7C12.2816 7 10.8887 8.39289 10.8887 10.1111C10.8887 11.8293 12.2816 13.2222 13.9998 13.2222Z"
                          stroke="#2DDD9D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20.2223 20.2214V18.6658C20.2223 17.8407 19.8945 17.0494 19.3111 16.4659C18.7276 15.8825 17.9363 15.5547 17.1112 15.5547H10.8889C10.0638 15.5547 9.2725 15.8825 8.68906 16.4659C8.10561 17.0494 7.77783 17.8407 7.77783 18.6658V20.2214"
                          stroke="#2DDD9D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="personal-info__title">
                      {L.translate('Pages.Users.Verification.item6')}
                    </p>
                  </div>

                  {!sumsub && (
                    <>
                      <p className="account-info__title">
                        {L.translate('Pages.Users.Verification.item7')}
                      </p>

                      <div className="account-info__text">
                        • {L.translate('Pages.Users.Verification.item8')}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="account-item__action">
                <button
                  className="button button--full"
                  type="button"
                  onClick={handleOpenSumSubModal}
                >
                  {L.translate('Pages.Users.Verification.item9')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verification;
