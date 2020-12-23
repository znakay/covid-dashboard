import PropTypes from 'prop-types';

const ItemStatistic = ({ value, name, flag }) => {
    return (
        <p className="item-statistic">
            <span className='country-image-container'>
                <img
                    className='country-image'
                    src={flag}
                    width='20px'
                    height='10px'
                />
            </span>
            <span className='statistic-item-value'> {value} </span>
            <span className='statistic-item-name'>{name}</span>
        </p>
    );
};

ItemStatistic.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    flag: PropTypes.any,
};

export default ItemStatistic;