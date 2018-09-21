import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mid.css';
import Header from './Header/Header';
import Svg from './Svg/Svg';

const mid = (props) => {
  return (
    <div className={styles.Card}>
      <Header metric={props.metric} gear={props.gear}/> {props.children}
      <Svg url={props.url} data={props.value} metric={props.metric}/>
    </div>
  );
};

mid.propTypes = {
  children: PropTypes.element,
  metric: PropTypes.string,
  value: PropTypes.number,
  prev: PropTypes.number,
  url: PropTypes.string,
  gear: PropTypes.string,
};

export default mid;
