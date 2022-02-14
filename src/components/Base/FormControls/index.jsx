/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import L from 'i18n-react';
import { DebounceInput } from 'react-debounce-input';

const FormControl = ({
  form,
  field,
  isCheckMark,
  isShowPass,
  isShowOldPass,
  setIsShowOldPass,
  setIsShowPass,
  isShowConfirmPass,
  setIsShowConfirmPass,
  isSendBtn,
  isShowMaxButton,
  setMaxCallback,
  sendBtnCallback,
  textCurrency,
  textCurrency2,
  title,
  ...props
}) => {
  const errors = form.errors[field.name] || null;
  const touched = form.touched[field.name] || null;

  return (
    <>
      <div className={`field-wrap ${errors && touched ? 'error' : ''}`}>
        {props.children}
        {isCheckMark && !errors && (
          <span className="field-icon field-icon--check">
            <svg
              className="fill"
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.6947 0.292787C13.8822 0.480314 13.9875 0.734622 13.9875 0.999786C13.9875 1.26495 13.8822 1.51926 13.6947 1.70679L5.69471 9.70679C5.50718 9.89426 5.25288 9.99957 4.98771 9.99957C4.72255 9.99957 4.46824 9.89426 4.28071 9.70679L0.280712 5.70679C0.0985537 5.51818 -0.00224062 5.26558 3.78026e-05 5.00339C0.00231622 4.74119 0.107485 4.49038 0.292893 4.30497C0.478301 4.11956 0.729114 4.01439 0.99131 4.01211C1.25351 4.00983 1.50611 4.11063 1.69471 4.29279L4.98771 7.58579L12.2807 0.292787C12.4682 0.105316 12.7225 0 12.9877 0C13.2529 0 13.5072 0.105316 13.6947 0.292787Z"
                fill="#3DD598"
              />
            </svg>
          </span>
        )}
        {(setIsShowPass || setIsShowConfirmPass || setIsShowOldPass) && (
          <button
            type="button"
            className="show-pass"
            onClick={
              setIsShowPass
                ? () => setIsShowPass(!isShowPass)
                : setIsShowConfirmPass
                ? () => setIsShowConfirmPass(!isShowConfirmPass)
                : () => setIsShowOldPass(!isShowOldPass)
            }
          >
            <svg
              className="text-type fill"
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5001 4.018C7.1449 4.018 6.80425 4.1591 6.55309 4.41026C6.30192 4.66143 6.16082 5.00208 6.16082 5.35728C6.16082 5.71248 6.30192 6.05314 6.55309 6.3043C6.80425 6.55547 7.1449 6.69657 7.5001 6.69657C7.85531 6.69657 8.19596 6.55547 8.44712 6.3043C8.69829 6.05314 8.83939 5.71248 8.83939 5.35728C8.83939 5.00208 8.69829 4.66143 8.44712 4.41026C8.19596 4.1591 7.85531 4.018 7.5001 4.018ZM5.60607 3.46325C6.1084 2.96092 6.7897 2.67871 7.5001 2.67871C8.21051 2.67871 8.89181 2.96092 9.39414 3.46325C9.89647 3.96558 10.1787 4.64688 10.1787 5.35728C10.1787 6.06768 9.89647 6.74899 9.39414 7.25132C8.89181 7.75365 8.21051 8.03585 7.5001 8.03585C6.7897 8.03585 6.1084 7.75365 5.60607 7.25132C5.10374 6.74899 4.82153 6.06768 4.82153 5.35728C4.82153 4.64688 5.10374 3.96558 5.60607 3.46325Z"
                fill="#969696"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 5.35714V5.55777C0.999008 8.54564 3.97125 10.7143 7.48362 10.7143C10.9967 10.7143 13.9683 8.5456 14.9672 5.55777C15.0109 5.42716 15.0109 5.28712 14.9672 5.15652C13.9683 2.16868 10.9967 0 7.48362 0C3.97125 0 0.999008 2.16864 0 5.15652V5.35714ZM1.43174 5.35714C2.31265 7.69849 4.69099 9.375 7.48362 9.375C10.2769 9.375 12.6546 7.69852 13.5355 5.35714C12.6546 3.01576 10.2769 1.33929 7.48362 1.33929C4.69099 1.33929 2.31265 3.0158 1.43174 5.35714Z"
                fill="#969696"
              />
            </svg>
            <svg
              className="password-type fill"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.594631 0.205025C0.87244 -0.0683417 1.32286 -0.0683417 1.60066 0.205025L3.76394 2.33372C4.90758 1.72086 6.1921 1.39834 7.50048 1.4C11.0054 1.40021 13.9699 3.66715 14.9673 6.79013C15.011 6.92703 15.0109 7.07384 14.967 7.21068C14.5043 8.65341 13.623 9.92422 12.4407 10.8718L14.4054 12.805C14.6832 13.0784 14.6832 13.5216 14.4054 13.795C14.1276 14.0683 13.6771 14.0683 13.3993 13.795L10.8469 11.2834C10.8467 11.2831 10.8465 11.2829 10.8462 11.2827L8.52525 8.99881C8.51868 8.99281 8.5122 8.98666 8.50581 8.98037L5.48745 6.01027C5.48106 6.00399 5.47482 5.99761 5.46872 5.99114L0.594631 1.19497C0.316823 0.921608 0.316823 0.478392 0.594631 0.205025ZM8.50581 8.98037C8.50569 8.98026 8.50592 8.98049 8.50581 8.98037V8.98037ZM9.95124 8.4221C10.2071 7.99491 10.3453 7.50464 10.3453 7.00035C10.3453 6.2577 10.0455 5.54546 9.51184 5.02033C8.97817 4.49519 8.25436 4.20017 7.49964 4.20017C6.98716 4.20017 6.48892 4.33621 6.0548 4.58795L4.82319 3.37604C5.6589 2.99679 6.57164 2.79876 7.49904 2.8L7.5 2.8C10.2867 2.8 12.659 4.55222 13.5386 6.99961C13.128 8.139 12.3945 9.13639 11.4283 9.87551L9.95124 8.4221ZM8.87421 7.36229C8.90605 7.24523 8.92257 7.12363 8.92257 7.00035C8.92257 6.629 8.77266 6.27286 8.50581 6.01027C8.23896 5.74769 7.87703 5.60017 7.49964 5.60017C7.37436 5.60017 7.25078 5.61643 7.13182 5.64776L8.87421 7.36229ZM1.77445 4.18135C1.97961 4.16747 2.18082 4.24162 2.32624 4.3847L9.33681 11.2825C9.52329 11.466 9.59132 11.7359 9.51359 11.9838C9.43585 12.2318 9.22511 12.4171 8.966 12.4653C8.48251 12.5553 7.99151 12.6004 7.49946 12.6C7.49928 12.6 7.49964 12.6 7.49946 12.6C3.99453 12.5998 1.03013 10.3328 0.0327249 7.20987C-0.0109153 7.07323 -0.0109081 6.9267 0.0327453 6.79007C0.30143 5.94907 0.715275 5.15989 1.25614 4.4571C1.38029 4.29578 1.5693 4.19523 1.77445 4.18135ZM1.93563 5.98017L7.23543 11.1947C4.56378 11.0878 2.31281 9.36977 1.46122 7.00001C1.58826 6.64645 1.74709 6.30517 1.93563 5.98017Z"
                fill="#969696"
              />
            </svg>
          </button>
        )}

        {isSendBtn && (
          <button className="field-btn" type="button" onClick={sendBtnCallback}>
            {L.translate('Base.FormControls.item1')}
          </button>
        )}

        {isShowMaxButton && (
          <button
            type="button"
            className="field-btn field-btn--max"
            onClick={setMaxCallback}
          >
            {L.translate('Base.FormControls.item5')}
          </button>
        )}

        {textCurrency && (
          <span
            className={`input-currency ${
              isShowMaxButton ? 'input-currency--before-max-btn' : ''
            }`}
          >
            {textCurrency}
          </span>
        )}

        {textCurrency2 && (
          <span className="input-currency input-currency--type2">
            {textCurrency2}
          </span>
        )}
      </div>
      {errors && touched && (
        <p className="error-text">
          <span className="error-text__icon">
            <svg
              className="fill"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5.74986V8.5M10 11.4999H10.009M3.79425 15H16.2057C17.5852 15 18.4469 13.5414 17.7572 12.375L11.5514 1.87479C10.8617 0.708402 9.13829 0.708402 8.44856 1.87479L2.24282 12.375C1.55309 13.5414 2.4148 15 3.79425 15Z"
                stroke="#FD5353"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>{errors && touched && errors}</span>
        </p>
      )}
    </>
  );
};

export const Input = props => {
  return (
    <FormControl {...props}>
      <input
        {...props.field}
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
        inputMode={props.inputMode || null}
        disabled={props.disabled || null}
        pattern={props.pattern || null}
        maxLength={props.maxLength || null}
        ref={props.inputRef || null}
      />
    </FormControl>
  );
};

export const InputWithOnChange = props => {
  return (
    <FormControl {...props}>
      <input
        {...props.field}
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
        inputMode={props.inputMode || null}
        disabled={props.disabled || null}
        pattern={props.pattern || null}
        maxLength={props.maxLength || null}
        ref={props.inputRef || null}
        onChange={props.onChange || null}
      />
    </FormControl>
  );
};

export const TextArea = props => {
  return (
    <FormControl {...props}>
      <textarea
        {...props.field}
        className={props.className}
        placeholder={props.placeholder}
        rows={props.rows}
        cols={props.cols}
        style={props.style}
      />
    </FormControl>
  );
};

export const InputError = props => {
  return <div className="input__notification">{props.children}</div>;
};

export const CheckboxError = props => {
  return <div className="checkbox__notification">{props.children}</div>;
};

export const Checkbox = ({ form, field, title, ...props }) => {
  const errors = form.errors[field.name];
  const touched = form.touched[field.name];

  return (
    <div className="check-wrap">
      <input type="checkbox" className="new-check" id="terms" name="agree" />
      <label htmlFor="terms">
        <span className="check-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 26"
            width="26"
            height="26"
            fill="#fff"
          >
            <path d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z" />
          </svg>
        </span>
        <span>
          {L.translate('Base.FormControls.item2')}{' '}
          <a href="https://html.merehead.xyz/new_dafri/sign-up.html#">
            {L.translate('Base.FormControls.item3')}
          </a>
          .
        </span>
      </label>
    </div>
  );
};

export const InputSwitch = ({
  labelFor,
  id,
  name,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="onoffswitch ">
      <label className="onoffswitch-label" htmlFor={labelFor}>
        <input
          type="checkbox"
          className="onoffswitch-checkbox  "
          id={id}
          name={name}
          checked={checked || 0}
          onChange={onChange}
          disabled={disabled}
        />
        <span className="onoffswitch-inner onoffswitch-inner--status-type onoffswitch-inner--type2" />
        <span className="onoffswitch-switch" />
      </label>
    </div>
  );
};

const DebounceFormControl = ({
  form,
  field,
  textCurrency,
  isShowMaxButton,
  setMaxCallback,
  ...props
}) => {
  const errors = form.errors[field.name] || null;

  return (
    <>
      <div className={`field-wrap ${errors && 'error'}`}>
        {props.children}

        {textCurrency && (
          <span
            className={`input-currency ${
              isShowMaxButton ? 'input-currency--before-max-btn' : ''
            }`}
          >
            {textCurrency}
          </span>
        )}
      </div>
      {errors && (
        <p className="error-text">
          <span className="error-text__icon">
            <svg
              className="fill"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5.74986V8.5M10 11.4999H10.009M3.79425 15H16.2057C17.5852 15 18.4469 13.5414 17.7572 12.375L11.5514 1.87479C10.8617 0.708402 9.13829 0.708402 8.44856 1.87479L2.24282 12.375C1.55309 13.5414 2.4148 15 3.79425 15Z"
                stroke="#FD5353"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>{errors}</span>
        </p>
      )}
    </>
  );
};

export const DebounceFormikInput = props => {
  const handleChange = e => {
    const value = e.target.value.replace(/,/g, '.').toString();
    props.handleAmountChange(e, value, props.setFieldValue);
  };

  return (
    <DebounceFormControl {...props}>
      <DebounceInput
        type="number"
        name="amount"
        value={props.value.replace(/,/g, '.')}
        className="input input--big input--type2 input--with-currency"
        placeholder={L.translate('Pages.Users.Withdraw.Fiat.item4')}
        debounceTimeout={500}
        onChange={handleChange}
        inputRef={props.debounceRef}
      />

      {props.isShowMaxButton && (
        <button
          type="button"
          className="field-btn field-btn--max"
          onClick={props.setMaxCallback}
        >
          {L.translate('Base.FormControls.item6')}
        </button>
      )}
    </DebounceFormControl>
  );
};

// export const File = props => {
//   return (
//     <FormControl {...props}>
//       <label
//         className={[
//           'field__file',
//           props.field.value && props.field.value.name && 'text',
//         ].join(' ')}
//       >
//         <input
//           ref={props.childref}
//           type={'file'}
//           className={'field__input'}
//           {...props}
//           onChange={event => {
//             props.form.setFieldValue(
//               props.field.name,
//               event.currentTarget.files[0],
//             );
//           }}
//         />

//         <span
//           value={
//             props.field.value && props.field.value.name
//               ? props.field.value.name
//               : props.placeholder
//           }
//           className={'field__file_browser'}
//         ></span>
//       </label>
//     </FormControl>
//   );
// };

// export const Radio = props => {
//   return (
//     <FormControl {...props}>
//       {props.radio_controls.map((c, index) => {
//         return (
//           <label className={'field__radio'} key={index}>
//             <input
//               checked={props.value == c.id}
//               {...props.field}
//               type={'radio'}
//               name={props.field.name}
//               value={c.id}
//             />

//             <p className={'p1'}>{c.name}</p>
//           </label>
//         );
//       })}
//     </FormControl>
//   );
// };
