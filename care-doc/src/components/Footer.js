import React from 'react';
import styles from '../css/Footer1.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, previousStep } from '../store/pageStep';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
  const { currentStep } = useSelector(({ pageStep }) => pageStep);
  const { currentCareType } = useSelector(({ careType }) => careType);
  const addresses = useSelector(({ addresses }) => addresses);
  const { address } = addresses;
  const { currentPhone } = useSelector(({ phone }) => phone);
  const schedule = useSelector(({ schedule }) => schedule);

  const dispatch = useDispatch();
  const nextClick = () => {
    dispatch(nextStep(currentStep));
  };
  const prevClick = () => {
    dispatch(previousStep(currentStep));
  };

  const navigate = useNavigate();

  const body = {
    address: {
      locationCode: address.locationCode,
      roadCode: address.roadCode,
      roadAddress: address.roadAddress,
      jibunAddress: address.jibunAddress,
      sidoName: address.sidoName,
      sigunguName: address.sigunguName,
      myundongName: address.myundongName,
      liName: address.liName,
      addressDetail: address.addressDetail,
    },
    phoneNumber: currentPhone,
    schedule: {
      startDate: schedule.startDate,
      endDate: schedule.endDate,
      visitTime: schedule.startCare,
      hour: Number(schedule.dayCare[0]),
    },
    workType: currentCareType,
  };

  const moveToLast = () => {
    axios
      .post('https://caredoc-fe-server.herokuapp.com/application', body)
      .then((res) => console.log(res.data));

    navigate('/care/final');
  };

  const btnValidation = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return !currentCareType;
      case 2:
        return !(
          schedule.startDate !== '' &&
          schedule.endDate !== '' &&
          schedule.startCare !== '선택' &&
          schedule.dayCare !== '선택'
        );
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
      <button
        onClick={currentStep === 4 ? moveToLast : nextClick}
        disabled={btnValidation(currentStep)}
      >
        다음
      </button>
    </div>
  );
};

export default Footer;
