import React, { useState } from 'react';
import Information from './Information';
import styles from '../css/confirm.module.css';

const Guide = () => {
  return (
    <div className={styles.guide__outer}>
      <div className={styles.guide__state}>신청 완료</div>
      <h6 className={styles.guide__content}>
        인증하신 휴대폰 번호로
        <br />
        케어코디 프로필을
        <br />
        받아보실 수 있어요 ☺️
      </h6>
    </div>
  );
};

const Confirm = (props) => {
  // const [disabled, setDisable] = useState(true); //위로 전달
  const onEnterPhoneNumber = (e) => {
    const phoneNumber = e.target.value;
    if (e.key > 0 && e.key <= 9 && phoneNumber.length === 11) {
      // setDisable(false);
    }
  };
  return (
    <>
      {/* <Guide /> */}
      <div className={styles.container}>
        <Information />
        <input
          onKeyUp={onEnterPhoneNumber}
          className={styles.input}
          type="tel"
          placeholder="전화번호를 입력해주세요 (숫자만 입력해주세요.)"
        />
      </div>
    </>
  );
};
export default Confirm;
