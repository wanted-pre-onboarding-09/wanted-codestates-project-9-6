import React, { useState } from 'react';
import styles from '../../css/TimeTable.module.css';
const TimeTable = (show) => {
  const [open, setOpen] = useState('');
  if (show === true) {
    setOpen(show);
    console.log(open);
    console.log('hello');
  } else {
    console.log('hello1');
  }
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div>돌봄 시작 시간 선택</div>
          <div>X</div>
        </div>
        <ul className={styles.list}>d</ul>
      </div>
    </div>
  );
};

export default TimeTable;
