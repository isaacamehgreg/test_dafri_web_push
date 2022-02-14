import React, { useState } from 'react';
import InputAction from '../InputAction';

const CopyToClipboard = ({
  adress,
  btnText = 'Copy',
  withBank,
  copyMessage,
}) => {
  const [value, setValue] = useState(adress);

  return (
    <div className="transfer-address">
      <div className="field-wrap">
        <input
          type="text"
          className="input input--with-copy input--type2 input--big"
          value={value}
          readOnly
        />

        <InputAction
          withBank={withBank}
          copyData={adress}
          copyMessage={copyMessage}
          btnText={btnText}
        />
      </div>
    </div>
  );
};

export default CopyToClipboard;
