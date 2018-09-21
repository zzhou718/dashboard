import React from 'react';
import PropTypes from 'prop-types';
import styles from './Svg.css';

class svg extends React.Component {
  render () {
    let control;
    this.props.metric === 'Account Retention' ?
      control = (
        <p className={styles.buttons}>
          <span className={[styles.measure, styles.green].join(' ')}>Rate</span>
          <span>&nbsp;|&nbsp;</span>
          <span className={styles.measure}>Amount</span>
        </p>
      ) : null;
    return (
      <div className={styles.wrapper}>
        {control}
        <img src={this.props.url} alt="an img..." title={this.props.data}></img>
      </div>
    );
  }
}

svg.propTypes = {
  url: PropTypes.string,
  data: PropTypes.number,
  metric: PropTypes.string
};

export default svg;
