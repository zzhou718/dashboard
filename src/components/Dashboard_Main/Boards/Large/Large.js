import React from 'react';
import PropTypes from 'prop-types';
import styles from './Large.css';
import Header from './Header/Header';
import Svg from './Svg/Svg';

const large = (props) => {
  return (
    <div className={styles.Card}>
      <Header metric={props.metric} gear={props.gear} />
      {props.children}
      <Svg />
    </div>
  );
};

large.propTypes = {
  metric: PropTypes.string,
  gear: PropTypes.string,
  children: PropTypes.element
};

export default large;
