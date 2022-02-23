import React from 'react';
import Information from './Information';
import styles from '../css/confirm.module.css';

const Confirm = (props) => {
  const onEnterPhoneNumber = (e) => {
    const phoneNumber = e.target.value;
    if (phoneNumber > 0 && phoneNumber <= 9) {
      // 다음단계 버튼 활성화해야함
      // test
      return true;
    }
  };
  return (
    <>
      <Information />
      <input
        onKeyUp={onEnterPhoneNumber}
        className={styles.input}
        type="tel"
        placeholder="전화번호를 입력해주세요 (숫자만 입력해주세요.)"
      />
    </>
  );
};
export default Confirm;
