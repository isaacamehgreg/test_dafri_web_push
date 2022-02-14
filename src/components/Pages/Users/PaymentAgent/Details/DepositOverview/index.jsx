import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import L from 'i18n-react';
import { userSelector } from '../../../../../../redux/auth/selectors';
import { paymentAgentSingleSelector } from '../../../../../../redux/paymentAgent/selectors';
import types from '../../../../../../redux/types';
import { walletSelector } from '../../../../../../redux/wallets/selectors';

const DepositOverview = ({ selectedAsset, setSelectedAsset }) => {
  const dispatch = useDispatch();
  const wallets = useSelector(walletSelector);
  const user = useSelector(userSelector);
  const paymentAgent = useSelector(paymentAgentSingleSelector);

  const [dropdown, setDropdown] = useState(false);

  const { walletsList } = wallets;
  const fiatWallets = walletsList.filter(item => item.asset.type === 'fiat');

  useEffect(() => {
    if (walletsList.length) {
      setSelectedAsset(fiatWallets[0]);
    }
  }, [walletsList]);

  useEffect(() => {
    if (user?.id) {
      dispatch({
        type: types.GET_SINGLE_PAYMENT_AGENT_START,
        payload: {
          id: user?.id,
        },
      });
    }
  }, [dispatch, user?.id]);

  const handleToggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleSelectAsset = asset => {
    setSelectedAsset(asset);

    setDropdown(false);
  };

  return (
    <div className="agent-transfer">
      <div className="d-flex agent-transfer__header">
        <p className="item-title">
          {L.translate(
            'Pages.Users.PaymentAgent.Details.DepositOverview.item1',
          )}
        </p>
      </div>
      <div className="agent-transfer-main">
        <div className="agent-transfer-balance">
          <p>
            {L.translate(
              'Pages.Users.PaymentAgent.Details.DepositOverview.item2',
            )}
          </p>
          <p className="agent-transfer-balance__value">
            {selectedAsset?.total} {selectedAsset?.asset?.code?.toUpperCase()}
          </p>
        </div>
        <div className="agent-transfer-currency">
          <div
            className={`method method--currency method--no-mt ${
              dropdown ? 'active' : ''
            }`}
          >
            <div className="method-item">
              <div className="method-item__logo">
                <img src={selectedAsset?.asset?.img_path} alt="" />
              </div>
              <button className="method-btn" onClick={handleToggleDropdown}>
                {selectedAsset?.asset?.code?.toUpperCase()}
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
                  {fiatWallets?.length
                    ? fiatWallets
                        ?.filter(
                          wallet =>
                            wallet?.asset?.code !== selectedAsset?.asset?.code,
                        )
                        ?.map(wallet => (
                          <div
                            className="method-item"
                            key={wallet?.id}
                            onClick={() => handleSelectAsset(wallet)}
                            role="presentation"
                          >
                            <div className="method-item__logo">
                              <img src={wallet?.asset?.img_path} alt="" />
                            </div>
                            <button className="method-btn" type="button">
                              {wallet?.asset?.code?.toUpperCase()}
                            </button>
                          </div>
                        ))
                    : null}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="agent-transfer-total-wrap">
        <div className="row">
          <div className="col-lg-4">
            <div className="agent-transfer-total">
              <p className="agent-transfer-total__title">
                {L.translate(
                  'Pages.Users.PaymentAgent.Details.DepositOverview.item3',
                )}
              </p>
              <p className="agent-transfer-total__value">
                {selectedAsset?.balance}{' '}
                <span>{selectedAsset?.asset?.code?.toUpperCase()}</span>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="agent-transfer-total">
              <p className="agent-transfer-total__title">
                {L.translate(
                  'Pages.Users.PaymentAgent.Details.DepositOverview.item4',
                )}
              </p>
              <p className="agent-transfer-total__value">
                {paymentAgent?.commission_rate} <span>%</span>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="agent-transfer-total">
              <p className="agent-transfer-total__title">
                {L.translate(
                  'Pages.Users.PaymentAgent.Details.DepositOverview.item5',
                )}
              </p>
              <p className="agent-transfer-total__value">
                {paymentAgent?.total_transactions || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositOverview;
