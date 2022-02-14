import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEncryptedData } from '../../../../../../../services/encodeCard';
import { closeModal } from '../../../../../Modal';
import CardNumber from './CardNumber';
import CardMonth from './CardMonth/CardMonth';
import CardYear from './CardYear';
import CardCVV from './CardCVV';
import { Input } from '../../../../../FormControls';
import {
  requiredValue,
  validateEmail,
  validatePhone,
} from '../../../../../../../services/validators';
import { circlePublicKeySelector } from '../../../../../../../redux/wallets/selectors';
import types from '../../../../../../../redux/types';
import closeIcon from '../../../../../../../styles/img/closeIcon.svg';

const Circle = ({ amount, assetID }) => {
  const dispatch = useDispatch();
  const circlePublicKey = useSelector(circlePublicKeySelector);

  // Card refs
  const cardMonthRef = React.createRef();
  const cardYearRef = React.createRef();
  const cardCVVRef = React.createRef();

  const initState = {
    value: null,
    error: null,
  };

  // Is valid card on form submit
  const [isValidateField, setIsValidateField] = useState(false);

  // Card Fields
  const [cardNumber, setCardNumber] = useState({
    value: null,
    error: null,
    cardType: null,
  });
  const [cardMonth, setMonthInfo] = useState(initState);
  const [cardYear, setYearInfo] = useState(initState);
  const [cvvValue, setCVVValue] = useState(initState);

  // Encrypted card number & cvv code

  const initialValues = {
    amount,
    exp_month: '',
    exp_year: '',
    name: '',
    email: '',
    phone_number: '',
    city: '',
    country: '',
    line1: '',
    district: '',
    postal_code: '',
    idempotency_key: uuidv4(),
    session_id: uuidv4(),
  };

  const validateCardFields = () => {
    if (
      !cardNumber.value &&
      !cardMonth.value &&
      !cardYear.value &&
      !cvvValue.value
    ) {
      setIsValidateField(true);
    } else {
      setIsValidateField(false);
    }
  };

  const handleSubmit = async values => {
    if (
      cardMonth.value &&
      cardYear.value &&
      cardNumber.value &&
      cvvValue.value &&
      circlePublicKey.publicKey
    ) {
      const encryptedCard = await fetchEncryptedData(
        circlePublicKey,
        cardNumber,
        cvvValue,
      );

      dispatch({
        type: types.CREATE_CIRCLE_CARD_START,
        payload: {
          ...values,
          key_id: circlePublicKey?.keyId,
          exp_month: +cardMonth.value,
          exp_year: +cardYear.value + 2000,
          encrypted_data: encryptedCard,
        },
        assetID,
        cardData: cardNumber,
        cvvData: cvvValue,
      });
    } else {
      validateCardFields();
    }
  };

  useEffect(() => {
    dispatch({ type: types.GET_CIRCLE_PUBLIC_KEY_START });
  }, []);

  return (
    <div className="modal modal--medium">
      <button className="close-modal" type="button" onClick={closeModal}>
        <img
          src={closeIcon}
          alt={L.translate(
            'Base.Modals.Users.Deposit.Circle.CircleComponent.item1',
          )}
        />
      </button>

      <div className="modal-header">
        <p className="modal-title modal-title--left">
          {L.translate(
            'Base.Modals.Users.Deposit.Circle.CircleComponent.item15',
          )}
        </p>
      </div>

      <Formik initialValues={{ ...initialValues }} onSubmit={handleSubmit}>
        {({ setFieldValue, resetForm, handleChange, ...formik }) => {
          return (
            <Form className="modal-body" autoComplete="off">
              <div className="modal-group">
                <p className="modal-group__title">
                  {L.translate(
                    'Base.Modals.Users.Deposit.Circle.CircleComponent.item2',
                  )}
                </p>

                <div className="modal-group__content">
                  <div className="modal-field">
                    <p className="field-label">
                      {L.translate(
                        'Base.Modals.Users.Deposit.Circle.CircleComponent.item3',
                      )}
                    </p>

                    <Field
                      name="amount"
                      type="text"
                      className="input"
                      component={Input}
                      placeholder={L.translate(
                        'Base.Modals.Users.Deposit.Circle.CircleComponent.item4',
                      )}
                      validate={requiredValue}
                      disabled
                    />
                  </div>

                  <CardNumber
                    monthRef={cardMonthRef}
                    onValidCardNumber={setCardNumber}
                    isValidateField={isValidateField}
                  />

                  <div className="row">
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-6">
                          <CardMonth
                            monthRef={cardMonthRef}
                            yearRef={cardYearRef}
                            yearInfo={cardYear}
                            onValidMonth={setMonthInfo}
                            isValidateField={isValidateField}
                          />
                        </div>

                        <div className="col-6">
                          <CardYear
                            yearRef={cardYearRef}
                            onValidYear={setYearInfo}
                            cvvRef={cardCVVRef}
                            isValidateField={isValidateField}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <CardCVV
                        cvvRef={cardCVVRef}
                        onValidCVV={setCVVValue}
                        cardType={cardNumber}
                        isValidateField={isValidateField}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-group">
                <p className="modal-group__title">
                  {L.translate(
                    'Base.Modals.Users.Deposit.Circle.CircleComponent.item5',
                  )}
                </p>

                <div className="modal-group__content">
                  <div className="modal-field">
                    <Field
                      name="name"
                      type="text"
                      className="input"
                      component={Input}
                      placeholder={L.translate(
                        'Base.Modals.Users.Deposit.Circle.CircleComponent.item6',
                      )}
                      validate={requiredValue}
                    />
                  </div>

                  <div className="modal-field modal-field--mt">
                    <Field
                      name="email"
                      type="text"
                      className="input"
                      component={Input}
                      placeholder={L.translate(
                        'Base.Modals.Users.Deposit.Circle.CircleComponent.item7',
                      )}
                      validate={validateEmail}
                    />
                  </div>

                  <div className="modal-field modal-field--mt">
                    <Field
                      name="phone_number"
                      type="tel"
                      className="input"
                      component={Input}
                      placeholder={L.translate(
                        'Base.Modals.Users.Deposit.Circle.CircleComponent.item8',
                      )}
                      validate={validatePhone}
                    />
                  </div>

                  <div className="modal-field modal-field--mt">
                    <Field
                      name="line1"
                      type="text"
                      className="input"
                      component={Input}
                      placeholder={L.translate(
                        'Base.Modals.Users.Deposit.Circle.CircleComponent.item9',
                      )}
                      validate={requiredValue}
                    />
                  </div>

                  <div className="modal-field modal-field--mt">
                    <Field
                      name="city"
                      type="text"
                      className="input"
                      component={Input}
                      placeholder={L.translate(
                        'Base.Modals.Users.Deposit.Circle.CircleComponent.item10',
                      )}
                      validate={requiredValue}
                    />
                  </div>

                  <div className="modal-field modal-field--mt">
                    <Field
                      name="country"
                      type="text"
                      className="input"
                      component={Input}
                      placeholder={L.translate(
                        'Base.Modals.Users.Deposit.Circle.CircleComponent.item11',
                      )}
                      maxLength={2}
                      validate={requiredValue}
                    />
                  </div>

                  <div className="modal-field modal-field--mt">
                    <Field
                      name="district"
                      type="text"
                      className="input"
                      component={Input}
                      maxLength={2}
                      placeholder={L.translate(
                        'Base.Modals.Users.Deposit.Circle.CircleComponent.item12',
                      )}
                      validate={requiredValue}
                    />
                  </div>

                  <div className="modal-field modal-field--mt">
                    <Field
                      name="postal_code"
                      type="text"
                      className="input"
                      component={Input}
                      placeholder={L.translate(
                        'Base.Modals.Users.Deposit.Circle.CircleComponent.item13',
                      )}
                      validate={requiredValue}
                    />
                  </div>
                </div>
              </div>

              <div className="form-submit">
                <button
                  className="button"
                  type="submit"
                  onClick={validateCardFields}
                >
                  {L.translate(
                    'Base.Modals.Users.Deposit.Circle.CircleComponent.item14',
                  )}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Circle;
