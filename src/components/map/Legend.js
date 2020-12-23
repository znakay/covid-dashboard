import PropTypes from 'prop-types';

Legend.propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    color: PropTypes.string,
    middle: PropTypes.number,
};

export default function  Legend(props) {
    return (
        <div className="legend">
            <ul className="legend__list">
                <li className="legend__item">
                    <span className={`legend__circle legend__circle_max legend__circle_${props.color}`}>
                    </span>
                    <span className="legend__title">
                       <span>&gt;</span> 
                       <span>{ props.max }</span>
                    </span>
                </li>
                <li className="legend__item">
                    <span className={`legend__circle legend__circle_middle egend__circle_${props.color}`}>
                    </span>
                    <span className="legend__title">
                       <span>&gt;</span> 
                       <span>{ props.middle }</span>
                    </span>
                </li>
                <li className="legend__item">
                    <span className={`legend__circle legend__circle_min legend__circle_${props.color}`}>
                    </span>
                    <span className="legend__title">
                       <span>&gt;</span> 
                       <span>{ props.min }</span>
                    </span>
                </li>
                <li className="legend__item">
                    <span className={`legend__circle legend__circle_small legend__circle_${props.color}`}>
                    </span>
                    <span className="legend__title">
                        <span>&gt;</span>
                        <span>1</span>
                    </span>
                </li>
            </ul>
        </div>
    )
}

