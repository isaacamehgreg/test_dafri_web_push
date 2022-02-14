import React, { useEffect, useRef, useState } from 'react';

const CurrencyDropdown = ({ onSelect, currentCurrencyCode, currencyFiat }) => {
  const [dropdown, setDropdown] = useState(false);
  const [selectCoin, setSelectCoin] = useState({});

  const dropdownRef = useRef(null);

  const handleSetDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleSelectCoin = code => {
    onSelect(code?.asset?.code);

    setDropdown(false);
  };

  const handleOutsideClick = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', e => {
      handleOutsideClick(e);
    });

    return () => {
      document.body.removeEventListener('click', e => {
        handleOutsideClick(e);
      });
    };
  }, []);

  useEffect(() => {
    if (currentCurrencyCode && currencyFiat?.length) {
      setSelectCoin(
        currencyFiat?.find(el => el?.asset?.code === currentCurrencyCode),
      );
    }
  }, [currentCurrencyCode]);

  return (
    <div className="transfer-block transfer-block--small-mt">
      <div className="transfer-form ">
        <div
          className={`method method--currency ${dropdown ? 'active' : ''}`}
          ref={dropdownRef}
        >
          <div
            className="method-item"
            onClick={handleSetDropdown}
            role="presentation"
          >
            <div className="method-item__logo">
              <img src={selectCoin?.asset?.img_path} alt="" />
            </div>
            <button className="method-btn">
              {selectCoin?.asset?.code?.toUpperCase()}
              <span className="d-flex method-btn__arrow">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="#2B2B2B"
                    strokeWidth="1.92"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
          {dropdown && (
            <div className="method-drop">
              <div className="method-drop__inner">
                {currencyFiat?.length &&
                  currencyFiat.map(item => (
                    <div
                      className="method-item"
                      key={item?.asset?.id}
                      onClick={() => handleSelectCoin(item)}
                      role="presentation"
                    >
                      <div className="method-item__logo">
                        <img src={item?.asset?.img_path} alt="" />
                      </div>
                      <button className="method-btn">
                        {item?.asset?.code?.toUpperCase()}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
