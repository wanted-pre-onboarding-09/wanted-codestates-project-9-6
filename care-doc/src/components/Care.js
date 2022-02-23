import React, { useEffect } from 'react';
import styles from '../css/Care.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearStep } from '../store/pageStep';
import SubmitAddress from './SubmitAddress';
import { clearType } from '../store/careType';
import Footer from './Footer';
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
        return <SubmitAddress />;
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
      {renderPageStep(currentStep)}
      <Footer />
    </main>
  );
};
export default Care;
