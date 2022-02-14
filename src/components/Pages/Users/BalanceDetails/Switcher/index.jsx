import React from 'react';
import L from 'i18n-react';
import { Link } from 'react-router-dom';
import routes from '../../../../../routes';
import Checkbox from '../../../../Base/Checkbox/Checkbox';

const Switcher = ({ data, isCheked, onChange }) => {
  const { title, text, name } = data;

  const withdrawalLinkStyle = {
    display: 'block',
    paddingTop: '15px',
    visibility: isCheked ? 'visible' : 'hidden',
  };

  return (
    <div className="switchable-option">
      <div className="switchable-option__main">
        <p className="switchable-option__title">{title}</p>
        <div className="switchable-option__text">
          <p>
            {text}{' '}
            {name === 'withdrawal' && (
              <Link
                to={routes.Profile.WithdrawalWhiteListAddresses.path}
                className="block-header__link"
                style={withdrawalLinkStyle}
              >
                {L.translate('Pages.Users.BalanceDetails.Switcher.item1')}
              </Link>
            )}
          </p>
        </div>
      </div>
      <div className="switchable-option__action">
        <div className="onoffswitch ">
          <label className="onoffswitch-label" htmlFor={name}>
            <Checkbox
              className="onoffswitch-checkbox"
              name={name}
              checked={isCheked}
              onChange={onChange}
            />
            <span className="onoffswitch-inner onoffswitch-inner--status-type" />
            <span className="onoffswitch-switch" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Switcher;
