import React from 'react';
import { ReactComponent as PrevBtn } from '../assets/Fill.svg';
import styles from '../css/Header.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ displayNone }) => {
  const displayType = displayNone ? styles.none : '';
  return (
    <header className={styles.header}>
      <Link to="/">
        <PrevBtn className={`${styles.prev__btn} ${displayType}`} />
      </Link>
      <span className={styles.title}>돌보미 신청하기</span>
    </header>
  );
};

Header.propTypes = {
  displayNone: PropTypes.boolean,
};

export default Header;
