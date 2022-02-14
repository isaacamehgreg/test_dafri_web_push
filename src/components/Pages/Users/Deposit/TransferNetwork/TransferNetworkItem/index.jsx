import React from 'react';

const TransferNetworkItem = ({ name, code }) => {
  return (
    <p className="transfer-network__name">
      {name?.toUpperCase()} ({code?.toUpperCase()})
    </p>
  );
};

export default TransferNetworkItem;
