import React from 'react';

const Checkbox = ({ checked, name, onChange, className }) => {
  return (
    <input
      type="checkbox"
      id={name}
      className={className}
      name={name}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
