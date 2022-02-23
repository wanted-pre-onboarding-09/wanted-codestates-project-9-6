import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../css/AddressItem.module.css';

const AddressItem = ({ newAddress, oldAddress, number, selectAddress }) => {
  return (
    <div
      className={styles.ItemContainer}
      onClick={() => selectAddress(newAddress)}
    >
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
  selectAddress: PropTypes.func.isRequired,
};

export default AddressItem;
