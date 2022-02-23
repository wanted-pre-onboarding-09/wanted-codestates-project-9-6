import React, { useState } from 'react';
import styles from '../css/Schedule.module.css';
import CalendarImg from './icons/Calendar.png';
import ArrowImg from './icons/Arrow.png';
import TimeTable from './modal/TimeTable';

const Schedule = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(false);
  const modalOpen = () => {
    setShow(!show);
  };
  const dateOpen = () => {
    setDate(!date);
  };

  return (
    <section className={styles.schedule_container}>
      <div className={styles.schedule_main}>
        <div className={styles.date_container}>
          <div className={styles.day_container}>
            <div className={styles.dayTitle}>시작일</div>
            <div className={styles.day}>
              <div className={styles.selectDay}>날짜 선택</div>
              <img src={CalendarImg} />
            </div>
          </div>
          <div className={styles.day_container}>
            <div className={styles.dayTitle}>종료일</div>
            <div className={styles.day}>
              <div className={styles.selectDay}>날짜 선택</div>
              <img src={CalendarImg} />
            </div>
          </div>
        </div>

        <div className={styles.timeTitle}>돌봄 시작시간</div>
        <button className={styles.time} onClick={modalOpen}>
          <div className={styles.selectTime}>선택</div>
          <img src={ArrowImg} />
        </button>

        <div className={styles.timeTitle}>하루 돌봄시간</div>
        <button className={styles.time} onClick={dateOpen}>
          <div className={styles.selectTime}>선택</div>
          <img src={ArrowImg} />
        </button>
      </div>
      <TimeTable show={show} setShow={setShow} />
    </section>
  );
};

export default Schedule;
