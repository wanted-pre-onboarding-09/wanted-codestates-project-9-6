import React from 'react';
import Information from './Information';
import styles from '../css/confirm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPhone } from '../store/phoneNumber';

// const Guide = () => {
//   return (
//     <div className={styles.guide__outer}>
//       <div className={styles.guide__state}>신청 완료</div>
//       <h6 className={styles.guide__content}>
//         인증하신 휴대폰 번호로
//         <br />
//         케어코디 프로필을
//         <br />
//         받아보실 수 있어요 ☺️
//       </h6>
//     </div>
//   );
// };

const Confirm = (props) => {
  // const [disabled, setDisable] = useState(true); //위로 전달
  const { currentPhone } = useSelector(({ phone }) => phone);
  const dispatch = useDispatch();

  const onEnterPhoneNumber = (e) => {
    const target = e.target.value;
    const regex = /^[0-9]/g;
    if (regex.test(target)) {
      dispatch(addPhone(target));
    }
  };
  return (
    <>
      {/* <Guide /> */}
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
