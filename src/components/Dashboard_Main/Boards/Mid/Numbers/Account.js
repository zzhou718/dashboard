import React from 'react';
import PropTypes from 'prop-types';
import styles from './Numbers.css';
import Mid from '../Mid';

const account = (props) => {
  let arrowClass = '';
  let diffClass = '';
  if (props.prev > props.value) {
    arrowClass = 'arrow-down-red';
    diffClass = 'diff--red';
  } else if (props.prev < props.value) {
    arrowClass = 'arrow-up-green';
    diffClass = 'diff--green';
  }

  const diff = Number.parseFloat(Math.abs(props.value - props.prev)).toPrecision(1);

  return (
    <Mid metric={props.metric} value={props.value} prev={props.prev} url={props.url} gear={props.gear}>
      <div>
        <div className={styles['Numbers__left']}>
          <p className={styles.para}><span className={styles.measure}>Rate</span>{props.value}<span style={{fontSize: '1.125rem'}}>%</span></p>
        </div>
        <div className={styles['arrow__warpper']}>
          <div className={styles[arrowClass]}></div>
          <p className={styles[diffClass]}>${diff}k</p>
        </div>
        <div className={styles['Numbers__right']}>
          <p className={styles['para__left']}><span className={styles.measure}>New</span>{props.newSub}</p>
          <p className={styles['para__right']}><span className={styles.measure}>Cancel</span>{props.canceled}</p>
        </div>
      </div>
    </Mid>
  );
};

account.propTypes = {
  metric: PropTypes.string,
  value: PropTypes.number,
  prev: PropTypes.number,
  url: PropTypes.string,
  newSub: PropTypes.number,
  canceled: PropTypes.number,
  gear: PropTypes.string
};

export default account;
