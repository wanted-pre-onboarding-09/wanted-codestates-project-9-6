import React from 'react';
import styles from '../css/information.module.css';

const Information = () => {
  return (
    <div className={styles.container}>
      <section className={styles.details}>
        <h3 className={styles.title}>신청내역</h3>
        <article className={styles.item}>
          <h4 className={styles.subtitle}>돌봄 유형</h4>
          <div className={styles.content}>시간제돌봄</div>
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
            <div>서울특별시 강남구 테헤란로 77길 9 (삼성동)</div>
            <div className={styles.pastAddress}>
              <span>지번</span> 서울특별시 강남구 삼성동 143-27
            </div>
            <div>케어닥주공아파트 102동 1204호</div>
          </div>
        </article>
      </section>
    </div>
  );
};
export default Information;
