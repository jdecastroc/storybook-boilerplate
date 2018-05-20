import React from 'react';
import PropTypes from 'prop-types';
import "../css/_/name.scss";

const Name = (props) => (
    <div className={`name ${props.type ? props.type : ''} ${props.disabled && 'disabled'}`} onClick={props.onClick}>{props.name}</div>
)

Name.propTypes = {
    type: PropTypes.oneOf(['highlight', 'disabled']),
    name: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}

export default Name