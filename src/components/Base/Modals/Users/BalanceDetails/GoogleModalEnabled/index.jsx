import React, { useEffect } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { closeModal } from '../../../../Modal';
import { Input } from '../../../../FormControls';
import { validate2FA } from '../../../../../../services/validators';
import { settingsSelector } from '../../../../../../redux/users/settings/selectors';
import types from '../../../../../../redux/types';
import closeIcon from '../../../../../../styles/img/closeIcon.svg';

const GoogleModalEnabled = () => {
  const dispatch = useDispatch();
  const settings = useSelector(settingsSelector);
  const googleData = settings.google2fa;

  const initialValue = {
    totp: '',
  };

  const submitHandler = (values, { resetForm }) => {
    dispatch({
      type: types.ENABLE_GOOGLE_2FA_START,
      payload: values.totp,
    });

    resetForm();
    closeModal();
  };

  useEffect(() => {
    dispatch({ type: types.GENERATE_GOOGLE_SECRET_START });
  }, [dispatch]);

  return (
    <div className="modal modal--medium">
      <button className="close-modal" onClick={closeModal}>
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="modal-header">
        <p className="modal-title">
          {L.translate(
            'Base.Modals.Users.BalanceDetails.GoogleModalEnabled.item1',
          )}
        </p>
      </div>

      <div className="modal-body">
        <div className="modal-text">
          <p>
            {L.translate(
              'Base.Modals.Users.BalanceDetails.GoogleModalEnabled.item2',
            )}
          </p>
        </div>

        <div className="tfa-qr">
          <div className="tfa-qr__item">
            <svg
              width="113"
              height="112"
              viewBox="0 0 113 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="113" height="112" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0"
                    transform="translate(-0.000185223) scale(0.00461)"
                  />
                </pattern>
                <image
                  id="image0"
                  width="217"
                  height="215"
                  xlinkHref={googleData?.QR_Image}
                />
              </defs>
            </svg>
          </div>

          <p className="tfa-qr__code">{googleData?.secret}</p>
        </div>

        <div className="tfa-info">
          <p className="tfa-info__text">
            {L.translate(
              'Base.Modals.Users.BalanceDetails.GoogleModalEnabled.item3',
            )}
          </p>
          <div className="system-link">
            <a
              href="https://apps.apple.com/app/google-authenticator/id388497605"
              className="system-link__item"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="store-icon "
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="70"
                viewBox="0 0 58 70"
                fill="none"
              >
                <path
                  d="M47.7304 37.02C47.6513 28.2255 54.9314 23.9469 55.2643 23.7477C51.1413 17.7365 44.7507 16.9151 42.505 16.8496C37.1377 16.2848 31.9314 20.0613 29.1972 20.0613C26.4085 20.0613 22.1982 16.9042 17.6604 16.997C11.821 17.087 6.35819 20.4679 3.3621 25.7178C-2.82108 36.4224 1.79038 52.1533 7.71434 60.8059C10.6777 65.0435 14.1404 69.7751 18.6727 69.6086C23.1068 69.4258 24.7631 66.7817 30.1141 66.7817C35.4159 66.7817 36.9712 69.6086 41.5936 69.5022C46.3524 69.4258 49.3485 65.2455 52.2082 60.9696C55.6327 56.1126 57.0079 51.3292 57.0625 51.0836C56.9506 51.0454 47.8205 47.5609 47.7304 37.02Z"
                  fill="black"
                />
                <path
                  d="M38.9986 11.1576C41.3834 8.17512 43.0152 4.11757 42.5622 0C39.1105 0.152806 34.7937 2.38759 32.3079 5.30455C30.1085 7.87496 28.1439 12.088 28.6514 16.0501C32.5289 16.3393 36.51 14.0936 38.9986 11.1576Z"
                  fill="black"
                />
              </svg>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
              className="system-link__item"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="store-icon "
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="74"
                viewBox="0 0 65 74"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.7519 0.0658724C12.9917 -0.0711326 13.2971 0.0121658 13.4341 0.251925L17.9301 8.11994C21.0673 4.92668 25.615 2.49999 32 2.49999C39.1637 2.49999 43.8976 4.92976 47.0249 8.0058L52.0808 0.2275C52.2313 -0.00402995 52.541 -0.0697222 52.7725 0.0807722C53.004 0.231267 53.0697 0.540958 52.9192 0.772488L47.7364 8.74607C51.6624 13.0655 52.7208 18.3251 53 20H12C12.4234 17.0362 13.9654 12.5665 17.2163 8.88632L12.5659 0.748063C12.4289 0.508305 12.5122 0.202877 12.7519 0.0658724ZM12 51.5V22H53V51.5C53 52.5 52.7 54.8 51.5 56C50.3 57.2 48.3333 57.5 47.5 57.5H47V69.5C47 71.9853 44.9853 74 42.5 74C40.0147 74 38 71.9853 38 69.5V57.5H32.5H27V69.5C27 71.9853 24.9853 74 22.5 74C20.0147 74 18 71.9853 18 69.5V57.5C17 57.5 14.7 57.2 13.5 56C12.3 54.8 12 52.5 12 51.5ZM4.5 25C2.01472 25 0 27.0147 0 29.5V48.5C0 50.9853 2.01472 53 4.5 53C6.98528 53 9 50.9853 9 48.5V29.5C9 27.0147 6.98528 25 4.5 25ZM56 29.5C56 27.0147 58.0147 25 60.5 25C62.9853 25 65 27.0147 65 29.5V48.5C65 50.9853 62.9853 53 60.5 53C58.0147 53 56 50.9853 56 48.5V29.5ZM26 12C26 13.1046 25.1046 14 24 14C22.8954 14 22 13.1046 22 12C22 10.8954 22.8954 9.99999 24 9.99999C25.1046 9.99999 26 10.8954 26 12ZM42 14C43.1046 14 44 13.1046 44 12C44 10.8954 43.1046 9.99999 42 9.99999C40.8954 9.99999 40 10.8954 40 12C40 13.1046 40.8954 14 42 14Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="tfa-field">
          <p className="field-label">
            {L.translate(
              'Base.Modals.Users.BalanceDetails.GoogleModalEnabled.item4',
            )}
          </p>

          <Formik onSubmit={submitHandler} initialValues={initialValue}>
            <Form className="field-form" style={{ alignItems: 'flex-start' }}>
              <div className="field-form__input">
                <div className="field-wrap">
                  <Field
                    type="text"
                    name="totp"
                    className="input"
                    placeholder={L.translate(
                      'Base.Modals.Users.BalanceDetails.GoogleModalEnabled.item5',
                    )}
                    validate={validate2FA}
                    component={Input}
                  />
                </div>
              </div>

              <div className="field-form__btn">
                <button className="button button--full" type="submit">
                  {L.translate(
                    'Base.Modals.Users.BalanceDetails.GoogleModalEnabled.item6',
                  )}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default GoogleModalEnabled;
