import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import InputError from '../../../../../../InputError';
import { validateCardNumber } from '../../../../../../../../services/validators';

const CardNumber = ({ monthRef, onValidCardNumber, isValidateField }) => {
  const [cardValue, setCardValue] = useState('');
  const [cardInfo, setCardInfo] = useState(null);
  const [cardError, setCardError] = useState({
    error: false,
    errorText: '',
  });

  const handleCardChange = e => {
    const {
      target: { value },
    } = e;

    const replacedValue = value.trim().replace(/[^0-9]/g, '');

    setCardValue(replacedValue);
    validateCardNumber(replacedValue, setCardError, setCardInfo);
  };

  useEffect(() => {
    onValidCardNumber({
      value: !cardError.error ? cardValue : null,
      error: cardError,
      cardType: cardInfo,
    });
  }, [cardValue]);

  useEffect(() => {
    if (!cardError.error && cardValue) {
      monthRef?.current?.focus();
      monthRef?.current?.select();
    }
  }, [cardError]);

  useEffect(() => {
    if (isValidateField)
      validateCardNumber(cardValue, setCardError, setCardInfo);
  }, [isValidateField]);

  return (
    <div className="modal-field">
      <p className="field-label">
        {L.translate(
          'Base.Modals.Users.Deposit.Circle.CircleComponent.CardNumber.item1',
        )}
      </p>

      <div className={`field-wrap ${cardError.error ? 'error' : ''}`}>
        <input
          type="text"
          className="input"
          autoComplete="cc-number"
          placeholder={L.translate(
            'Base.Modals.Users.Deposit.Circle.CircleComponent.CardNumber.item2',
          )}
          value={cardValue}
          onChange={handleCardChange}
          onBlur={handleCardChange}
        />
      </div>

      {cardError.error && (
        <InputError
          errorText={
            cardError.errorText ||
            L.translate(
              'Base.Modals.Users.Deposit.Circle.CircleComponent.CardNumber.item3',
            )
          }
        />
      )}
    </div>
  );
};

export default CardNumber;
