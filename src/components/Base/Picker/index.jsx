import React from 'react';
import DatePicker from 'react-datepicker';

const MONTHS = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULL',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
];

const WEEKDAY = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const Picker = props => {
  const { selectedDate, onChange } = props;

  return (
    <DatePicker
      selected={selectedDate}
      startDate={selectedDate}
      onChange={onChange}
      wrapperClassName="custom-datepicker"
      {...props}
    />
  );
};

export default Picker;
