import React from 'react';
import PropTypes from 'prop-types';
import Hamburger from './Hamburger/Hamburger';
import Icons from './Icons/Icons';
import styles from './Nav.css';

const nav = (props) => {
  return (
    <div className={styles.Nav}>
      <Hamburger />
      <div className={styles['Icons__wrapper']}>
        <Icons icons={props.icons} clicked={props.clicked} />
      </div>
    </div>
  );
};

nav.propTypes = {
  icons: PropTypes.array,
  clicked: PropTypes.func
};
export default nav;
