import React from 'react';
import Information from './Information';
import styles from '../css/confirm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPhone } from '../store/phoneNumber';
import Title from './Title';

const Confirm = (props) => {
  const text =
    '인증하신 휴대폰 번호로 \n 케어코디 프로필을 \n 받아보실 수 있어요 ☺️';

  const { currentPhone } = useSelector(({ phone }) => phone);
  const dispatch = useDispatch();

  const onEnterPhoneNumber = (e) => {
    const target = e.target.value.replace(/[^0-9]/g, '');

    dispatch(addPhone(target));

    console.log(currentPhone);
  };

  return (
    <>
      <Title text={text} />
      <div className={styles.container}>
        <Information />
        <input
          value={currentPhone}
          onChange={onEnterPhoneNumber}
          className={styles.input}
          type="text"
          placeholder="전화번호를 입력해주세요 (숫자만 입력해주세요.)"
        />
      </div>
    </>
  );
};
export default Confirm;
