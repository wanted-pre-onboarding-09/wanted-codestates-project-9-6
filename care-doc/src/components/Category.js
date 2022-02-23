import React from 'react';
import styles from '../css/Category.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeTime, changeDay } from '../store/careType';
import Title from './Title';
import clock from '../assets/clock.png';
import sun from '../assets/sun.png';

const Category = () => {
  const { currentCareType } = useSelector(({ careType }) => careType);
  const dispatch = useDispatch();
  const allCilck = () => {
    dispatch(changeDay());
  };

  const dateClcik = () => {
    dispatch(changeTime());
  };
  return (
    <>
      <Title text="돌봄 유형을 설정해주세요" />
      <div className={styles.categoryWrapper}>
        <div
          onClick={allCilck}
          className={currentCareType === 'DAY' ? styles.hourAcitve : null}
        >
          <img src={sun} alt="24시간 상주" />
          <p>24시간 상주</p>
        </div>
        <div
          onClick={dateClcik}
          className={currentCareType === 'TIME' ? styles.hourAcitve : null}
        >
          <img src={clock} alt="시간제" />
          <p>시간제 돌봄</p>
        </div>
      </div>
    </>
  );
};

export default Category;
