import React, { useState } from 'react';
import Style from './css/SubmitAddress.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const MiddleContent = () => {
  const [inputs, setInputs] = useState({
    mainAddress: '',
    detailAddress: '',
  });
  const { mainAddress, detailAddress } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className={Style.inputOuter}>
      <div className={Style.inputWraps}>
        <div className={Style.inputWrapsInner}>
          <div className={Style.inputWrap}>
            <AiOutlineSearch />
            <input
              name="mainAddress"
              className={`${Style.input} ${mainAddress ? Style.hasText : ''}`}
              type="text"
              placeholder="주소 또는 건물명으로 검색"
              value={mainAddress}
              onChange={onChange}
            />
          </div>
          {mainAddress ? <button className={Style.btn}>재검색</button> : ''}
        </div>
        <div className={Style.inputWrapsInner}>
          <div className={Style.inputWrap}>
            <input
              name="detailAddress"
              className={Style.input}
              type="text"
              placeholder="상세 주소를 입력해주세요"
              value={detailAddress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SubmitAddress = () => {
  return (
    <div className={Style.outer}>
      <div className={Style.container}>
        <div className={Style.title}>돌봄 주소를 입력해주세요</div>
        <MiddleContent />
      </div>
    </div>
  );
};

export default SubmitAddress;
