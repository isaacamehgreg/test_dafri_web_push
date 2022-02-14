import React from 'react';
import L from 'i18n-react';

const DescriptionBlock = () => (
  <>
    <div className="security-text">
      <p>
        {L.translate(
          'Pages.Users.WhiteListWithdrawalAddresses.DescriptionBlock.item1',
        )}
      </p>
    </div>
  </>
);

export default DescriptionBlock;
