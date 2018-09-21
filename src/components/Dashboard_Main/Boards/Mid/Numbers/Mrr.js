import React from 'react';
import PropTypes from 'prop-types';
import Mid from '../Mid';
import styles from './Numbers.css';

const mrr = (props) => {
  let arrowClass = '';
  let diffClass = '';
  if (props.prev > props.value) {
    arrowClass = 'arrow-down-red';
    diffClass = 'diff--red';
  } else if (props.prev < props.value) {
    arrowClass = 'arrow-up-green';
    diffClass = 'diff--green';
  }

  const diff = Math.abs(props.value - props.prev);

  return (
    <Mid metric={props.metric} value={props.value} prev={props.prev} url={props.url} gear={props.gear}>
      <div>
        <div className={styles['Numbers__left']}>
          <p className={styles.para}><span className={styles.measure}>Rate</span>${props.value}<span style={{ fontSize: '1.125rem' }}></span></p>
        </div>
        <div className={styles['arrow__warpper']}>
          <div className={styles[arrowClass]}></div>
          <p className={styles[diffClass]}>${diff}</p>
        </div>
      </div>
    </Mid>
  );
};

mrr.propTypes = {
  metric: PropTypes.string,
  value: PropTypes.number,
  prev: PropTypes.number,
  url: PropTypes.string,
  gear: PropTypes.string
};

export default mrr;
