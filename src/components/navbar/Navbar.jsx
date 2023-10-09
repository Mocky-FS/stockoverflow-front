import { faCircleUser, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket, faClockRotateLeft, faFileInvoiceDollar, faGear, faList, faTableColumns, faUsers, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.scss'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Logo from '../../assets/icons/logo.svg?react'

const Navbar = () => {

    const navigate = useNavigate()

    const { user, logout } = useContext(AuthContext)
    return (
        <div className='dashboard-nav'>
            <div className='top'>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Logo />
                    <div>
                        <h2>Stock'Overflow</h2>
                        <p>Votre outils au quotidien</p>
                    </div>
                </div>

            </div>
            <div className='links'>
                <NavLink to='/dashboard' end><FontAwesomeIcon icon={faTableColumns} size='lg' />Dashboard</NavLink>
                <NavLink to='/dashboard/stock'><FontAwesomeIcon icon={faWarehouse} size='lg' /> Stock</NavLink>
                <NavLink to='/dashboard/my-shippings'><FontAwesomeIcon icon={faFileInvoiceDollar} size='lg' />Mes expéditions</NavLink>
                <NavLink to='/dashboard/shippings'><FontAwesomeIcon icon={faPaperPlane} size='lg' /> Expéditions</NavLink>
                <NavLink to='/dashboard/orders'><FontAwesomeIcon icon={faPaperPlane} flip='horizontal' size='lg' />Réaprovisionnements</NavLink>
                <NavLink to='/dashboard/users'><FontAwesomeIcon icon={faUsers} size='lg' /> Utilisateurs</NavLink>


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