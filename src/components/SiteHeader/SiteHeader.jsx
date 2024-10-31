import styles from '../SiteHeader/SiteHeader.module.scss';
import NavBar from '../NavBar/NavBar';
import { Container } from 'react-bootstrap';

const SiteHeader = ({ user, handleSignOut }) => {
    return(
        <header>
            
            <NavBar user={user} handleSignOut={handleSignOut} />
        </header>
    )
}

export default SiteHeader;