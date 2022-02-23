import React from 'react';
import styles from '../css/Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({ disabled }) => {
  const nextBtnType = disabled ? styles.next__btn__disabled : styles.next__btn;
  const nextType = disabled ? styles.next__disabled : styles.next;

  return (
    <footer className={styles.footer}>
      <button className={styles.prev__btn}>
        <span className={styles.prev}>이전</span>
      </button>
      <button className={`${nextBtnType}`}>
        <span className={`${nextType}`}>다음</span>
      </button>
    </footer>
  );
};

Footer.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default Footer;
