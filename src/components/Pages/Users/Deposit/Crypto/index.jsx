import React, { useEffect, useRef, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { walletSelector } from '../../../../../redux/wallets/selectors';
import types from '../../../../../redux/types';
import DepositAdress from '../DepositAdress';
import QrCode from '../QrCode';
import TransferCheck from '../TransferCheck';
import SupportedCurrency from '../SupportedCurrency';
import TransferNetwork from '../TransferNetwork';

const cryptoLabels = [
  L.translate('Pages.Users.Deposit.Crypto.item4'),
  L.translate('Pages.Users.Deposit.Crypto.item5'),
  L.translate('Pages.Users.Deposit.Crypto.item6'),
  L.translate('Pages.Users.Deposit.Crypto.item7'),
];

const DepositCrypto = ({ isLoading, cryptoData }) => {
  const dispatch = useDispatch();
  const wallet = useSelector(walletSelector);
  const { generatedCoinData } = wallet;

  const [agree, toggleAgree] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const checkBoxRef = useRef();

  const startScroll = () =>
    checkBoxRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });

  const getCryptoData = id => {
    if (selectedItem) {
      dispatch({
        type: types.GENERATE_COIN_ADRESS_START,
        payload: {
          walletID: selectedItem?.id,
          network: !id ? selectedItem?.networks[0]?.network_id : id,
        },
      });
      if (!id) {
        startScroll();
      }
    }
  };

  const handleSelect = item => setSelectedItem(item);
  const handleToggleAgree = () => toggleAgree(!agree);

  useEffect(() => {
    getCryptoData();
  }, [selectedItem]);

  return (
    <>
      <SupportedCurrency
        isLoading={isLoading}
        title={L.translate('Pages.Users.Deposit.Crypto.item1')}
        labels={cryptoLabels}
        data={cryptoData}
        activeEl={selectedItem?.assetID}
        onSelectItem={handleSelect}
      />

      <TransferCheck
        text={L.translate('Pages.Users.Deposit.Crypto.item2')}
        onChange={handleToggleAgree}
        checkBoxRef={checkBoxRef}
      />

      {agree ? (
        <div className="transfer-option">
          {selectedItem?.networks?.length && (
            <TransferNetwork {...selectedItem} getCryptoData={getCryptoData} />
          )}

          {generatedCoinData ? (
            <>
              <QrCode data={generatedCoinData?.address_qr} />
              <DepositAdress
                adress={generatedCoinData?.address}
                copyMessage={L.translate('Pages.Users.Deposit.Crypto.item3')}
              />
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default DepositCrypto;
