import { faArrowRightFromBracket, faCircleUser, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import './header.scss'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';



const Header = () => {

    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)

    return (
        <header className='header'>
            <div className='title'>
                <Link to={'/dashboard'}><h1> <FontAwesomeIcon icon={faScrewdriverWrench} size='lg' /> Stock'Overflow</h1></Link>
                <p>Votre outils au quotidien</p>
            </div>
           
        </header>
    );
};

export default Header;