import './footer.css';
import DevelopersList from './DevelopersList';
import RssLink from './RssLink';
import developers from '../../constants/developers';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <DevelopersList developers={developers} />
                <RssLink />
                <span className="createYear">RSS2020Q3</span>
            </div>
        </footer>
    );
}