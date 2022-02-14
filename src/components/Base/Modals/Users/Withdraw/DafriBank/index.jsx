import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Input, TextArea } from '../../../../FormControls';
import { closeModal } from '../../../../Modal';
import {
  requiredValue,
  validateEmail,
} from '../../../../../../services/validators';
import types from '../../../../../../redux/types';

import closeIcon from '../../../../../../styles/img/closeIcon.svg';

const DafriBankModalWithdraw = ({ formData }) => {
  const dispatch = useDispatch();

  const initValue = {
    account_or_email: '',
    remark: '',
  };

  const handleSubmit = values => {
    dispatch({
      type: types.MAKE_DAFRIBANK_PAYMENT_START,
      payload: {
        ...values,
        ...formData,
      },
    });

    closeModal();
  };

  return (
    <div className="modal modal--medium">
      <button className="close-modal" type="button" onClick={closeModal}>
        <img src={closeIcon} alt="" />
      </button>

      <div className="modal-header">
        <p className="modal-title">Fill information</p>
      </div>

      <Formik onSubmit={handleSubmit} initialValues={initValue}>
        {({ setFieldValue, values, errors, validateField, ...formik }) => (
          <Form className="modal-body">
            <div className="modal-field">
              <p className="field-label">Enter your DafriBank account E-mail</p>
              <Field
                type="text"
                name="account_or_email"
                className="input"
                placeholder="E-mail"
                component={Input}
                validate={validateEmail}
              />
            </div>

            <div className="modal-field">
              <p className="field-label">Your comment</p>

              <Field
                type="text"
                name="remark"
                className="area-field area-field--type2 area-field--bigger"
                rows="5"
                style={{ width: '100%' }}
                placeholder="Comment"
                component={TextArea}
                validate={requiredValue}
              />
            </div>

            <div className="form-submit ">
              <button className="button button--wider" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DafriBankModalWithdraw;
