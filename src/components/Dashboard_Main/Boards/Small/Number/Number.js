import React from 'react';
import PropTypes from 'prop-types';
import styles from './Number.css';

const number = (props) => {
  let arrowClass = '';
  let diffClass = '';
  if (props.metric === 'Cancel' || props.metric === 'Contraction') {
    if (props.prev > props.value) {
      arrowClass = 'arrow-down-green';
      diffClass = 'diff--green';
    } else if (props.prev < props.value) {
      arrowClass = 'arrow-up-red';
      diffClass = 'diff--red';
    }
  } else if (props.metric === 'Expansion') {
    if (props.prev > props.value) {
      arrowClass = 'arrow-down-red';
      diffClass = 'diff--red';
    } else if (props.prev < props.value) {
      arrowClass = 'arrow-up-green';
      diffClass = 'diff--green';
    }
  }
  const diff = (Math.abs(props.value - props.prev)).toFixed(2);
  return (
    <div className={styles.wrapper}>
      <div className={styles.Number}>
        <p className={styles.para}><span className={styles.measure}>Amount</span>${props.value}k</p>
      </div>
      <div className={styles['arrow__wrapper']}>
        <div className={styles[arrowClass]}></div>
        <p className={styles[diffClass]}>${diff}k</p>
      </div>
    </div>

  );
};

number.propTypes = {
  metric: PropTypes.string,
  value: PropTypes.number,
  prev: PropTypes.number
};

export default number;
