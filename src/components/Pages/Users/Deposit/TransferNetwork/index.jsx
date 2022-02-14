import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import TransferNetworkItem from './TransferNetworkItem';

const TransferNetwork = ({ networks, getCryptoData }) => {
  const [tab, setTab] = useState(null);

  const handleTab = network => {
    getCryptoData(network?.network_id);
    setTab(network);
  };

  useEffect(() => {
    if (networks && networks?.length) setTab(networks[0]);
  }, [networks]);

  return (
    <div className="transfer-network">
      <p className="block-title">
        {L.translate('Pages.Users.Deposit.TransferNetwork.item1')}
      </p>

      <div className="tab tab--type2">
        {networks?.length &&
          networks?.map((tabItem, i) => {
            return (
              <button
                key={i}
                className={`tab__item ${
                  tab?.network_id === tabItem?.network_id
                    ? 'tab__item--active'
                    : ''
                }`}
                type="button"
                onClick={() => handleTab(tabItem)}
              >
                {tabItem?.network_name?.toUpperCase()}
              </button>
            );
          })}
      </div>

      {tab && (
        <TransferNetworkItem code={tab?.network_name} name={tab?.network_id} />
      )}
    </div>
  );
};

export default TransferNetwork;
