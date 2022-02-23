import React from 'react';
import styles from '../css/Footer1.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, previousStep } from '../store/pageStep';

const Footer1 = () => {
  const { currentStep } = useSelector(({ pageStep }) => pageStep);
  const { currentCareType } = useSelector(({ careType }) => careType);

  const dispatch = useDispatch();

  const nextClick = () => {
    dispatch(nextStep(currentStep));
  };
  const prevClick = () => {
    dispatch(previousStep(currentStep));
  };

  const btnValidation = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return !currentCareType;
      case 2:
        return true;
      case 3:
        return true;
      case 4:
        return true;

      default:
        return null;
    }
  };

  return (
    <div className={styles.footerWrapper}>
      <button onClick={prevClick}>이전</button>
      <button onClick={nextClick} disabled={btnValidation(currentStep)}>
        다음
      </button>
    </div>
  );
};

export default Footer1;
