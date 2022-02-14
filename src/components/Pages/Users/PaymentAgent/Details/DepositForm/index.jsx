import { Field, Form, Formik } from 'formik';
import React from 'react';
import L from 'i18n-react';
import { useDispatch } from 'react-redux';
import types from '../../../../../../redux/types';
import {
  requiredValue,
  validateEmail,
} from '../../../../../../services/validators';
import { Input, TextArea } from '../../../../../Base/FormControls';
import { openModal } from '../../../../../Base/Modal';
import PaymentAgentDeposit from '../../../../../Base/Modals/Users/PaymentAgentDeposit';

const DepositForm = ({ assetID }) => {
  const dispatch = useDispatch();

  const initValue = {
    email: '',
    reference_number: '',
    amount: '',
    description: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const submitDispatch = () => {
      const payload = () => {
        if (values.description) {
          return values;
        }

        delete values.description;
        return values;
      };

      dispatch({
        type: types.CREATE_PAYMENT_AGENT_DEPOSIT_FIAT_START,
        payload: {
          ...payload(),
          asset_id: assetID,
        },
        resetForm,
      });
    };

    openModal(() => <PaymentAgentDeposit submitDispatch={submitDispatch} />);
  };

  return (
    <div className="main-form__group">
      <p className="item-title">
        {L.translate('Pages.Users.PaymentAgent.Details.DepositForm.item1')}
      </p>
      <Formik initialValues={initValue} onSubmit={handleSubmit}>
        {({ handleChange, setFieldValue, values, ...formik }) => (
          <Form className="main-form">
            <div className="row">
              <div className="col-lg-6">
                <div className="field">
                  <Field
                    type="text"
                    name="email"
                    className="input input--type2"
                    placeholder={L.translate(
                      'Pages.Users.PaymentAgent.Details.DepositForm.item2',
                    )}
                    component={Input}
                    validate={validateEmail}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="field">
                  <Field
                    type="text"
                    name="reference_number"
                    className="input input--type2"
                    placeholder={L.translate(
                      'Pages.Users.PaymentAgent.Details.DepositForm.item3',
                    )}
                    component={Input}
                    validate={requiredValue}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="field">
                  <Field
                    type="number"
                    name="amount"
                    className="input input--type2"
                    placeholder={L.translate(
                      'Pages.Users.PaymentAgent.Details.DepositForm.item4',
                    )}
                    component={Input}
                    validate={requiredValue}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="field">
                  <Field
                    className="area-field area-field--type2"
                    name="description"
                    placeholder={L.translate(
                      'Pages.Users.PaymentAgent.Details.DepositForm.item5',
                    )}
                    component={TextArea}
                    rows="1"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex investment-form__submit">
              <button className="button button--big" type="submit">
                {L.translate(
                  'Pages.Users.PaymentAgent.Details.DepositForm.item6',
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DepositForm;
