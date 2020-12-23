import React from 'react';
import PropTypes from 'prop-types';
import './lastDate.css';

LastDate.propTypes = {
    dateTitle: PropTypes.string,
    fullDate: PropTypes.string
};

export default function LastDate(props) {
    return (
        <div className='date-container'>
            <h4>{props.dateTitle}</h4>
            <div className='date-string'>{props.fullDate}</div>
        </div>
    );
}