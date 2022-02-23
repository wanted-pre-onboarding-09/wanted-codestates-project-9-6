import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <DatePicker
        dataFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        startDate={startDate}
        placeholderText="날짜 선택"
      />
    </>
  );
};

export default Calendar;
