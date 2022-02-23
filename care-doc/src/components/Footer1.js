import React from 'react';
import styles from '../css/Footer1.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, previousStep } from '../store/pageStep';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

  const navigate = useNavigate();

  const moveToLast = () => {
    const body = {
      address: {
        locationCode: '11',
        roadCode: '11',
        roadAddress: '11',
        jibunAddress: '11',
        sidoName: '11',
        sigunguName: '11',
        myundongName: '11',
        liName: 's11',
        addressDetail: '11',
      },
      phoneNumber: '11',
      schedule: {
        startDate: '11',
        endDate: '11',
        visitTime: '11',
        hour: 0,
      },
      workType: 'TIME',
    };

    axios
      .post('https://caredoc-fe-server.herokuapp.com/application', body)
      .then((res) => console.log(res));
    navigate('/care/final');
  };

  const btnValidation = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return !currentCareType;
      case 2:
        return false;
      case 3:
        return false;
      case 4:
        return false;
      default:
        return null;
    }
  };

  return (
    <div className={styles.footerWrapper}>
      <button onClick={prevClick}>이전</button>

      <button
        onClick={currentStep === 4 ? moveToLast : nextClick}
        disabled={btnValidation(currentStep)}
      >
        다음
      </button>
    </div>
  );
};

export default Footer1;
