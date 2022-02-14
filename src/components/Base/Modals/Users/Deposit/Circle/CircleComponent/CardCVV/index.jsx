import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { validateCardCVV } from '../../../../../../../../services/validators';
import InputError from '../../../../../../InputError';

const CardCVV = ({ cvvRef, onValidCVV, cardType, isValidateField }) => {
  const [cvvValue, setCVVValue] = useState('');
  const [cvvError, setCVVError] = useState(null);

  const isAmericanExpress = cardType?.card?.type === 'american-express';

  const handleCVVChange = e => {
    const {
      target: { value },
    } = e;

    const replacedValue = value.replace(/[^0-9]/g, '').trim();

    setCVVValue(replacedValue);

    validateCardCVV(replacedValue, setCVVError, cardType?.card?.type);
  };

  useEffect(() => {
    onValidCVV({ value: !cvvError ? cvvValue : null, error: cvvError });
  }, [cvvValue, cvvError]);

  useEffect(() => {
    if (isValidateField)
      validateCardCVV(cvvValue, setCVVError, cardType?.card?.type);
  }, [isValidateField]);

  return (
    <div className={`modal-field ${cvvError ? 'error' : ''}`}>
      <p className="field-label">
        {L.translate(
          'Base.Modals.Users.Deposit.Circle.CircleComponent.CardCVV.item1',
        )}
      </p>

      <input
        name="cvv"
        type="password"
        ref={cvvRef}
        className="input"
        autoComplete="cc-csc"
        placeholder={isAmericanExpress ? '****' : '***'}
        maxLength={isAmericanExpress ? 4 : 3}
        value={cvvValue}
        onChange={handleCVVChange}
        onBlur={handleCVVChange}
      />

      {cvvError && <InputError errorText={cvvError} />}
    </div>
  );
};

export default CardCVV;
