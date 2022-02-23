import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../css/information.module.css';

const Information = () => {
  const { currentCareType } = useSelector(({ careType }) => careType);
  const addresses = useSelector(({ addresses }) => addresses);
  const { address } = addresses;
  console.log(address);
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
            <li className={styles.schedule}>2022년 1월 12일 22년 1월 23일</li>
            <li className={styles.schedule}>오전10시부터</li>
            <li className={styles.schedule}>8시간</li>
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
