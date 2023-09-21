import { faBell, faCircleUser, faRectangleList } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket, faClockRotateLeft, faFileInvoiceDollar, faGear, faList, faTableColumns, faUsers, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.scss'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

    const navigate = useNavigate()

    const { user, logout } = useContext(AuthContext)
    return (
        <div className='dashboard-nav'>
            <div className='links'>
            <NavLink to='/dashboard' end><FontAwesomeIcon icon={faTableColumns} size='lg' />Dashboard</NavLink>
            <NavLink to='/dashboard/stock'><FontAwesomeIcon icon={faWarehouse} size='lg' /> Stock</NavLink>
            <NavLink to='/dashboard/orders'><FontAwesomeIcon icon={faFileInvoiceDollar} size='lg' />Mes commandes</NavLink>
            {/* <NavLink to='/dashboard/orders-history'><FontAwesomeIcon icon={faClockRotateLeft} size='lg' />Mes commandes expédiées</NavLink> */}
            <NavLink to='/dashboard/users'><FontAwesomeIcon icon={faUsers} size='lg' /> Utilisateurs</NavLink>
            <NavLink to='/dashboard/orders-history'><FontAwesomeIcon icon={faList} size='lg' />Toutes les commandes</NavLink>
            <NavLink to='/dashboard/settings'><FontAwesomeIcon icon={faGear} size='lg' /> Réglages</NavLink>


            </div>
            <div className='infos'>
                
                   <button className='infos-btn' onClick={() => {
                        navigate('/dashboard/profil')
                   }}> <FontAwesomeIcon icon={faCircleUser} size='lg' /> {user.firstname}</button>
                    <button onClick={() => {
                        if (window.confirm('Voulez-vous vous déconnecter ?')) {
                            logout()
                            navigate('/')
                        }
                    }}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} size='lg' />
                    </button>


                
            </div>
            
        </div>
    );
};

export default Navbar;