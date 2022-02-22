import React from 'react';
import styles from '../css/Footer1.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, previousStep } from '../store/pageStep';

const Footer1 = () => {
  const { currentStep } = useSelector(({ pageStep }) => pageStep);
  const dispatch = useDispatch();
  const nextClick = () => {
    dispatch(nextStep(currentStep));
  };
  const prevClick = () => {
    dispatch(previousStep(currentStep));
  };
  return (
    <div className={styles.footerWrapper}>
      <button onClick={prevClick}>이전</button>
      <button onClick={nextClick}>다음</button>
    </div>
  );
};

export default Footer1;
