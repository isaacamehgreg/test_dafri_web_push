import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DropdownItem from './DropdownItem';

import arrow from '../../../../../styles/img/arrow-down.svg';

const Dropdown = ({
  assets = [],
  selectedCoin,
  onSelectCurrency,
  label = '',
}) => {
  const dropdownRef = useRef(null);
  const [dropdown, setDropdown] = useState(false);

  const handleOutsideClick = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdown(false);
    }
  };

  // console.log(assets);

  const onClickInterceptor = asset => {
    onSelectCurrency(asset);
    setDropdown(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="methods-col">
      <div className={`method ${dropdown ? 'active' : ''}`} ref={dropdownRef}>
        <div className="method-item" role="presentation">
          <div className="method-item__text">{label}:</div>

          <button className="method-btn" onClick={() => setDropdown(!dropdown)}>
            <span className="d-flex method-btn__icon">
              <img src={selectedCoin?.img_path} alt="" />
            </span>

            {selectedCoin?.code?.toUpperCase()}

            <span className="d-flex method-btn__arrow">
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>

        <div className="method-drop">
          <div className="method-drop__inner">
            {assets &&
              !!assets?.length &&
              assets.map(asset => (
                <DropdownItem
                  key={uuidv4()}
                  asset={asset}
                  onSelectCurrency={onClickInterceptor}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
