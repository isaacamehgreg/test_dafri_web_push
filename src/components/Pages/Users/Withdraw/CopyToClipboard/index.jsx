import React from 'react';
import InputAction from '../InputAction';

const CopyToClipboard = ({ adress, withBank, copyMessage }) => {
  return (
    <div className="transfer-address">
      <div className="field-wrap">
        <input
          type="text"
          className="input input--with-copy input--type2 input--big"
          defaultValue={adress}
          readOnly
        />

        <InputAction
          withBank={withBank}
          copyData={adress}
          copyMessage={copyMessage}
        />
      </div>
    </div>
  );
};

export default CopyToClipboard;
