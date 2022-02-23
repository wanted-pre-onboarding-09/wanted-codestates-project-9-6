import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../css/Schedule.module.css';
import { changeStartDate, changeEndDate } from '../store/scheduleSlice';
import CareSelect from './CareSelect';

const Schedule = () => {
  const [startDateValue, setStartDateValue] = useState('');
  const [endDateValue, setEndDateValue] = useState('');
  const dispatch = useDispatch();

  const StartDateValueHandler = (e) => {
    const variable = String(e.target.value);
    setStartDateValue(variable);
    dispatch(changeStartDate(variable));
  };

  const EndDateValueHandler = (e) => {
    const variable = String(e.target.value);
    setEndDateValue(variable);
    dispatch(changeEndDate(variable));
  };

  return (
    <>
      <section className={styles.schedule_container}>
        <div className={styles.schedule_main}>
          <div className={styles.date_container}>
            <div className={styles.day_container}>
              <div className={styles.dayTitle}>시작일</div>
              <div className={styles.day}>
                <input
                  type="date"
                  data-placeholder="날짜 선택"
                  required
                  aria-required="true"
                  value={startDateValue}
                  className={styles.selectDay}
                  onChange={StartDateValueHandler}
                ></input>
              </div>
            </div>
            <div className={styles.day_container}>
              <div className={styles.dayTitle}>종료일</div>
              <div className={styles.day}>
                <input
                  type="date"
                  data-placeholder="날짜 선택"
                  required
                  aria-required="true"
                  value={endDateValue}
                  className={styles.selectDay}
                  onChange={EndDateValueHandler}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <CareSelect />
      </section>
    </>
  );
};

export default Schedule;
