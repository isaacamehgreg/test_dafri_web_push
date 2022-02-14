import React from 'react';
import L from 'i18n-react';
import Select from 'react-select';

const customStyles = {
  container: provided => ({
    ...provided,
    background: '#FFF',
    borderRadius: '10px',
    padding: '0 15px',
  }),
  control: provided => ({
    ...provided,
    border: 'none',
    borderColor: 'transparent',
    boxShadow: 'none',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '12px 0',
  }),
  input: provided => ({
    ...provided,
    padding: '0',
    margin: '0',
  }),
  indicatorsContainer: () => ({
    width: '12px',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#969696',
    fontSize: '16px',
  }),
};
const options = [
  {
    label: L.translate('Pages.Statics.Support.SupportSelect.item1'),
    value: L.translate('Pages.Statics.Support.SupportSelect.item1'),
  },

  {
    label: L.translate('Pages.Statics.Support.SupportSelect.item2'),
    value: L.translate('Pages.Statics.Support.SupportSelect.item2'),
  },

  {
    label: L.translate('Pages.Statics.Support.SupportSelect.item3'),
    value: L.translate('Pages.Statics.Support.SupportSelect.item3'),
  },

  {
    label: L.translate('Pages.Statics.Support.SupportSelect.item4'),
    value: L.translate('Pages.Statics.Support.SupportSelect.item4'),
  },

  {
    label: L.translate('Pages.Statics.Support.SupportSelect.item5'),
    value: L.translate('Pages.Statics.Support.SupportSelect.item5'),
  },

  {
    label: L.translate('Pages.Statics.Support.SupportSelect.item6'),
    value: L.translate('Pages.Statics.Support.SupportSelect.item6'),
  },
];

const SupportSelect = ({ onChange, error }) => {
  const handleChange = data => onChange(data);
  const classValue = !error ? 'select-container error' : 'select-container';

  return (
    <Select
      placeholder={L.translate('Pages.Statics.Support.SupportSelect.item7')}
      options={options}
      onChange={handleChange}
      className={classValue}
      classNamePrefix="select"
      styles={customStyles}
      isClearable
    />
  );
};

export default SupportSelect;
