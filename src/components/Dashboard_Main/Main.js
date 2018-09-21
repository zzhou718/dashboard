import React from 'react';
import styles from './Main.css';
import Boards from './Boards/Boards';
import Header from './Header/Header';

const main = (props) => {
  return (
    <div className={styles.Main}>
      <Header name='Customer Retention Board'/>
      <Boards {...props} />
    </div>
  );
};

export default main;
