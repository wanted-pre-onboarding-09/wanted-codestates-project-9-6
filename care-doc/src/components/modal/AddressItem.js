import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from '../../css/AddressItem.module.css';

import { selectAddress } from '../../store/addressSlice';

const AddressItem = ({
  newAddress,
  oldAddress,
  number,
  address,
  handleAddress,
}) => {
  const dispatch = useDispatch();

  const handleSelectAddress = () => {
    dispatch(selectAddress(address));
    handleAddress(newAddress);
  };
  return (
    <div className={styles.ItemContainer} onClick={handleSelectAddress}>
      <div className={styles.AddressContainer}>
        <span className={styles.NewAddress}>{newAddress}</span>
        <div className={styles.OldAddressContainer}>
          <span className={styles.NumberBtn}>지번</span>
          <span className={styles.OldAddress}>{oldAddress}</span>
        </div>
      </div>
      <div className={styles.ZipCode}>{number}</div>
    </div>
  );
};

AddressItem.propTypes = {
  newAddress: PropTypes.string.isRequired,
  oldAddress: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  handleAddress: PropTypes.func.isRequired,
};

export default AddressItem;
