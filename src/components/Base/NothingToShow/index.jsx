/* eslint-disable react/prop-types */
import React from 'react';
import L from 'i18n-react';

const NothingToShow = ({ colSpan }) => {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className="nothing-to-show"
        style={{
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <p>{L.translate('Base.NothingToShow.item1')}</p>
      </td>
    </tr>
  );
};

export default NothingToShow;
