import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';

import { BsSearch } from 'react-icons/bs';
import AddressList from './AddressList';
import { getAddress } from '../../store/addressSlice';

import styles from '../../css/AddressModal.module.css';

const AddressModal = ({ onClose, setInputs, toggleFocus }) => {
  const dispatch = useDispatch();
  const [isSearching, setIsSearching] = useState(false);
  const [keyword, setKeyword] = useState('');

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSearch = async (e) => {
    if (e.key !== 'Enter') return;

    dispatch(getAddress(keyword));

    setIsSearching(true);
  };

  useEffect(() => {
    if (keyword === '') setIsSearching(false);
  }, [keyword]);

  return (
    <div className={styles.ModalContainer}>
      <div className={styles.Toolbar}>
        <span className={styles.HeaderTitle}>주소 검색</span>
        <AiOutlineClose className={styles.CloseIcon} onClick={onClose} />
      </div>
      <div className={styles.Box}>
        <div className={styles.SearchContainer}>
          <BsSearch className={styles.SearchIcon} />
          <input
            type="text"
            placeholder="주소 또는 건물명으로 검색"
            className={styles.SearchInput}
            value={keyword}
            onKeyUp={onSearch}
            onChange={onChange}
          />
        </div>
      </div>
      <>
        {isSearching ? (
          <AddressList
            keyword={keyword}
            setInputs={setInputs}
            toggleFocus={toggleFocus}
          />
        ) : (
          <div className={styles.DescriptionContainer}>
            <span className={styles.Description}>
              찾으시려는 도로명 주소의 건물번호 또는 시설명까지 상세히 입력 후
              검색해주세요. <br />
              예) 중앙동, 불정로432번길
            </span>
          </div>
        )}
      </>
      <div className={styles.Footer}>
        <span className={styles.FooterDescription}>
          · 기본주소 선택 후 상세주소를 반드시 입력해주세요. 상세주소가 없는
          경우 주소지 특징을 입력해주세요.
          <br /> · 2016년 8월 1일부터는 5가지 우편번호 사용이 의무화됩니다.
          도로명주소 + 5자리 우편번호로 등록하셔서 서비스 이용에 불편함이 없도록
          하시길 바랍니다.
        </span>
      </div>
    </div>
  );
};

AddressModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  setInputs: PropTypes.func.isRequired,
  toggleFocus: PropTypes.func.isRequired,
};

export default AddressModal;
