import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, clearStep } from '../store/pageStep';

const Care = () => {
  const { currentStep } = useSelector(({ pageStep }) => pageStep);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(nextStep(currentStep));
  };

  useEffect(() => dispatch(clearStep()), []);
  const renderPageStep = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return <div>component 1</div>;
      case 2:
        return <div>component 2</div>;
      case 3:
        return <div>component 3</div>;
      default:
        return <div>4이상임</div>;
    }
  };

  return (
    <>
      {renderPageStep(currentStep)}
      <div onClick={onClick}>page 이동</div>
    </>
  );
};
export default Care;
