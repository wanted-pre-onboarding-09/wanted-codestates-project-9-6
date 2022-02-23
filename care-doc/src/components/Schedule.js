import React, { useState } from 'react';
import styles from '../css/Schedule.module.css';
import CalendarImg from './icons/Calendar.png';
import ArrowImg from './icons/Arrow.png';
import TimeTable from './modal/TimeTable';

const Schedule = () => {
  const [show, setShow] = useState(false);
  const modalOpen = () => {
    console.log('hi');
    setShow(true);
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
        <div className={styles.time} onClick={modalOpen}>
          <div className={styles.selectTime}>선택</div>
          <img src={ArrowImg} />
        </div>

        <div className={styles.timeTitle}>하루 돌봄시간</div>
        <div className={styles.time}>
          <div className={styles.selectTime}>선택</div>
          <img src={ArrowImg} />
        </div>
      </div>
      <TimeTable open={show} />
    </section>
  );
};

export default Schedule;
