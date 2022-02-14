// eslint-disable
import moment from 'moment';
import jstz from 'jstz';
import L from 'i18n-react';
// eslint-disable-next-line import/no-cycle
import notification from './notification';

// Call all notification on error response START
export const callErrorFunc = (errorsData = [], msgTimeout = 5000) => {
  const notifyError = errors => {
    errors.forEach(err => {
      const firstLetter = err.charAt(0).toUpperCase();
      const msg = firstLetter + err.slice(1, err.length).split('_').join(' ');

      notification({
        type: 'error',
        timeOut: msgTimeout,
        message: msg,
      });
    });
  };

  if (errorsData) {
    const errors = errorsData;

    if (errors) {
      if (Array.isArray(errors)) {
        notifyError(errors.flat(1));
      } else if (Object.values(errors).length) {
        notifyError(Object.values(errors).flat(1));
      } else {
        notification({
          type: 'error',
          timeOut: msgTimeout,
          message: 'Error. Please try again later',
        });
      }
    }
  } else {
    notification({
      type: 'error',
      timeOut: msgTimeout,
      message: 'Error. Please try again later',
    });
  }
};

// Call all notification on error response END

export const captchaKey = '6LddDMsZAAAAAPhLr8aWJ9veb80juXQKtMfAWCOh';

export const device_id = () => {
  let b = String.fromCharCode(Math.floor(Math.random() * 25 + 65));
  do {
    const c = Math.floor(Math.random() * 42 + 48);
    if (c < 58 || c > 64) b += String.fromCharCode(c);
  } while (b.length < 48);
  return b;
};

export const toUpdateArray = (id, all) => {
  const result = all.map(item => {
    if (String(item?.id) === String(id)) {
      return { ...item, favorite: !item.favorite };
    }
    return item;
  });
  return result;
};

export const hideEmail = (string, numbersOfLetters = 2) => {
  if (string) {
    const splittedString = string.split('@');
    const { length } = splittedString[0];
    const stars = '***';
    const firstThreeLetters = splittedString[0].slice(
      -length,
      numbersOfLetters,
    );
    const result = firstThreeLetters + stars + splittedString[1];
    return result;
  }
};

export const intNumberValidation = text => {
  if (text === '') return true;
  const regExp = /^\d{1,8}$/;
  if (!regExp.test(text)) return false;
  return true;
};

export const numberValidation = text => {
  if (text === '') return true;
  const regExp = /^(?:[0-9]{1,8}[\.][0-9]{1,8}|[0-9]{1,8}[\.]|[0-9]{1,8})$/;
  if (!regExp.test(text)) return false;
  return true;
};

export const amountValidation = (before = 8, after = 8) => {
  return text => {
    if (text === '') return true;
    const regExp = new RegExp(
      `^(?:[0-9]{1,${before}}[0-9]{1,${after}}|[0-9]{1,${before}}|[0-9]{1,${before}})$`,
    );
    if (!regExp.test(text)) return false;
    return true;
  };
};

export const passwordValid = password => {
  if (password.length < 8) return false;
  const regExp =
    /(?=^.{8,25}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).*$/;
  return regExp.test(password);
};

export const passwordConfirm = (password, confirmPassword) => {
  if (confirmPassword.length <= 8) return false;
  if (password !== confirmPassword) return false;
  const regExp =
    /(?=^.{8,32}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  if (!regExp.test(password)) return false;
  return true;
};

export const emailValid = email => {
  if (email.length === 0) return false;
  // eslint-disable-next-line no-empty-character-class
  const regExp =
    // eslint-disable-next-line no-empty-character-class
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[]|\\[])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[]|\\[\x7f])+)\])/;
  return regExp.test(email);
};

export const phoneValid = phone => {
  if (phone.length === 0) return false;
  const regExp = /^[1-9]{1}[\d]{9,13}$/;
  return regExp.test(phone);
};

export const range = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i += 1) {
    arr.push(i);
  }
  return arr;
};

export const subtractMonth = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
};

export const transformData = (time, format) => {
  if (typeof time === 'number') {
    return moment(time * 1000).format(format || 'DD-MM-YYYY HH:mm:ss');
  }
  return time;
};

const hostname = window?.location?.hostname;
const protocol = window?.location?.protocol;
export const wsUrl = () => {
  // if (hostname === '127.0.0.1') {
  //   return `ws://${hostname}:8980`;
  // }
  // if (protocol === 'http:' && hostname !== 'localhost') {
  //   return `ws://${hostname}:8852`;
  // }
  if (protocol === 'https:') {
    return `wss://${hostname}:8443`;
  }
  return 'https://mxsc72vnae7962xq.corp.merehead.xyz/';
};

export const getTimezone = () => {
  const timezone = jstz.determine();
  const timezoneName = timezone.name();
  const string = [
    'America/New_York',
    'America/Los_Angeles',
    'America/Chicago',
    'America/Phoenix',
    'America/Toronto',
    'America/Vancouver',
    'America/Argentina/Buenos_Aires',
    'America/El_Salvador',
    'America/Sao_Paulo',
    'America/Bogota',
    'America/Caracas',
    'Europe/Moscow',
    'Europe/Athens',
    'Europe/Belgrade',
    'Europe/Berlin',
    'Europe/London',
    'Europe/Luxembourg',
    'Europe/Madrid',
    'Europe/Paris',
    'Europe/Rome',
    'Europe/Warsaw',
    'Europe/Istanbul',
    'Europe/Zurich',
    'Australia/Sydney',
    'Australia/Brisbane',
    'Australia/Adelaide',
    'Australia/ACT',
    'Asia/Almaty',
    'Asia/Ashkhabad',
    'Asia/Tokyo',
    'Asia/Taipei',
    'Asia/Singapore',
    'Asia/Shanghai',
    'Asia/Seoul',
    'Asia/Tehran',
    'Asia/Dubai',
    'Asia/Kolkata',
    'Asia/Hong_Kong',
    'Asia/Bangkok',
    'Asia/Chongqing',
    'Asia/Jerusalem',
    'Asia/Kuwait',
    'Asia/Muscat',
    'Asia/Qatar',
    'Asia/Riyadh',
    'Pacific/Auckland',
    'Pacific/Chatham',
    'Pacific/Fakaofo',
    'Pacific/Honolulu',
    'America/Mexico_City',
    'Africa/Cairo',
    'Africa/Johannesburg',
    'Asia/Kathmandu',
    'US/Mountain',
  ];
  const kiev = ['Europe/Kiev', 'Europe/Zaporozhye', 'Europe/Uzhgorod'].includes(
    timezoneName,
  )
    ? 'Europe/Athens'
    : timezoneName;
  return string.includes(kiev) ? kiev : 'Etc/UTC';
};

export const copyText = e => {
  const copyId = e?.currentTarget?.dataset?.copyid;
  const successNotif = e?.currentTarget?.dataset?.successnotif;
  const errorNotif = e?.currentTarget?.dataset?.errornotif;
  if (copyId) {
    const elementText = document.getElementById(copyId);
    if (elementText?.innerHTML) {
      navigator.clipboard
        .writeText(elementText.innerHTML)
        .then(() =>
          notification({
            type: 'success',
            message: successNotif || 'Text copied successfully.',
          }),
        )
        .catch(() =>
          notification({
            type: 'error',
            message: errorNotif || 'Something went wrong.',
          }),
        );
    }
  }
};

export const addZeroAfterPoint = n => {
  if (n > 1) {
    return `0${addZeroAfterPoint(n - 1)}`;
  }
  return '0';
};

export const toCrop = amount => {
  const max = amount || 0;
  return function (string) {
    const symb = +string < 0 ? '-' : '';
    const value = `${
      `${string}`.replace(',', '.').split('.')[1] ? `${string}` : `${string}.`
    }${addZeroAfterPoint(max)}`.replace(',', '.');
    if (max) {
      const reg = new RegExp(`\\d+(?:\\.\\d{0,${max}})?`);
      return symb + value.match(reg)[0];
    }
    const reg = new RegExp(`\\d+(?:\\.\\d{0)?`);
    return symb + value.match(reg)[0];
  };
};

export const numberWithCommas = number => {
  return String(number).replace(/(\B)(?=(\d{3})+\.)/g, ',');
};

export const cropUsdt = (pair, price) => {
  if (
    pair?.toLowerCase()?.includes('usdt') ||
    pair?.toLowerCase()?.includes('usd') ||
    pair?.toLowerCase()?.includes('eur')
  ) {
    return toCrop(4)(price);
  }

  return toCrop(6)(price);
};

export const sortingColumnTable = ({ sort, data, setState }) => {
  if (Object.keys(data).length === 0) return;
  if (!sort?.sort && !sort?.order) return;

  const newData = data?.sort((itemA, itemB) => {
    const a =
      itemA[sort.order] ||
      itemA[sort.order] === 0 ||
      itemA[sort.order]?.length === 0 || // needs to be checked
      itemA.asset[sort.order] ||
      itemA.mem_info[sort.order];

    const b =
      itemB[sort.order] ||
      itemB[sort.order] === 0 ||
      itemB[sort.order]?.length === 0 || // needs to be checked
      itemB.asset[sort.order] ||
      itemB.mem_info[sort.order];

    if (Number.isNaN(+a)) {
      if (sort?.sort === 'desc') {
        return a < b ? -1 : 1;
      }
      if (sort?.sort === 'asc') {
        return a < b ? 1 : -1;
      }
    } else {
      if (sort?.sort === 'desc') {
        return +a < +b ? -1 : 1;
      }
      if (sort?.sort === 'asc') {
        return +a < +b ? 1 : -1;
      }
    }

    return 0;
  });

  setState(newData);
};

export const cropNumber = (number, numbersAfterDot) => {
  if (number || number === 0) {
    let exp = '';
    const numStr = `${number}`;
    if (numStr?.includes('e')) {
      exp = `e${numStr.split('e')[1]}`;
    }
    // if (number >= 1) {
    //   return toCrop(4)(number) + exp;
    // }
    // if (number > 0 && number < 1) {
    //   return toCrop(6)(number) + exp;
    // }
    // return toCrop(4)(number) + exp;
    if (numbersAfterDot) {
      return toCrop(numbersAfterDot)(number) + exp;
    }
    return toCrop(6)(number) + exp;
  }
};

export const trimWalletAddress = string =>
  `${string.slice(0, 6)}...${string.slice(-7)}`;
// Search in nested object
export function findAnyValueInObject(array, keyword, keys) {
  const regExp = new RegExp(keyword, 'gi');

  const check = obj => {
    const bool = Object.keys(obj).filter(
      key => keys.includes(key) && regExp.test(obj[key]),
    );

    if (bool.length) return obj;
  };

  return array.filter(check);
}

export const setValueFixedLength = (value, length) => {
  // return nubmer with 0s in end, or cut number
  return `${value}000000000000`.substr(0, length);
};

function getFlooredFixed(v, d) {
  return (Math.floor(v * 10 ** d) / 10 ** d).toFixed(d);
}

export const convertValueToDecimal = (
  value,
  after_length = 6,
  commas = true,
) => {
  const [before, ...[after, ...hidden]] = getFlooredFixed(
    +value,
    after_length,
  ).split('.');
  const new_after = setValueFixedLength(after || '0', after_length);

  if (new_after) {
    return commas
      ? String(`${before}.${new_after}`).replace(/(\B)(?=(\d{3})+\.)/g, ',')
      : String(`${before}.${new_after}`);
  }
  return commas
    ? String(before).replace(/(\B)(?=(\d{3})+\.)/g, ',')
    : String(before);
};

export const toUpdate = (first, second) => {
  try {
    let newSecond = second;
    const arr = Object.entries(first);
    arr.forEach(element => {
      const key = element[0];
      const value = element[1];
      if (newSecond[key] === undefined) {
        newSecond = { ...newSecond, [key]: value };
        return;
      }
      if (typeof value === 'object' && !value?.length && value !== null) {
        return toUpdate(value, newSecond[key]);
      }
      newSecond[key] = value;
    });
    return newSecond;
  } catch (error) {
    return { ...second, ...first };
  }
};

export const toJoinArray = async ({ all, favorites }) => {
  const result = await all.map(item => {
    const includes = favorites.find(el => {
      return String(el.id) === String(item.id);
    });
    if (includes?.id) {
      return { ...item, favorite: true };
    }
    return item;
  });
  return result;
};

export const killExponential = (a, b) => {
  a = +a;
  if (Number.isNaN(a) || a === 0) return '0';
  if (Math.abs(a) <= 1e-9) return '> 0.00000000';
  if (Math.abs(a) <= 9e-7) {
    const sign = a < 0 ? '-' : '';
    if (typeof a === 'number') a += '';
    a = a.split('e-');
    let res = '0.';
    for (let i = 0; i < a[1] - 1; i += 1) {
      res += '0';
    }
    a = sign + res + Math.abs(a[0].split('.')[0]);
    return Number(a).toFixed(b);
  }

  return Number(a).toFixed(b);
};

export const firstLatterToUppercase = word => {
  const string = String(word);
  if (!string.trim().length) return '';
  return string?.charAt(0).toUpperCase() + string?.slice(1);
};
