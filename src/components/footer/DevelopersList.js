import DeveloperItem from './DeveloperItem';
import PropTypes from 'prop-types';

DevelopersList.propTypes = {
    developers: PropTypes.object,
};

export default function DevelopersList(props) {
    return (
        <div className="developers">
            { props.developers.team.map((developer, index) => {
                return <DeveloperItem
                    key={index}
                    nickname={developer.nickname}
                    github={developer.github}
                />
            })}
        </div>
    );
}