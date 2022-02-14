import React from 'react';
import L from 'i18n-react';
import moment from 'moment';
import { transformData } from '../../../../../services/helpers';

const FieldWithDisabledDate = ({ address }) => {
  return (
    <div className="table-add-address__field">
      <div className="field-wrap">
        <input
          type="text"
          className="input"
          placeholder={L.translate(
            'Pages.Users.WhiteListWithdrawalAddresses.FieldWithDisabledDate.item1',
          )}
          name="address"
          defaultValue={`Disabled ${
            address?.disabled_at !== true
              ? address?.disabled_at
              : transformData(moment().unix(), 'YYYY-MM-DD HH:mm:ss')
          }`}
          disabled={address?.disabled_at}
        />
      </div>
    </div>
  );
};

export default FieldWithDisabledDate;
