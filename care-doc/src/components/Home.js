import React from 'react';
import styles from '../css/Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.HomeWrapper}>
      <div>
        <h5>어르신 돌보미</h5>
        <h4>케어코디</h4>
        <Link to="/Care">
          <button>신청하기</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
