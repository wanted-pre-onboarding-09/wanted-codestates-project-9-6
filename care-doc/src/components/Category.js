import React from 'react';
import styles from '../css/Category.module.css';
import clock from '../assets/clock.png';
import sun from '../assets/sun.png';

const Category = () => {
  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.hourAcitve}>
        <img src={sun} />
        <p>24시간 상주</p>
      </div>
      <div>
        <img src={clock} />
        <p>시간제 돌봄</p>
      </div>
    </div>
  );
};

export default Category;
