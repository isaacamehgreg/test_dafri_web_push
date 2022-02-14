import React, { useEffect, useRef, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import routes from '../../../../../routes';
import { Input } from '../../../../Base/FormControls';
import { requiredValue } from '../../../../../services/validators';
import {
  participationNumberSelector,
  tokenSelector,
} from '../../../../../redux/auth/selectors';
import { allAssetsSelector } from '../../../../../redux/wallets/selectors';
import { buyDBAFormStep1 } from '../../../../../redux/users/buyDBA/selectors';
import notification from '../../../../../services/notification';
import types from '../../../../../redux/types';

const BuyDBAForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector(tokenSelector);
  const assets = useSelector(allAssetsSelector);
  const goToNextStep = useSelector(buyDBAFormStep1);
  const participantNumber = useSelector(participationNumberSelector);

  const [dropDown, setDropdown] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const dropdownRef = useRef(null);

  const initialValue = {
    participation_number: '',
    amount: '',
  };

  const handleCurrencySelect = currency => {
    setSelectedCurrency(currency);
    setDropdown(false);
  };

  const handleOutsideClick = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdown(false);
    }
  };

  const handleSubmit = values => {
    if (selectedCurrency) {
      dispatch({
        type: types.CHECK_DBA_START,
        payload: {
          ...values,
          asset_id: selectedCurrency.id.toString(),
          type_form: 1,
          selectedCurrency,
        },
        history,
      });
    }
  };

  const handleParticipation = () => {
    if (!isLogin) {
      notification({
        type: 'info',
        timeOut: 5000,
        message:
          'In order to get Participation Number you need to have an account',
      });
    } else {
      history.push(routes.Static.Investment.path);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick, true);
    return () =>
      document.body.removeEventListener('click', handleOutsideClick, true);
  }, []);

  useEffect(() => {
    if (assets) handleCurrencySelect(assets[0]);
  }, [assets]);

  useEffect(() => {
    dispatch({ type: types.CHECK_DBA_CLEAR_STEP });
  }, []);

  return (
    <div className="quick-buy-block">
      <div className="quick-buy">
        <p className="item-title item-title--small">
          {L.translate('Pages.Statics.BuyDBA.BuyDBAForm.item1')}
        </p>

        <Formik initialValues={initialValue} onSubmit={handleSubmit}>
          {({ resetForm, handleChange, values, ...formik }) => (
            <Form className="quick-buy__form">
              <div className="field">
                <div className="field-wrap">
                  <Field
                    type="text"
                    name="participation_number"
                    className="input input--round"
                    placeholder={L.translate(
                      'Pages.Statics.BuyDBA.BuyDBAForm.item2',
                    )}
                    component={Input}
                    validate={requiredValue}
                  />
                </div>

                <div className="d-flex field__action">
                  {!participantNumber && (
                    <button
                      type="button"
                      onClick={handleParticipation}
                      className="link"
                    >
                      {L.translate('Pages.Statics.BuyDBA.BuyDBAForm.item3')}
                    </button>
                  )}
                </div>
              </div>
              <div
                className={`field ${
                  !participantNumber ? 'field--special' : ''
                }`}
              >
                <div className="field-wrap">
                  <input
                    type="text"
                    disabled
                    className="input input--round input--with-dropdown"
                    placeholder={L.translate(
                      'Pages.Statics.BuyDBA.BuyDBAForm.item4',
                    )}
                  />

                  <div
                    ref={dropdownRef}
                    className={`input-currency-block ${
                      dropDown ? 'active' : ''
                    }`}
                  >
                    <button
                      className="input-dropdown-btn"
                      type="button"
                      onClick={() => setDropdown(!dropDown)}
                    >
                      {selectedCurrency?.code.toUpperCase()}
                      <span className="d-flex input-dropdown-btn__arrow">
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L6 6.5L11 1.5"
                            stroke="#2B2B2B"
                            strokeWidth="1.92"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    <div className="input-currency-drop">
                      <ul>
                        {assets &&
                          assets.map((asset, i) => (
                            <li key={asset.id}>
                              <button
                                type="button"
                                onClick={() => handleCurrencySelect(asset)}
                              >
                                {asset.code.toUpperCase()}
                              </button>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="field-wrap">
                  <Field
                    type="text"
                    name="amount"
                    className="input input--round"
                    placeholder={L.translate(
                      'Pages.Statics.BuyDBA.BuyDBAForm.item5',
                    )}
                    component={Input}
                    validate={requiredValue}
                  />
                </div>
              </div>
              <div className="quick-buy__submit">
                <button
                  className="button button--big button--big--round"
                  disabled=""
                >
                  {L.translate('Pages.Statics.BuyDBA.BuyDBAForm.item6')}
                </button>
              </div>
              {!isLogin && (
                <div className="d-flex quick-buy__account">
                  <p className="cred-extra">
                    {L.translate('Pages.Statics.BuyDBA.BuyDBAForm.item7')}{' '}
                    <Link to={routes.Auth.Signup.path}>
                      {L.translate('Pages.Statics.BuyDBA.BuyDBAForm.item8')}
                    </Link>
                  </p>
                </div>
              )}

              <div className="d-flex quick-buy__download">
                <a
                  href="/src/docs/DBA Dividend Calculator PDF.pdf"
                  download="DBA Dividend Calculator PDF.pdf"
                  className="link"
                >
                  <span className="d-flex link__icon">
                    <svg
                      className="fill"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3327 16.291C17.3327 16.8663 16.8663 17.3327 16.291 17.3327H1.70768C1.13239 17.3327 0.666016 16.8663 0.666016 16.291C0.666016 15.7157 1.13239 15.2493 1.70768 15.2493H16.291C16.8663 15.2493 17.3327 15.7157 17.3327 16.291ZM8.26279 12.9911C8.46621 13.1946 8.73275 13.2963 8.99935 13.2963C9.26589 13.2963 9.53255 13.1945 9.73591 12.9911L13.4266 9.30049C13.8334 8.89369 13.8334 8.23415 13.4266 7.82734C13.0198 7.42054 12.3603 7.42054 11.9535 7.82734L10.041 9.73978V1.70768C10.041 1.13239 9.57464 0.666016 8.99935 0.666016C8.42406 0.666016 7.95768 1.13239 7.95768 1.70768V9.73978L6.04525 7.82734C5.63844 7.42054 4.97891 7.42054 4.5721 7.82734C4.1653 8.23415 4.1653 8.89369 4.5721 9.30049L8.26279 12.9911Z"
                        fill="#7F65FF"
                      />
                    </svg>
                  </span>
                  {L.translate('Pages.Statics.BuyDBA.BuyDBAForm.item9')}
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className="quick-buy-block__text">
        <p>{L.translate('Pages.Statics.BuyDBA.BuyDBAForm.item10')}</p>
        <p>{L.translate('Pages.Statics.BuyDBA.BuyDBAForm.item11')}</p>
      </div>

      <div className="form-submit">
        <Link
          to={routes.Static.Investment.path}
          className="button button--big button--wider"
        >
          {L.translate('Pages.Statics.BuyDBA.BuyDBAForm.item12')}
        </Link>
      </div>
    </div>
  );
};

export default BuyDBAForm;
