import PropTypes from 'prop-types';

Button.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default function Button({active, children, onClick}) {
    return (
        <button disabled={active} onClick={ (e) => {
            e.preventDefault()
            onClick();
        }}>
            {children}
        </button>
    )
}