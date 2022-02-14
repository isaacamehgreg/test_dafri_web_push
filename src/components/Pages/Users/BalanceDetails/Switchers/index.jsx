import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import Switcher from '../Switcher';
import { openModal } from '../../../../Base/Modal';
import GoogleModalEnabled from '../../../../Base/Modals/Users/BalanceDetails/GoogleModalEnabled';
import GoogleModalDisabled from '../../../../Base/Modals/Users/BalanceDetails/GoogleModalDisabled';
import SMSModalEnable from '../../../../Base/Modals/Users/BalanceDetails/SMSModalEnable';
import SMSModalDisable from '../../../../Base/Modals/Users/BalanceDetails/SMSModalDisable';
import AntiPhishingModalEnabled from '../../../../Base/Modals/Users/BalanceDetails/AntiPhishingModalEnabled';
import AntiPhishingModalChange from '../../../../Base/Modals/Users/BalanceDetails/AntiPhishingModalChange';
import {
  settingsSelector,
  userSelector,
} from '../../../../../redux/users/settings/selectors';
import types from '../../../../../redux/types';
import { walletSelector } from '../../../../../redux/wallets/selectors';
import notification from '../../../../../services/notification';

const Switchers = () => {
  const dispatch = useDispatch();

  const switchData = [
    {
      title: L.translate('Pages.Users.BalanceDetails.Switchers.item1'),
      text: L.translate('Pages.Users.BalanceDetails.Switchers.item2'),
      name: L.translate('Pages.Users.BalanceDetails.Switchers.item3'),
    },

    {
      title: L.translate('Pages.Users.BalanceDetails.Switchers.item4'),
      text: L.translate('Pages.Users.BalanceDetails.Switchers.item5'),
      name: L.translate('Pages.Users.BalanceDetails.Switchers.item6'),
    },

    {
      title: L.translate('Pages.Users.BalanceDetails.Switchers.item7'),
      text: L.translate('Pages.Users.BalanceDetails.Switchers.item8'),
      name: L.translate('Pages.Users.BalanceDetails.Switchers.item9'),
    },

    {
      title: L.translate('Pages.Users.BalanceDetails.Switchers.item10'),
      text: L.translate('Pages.Users.BalanceDetails.Switchers.item11'),
      name: L.translate('Pages.Users.BalanceDetails.Switchers.item12'),
    },
  ];

  const settingsData = useSelector(settingsSelector);
  const { totalUSD } = useSelector(walletSelector);

  const googleData = !!settingsData.google2fa_enabled;
  const smsData = !!settingsData.sms_enabled;
  const antiPhishingData = !!settingsData.data?.anti_fishing_phrase;
  const withdrawalData = !!settingsData.data?.withdrawal_white_list_enabled;

  const [google, setGoogle] = useState(googleData);
  const [sms, setSMS] = useState(smsData);
  const [antiPhishing, setAntiPhishing] = useState(antiPhishingData);
  const [withdrawal, setWithdrawal] = useState(withdrawalData);

  const openGoogleModal = checked => {
    if (checked) {
      if (!googleData.isError) {
        openModal(() => <GoogleModalEnabled />);
      }
    } else {
      openModal(() => <GoogleModalDisabled />);
    }
  };

  const openSMSModal = checked => {
    if (checked) {
      openModal(() => <SMSModalEnable />);
    } else {
      openModal(() => <SMSModalDisable />);
    }
  };

  const openAntiFishingModal = checked => {
    if (checked) {
      openModal(() => <AntiPhishingModalEnabled />);
    } else {
      openModal(() => <AntiPhishingModalChange />);
    }
  };

  const handleGoogleChange = ({ target: { checked } }) => {
    openGoogleModal(checked);
  };

  const handleSMSChange = ({ target: { checked } }) => {
    if (totalUSD > 50000) {
      openSMSModal(checked);
    } else {
      notification({
        type: 'info',
        timeOut: 6000,
        message:
          'This function can be enabled when the total balance is $50,000',
      });
    }
  };

  const handleAntiFishingChange = ({ target: { checked } }) => {
    openAntiFishingModal(checked);
  };

  useEffect(() => {
    setGoogle(googleData);
    setSMS(smsData);
    setAntiPhishing(antiPhishingData);
    setWithdrawal(withdrawalData);
  }, [googleData, smsData, antiPhishingData, withdrawalData]);

  const handleSwitchWithdrawal = () => {
    setWithdrawal(!withdrawal);

    dispatch({
      type: types.TOGGLE_WITHDRAW_WHITELIST_ADDRESSES_START,
      payload: {
        is_active: !withdrawal,
      },
    });
  };

  return (
    <div className="dashboard-col dashboard-col--setting">
      <div className="profile-block">
        <div className="block-header">
          <p className="block-title">
            {L.translate('Pages.Users.BalanceDetails.Switchers.item13')}
          </p>
        </div>

        <div className="profile-block__content">
          <div className="profile-settings-list">
            <Switcher
              key={uuidv4()}
              data={switchData[0]}
              isCheked={google}
              onChange={handleGoogleChange}
            />

            <Switcher
              key={uuidv4()}
              data={switchData[1]}
              isCheked={sms}
              onChange={handleSMSChange}
            />

            <Switcher
              key={uuidv4()}
              data={switchData[2]}
              isCheked={antiPhishing}
              onChange={handleAntiFishingChange}
            />

            <Switcher
              key={uuidv4()}
              data={switchData[3]}
              isCheked={withdrawal}
              onChange={handleSwitchWithdrawal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switchers;
