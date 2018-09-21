import React from 'react';
import PropTypes from 'prop-types';
import styles from './Svg.css';

const svg = (props) => {
  return (
    <div className={styles.Svg}>
      <p>I am SVG.</p>
      {props.children}
    </div>
  );
};

svg.propTypes = {
  children: PropTypes.element
};

export default svg;
