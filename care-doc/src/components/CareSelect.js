import React from 'react';
import styles from '../css/input.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeStartCare, changeDayCare } from '../store/scheduleSlice';

const CareSelect = () => {
  const { currentCareType } = useSelector(({ careType }) => careType);
  const { startCare } = useSelector(({ schedule }) => schedule);
  const { dayCare } = useSelector(({ schedule }) => schedule);

  const dispatch = useDispatch();

  console.log(startCare);
  const mockData = [
    { hour: '100', text: '선택' },
    { hour: '00', text: '오전 12시' },
    { hour: '01', text: '오전 1시' },
    { hour: '02', text: '오전 2시' },
    { hour: '03', text: '오전 3시' },
    { hour: '04', text: '오전 4시' },
    { hour: '05', text: '오전 5시' },
    { hour: '06', text: '오전 6시' },
    { hour: '07', text: '오전 7시' },
    { hour: '08', text: '오전 8시' },
    { hour: '09', text: '오전 9시' },
    { hour: '10', text: '오전 10시' },
    { hour: '11', text: '오전 11시' },
    { hour: '12', text: '오후 12시' },
    { hour: '13', text: '오후 1시' },
    { hour: '14', text: '오후 2시' },
    { hour: '15', text: '오후 3시' },
    { hour: '16', text: '오후 4시' },
    { hour: '17', text: '오후 5시' },
    { hour: '18', text: '오후 6시' },
    { hour: '19', text: '오후 7시' },
    { hour: '20', text: '오후 8시' },
    { hour: '21', text: '오후 9시' },
    { hour: '22', text: '오후 10시' },
    { hour: '23', text: '오후 11시' },
  ];
  const handleSelect = (e) => {
    dispatch(changeStartCare(e.target.value));
  };
  const hourSelect = (e) => {
    dispatch(changeDayCare(e.target.value));
  };

  return (
    <scetion className={styles.careInputWarp}>
      <p className={styles.careTitle}>돌봄 시작 시간</p>
      <select onChange={handleSelect} value={startCare}>
        {mockData.map((el) => (
          <option key={el.hour} value={el.text}>
            {el.text}
          </option>
        ))}
      </select>
      <p>하루 돌봄 시간</p>
      <select
        onChange={hourSelect}
        vlaue={dayCare}
        disabled={currentCareType === 'DAY'}
      >
        {currentCareType === 'DAY' ? (
          <option value="24시간" selected>
            24시간
          </option>
        ) : (
          <>
            <option value="선택">선택</option>
            <option value="3시간">3시간</option>
            <option value="4시간">4시간</option>
            <option value="5시간">5시간</option>
            <option value="6시간">6시간</option>
            <option value="7시간">7시간</option>
            <option value="6시간">8시간</option>
            <option value="9시간">9시간</option>
          </>
        )}
      </select>
    </scetion>
  );
};

export default CareSelect;
