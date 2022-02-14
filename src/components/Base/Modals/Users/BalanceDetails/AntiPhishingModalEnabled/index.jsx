import React from 'react';
import L from 'i18n-react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../../../FormControls';
import { closeModal } from '../../../../Modal';
import { validateAntiPhishing } from '../../../../../../services/validators';
import types from '../../../../../../redux/types';
import closeIcon from '../../../../../../styles/img/closeIcon.svg';

const AntiPhishingModalEnabled = () => {
  const dispatch = useDispatch();

  const initialFormValue = {
    phrase: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch({
      type: types.SET_ANTIPHISHING_PHRASE_START,
      payload: values.phrase,
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
            'Base.Modals.Users.BalanceDetails.AntiPhishingModalEnabled.item1',
          )}
        </p>
      </div>

      <Formik initialValues={initialFormValue} onSubmit={handleSubmit}>
        {({ setFieldValue, ...formik }) => (
          <Form className="modal-body">
            <div className="modal-field">
              <p className="field-label">
                {L.translate(
                  'Base.Modals.Users.BalanceDetails.AntiPhishingModalEnabled.item2',
                )}
              </p>

              <div className="field-wrap">
                <Field
                  type="text"
                  className="input"
                  name="phrase"
                  placeholder={L.translate(
                    'Base.Modals.Users.BalanceDetails.AntiPhishingModalEnabled.item3',
                  )}
                  maxLength={100}
                  component={Input}
                  validate={value => validateAntiPhishing(value)}
                />
              </div>
            </div>

            <div className="form-submit">
              <button className="button button--wider" type="submit">
                {L.translate(
                  'Base.Modals.Users.BalanceDetails.AntiPhishingModalEnabled.item4',
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AntiPhishingModalEnabled;
