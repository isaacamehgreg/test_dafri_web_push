import React, { useEffect, useRef } from 'react';
import L from 'i18n-react';
import { Formik, Form, Field } from 'formik';
import { requiredValue } from '../../../../../../services/validators';
import { Input } from '../../../../FormControls';
import { closeModal, openModal } from '../../../../Modal';
import SecurityChecked from '../SecurityChecked';
import closeIcon from '../../../../../../styles/img/closeIcon.svg';

const BankDetails = ({
  data,
  resetWithdrawFields,
  type,
  walletId,
  debounceInputRef,
}) => {
  const initValue = {
    bank_name: '',
    holder_name: '',
    account_number: '',
    branch_code: '',
    routing_number: '',
    account_type: '',
  };

  const handleSubmit = values => {
    openModal(() => (
      <SecurityChecked
        type={type}
        data={{ ...values, ...data }}
        resetWithdrawFields={resetWithdrawFields}
        walletId={walletId}
        debounceInputRef={debounceInputRef}
      />
    ));
  };

  return (
    <div className="modal modal--medium">
      <button className="close-modal" type="button" onClick={closeModal}>
        <img src={closeIcon} alt="" />
      </button>

      <div className="modal-header">
        <p className="modal-title">
          {L.translate('Base.Modals.Users.Withdraw.BankDetails.item1')}
        </p>
      </div>

      <Formik onSubmit={handleSubmit} initialValues={initValue}>
        {({ setFieldValue, values, errors, validateField, ...formik }) => (
          <Form className="modal-body">
            <div className="modal-field">
              <p className="field-label">Enter Bank Name</p>
              <Field
                type="text"
                name="bank_name"
                className="input"
                placeholder={L.translate(
                  'Base.Modals.Users.Withdraw.BankDetails.item2',
                )}
                component={Input}
                validate={requiredValue}
              />
            </div>
            <div className="modal-field">
              <p className="field-label">
                {L.translate('Base.Modals.Users.Withdraw.BankDetails.item3')}
              </p>
              <Field
                type="text"
                name="holder_name"
                className="input"
                placeholder={L.translate(
                  'Base.Modals.Users.Withdraw.BankDetails.item4',
                )}
                component={Input}
                validate={requiredValue}
              />
            </div>
            <div className="modal-field">
              <p className="field-label">
                {L.translate('Base.Modals.Users.Withdraw.BankDetails.item5')}
              </p>
              <Field
                type="text"
                name="account_number"
                className="input"
                placeholder={L.translate(
                  'Base.Modals.Users.Withdraw.BankDetails.item6',
                )}
                component={Input}
                validate={requiredValue}
              />
            </div>
            <div className="modal-field">
              <p className="field-label">
                {L.translate('Base.Modals.Users.Withdraw.BankDetails.item7')}
              </p>
              <Field
                type="text"
                name="branch_code"
                className="input"
                placeholder={L.translate(
                  'Base.Modals.Users.Withdraw.BankDetails.item8',
                )}
                component={Input}
                validate={requiredValue}
              />
            </div>
            <div className="modal-field">
              <p className="field-label">
                {L.translate('Base.Modals.Users.Withdraw.BankDetails.item9')}
              </p>
              <Field
                type="text"
                name="routing_number"
                className="input"
                placeholder={L.translate(
                  'Base.Modals.Users.Withdraw.BankDetails.item10',
                )}
                component={Input}
                validate={requiredValue}
              />
            </div>
            <div className="modal-field">
              <p className="field-label">
                {L.translate('Base.Modals.Users.Withdraw.BankDetails.item11')}
              </p>
              <Field
                type="text"
                name="account_type"
                className="input"
                placeholder={L.translate(
                  'Base.Modals.Users.Withdraw.BankDetails.item12',
                )}
                component={Input}
                validate={requiredValue}
              />
            </div>
            <div className="form-submit ">
              <button className="button button--wider" type="submit">
                {L.translate('Base.Modals.Users.Withdraw.BankDetails.item13')}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BankDetails;
