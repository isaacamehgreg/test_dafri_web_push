import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { validateCardMonth } from '../../../../../../../../services/validators';
import InputError from '../../../../../../InputError';

const CardMonth = ({
  monthRef,
  yearRef,
  yearInfo,
  onValidMonth,
  isValidateField,
}) => {
  const [monthValue, setMonthValue] = useState('');
  const [monthError, setMonthError] = useState(null);

  const handleMonthChange = e => {
    const {
      target: { value },
    } = e;

    const replacedValue = value.trim().replace(/[^0-9]/g, '');

    setMonthValue(replacedValue);
    validateCardMonth(replacedValue, setMonthError, yearInfo);
    onValidMonth({ value: monthValue, error: monthError });
  };

  useEffect(() => {
    if (yearInfo && isValidateField)
      validateCardMonth(monthValue, setMonthError, yearInfo);
  }, [yearInfo]);

  useEffect(() => {
    if (monthValue.length === 2 && !monthError) {
      yearRef?.current?.focus();
      yearRef?.current?.select();
    }
  }, [monthValue, monthError]);

  useEffect(() => {
    if (isValidateField) validateCardMonth(monthValue, setMonthError, yearInfo);
  }, [isValidateField]);

  return (
    <div className={`modal-field ${monthError ? 'error' : ''}`}>
      <p className="field-label">
        {L.translate(
          'Base.Modals.Users.Deposit.Circle.CircleComponent.CardMonth.item1',
        )}
      </p>

      <input
        type="text"
        ref={monthRef}
        className="input"
        placeholder="XX"
        maxLength={2}
        value={monthValue}
        onChange={handleMonthChange}
        onBlur={handleMonthChange}
      />

      {monthError && <InputError errorText={monthError} />}
    </div>
  );
};

export default CardMonth;
