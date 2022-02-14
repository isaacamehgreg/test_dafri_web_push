import React from 'react';
import L from 'i18n-react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Input } from '../../../../FormControls';
import { validate2FA } from '../../../../../../services/validators';
import { closeModal } from '../../../../Modal';
import types from '../../../../../../redux/types';
import closeIcon from '../../../../../../styles/img/closeIcon.svg';

const GoogleModalDisabled = () => {
  const dispatch = useDispatch();

  const initialValue = {
    totp: '',
  };

  const submitHandler = (values, { resetForm }) => {
    dispatch({
      type: types.DISABLE_GOOGLE_2FA_START,
      payload: values.totp,
    });

    resetForm();
    closeModal();
  };

  return (
    <div className="modal modal--medium">
      <button className="close-modal" onClick={closeModal}>
        <img src={closeIcon} alt="Close" />
      </button>
      <div className="modal-header">
        <p className="modal-title">
          {L.translate(
            'Base.Modals.Users.BalanceDetails.GoogleModalDisabled.item1',
          )}
        </p>
      </div>
      <div className="modal-body">
        <div className="modal-text">
          <p>
            {L.translate(
              'Base.Modals.Users.BalanceDetails.GoogleModalDisabled.item2',
            )}
          </p>
        </div>

        <div className="tfa-info tfa-info--type2">
          <p className="tfa-info__text">
            {L.translate(
              'Base.Modals.Users.BalanceDetails.GoogleModalDisabled.item3',
            )}
          </p>
        </div>
        <Formik onSubmit={submitHandler} initialValues={initialValue}>
          <Form className="tfa-field tfa-field--type2">
            <p className="field-label">
              {L.translate(
                'Base.Modals.Users.BalanceDetails.GoogleModalDisabled.item4',
              )}
            </p>
            <div className="field-form">
              <div className="field-form__input">
                <div className="field-wrap">
                  <Field
                    type="text"
                    name="totp"
                    className="input"
                    placeholder={L.translate(
                      'Base.Modals.Users.BalanceDetails.GoogleModalDisabled.item5',
                    )}
                    validate={validate2FA}
                    component={Input}
                  />
                </div>
              </div>
              <div className="field-form__btn">
                <button className="button button--full" type="submit">
                  {L.translate(
                    'Base.Modals.Users.BalanceDetails.GoogleModalDisabled.item6',
                  )}
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default GoogleModalDisabled;
