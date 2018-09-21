import React from 'react';
import PropTypes from 'prop-types';
import styles from './Boards.css';
import Small from './Small/Small';
import Account from './Mid/Numbers/Account';
import Mrr from './Mid/Numbers/Mrr';
import Retention from './Mid/Numbers/Retention';
import Large from './Large/Large';

const boards = (props) => {
  return (
    <div className={styles.Board}>
      <Large
        metric={props.largeMetrics.metric}
        gear={props.gear}
      />
      <Retention
        metric={props.midMetrics[0].metric}
        value={props.midMetrics[0].value}
        prev={props.midMetrics[0].prev}
        amount={props.midMetrics[0].amount}
        url={props.imgUrls[1].url}
        gear={props.gear} />
      <Small
        metric={props.smallMetrics[0].metric}
        value={props.smallMetrics[0].value}
        prev={props.smallMetrics[0].prev}
        url={props.imgUrls[0].url}
        gear={props.gear} />
      <Small
        metric={props.smallMetrics[1].metric}
        value={props.smallMetrics[1].value}
        prev={props.smallMetrics[1].prev}
        url={props.imgUrls[0].url}
        gear={props.gear} />
      <Small
        metric={props.smallMetrics[2].metric}
        value={props.smallMetrics[2].value}
        prev={props.smallMetrics[2].prev}
        url={props.imgUrls[0].url}
        gear={props.gear} />
      <Mrr
        metric={props.midMetrics[1].metric}
        value={props.midMetrics[1].value}
        prev={props.midMetrics[1].prev}
        url={props.imgUrls[1].url}
        gear={props.gear} />
      <Account
        metric={props.midMetrics[2].metric}
        value={props.midMetrics[2].value}
        prev={props.midMetrics[2].prev}
        newSub={props.midMetrics[2].newSub}
        canceled={props.midMetrics[2].canceled}
        url={props.imgUrls[1].url}
        gear={props.gear} />
    </div>
  );
};

boards.propTypes = {
  name: PropTypes.string,
  largeMetrics: PropTypes.object,
  smallMetrics: PropTypes.array,
  midMetrics: PropTypes.array,
  imgUrls: PropTypes.array,
  gear: PropTypes.string
};

export default boards;
