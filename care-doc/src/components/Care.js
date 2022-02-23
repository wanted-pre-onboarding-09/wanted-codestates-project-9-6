import React, { useEffect } from 'react';
import styles from '../css/Care.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearStep } from '../store/pageStep';
import SubmitAddress from './SubmitAddress';
import { clearType } from '../store/careType';
import { clearDate } from '../store/scheduleSlice';
import Footer from './Footer';
import Category from './Category';
import Header from './Header';
import Confirm from './Confirm';
import Schedule from './Schedule';

const Care = () => {
  const { currentStep } = useSelector(({ pageStep }) => pageStep);
  const dispatch = useDispatch();
  useEffect(() => dispatch(clearStep()), []);
  useEffect(() => dispatch(clearType()), []);
  useEffect(() => dispatch(clearDate()), []);
  const renderPageStep = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return <Category />;
      case 2:
        return <Schedule />;
      case 3:
        return <SubmitAddress />;
      default:
        return <Confirm />;
    }
  };

  return (
    <main className={styles.careWrapper}>
      <Header displayNone={false} />
      <div className={styles.pagination}>
        돌봄 유형 <span>{currentStep}</span>
        <span> / 4</span>
      </div>
      {renderPageStep(currentStep)}
      <Footer />
    </main>
  );
};
export default Care;
