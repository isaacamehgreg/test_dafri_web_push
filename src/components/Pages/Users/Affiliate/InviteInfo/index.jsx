import React from 'react';
import L from 'i18n-react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../../../redux/auth/selectors';
import CopyToClipboardButton from '../CopyToClipboardButton';

const trimReferralID = string =>
  `${string?.slice(0, 6)}...${string?.slice(-6)}`;

const trimReferralLink = string =>
  `${string?.slice(0, 9)}...${string?.slice(-6)}`;

const InviteInfo = () => {
  const user = useSelector(userSelector);

  return (
    <div className="affiliate-form">
      <div className="field">
        <div className="block-input">
          <p className="block-input__name">
            {L.translate('Pages.Users.Affiliate.InviteInfo.item1')}
          </p>
          <div className="block-input__value">
            <p className="block-input__value-item">
              {trimReferralID(user?.user_data?.invite_key)}
            </p>
          </div>
          <div className="input-action input-action--small">
            <CopyToClipboardButton
              copyData={user?.user_data?.invite_key}
              copyMassage={L.translate(
                'Pages.Users.Affiliate.InviteInfo.item2',
              )}
            />
          </div>
        </div>
      </div>
      <div className="field field--mt">
        <div className="block-input block-input--with-copy">
          <p className="block-input__name">
            {L.translate('Pages.Users.Affiliate.InviteInfo.item3')}
          </p>
          <div className="block-input__value">
            <p className="block-input__value-extra">
              {trimReferralLink(user?.user_data?.invite_url)}
            </p>
          </div>
          <div className="input-action input-action--small">
            <CopyToClipboardButton
              copyData={user?.user_data?.invite_url}
              copyMassage={L.translate(
                'Pages.Users.Affiliate.InviteInfo.item4',
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteInfo;
