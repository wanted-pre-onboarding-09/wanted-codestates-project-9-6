import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styles from '../../css/AddressList.module.css';

import AddressItem from './AddressItem';

const AddressList = ({ keyword, setInputs, toggleFocus }) => {
  const { addresses } = useSelector((addresses) => addresses);

  const selectAddress = (address) => {
    setInputs((prev) => ({ ...prev, mainAddress: address }));
    toggleFocus();
  };
  return (
    <div className={styles.ListContainer}>
      {keyword !== ''
        ? addresses.juso.map((address, idx) => (
            <AddressItem
              key={idx}
              newAddress={address.roadAddr}
              oldAddress={address.jibunAddr}
              number={address.zipNo}
              selectAddress={selectAddress}
            />
          ))
        : null}
    </div>
  );
};

AddressList.propTypes = {
  keyword: PropTypes.string.isRequired,
  setInputs: PropTypes.func.isRequired,
  toggleFocus: PropTypes.func.isRequired,
};

export default AddressList;
