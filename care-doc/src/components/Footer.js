import React from 'react';
import styles from '../css/Footer1.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, previousStep } from '../store/pageStep';

const Footer = () => {
  const { currentStep } = useSelector(({ pageStep }) => pageStep);
  const { currentCareType } = useSelector(({ careType }) => careType);
  const addresses = useSelector(({ addresses }) => addresses);
  const { address } = addresses;
  const { currentPhone } = useSelector(({ phone }) => phone);

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
        return false;
      case 3:
        return !(address.addresDetail !== '' && address.roadAddress !== '');
      case 4:
        return !(currentPhone.length === 11);
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

export default Footer;
