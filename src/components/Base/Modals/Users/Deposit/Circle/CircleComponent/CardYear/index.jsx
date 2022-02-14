import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { validateCardYear } from '../../../../../../../../services/validators';
import InputError from '../../../../../../InputError';

const CardYear = ({ yearRef, cvvRef, onValidYear, isValidateField }) => {
  const [yearValue, setYearValue] = useState('');
  const [yearError, setYearError] = useState(null);

  const handleYearChange = e => {
    const {
      target: { value },
    } = e;

    const replacedValue = value.trim().replace(/[^0-9]/g, '');

    setYearValue(replacedValue);
    validateCardYear(replacedValue, setYearError);
    onValidYear({ value: yearValue, error: yearError });
  };

  useEffect(() => {
    if (yearValue.length === 2 && !yearError) {
      cvvRef?.current?.focus();
      cvvRef?.current?.select();
    }
  }, [yearValue, yearError]);

  useEffect(() => {
    if (isValidateField) validateCardYear(yearValue, setYearError);
  }, [isValidateField]);

  return (
    <div className={`modal-field ${yearError ? 'error' : ''}`}>
      <p className="field-label">
        {L.translate(
          'Base.Modals.Users.Deposit.Circle.CircleComponent.CardYear.item1',
        )}
      </p>

      <input
        type="text"
        ref={yearRef}
        className="input"
        placeholder="XX"
        maxLength={2}
        value={yearValue}
        onChange={handleYearChange}
        onBlur={handleYearChange}
      />

      {yearError && <InputError errorText={yearError} />}
    </div>
  );
};

export default CardYear;
