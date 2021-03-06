import React from 'react';
import styles from '../css/DoneMessage.module.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const DoneMessage = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Header displayNone={true} />
      <div className={styles.last__box}>
        <div className={styles.title__box}>
          <p className={styles.title}>π± μ μ²­μ΄ μλ£λμμ΅λλ€!</p>
        </div>
        <div className={styles.content__box}>
          <p className={styles.content}>
            μ μ²­νμ  λ΄μ©μ λ³΄κ³  μΌμ΄μ½λλλ€μ΄ μ§μν  μμ μλλ€.
          </p>
          <p className={styles.content}>
            μΌμ΄μ½λλλ€μ΄ μ μ²­ν  λ λ§λ€ μ±μ΄λ λ¬Έμλ‘ μλ¦Όμ λ³΄λ΄λλ¦½λλ€.
          </p>
          <p className={styles.content}>
            μΌμ΄μ½λλμ μ§μ μλ¦Όμ κΈ°λ€λ €μ£ΌμΈμ!
          </p>
        </div>

        <button className={styles.finish__btn} onClick={() => navigate('/')}>
          <span className={styles.finish}>λλ΄κΈ°</span>
        </button>
      </div>
    </>
  );
};

export default DoneMessage;
