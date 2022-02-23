import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../css/information.module.css';

const Information = () => {
  const { currentCareType } = useSelector(({ careType }) => careType);
  const addresses = useSelector(({ addresses }) => addresses);
  const { address } = addresses;
  const schedules = useSelector(({ schedule }) => schedule);

  console.log(schedules);

  return (
    <div className={styles.container}>
      <section className={styles.details}>
        <h3 className={styles.title}>신청내역</h3>
        <article className={styles.item}>
          <h4 className={styles.subtitle}>돌봄 유형</h4>
          <div className={styles.content}>
            {currentCareType === 'TIME' ? '⏰ 시간제 돌봄' : '🌞 24시간 상주'}
          </div>
        </article>
        <div className={styles.divider}></div>
        <article className={styles.item}>
          <h4 className={styles.subtitle}>돌봄 일정</h4>
          <div className={styles.content}>
            <li className={styles.schedule}>
              {schedules.startDate} ~ {schedules.endDate}
            </li>

            <li className={styles.schedule}>{schedules.startCare}부터</li>
            {currentCareType === 'TIME' && (
              <li className={styles.schedule}>{schedules.dayCare}</li>
            )}
          </div>
        </article>
        <div className={styles.divider}></div>
        <article className={styles.item}>
          <h4 className={styles.subtitle}>돌봄 주소</h4>
          <div className={styles.content}>
            <div>{address.roadAddress}</div>
            <div className={styles.pastAddress}>
              <span>지번</span> {address.jibunAddress}
            </div>
            <div>{address.addressDetail}</div>
          </div>
        </article>
      </section>
    </div>
  );
};
export default Information;
