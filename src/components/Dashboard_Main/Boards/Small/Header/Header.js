import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const header = (props) => {
  const gearWidth = '16px';
  const gearHeight = '16px';
  return (
    <header className={styles.Header}>
      <p className={styles.title}>{props.metric}</p>
      <img src={props.gear} className={styles.gear} alt='gear' width={gearWidth} height={gearHeight}/>
    </header>);
};

header.propTypes = {
  metric: PropTypes.string,
  gear: PropTypes.string
};

export default header;
