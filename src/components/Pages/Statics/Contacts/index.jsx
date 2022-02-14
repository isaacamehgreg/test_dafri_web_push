import React from 'react';
import L from 'i18n-react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input, TextArea } from '../../../Base/FormControls';
import {
  phoneRegex,
  requiredValue,
  validateEmail,
  validatePhone,
} from '../../../../services/validators';
import { closeModal, openModal } from '../../../Base/Modal';
import Captcha from '../../../Base/Modals/Captcha';
import types from '../../../../redux/types';
import mapImage from '../../../../styles/img/contact-map.png';

const Contacts = () => {
  const dispatch = useDispatch();

  const initValue = {
    email: '',
    name: '',
    phone: '',
    topic: '',
    text: '',
  };

  const handleCaptcha = (value, formValues, resetForm) => {
    closeModal();

    dispatch({
      type: types.CONTACT_US_SEND_START,
      payload: { ...formValues, phone: `+${formValues.phone}`, captcha: value },
    });

    resetForm();
  };

  const openCaptcha = (values, resetForm) => {
    openModal(() => (
      <Captcha
        handleCaptcha={value => handleCaptcha(value, values, resetForm)}
      />
    ));
  };

  const handleSubmit = (values, { resetForm }) => {
    openCaptcha(values, resetForm);
  };

  return (
    <section className="info-section">
      <div className="custom-container">
        <p className="section-title section-title--center">
          {L.translate('Pages.Statics.Contacts.item1')}
        </p>

        <div className="section-content">
          <div className="contact-box">
            <div className="contact-box__info">
              <p className="contact-box__info-title">
                {L.translate('Pages.Statics.Contacts.item2')}
              </p>

              <div className="contact-general">
                <p className="item-title item-title--white contact-general__title">
                  {L.translate('Pages.Statics.Contacts.item3')}
                </p>

                <div className="contact-general__text">
                  <p>
                    <span>t /</span>{' '}
                    <a href="tel:+27 11 568 5053">+27 11 568 5053</a>
                  </p>

                  <p>
                    <span>e / </span>{' '}
                    <a href="mailto:info@dafriexchange.com">
                      info@dafriexchange.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <Formik onSubmit={handleSubmit} initialValues={initValue}>
              {({ resetForm, ...formik }) => (
                <Form className="contact-box__form">
                  <div className="contact-form">
                    <div className="field">
                      <div className="field-wrap">
                        <Field
                          type="text"
                          name="email"
                          className="input input--bg2"
                          placeholder={L.translate(
                            'Pages.Statics.Contacts.item4',
                          )}
                          component={Input}
                          validate={validateEmail}
                        />
                      </div>
                    </div>

                    <div className="field field--mt ">
                      <div className="field-wrap">
                        <Field
                          type="text"
                          name="name"
                          className="input input--bg2"
                          placeholder={L.translate(
                            'Pages.Statics.Contacts.item5',
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
                            'Pages.Statics.Contacts.item6',
                          )}
                          component={Input}
                          pattern={phoneRegex}
                          validate={validatePhone}
                        />
                      </div>
                    </div>

                    <div className="field  field--mt">
                      <div className="field-wrap">
                        <Field
                          type="text"
                          name="topic"
                          className="input input--bg2"
                          placeholder={L.translate(
                            'Pages.Statics.Contacts.item7',
                          )}
                          component={Input}
                          validate={requiredValue}
                        />
                      </div>
                    </div>

                    <div className="field field--mt">
                      <div className="field-wrap">
                        <Field
                          className="area-field area-field--bg2"
                          name="text"
                          placeholder={L.translate(
                            'Pages.Statics.Contacts.item8',
                          )}
                          rows="5"
                          style={{ width: '100%' }}
                          component={TextArea}
                          validate={requiredValue}
                        />
                      </div>
                    </div>

                    <div className="form-submit justify-content-start">
                      <button
                        className="button button--wide button--uppercase button--big"
                        type="submit"
                      >
                        {L.translate('Pages.Statics.Contacts.item9')}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="contact-address-box">
            <div className="contact-address-box__info">
              <div className="contact-address">
                <p className="item-title contact-address__title">
                  {L.translate('Pages.Statics.Contacts.item10')}
                </p>

                <div className="contact-address__text">
                  <p>{L.translate('Pages.Statics.Contacts.item11')}</p>
                  <p>{L.translate('Pages.Statics.Contacts.item12')}</p>
                  <p>{L.translate('Pages.Statics.Contacts.item13')}</p>
                  <p>{L.translate('Pages.Statics.Contacts.item14')}</p>
                </div>

                <Link
                  to={{ pathname: 'https://goo.gl/maps/SamavWq4m6Esyfhh7' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-address__link"
                >
                  {L.translate('Pages.Statics.Contacts.item15')}
                </Link>
              </div>

              <div className="contact-address">
                <p className="item-title contact-address__title">
                  {L.translate('Pages.Statics.Contacts.item16')}
                </p>

                <div className="contact-address__text">
                  <p>{L.translate('Pages.Statics.Contacts.item17')}</p>
                  <p>{L.translate('Pages.Statics.Contacts.item18')}</p>
                  <p>{L.translate('Pages.Statics.Contacts.item19')}</p>
                  <p>{L.translate('Pages.Statics.Contacts.item20')}</p>
                </div>

                <Link
                  to={{ pathname: 'https://goo.gl/maps/SMBVnKLzuZJNs7mKA' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-address__link"
                >
                  {L.translate('Pages.Statics.Contacts.item21')}
                </Link>
              </div>
            </div>

            <div className="contact-address-box__map">
              <div className="contact-map">
                <div className="contact-map__item">
                  <img src={mapImage} alt="" />
                </div>

                <Link
                  to={{ pathname: 'https://goo.gl/maps/SamavWq4m6Esyfhh7' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex contact-map__btn"
                >
                  {L.translate('Pages.Statics.Contacts.item22')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
