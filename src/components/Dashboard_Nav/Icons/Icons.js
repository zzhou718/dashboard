import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon/Icon';

const icons = (props) => props.icons.map((icon, index) => {
  return <Icon
    activated={icon.activated}
    clicked={() => props.clicked(index)}
    key={icon.id}/>;
});

icons.propTypes = {
  icons: PropTypes.array,
  clicked: PropTypes.func
};

export default icons;
