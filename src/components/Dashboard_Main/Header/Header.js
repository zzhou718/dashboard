import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const header = (props) => {
  return (<header className={styles.Header}>
    <p className={styles['Header__title']}>{props.name}</p>
  </header>);
};

header.propTypes = {
  name: PropTypes.string,
};

export default header;
