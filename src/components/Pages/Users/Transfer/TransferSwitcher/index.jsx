import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import L from 'i18n-react';
import { userSelector } from '../../../../../redux/auth/selectors';
import PaymentAgent from '../PaymentAgent';
import Swap from '../Swap';

const TransferSwitcher = () => {
  const user = useSelector(userSelector);
  const [activeTab, setActiveTab] = useState(0);
  const handleSetTab = num => setActiveTab(num);

  const isPaymentAgent = !!user?.payment_agent;

  useEffect(() => {
    if (!isPaymentAgent) setActiveTab(1);
  }, [isPaymentAgent]);

  return (
    <>
      <div className="switcher">
        {isPaymentAgent && (
          <button
            className={`switcher__item ${!activeTab ? 'active' : ''}`}
            onClick={() => handleSetTab(0)}
          >
            {L.translate('Pages.Users.Transfer.TransferSwitcher.item1')}
          </button>
        )}

        <button
          className={`switcher__item ${activeTab ? 'active' : ''}`}
          onClick={() => handleSetTab(1)}
        >
          {L.translate('Pages.Users.Transfer.TransferSwitcher.item2')}
        </button>
      </div>
      {!activeTab ? (
        <>
          <PaymentAgent />
        </>
      ) : (
        <>
          <Swap />
        </>
      )}
    </>
  );
};

export default TransferSwitcher;
