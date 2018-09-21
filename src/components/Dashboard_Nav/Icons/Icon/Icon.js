import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.css';

const icon = (props) => {
  const assignedClasses = [];
  if (props.activated) {
    assignedClasses.push(styles.Icon);
    assignedClasses.push(styles['Icon--activated']);
  } else {
    assignedClasses.push(styles.Icon);
  }
  return <div
    className={assignedClasses.join(' ')}
    onClick={props.clicked}></div>;
};

icon.propTypes = {
  activated: PropTypes.bool,
  clicked: PropTypes.func
};

export default icon;
