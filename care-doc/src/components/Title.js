import React from 'react';
import styles from '../css/Title.module.css';
import PropTypes from 'prop-types';

const Title = ({ text }) => {
  return <p className={styles.title}>{text}</p>;
};

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
