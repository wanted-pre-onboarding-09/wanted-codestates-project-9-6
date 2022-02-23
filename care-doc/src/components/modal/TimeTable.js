import React from 'react';
import styles from '../../css/TimeTable.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const TimeTable = ({ show, setShow }) => {
  // const [open, setOpen] = useState('');

  // if (show === true) {
  //   setOpen(show);
  //   console.log(open);
  //   console.log('hello');
  // } else {
  //   console.log('hello1');
  // }

  const { careHour } = useSelector(({ hours }) => hours);
  const { careDate } = useSelector(({ hours }) => hours);
  const dispatch = useDispatch();

  // const dispatch = useDispatch();

  const modalClose = () => {
    setShow(!show);
  };

  const houreSelect = (e) => {
    if (!e.target.matches('li')) return;
    setShow(!show);
  };

  return (
    <div className={show ? styles.modalActive : styles.modalBg}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div>돌봄 시작 시간 선택</div>
          <div onClick={modalClose}>X</div>
        </div>
        <ul onClick={houreSelect} className={styles.list}>
          <li value="3">3시간</li>
          <li value="4">4시간</li>
          <li value="5">4시간</li>
        </ul>
      </div>
    </div>
  );
};

export default TimeTable;

TimeTable.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
