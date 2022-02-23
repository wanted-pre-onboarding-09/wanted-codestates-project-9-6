import React from 'react';
import styles from '../css/Schedule.module.css';
import CalendarImg from './icons/Calendar.png';
import ArrowImg from './icons/Arrow.png';
import ArrowLfetImg from './icons/ArrowLfet.png';

const Schedule = () => {
  return (
    <section className={styles.schedule_container}>
      <div className={styles.schedule_header}>
        <img className={styles.previousArrow} src={ArrowLfetImg} />
        돌보미 신청하기
      </div>
      <div className={styles.schedule_main}>
        <div className={styles.procedure}>
          돌봄 스케줄 <span>2/4</span>
        </div>
        <div className={styles.title}>돌봄 스케줄을 설정해주세요</div>
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
        <div className={styles.time}>
          <div className={styles.selectTime}>선택</div>
          <img src={ArrowImg} />
        </div>

        <div className={styles.timeTitle}>하루 돌봄시간</div>
        <div className={styles.time}>
          <div className={styles.selectTime}>선택</div>
          <img src={ArrowImg} />
        </div>
      </div>
      <div className={styles.schedule_footer}>
        <div className={styles.previuseBtn}>이전</div>
        <div className={styles.nextBtn}>다음</div>
      </div>
    </section>
  );
};

export default Schedule;
