import React, { useEffect } from 'react';
import styles from '../css/Care.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearStep } from '../store/pageStep';
import { clearType } from '../store/careType';
import Footer1 from './Footer1';
import Title from './Title';
import Category from './Category';
import Header from './Header';
import Schedule from './Schedule';

const Care = () => {
  const { currentStep } = useSelector(({ pageStep }) => pageStep);

  const dispatch = useDispatch();
  useEffect(() => dispatch(clearStep()), []);
  useEffect(() => dispatch(clearType()), []);

  const renderPageStep = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return <Category />;
      case 2:
        return <Schedule />;
      case 3:
        return <div>component 3</div>;
      default:
        return <div>4 이상임</div>;
    }
  };

  return (
    <main className={styles.careWrapper}>
      <Header displayNone={false} />
      <div className={styles.pagination}>
        돌봄 유형 <span>{currentStep}</span>
        <span> / 4</span>
      </div>
      <Title text="돌봄 유형을 설정해주세요" />
      {renderPageStep(currentStep)}
      <Footer1 />
    </main>
  );
};
export default Care;
