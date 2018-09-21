import React from 'react';
import styles from './Hamburger.css';

const hamburger = () => {
  return (
    <section className={styles['Hamburger__wrapper']}>
      <div className={styles.Hamburger}></div>
      <div className={styles.Hamburger}></div>
      <div className={styles.Hamburger}></div>
    </section>
  );
};

export default hamburger;
