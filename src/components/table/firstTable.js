import React from 'react';
import PropTypes from 'prop-types';
import './tableTitle.css';

TableTitle.propTypes = {
    tableName: PropTypes.string,
    content: PropTypes.number,
};

export default function TableTitle(props) {
    return (
        <div className='title-container'>
            <h3>{props.tableName}</h3>
            <div className='table-string'>{props.content}</div>
        </div>
    );
}
