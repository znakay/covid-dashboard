import PropTypes from 'prop-types';

DeveloperItem.propTypes = {
    github: PropTypes.string,
    nickname: PropTypes.string,
};

export default function DeveloperItem({ github, nickname }) {
    return(
        <a className="developer__link" href={github}>{nickname}</a>
    );
}
