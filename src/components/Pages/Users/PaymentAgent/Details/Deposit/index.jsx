import React, { useState } from 'react';
import DepositOverview from '../DepositOverview';
import DepositForm from '../DepositForm';

const PaymentAgentDeposit = () => {
  const [selectedAsset, setSelectedAsset] = useState(null);

  return (
    <div className="main-form-box main-form-box--agent">
      <div className="main-form">
        <DepositOverview
          selectedAsset={selectedAsset}
          setSelectedAsset={setSelectedAsset}
        />
        <DepositForm assetID={selectedAsset?.asset?.id} />
      </div>
    </div>
  );
};

export default PaymentAgentDeposit;
