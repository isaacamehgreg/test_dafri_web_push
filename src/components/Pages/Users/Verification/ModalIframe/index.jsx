import React, { useEffect } from 'react';
import L from 'i18n-react';
import snsWebSdk from '@sumsub/websdk';
import { useDispatch, useSelector } from 'react-redux';
import { kycSelector } from '../../../../../redux/users/verification/selectors';
import { closeModal } from '../../../../Base/Modal';
import closeIcon from '../../../../../styles/img/closeIcon.svg';
import Loader from '../../../../Base/Loader';
import types from '../../../../../redux/types';

const ModalIframe = ({ accessToken, url, name, email, phone, messages }) => {
  const { loading } = useSelector(kycSelector);

  const launchWebSdk = () => {
    const snsWebSdkInstance = snsWebSdk
      .init(accessToken, () => Promise.resolve(accessToken))
      .withConf({
        lang: 'en',
        email,
        phone,
        i18n: messages,
        onMessage: (type, payload) => {
          // console.log('WebSDK onMessage', type, payload);
        },
        onError: error => {
          console.error('WebSDK onError', error);
        },
      })
      .build();

    snsWebSdkInstance.launch('#kyc-sumsub-verify');
  };

  useEffect(() => {
    if (!loading) launchWebSdk();
  }, [loading]);

  return (
    <div className="modal modal--medium">
      <button className="close-modal" onClick={closeModal}>
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="modal-header">
        <p className="modal-title">
          {L.translate('Pages.Users.Verification.ModalIframe.item1')}
        </p>
      </div>

      <div className="modal-body">
        {loading ? <Loader /> : <div id="kyc-sumsub-verify" />}
      </div>
    </div>
  );
};

export default ModalIframe;
