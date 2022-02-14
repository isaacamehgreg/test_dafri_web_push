import React from 'react';
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

const FormSelect = props => {
  const { data, onChange, error, placeholder } = props;

  const handleChange = data => onChange(data);
  const classValue = error ? 'select-agent error' : 'select-agent';

  return (
    <Select
      placeholder={placeholder}
      options={data}
      onChange={handleChange}
      className={classValue}
      classNamePrefix="select-agent"
      styles={customStyles}
      isClearable
      {...props}
    />
  );
};

export default FormSelect;
