import React from 'react';
import PropTypes from 'prop-types';

const svg = (props) => {
  const style = {
    textAlign: 'center',
    paddingTop: '20px',
  };
  return (
    <div style={style}>
      <img src={props.url} alt="an img..." title={props.data} />
    </div>
  );
};

svg.propTypes = {
  url: PropTypes.string,
  data: PropTypes.number,
};

export default svg;
