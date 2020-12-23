import PropTypes from 'prop-types';
import React, { useState } from 'react';

Wrapper.propTypes = {
    header: PropTypes.object,
    content: PropTypes.object,
    links: PropTypes.object,
    name: PropTypes.string
};

export default function Wrapper(props) {
    const [fullScrean, setFullScrean] = useState(false);

    return (
        <div className={fullScrean ? "wrapper wrapper_full-screan" : "wrapper"}>
            <div className={"wrapper__btn"} onClick={() => setFullScrean(!fullScrean)}></div>
            {props.header ? props.header : false}
            {props.content}
            <nav className={`nav nav_${props.name}`}>
                {props.links}
            </nav>
        </div>
    )
}