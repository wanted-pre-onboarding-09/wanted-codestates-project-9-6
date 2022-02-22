import React from 'react';
import styles from '../css/DoneMessage.module.css';

const DoneMessage = (props) => {
  return (
    <div className={styles.last__box}>
      <div className={styles.title__box}>
        <p className={styles.title}>📱 신청이 완료되었습니다!</p>
      </div>
      <div className={styles.content__box}>
        <p className={styles.content}>
          신청하신 내용을 보고 케어코디님들이 지원할 예정입니다.
        </p>
        <p className={styles.content}>
          케어코디님들이 신청할 때 마다 앱이나 문자로 알림을 보내드립니다.
        </p>
        <p className={styles.content}>케어코디님의 지원 알림을 기다려주세요!</p>
      </div>
      <button className={styles.finish__btn}>
        <span className={styles.finish}>끝내기</span>
      </button>
    </div>
  );
};

export default DoneMessage;
