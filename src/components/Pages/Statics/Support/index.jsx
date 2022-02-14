import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, TextArea } from '../../../Base/FormControls';
import InputError from '../../../Base/InputError';
import SupportSelect from './SupportSelect';
import types from '../../../../redux/types';
import {
  phoneRegex,
  requiredValue,
  validateEmail,
  validatePhone,
} from '../../../../services/validators';

const Support = () => {
  const dispatch = useDispatch();

  const [select, setSelect] = useState('');
  const [selectError, setSelectError] = useState(true);

  const initialValue = {
    topic: '',
    name: '',
    phone: '',
    email: '',
    text: '',
  };

  const validateSelect = () => setSelectError(!!select);

  const handleSelect = option => {
    setSelectError(option.value);
    setSelect(option.value);
  };

  const handleSubmit = (values, { resetForm }) => {
    validateSelect();

    if (select) {
      dispatch({
        type: types.SEND_SUPPORT_DATA_START,
        payload: { ...values, phone: `+${values.phone}`, department: select },
      });

      resetForm();
    }
  };

  return (
    <section className="support-section">
      <div className="custom-container">
        <div className="support-block">
          <p className="section-title section-title--center">
            {L.translate('Pages.Statics.Support.item1')}
          </p>

          <Formik initialValues={initialValue} onSubmit={handleSubmit}>
            {({ resetForm, handleChange, values, ...formik }) => {
              return (
                <Form className="support-block__forms">
                  <div className="support-form">
                    <p className="form-title">
                      {L.translate('Pages.Statics.Support.item2')}
                    </p>
                    <div className="support-form__body">
                      <div className="field">
                        <div className="field-wrap">
                          <Field
                            type="text"
                            name="topic"
                            className="input input--bg2"
                            placeholder={L.translate(
                              'Pages.Statics.Support.item3',
                            )}
                            component={Input}
                            validate={requiredValue}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="support-form">
                    <p className="form-title">
                      {L.translate('Pages.Statics.Support.item4')}
                    </p>
                    <div className="support-form__body">
                      <SupportSelect
                        id="department"
                        name="department"
                        error={selectError}
                        onChange={handleSelect}
                      />

                      {!selectError && (
                        <InputError
                          errorText={L.translate('Pages.Statics.Support.item5')}
                        />
                      )}
                    </div>
                  </div>

                  <div className="support-form">
                    <p className="form-title">
                      {L.translate('Pages.Statics.Support.item6')}
                    </p>
                    <div className="support-form__body">
                      <div className="field ">
                        <div className="field-wrap">
                          <Field
                            type="text"
                            name="name"
                            className="input input--bg2"
                            placeholder={L.translate(
                              'Pages.Statics.Support.item7',
                            )}
                            component={Input}
                            validate={requiredValue}
                          />
                        </div>
                      </div>

                      <div className="field  field--mt">
                        <div className="field-wrap">
                          <Field
                            type="number"
                            name="phone"
                            className="input input--bg2"
                            placeholder={L.translate(
                              'Pages.Statics.Support.item8',
                            )}
                            component={Input}
                            validate={validatePhone}
                            pattern={phoneRegex}
                          />
                        </div>
                      </div>

                      <div className="field field--mt">
                        <div className="field-wrap">
                          <Field
                            type="text"
                            name="email"
                            className="input input--bg2"
                            placeholder={L.translate(
                              'Pages.Statics.Support.item9',
                            )}
                            component={Input}
                            validate={validateEmail}
                          />
                        </div>
                      </div>

                      <div className="field field--mt">
                        <div className="field-wrap">
                          <Field
                            name="text"
                            className="area-field--bg2 area-field"
                            placeholder={L.translate(
                              'Pages.Statics.Support.item10',
                            )}
                            component={TextArea}
                            validate={requiredValue}
                            rows="5"
                            style={{ width: '100%' }}
                          />
                        </div>
                      </div>

                      <div className="form-submit">
                        <button
                          className="button button--full button--uppercase button--big"
                          type="submit"
                          onClick={validateSelect}
                        >
                          {L.translate('Pages.Statics.Support.item11')}
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>

          <div className="support-content">
            <p className="support-content__title">
              {L.translate('Pages.Statics.Support.item12')}{' '}
              <a href="mailto:support@dafriexchange.com">
                support@dafriexchange.com
              </a>
            </p>

            <div className="support-info-row">
              <div className="support-info">
                <p className="support-info__title">
                  {L.translate('Pages.Statics.Support.item13')}
                </p>
                <div className="support-info__text">
                  <p>
                    T: <a href="tel:+27 011 568 5053">+27 011 568 5053</a>
                  </p>
                  <p>
                    T: <a href="tel:+27 086 560 9785">+27 086 560 9785</a>
                  </p>
                  <p>
                    E:{' '}
                    <a href="mailto:info@dafriexchange.com">
                      info@dafriexchange.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="support-info">
                <p className="support-info__title">
                  {L.translate('Pages.Statics.Support.item14')}
                </p>
                <div className="support-info__text">
                  <p>
                    T: <a href="tel:+27 011 568 5053">+27 011 568 5053</a>
                  </p>
                  <p>
                    T: <a href="tel:+27 086 560 9785">+27 086 560 9785</a>
                  </p>
                  <p>
                    E:{' '}
                    <a href="mailto:support@dafriexchange.com">
                      support@dafriexchange.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="support-info">
                <p className="support-info__title">
                  {L.translate('Pages.Statics.Support.item15')}
                </p>
                <div className="support-info__text">
                  <p>
                    T: <a href="tel:+27 011 568 5053">+27 011 568 5053</a>
                  </p>
                  <p>
                    T: <a href="tel:+27 086 560 9785">+27 086 560 9785</a>
                  </p>
                  <p>
                    E:{' '}
                    <a href="mailto:kyc@dafrigroup.com">kyc@dafrigroup.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="support-social">
              <Link
                to={{ pathname: 'https://www.facebook.com/DafriXchange' }}
                target="_blank"
                className="support-social__item"
                rel="noreferrer"
              >
                <svg
                  className="fill"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.7982 0.0332392C13.2564 0.378797 8.16632 2.95623 4.62203 7.21155C0.239165 12.4737 -1.1396 19.6339 0.97203 26.1667C3.302 33.3751 9.55796 38.6741 17.0482 39.7837C21.6355 40.4633 26.3473 39.5289 30.2815 37.1595C34.4147 34.6702 37.5364 30.7531 39.014 26.2019C41.1389 19.6564 39.7639 12.4816 35.3744 7.21155C32.2649 3.47825 27.9472 1.01721 23.1601 0.249442C21.7826 0.0285051 20.162 -0.0518084 18.7982 0.0332392ZM25.3149 8.21462C25.7182 8.24162 26.0969 8.26409 26.1565 8.26463L26.2649 8.26553V10.1967V12.1278L24.8232 12.1408C23.4627 12.153 23.3665 12.1579 23.1149 12.2272C22.4538 12.4092 22.121 12.7279 21.9429 13.3497C21.8932 13.5234 21.884 13.7636 21.873 15.175L21.8603 16.8003H23.9322H26.0041L25.9844 16.9253C25.9735 16.9941 25.8598 17.898 25.7315 18.934C25.6033 19.97 25.4895 20.8739 25.4787 20.9427L25.459 21.0677H23.6619H21.8649V26.4686V31.8695H19.7315H17.5982V26.4686V21.0677H15.7982H13.9982V18.934V16.8003H15.7982H17.5982L17.5982 15.0917C17.5983 13.2794 17.6189 12.8894 17.7483 12.2476C18.215 9.93341 19.9111 8.42175 22.3275 8.16638C22.7093 8.12604 24.3988 8.15331 25.3149 8.21462Z"
                    fill="white"
                  />
                </svg>
              </Link>

              <Link
                to={{ pathname: 'https://twitter.com/DafriXchange' }}
                target="_blank"
                className="support-social__item"
                rel="noreferrer"
              >
                <svg
                  className="fill"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.1282 0.0469404C14.236 0.423467 10.3781 2.0059 7.35292 4.4667C6.46309 5.19056 5.05422 6.61048 4.34453 7.49888C2.55009 9.74504 1.0796 12.7833 0.46973 15.5046C0.0867435 17.2139 0 18.0448 0 20.0057C0 21.9665 0.0867435 22.7974 0.46973 24.5068C1.09291 27.2873 2.60176 30.3691 4.45586 32.6479C5.17979 33.5376 6.59986 34.9463 7.48836 35.6559C9.73476 37.4502 12.7734 38.9205 15.4949 39.5303C17.2044 39.9133 18.0354 40 19.9965 40C21.9575 40 22.7886 39.9133 24.4981 39.5303C26.5443 39.0718 29.2198 37.9286 30.978 36.7616C34.0273 34.7373 36.3693 32.074 37.9684 28.8122C38.9478 26.8141 39.5041 25.0246 39.8546 22.7455C40.0485 21.4844 40.0485 18.527 39.8546 17.2659C39.5041 14.9867 38.9478 13.1973 37.9684 11.1992C36.9231 9.06698 35.758 7.44486 34.076 5.78009C32.4246 4.1456 30.9118 3.07152 28.8039 2.03682C26.8294 1.06755 25.0015 0.495954 22.8149 0.163969C21.8316 0.014689 19.1528 -0.0522403 18.1282 0.0469404ZM27.4519 8.55628C28.2661 8.83543 28.8711 9.18346 29.4436 9.70199C29.8411 10.062 29.8828 10.0806 30.1845 10.0323C30.7381 9.94387 32.1423 9.45376 32.8749 9.09344C33.2624 8.90283 33.5927 8.75997 33.6089 8.77601C33.6613 8.82807 33.3772 9.46558 33.0919 9.9362C32.7396 10.5172 31.9748 11.3378 31.4674 11.6796C31.2523 11.8244 31.1232 11.9428 31.1804 11.9428C31.4892 11.9428 32.9401 11.5902 33.5965 11.3556C34.0125 11.2069 34.3642 11.0965 34.378 11.1104C34.3918 11.1242 34.2733 11.3084 34.1148 11.5196C33.5513 12.27 32.8205 13.0373 32.1684 13.5628L31.5072 14.0955L31.506 15.0518C31.4992 20.6689 28.2525 26.4707 23.5023 29.3543C20.8605 30.958 17.9413 31.7477 14.6543 31.7477C11.8024 31.7477 9.26245 31.1257 6.75902 29.8143C5.41129 29.1083 5.41379 29.1207 6.62891 29.1517C9.25454 29.2187 11.7867 28.4589 13.8308 26.9905C14.2485 26.6905 14.2262 26.5845 13.7447 26.5824C13.3965 26.5808 12.6313 26.3787 12.0548 26.1361C11.1038 25.7358 10.0162 24.8229 9.46616 23.9633C9.22166 23.581 8.80141 22.7188 8.80118 22.5988C8.8011 22.5718 9.18596 22.5616 9.65648 22.5761C10.1522 22.5913 10.7036 22.5613 10.9679 22.5045L11.4239 22.4067L11.1314 22.3426C10.9705 22.3075 10.6182 22.1862 10.3485 22.0733C8.36503 21.2426 6.89086 19.2394 6.71276 17.1326C6.68622 16.8184 6.67846 16.5615 6.69553 16.5616C6.7126 16.5617 6.98763 16.6683 7.30665 16.7982C7.74718 16.9777 8.94139 17.2659 9.24476 17.2659C9.26214 17.2659 8.98077 16.9753 8.61955 16.6201C7.68424 15.7004 7.14765 14.7782 6.88233 13.6342C6.70696 12.8782 6.72293 11.6591 6.91818 10.8994C7.07844 10.2757 7.45266 9.35341 7.53979 9.36718C7.56618 9.37141 7.87252 9.69721 8.22051 10.0913C10.4797 12.6493 13.9394 14.5712 17.5304 15.2628C18.1471 15.3815 19.6949 15.5582 19.7384 15.5147C19.7506 15.5025 19.7237 15.1983 19.6786 14.8386C19.3664 12.3489 20.7559 9.89174 23.0947 8.79739C24.0012 8.37326 24.5907 8.26148 25.7507 8.29373C26.6317 8.31823 26.8603 8.35346 27.4519 8.55628Z"
                    fill="white"
                  />
                </svg>
              </Link>

              <Link
                to={{
                  pathname:
                    'https://www.youtube.com/channel/UCZr7NIhlmOJ_Zkgf5O1Vxig/featured',
                }}
                target="_blank"
                rel="noreferrer"
                className="support-social__item"
              >
                <svg
                  className="fill"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.1282 0.0469404C14.236 0.423467 10.3781 2.0059 7.35292 4.4667C6.46309 5.19056 5.05422 6.61048 4.34453 7.49888C2.55009 9.74504 1.0796 12.7833 0.46973 15.5046C0.0867435 17.2139 0 18.0448 0 20.0057C0 21.9665 0.0867435 22.7974 0.46973 24.5068C1.09291 27.2873 2.60176 30.3691 4.45586 32.6479C5.17979 33.5376 6.59986 34.9463 7.48836 35.6559C9.73476 37.4502 12.7734 38.9205 15.4949 39.5303C17.2044 39.9133 18.0354 40 19.9965 40C21.9575 40 22.7886 39.9133 24.4981 39.5303C26.5443 39.0718 29.2198 37.9286 30.978 36.7616C34.0273 34.7373 36.3693 32.074 37.9684 28.8122C38.9478 26.8141 39.5041 25.0246 39.8546 22.7455C40.0485 21.4844 40.0485 18.527 39.8546 17.2659C39.5041 14.9867 38.9478 13.1973 37.9684 11.1992C36.9231 9.06698 35.758 7.44486 34.076 5.78009C32.4246 4.1456 30.9118 3.07152 28.8039 2.03682C26.8294 1.06755 25.0015 0.495954 22.8149 0.163969C21.8316 0.014689 19.1528 -0.0522403 18.1282 0.0469404ZM27.7079 10.295C30.3952 10.4835 31.0766 10.5834 31.692 10.8794C33.1628 11.5867 33.7466 12.8015 34.0089 15.7003C34.1466 17.2222 34.1928 20.9337 34.0966 22.7455C33.9037 26.3778 33.6001 27.5397 32.5929 28.5003C31.9026 29.1587 31.3481 29.3792 30.0355 29.5175C27.578 29.7763 25.9005 29.8282 19.9965 29.8282C14.0924 29.8282 12.415 29.7763 9.95749 29.5175C8.64671 29.3794 8.09016 29.1585 7.40318 28.5033C6.69968 27.8323 6.43342 27.2578 6.1858 25.8767C5.76782 23.5454 5.72037 17.618 6.09686 14.7609C6.32719 13.0126 6.63517 12.2405 7.38901 11.5216C8.0918 10.8513 8.63818 10.6328 9.96055 10.4934C10.9112 10.3931 12.8776 10.268 14.712 10.1908C16.1453 10.1305 26.5526 10.214 27.7079 10.295ZM16.3169 19.7337V24.3933L16.5714 24.266C16.7113 24.196 18.7373 23.1502 21.0736 21.9422L25.3213 19.7458L24.9488 19.5368C24.3248 19.1867 16.4127 15.074 16.3632 15.074C16.3378 15.074 16.3169 17.1709 16.3169 19.7337Z"
                    fill="white"
                  />
                </svg>
              </Link>

              <Link
                to={{ pathname: 'https://t.me/DafriExchange' }}
                target="_blank"
                className="support-social__item"
                rel="noreferrer"
              >
                <svg
                  className="fill"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.0993 0.0485652C11.8402 0.699373 6.35464 4.10543 3.02231 9.41021C-1.70363 16.9336 -0.811427 26.9221 5.16787 33.4297C8.49112 37.0467 12.6067 39.1978 17.5508 39.902C18.4802 40.0343 21.5538 40.0321 22.5188 39.8985C27.388 39.2241 31.5003 37.0778 34.8179 33.4792C37.5455 30.5207 39.2956 26.731 39.9018 22.4705C40.0327 21.5496 40.0327 18.4598 39.9018 17.539C39.439 14.2861 38.4094 11.5208 36.699 8.93623C35.9716 7.83704 35.2451 6.95023 34.2329 5.92595C31.1053 2.76092 27.2449 0.813033 22.7927 0.153458C21.8329 0.0112263 19.0552 -0.0507703 18.0993 0.0485652ZM29.4898 12.1994C29.8606 12.4489 29.9877 12.8558 29.8866 13.4685C29.7242 14.4513 26.5024 29.4992 26.4199 29.6599C26.3723 29.7528 26.243 29.9256 26.1326 30.044C25.9692 30.2192 25.8643 30.2592 25.5677 30.2592C25.0962 30.2592 24.8151 30.1033 23.4374 29.0772C22.8246 28.6209 21.7466 27.8208 21.0419 27.2992L19.7606 26.351L18.4601 27.6102C17.0891 28.9376 16.8058 29.1625 16.5041 29.163C16.3279 29.1633 16.3204 29.1434 16.3626 28.7915C16.3872 28.587 16.4683 27.4452 16.543 26.2541L16.6787 24.0885L18.4404 22.4967C19.4092 21.6213 21.5066 19.7285 23.1011 18.2906C24.6957 16.8526 26.0287 15.6283 26.0632 15.5698C26.2214 15.3023 25.8788 15.2257 25.4683 15.4368C25.3306 15.5076 22.7887 17.0984 19.8197 18.9719C16.8506 20.8453 14.2981 22.4542 14.1475 22.5474L13.8737 22.7167L11.331 21.9221C9.93254 21.485 8.67239 21.0668 8.5307 20.9928C8.02843 20.7305 8.05135 20.2616 8.58445 19.8943C8.73959 19.7874 13.1265 18.0562 18.3332 16.0471C23.5398 14.038 28.011 12.3118 28.2692 12.2111C28.8663 11.9781 29.1573 11.9754 29.4898 12.1994Z"
                    fill="#292929"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
