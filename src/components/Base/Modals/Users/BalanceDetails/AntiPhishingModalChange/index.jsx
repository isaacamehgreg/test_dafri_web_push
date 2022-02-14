import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { closeModal } from '../../../../Modal';
import { Input } from '../../../../FormControls';
import { validateNewPhrase } from '../../../../../../services/validators';
import { settingsSelector } from '../../../../../../redux/users/settings/selectors';
import closeIcon from '../../../../../../styles/img/closeIcon.svg';
import types from '../../../../../../redux/types';

const AntiPhishingModalChange = () => {
  const dispatch = useDispatch();
  const settingsData = useSelector(settingsSelector);
  let phrase = settingsData.data?.anti_fishing_phrase;

  if (!settingsData.data?.anti_fishing_phrase) phrase = '';

  const initialValues = {
    oldValue: phrase,
    newValue: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch({
      type: types.CHANGE_ANTIPHISHING_PHRASE_START,
      payload: values.newValue,
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
            'Base.Modals.Users.BalanceDetails.AntiPhishingModalChange.item1',
          )}
        </p>
      </div>

      <Formik initialValues={{ ...initialValues }} onSubmit={handleSubmit}>
        {({ setFieldValue, resetForm, ...formik }) => {
          const { oldValue } = formik.values;

          return (
            <Form className="modal-body">
              <div className="modal-field">
                <p className="field-label">
                  {L.translate(
                    'Base.Modals.Users.BalanceDetails.AntiPhishingModalChange.item2',
                  )}
                </p>

                <Field
                  type="text"
                  name="oldValue"
                  className="input"
                  placeholder={L.translate(
                    'Base.Modals.Users.BalanceDetails.AntiPhishingModalChange.item3',
                  )}
                  disabled="disabled"
                  component={Input}
                />
              </div>
              <div className="modal-field">
                <p className="field-label">
                  {L.translate(
                    'Base.Modals.Users.BalanceDetails.AntiPhishingModalChange.item4',
                  )}
                </p>

                <Field
                  type="text"
                  className="input"
                  name="newValue"
                  placeholder={L.translate(
                    'Base.Modals.Users.BalanceDetails.AntiPhishingModalChange.item5',
                  )}
                  component={Input}
                  validate={value => validateNewPhrase(value, oldValue)}
                />
              </div>
              <div className="form-submit ">
                <button className="button button--wider" type="submit">
                  {L.translate(
                    'Base.Modals.Users.BalanceDetails.AntiPhishingModalChange.item6',
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

export default AntiPhishingModalChange;
