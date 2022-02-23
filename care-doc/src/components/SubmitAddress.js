import React, { useState } from 'react';
import Style from '../css/SubmitAddress.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

import ModalPortal from './modal/ModalPortal';
import AddressModal from './modal/AddressModal';

const MiddleContent = () => {
  const [inputs, setInputs] = useState({
    mainAddress: '',
    detailAddress: '',
  });
  const [focusing, setFocusing] = useState(false);
  const { mainAddress, detailAddress } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const toggleFocus = () => setFocusing((prev) => !prev);

  return (
    <>
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
                onFocus={() => (mainAddress ? null : toggleFocus())}
              />
            </div>
            {mainAddress ? (
              <button className={Style.btn} onClick={toggleFocus}>
                재검색
              </button>
            ) : (
              ''
            )}
          </div>
          <div className={Style.inputWrapsInner}>
            <div className={Style.inputWrap}>
              <input
                name="detailAddress"
                className={Style.input}
                type="text"
                placeholder="상세 주소를 입력해주세요"
                value={detailAddress}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
      {focusing && (
        <ModalPortal>
          <AddressModal
            onClose={toggleFocus}
            setInputs={setInputs}
            toggleFocus={toggleFocus}
          />
        </ModalPortal>
      )}
    </>
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
