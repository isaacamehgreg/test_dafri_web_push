import React, { useState } from 'react';
import L from 'i18n-react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { buyDBASelector } from '../../../../../../redux/users/buyDBA/selectors';
import routes from '../../../../../../routes';
import { cropNumber } from '../../../../../../services/helpers';

const BuyFormStep1 = () => {
  const history = useHistory();
  const { step1FormData, goToNextStepForm } = useSelector(buyDBASelector);
  const [checked, setChecked] = useState(false);

  if (!step1FormData || !goToNextStepForm) {
    return <Redirect to={routes.Static.BuyDBA.path} />;
  }

  const {
    participation_number,
    amount,
    selectedCurrency: { code },
  } = step1FormData;

  const goToStep2 = () =>
    checked ? history.push(routes.Static.BuyDBAFormStep2.path) : false;

  return (
    <section className="order-section">
      <div className="custom-container">
        <div className="dba-order dba-order--big">
          <div className="dba-order__left">
            <p className="block-title">
              {L.translate('Pages.Statics.BuyDBA.BuyForm.BuyFormStep1.item1')}
            </p>
            <p className="block-note dba-order__note">
              {L.translate('Pages.Statics.BuyDBA.BuyForm.BuyFormStep1.item2')}
              <span className="d-flex block-note__icon">
                <svg
                  className="fill"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.707 0.292799C13.8946 0.480335 14 0.734654 14 0.999829C14 1.265 13.8946 1.51932 13.707 1.70686L5.6998 9.7072C5.51211 9.89468 5.25757 10 4.99217 10C4.72677 10 4.47223 9.89468 4.28454 9.7072L0.280963 5.70703C0.0986418 5.51842 -0.00224262 5.26581 3.78364e-05 5.0036C0.00231829 4.74139 0.107581 4.49057 0.293155 4.30515C0.478729 4.11974 0.729765 4.01456 0.992197 4.01228C1.25463 4.01001 1.50746 4.1108 1.69623 4.29297L4.99217 7.58611L12.2917 0.292799C12.4794 0.10532 12.7339 0 12.9993 0C13.2647 0 13.5193 0.10532 13.707 0.292799Z"
                    fill="#3DD598"
                  />
                </svg>
              </span>
            </p>

            <div className="check-wrap dba-order__check">
              <input
                type="checkbox"
                className="new-check "
                id="dba-order"
                name="order"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />

              <label htmlFor="dba-order">
                <span className="check-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 26 26"
                    width="26"
                    height="26"
                    fill="#fff"
                  >
                    <path d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z" />
                  </svg>
                </span>

                <span>
                  {L.translate(
                    'Pages.Statics.BuyDBA.BuyForm.BuyFormStep1.item3',
                  )}{' '}
                  <Link to={routes.Static.PrivacyAndTerms.path}>
                    {L.translate(
                      'Pages.Statics.BuyDBA.BuyForm.BuyFormStep1.item4',
                    )}
                  </Link>{' '}
                  {L.translate(
                    'Pages.Statics.BuyDBA.BuyForm.BuyFormStep1.item5',
                  )}{' '}
                  <Link to={routes.Static.PrivacyAndTerms.path}>
                    {L.translate(
                      'Pages.Statics.BuyDBA.BuyForm.BuyFormStep1.item6',
                    )}{' '}
                  </Link>
                </span>
              </label>
            </div>

            <div className="form-submit form-submit--start">
              <button
                className="button button--big button--big--round button--wide-width"
                type="button"
                onClick={goToStep2}
                disabled={!checked}
              >
                {L.translate('Pages.Statics.BuyDBA.BuyForm.BuyFormStep1.item7')}
              </button>
            </div>
          </div>

          <div className="dba-order__right">
            <div className="dba-total">
              <p className="block-title">
                {L.translate('Pages.Statics.BuyDBA.BuyForm.BuyFormStep1.item8')}
              </p>

              <div className="total-info-box">
                <div className="total-info">
                  <p className="total-info__name">
                    {L.translate(
                      'Pages.Statics.BuyDBA.BuyForm.BuyFormStep1.item9',
                    )}
                  </p>

                  <div className="total-info__value">
                    <p>{code.toUpperCase()}</p>
                  </div>
                </div>

                <div className="total-info">
                  <p className="total-info__name">
                    {L.translate(
                      'Pages.Statics.BuyDBA.BuyForm.BuyFormStep1.item10',
                    )}
                  </p>

                  <div className="total-info__value">
                    <p>{amount}</p>
                  </div>
                </div>

                <div className="total-info">
                  <p className="total-info__name">
                    {L.translate(
                      'Pages.Statics.BuyDBA.BuyForm.BuyFormStep1.item11',
                    )}
                  </p>

                  <div className="total-info__value">
                    <p>{participation_number}</p>
                  </div>
                </div>

                <div className="total-info">
                  <p className="total-info__name">
                    {L.translate(
                      'Pages.Statics.BuyDBA.BuyForm.BuyFormStep1.item12',
                    )}
                  </p>

                  <div className="total-info__value total-info__value--extra">
                    <p>{cropNumber(goToNextStepForm?.quantity_DBA, 8)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyFormStep1;
