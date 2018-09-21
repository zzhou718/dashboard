import React from 'react';
import PropTypes from 'prop-types';
import styles from './Small.css';
import Header from './Header/Header';
import Number from './Number/Number';
import Svg from './Svg/Svg';

const small = (props) => {
  return (
    <div className={styles.Card}>
      <Header metric={props.metric} gear={props.gear}/>
      <Number
        metric={props.metric}
        value={props.value}
        prev={props.prev} />
      <Svg url={props.url} data={props.value}/>
    </div>
  );
};

small.propTypes = {
  metric: PropTypes.string,
  value: PropTypes.number,
  prev: PropTypes.number,
  url: PropTypes.string,
  gear: PropTypes.string
};

export default small;
