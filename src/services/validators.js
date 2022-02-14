/* eslint-disable no-debugger */
/* eslint-disable no-restricted-syntax */
import valid from 'card-validator';

export const validateCardNumber = (num, setErorr, setCardInfo) => {
  const numberValidation = valid.number(num);

  if (num.trim() === '') {
    if (!numberValidation.isPotentiallyValid || !numberValidation.isValid) {
      setErorr({ error: true, errorText: 'Field is required' });
      setCardInfo(null);
    }
  } else {
    if (!numberValidation.isPotentiallyValid || !numberValidation.isValid) {
      setErorr({ error: true, errorText: 'Card number is invalid' });
      setCardInfo(null);
    }

    if (numberValidation.isValid) {
      setErorr({ error: false, errorText: '' });
      setCardInfo(numberValidation.card.type);
    }
  }
};

export const validateCardMonth = (val, setError, yearInfo) => {
  const curYear = `${new Date().getFullYear()}`.slice(2);
  const curMonth = new Date().getMonth() + 1;

  if (!val) {
    setError('Field is required');
  } else if (val > 12) {
    setError('Incorrect month');
  } else if (curYear === yearInfo?.value && val < curMonth) {
    setError('Card expiration month is invalid');
  } else {
    setError(null);
  }
};

export const validateCardYear = (val, setError) => {
  const curYear = `${new Date().getFullYear()}`.slice(2);

  if (!val) {
    setError('Field is required');
  } else if (val < curYear) {
    setError('Card expiration year is invalid');
  } else {
    setError(null);
  }
};

export const validateCardCVV = (val, setCVVError, type) => {
  if (!val) {
    setCVVError('Field is required');
  } else if (
    (type === 'mastercard' || type === 'visa' || type === 'unionpay') &&
    val.length < 3
  ) {
    setCVVError('Invalid CVV number');
  } else if (type === 'american-express' && val.length < 4) {
    setCVVError('Invalid CVV number');
  } else if (val.length < 3) {
    setCVVError('Invalid CVV number');
  } else {
    setCVVError(null);
  }
};

const customFieldLevelValidation = (value, validations) => {
  for (const validation of validations) {
    const result = validation(value);

    if (result) return result;
  }

  return undefined;
};

const required = (value, textError = 'Field is required') => {
  return !value ? textError : undefined;
};

const maxLength = length => {
  return value => {
    return value.length > length ? `Max length is ${length}` : undefined;
  };
};

const minLength = length => {
  return value => {
    return value.length < length ? `Min length is ${length}` : undefined;
  };
};

const checkbox = value => {
  return !value ? '' : undefined;
};

const phone = value => {
  const search = String(value).match(
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
  );
  return !search ? 'Wrong phone number' : undefined;
};

const email = value => {
  const search = value.match(
    /^(([^<>()[\]\\.#$%^&*(),;!`[а-яА-ЯёЁ\]{}?+~=:\s@"'|\/]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,4}))$/,
  );
  return !search ? 'Please enter a correct email address' : undefined;
};

const password = value => {
  const search = value.match(
    /(?=^.{8,25}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).*$/,
  );
  return !search
    ? 'Password must be at least 8 characters long and include 1 uppercase letter, 1 number, 1 special symbol'
    : undefined;
};

export const validateConfirmPassword = (value, pass) => {
  let error = required(value);

  if (pass && value) {
    if (pass !== value) {
      error = 'Password does not match';
    }
  }

  return error;
};

const antiphishingRegular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
const validateViaRegex = (value, regex) => regex.test(value);

export const validateNewPhrase = (value, oldValue) => {
  let error;

  if (!value.trim()) {
    error = required(value, 'Please enter your antiphishing phrase');
  } else if (oldValue && value) {
    if (oldValue === value) {
      error = 'Phrases must not match';
    } else if (value.length <= 8) {
      error = 'Phrase length must be more than 8 characters';
    } else if (!validateViaRegex(value, antiphishingRegular)) {
      error =
        'Phrase must contain at least 8 characters with numbers and capital letters';
    }
  }

  return error;
};

const validateSingleAntiphishingPhrase = value => {
  let error;

  if (!value) {
    error = required(value, 'Please enter your antiphishing phrase');
  } else if (value.length <= 8) {
    error = 'Phrase length must be more than 8 characters';
  } else if (!validateViaRegex(value, antiphishingRegular)) {
    error =
      'Phrase must contain at least 8 characters with numbers and capital letters';
  }

  return error;
};

const totp = (
  value,
  errorText = 'Please enter a correct 2FA-Authorization code',
) => {
  const search = value.match(/^[0-9]*$/); // add totp
  return !search ? errorText : undefined;
};

const isEmpty = value => {
  return !value.trim() ? 'Please enter your antiphishing phrase' : undefined;
};

export const phoneRegex =
  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;

const validateImage = file => {
  let error = null;

  if (!file) {
    error = 'Choose your selfie';
  } else if (typeof file === 'string') {
    error = null;
  } else {
    const [type] = file.type.split('/');

    if (type !== 'image') {
      error = 'The file format should be ".jpg" or ".png"';
    }
  }

  return error;
};

const validateYearFunc = value => {
  let error = null;

  if (value) {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = parseInt(date.getFullYear().toString().substr(2, 2), 10);

    if (year > value) error = 'Incorect ';
  }

  return error;
};

export const validatePercentRate = (value, min, max) => {
  let error = null;

  if (!`${value}`.trim()) {
    error = required(value, 'Field is required');
  } else if (!Number.isInteger(value)) {
    error = 'Rate value must be integer number';
  } else if (value > max) {
    error = 'Rate value cannot be more than 100';
  } else if (min > value) {
    error = 'Rate value cannot be less than 1';
  }

  return error;
};

// CUSTOM FORMIK VALIDATORS
export const validate2FA = value =>
  customFieldLevelValidation(value, [
    required,
    minLength(6),
    maxLength(6),
    totp,
  ]);

const validatePositiveNumber = value => {
  let error;

  if (value.trim() && typeof +value === 'number' && value < 1) {
    error = 'Value must be greater than 0';
  }

  return error;
};

export const requiredValue = value =>
  customFieldLevelValidation(value, [required]);

export const validateCheckbox = value =>
  customFieldLevelValidation(value, [checkbox]);

export const validateUserName = value =>
  customFieldLevelValidation(value, [required, minLength(1), maxLength(20)]);

export const validateEmail = value =>
  customFieldLevelValidation(value, [required, email]);

export const validatePassword = value =>
  customFieldLevelValidation(value, [required, password]);

export const validatePhone = value =>
  customFieldLevelValidation(value, [required, phone]);

export const validateEmptyField = value =>
  customFieldLevelValidation(value, [isEmpty]);

export const validateAntiPhishing = value =>
  customFieldLevelValidation(value, [validateSingleAntiphishingPhrase]);

export const validateImageFile = file =>
  customFieldLevelValidation(file, [validateImage]);

export const validateYear = value =>
  customFieldLevelValidation(value, [required, validateYearFunc]);

export const requiredPositiveNumber = value =>
  customFieldLevelValidation(value, [required, validatePositiveNumber]);
