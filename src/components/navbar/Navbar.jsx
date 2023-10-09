
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Logo from '../../assets/icons/logo.svg?react'
import Dashboard from '../../assets/icons/dashboard.svg?react'
import Stock from '../../assets/icons/stock.svg?react'
import Export from '../../assets/icons/exports.svg?react'
import Import from '../../assets/icons/import.svg?react'
import Users from '../../assets/icons/usersList.svg?react'
import Logout from '../../assets/icons/logout.svg?react'
import User from '../../assets/icons/user.svg?react'
import Moon from '../../assets/icons/moon.svg?react'
import Sun from '../../assets/icons/sun.svg?react'
import Package from '../../assets/icons/package.svg?react'
import ArrowLeft from '../../assets/icons/arrowLeft.svg?react'
import ArrowRight from '../../assets/icons/arrowRight.svg?react'
import { Tooltip } from "@nextui-org/react";
import './navbar.scss'

const Navbar = () => {

    const navigate = useNavigate()

    const { user, logout } = useContext(AuthContext)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const [isMenuOpen, setIsMenuOpen] = useState(true)

    const toggleMenu = () => {


        setIsMenuOpen(!isMenuOpen)

    }


    const links = [

        {

            title: 'Dashboard',
            icon: Dashboard,
            path: '/dashboard',
            end: true
        },
        {
            title: 'Stock',
            icon: Stock,
            path: '/dashboard/stock',
        },
        {
            title: 'Envois',
            icon: Package,
            path: '/dashboard/my-shippings',
        },
        {
            title: 'Exportations',
            icon: Export,
            path: '/dashboard/shippings',
        },
        {
            title: 'Importations',
            icon: Import,
            path: '/dashboard/orders',
        },
        {
            title: 'Utilisateurs',
            icon: Users,
            path: '/dashboard/users',
        },
    ]



    return (
        <div className={`dashboard-nav ${!isMenuOpen ? 'close-menu' : ''}`}>
            <div className='top' style={{ flexDirection: !isMenuOpen ? 'column' : 'row', alignItems: 'center', gap: !isMenuOpen ? '1rem' : '' }}>
                <Logo />

                {isMenuOpen &&
                    <div className='titles'>
                        <h2>Stock&apos;Overflow </h2>
                        {/* <p>Votre outils au quotidien</p> */}
                    </div>
                }

                <Tooltip placement="right" content={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
                    <button onClick={toggleMenu} style={{ alignSelf: !isMenuOpen ? 'center' : '' }}>
                        {isMenuOpen ? <ArrowLeft /> : <ArrowRight />}
                    </button>
                </Tooltip>
            </div>

            <div className='links' >

                {links.map((link, index) => {
                    return (
                        <Tooltip
                            key={index}
                            placement="right"
                            content={link.title}
                            isDisabled={isMenuOpen}
                        >
                            <NavLink to={link.path} end={link.end} style={{ width: !isMenuOpen ? 'fit-content' : '' }} >
                                <link.icon />
                                {isMenuOpen && <p>{link.title}</p>}
                            </NavLink>
                        </Tooltip>
                    )
                })}

            </div>
            <div className={`infos `} style={{ justifyContent: !isMenuOpen ? 'flex-start' : '', flexDirection: !isMenuOpen ? 'column' : 'row', gap: '1rem' }}>
                <Tooltip placement="right" content={'Profil'} >
                    <button
                        className='infos-btn'
                        onClick={() => {
                            navigate('/dashboard/profil')
                        }}>
                        <User /> {isMenuOpen && user.firstname}
                    </button>
                </Tooltip>
                <Tooltip placement="right" content={isMenuOpen ? 'Mode jour' : 'Mode nuit'} >
                    <button
                        title={isDarkMode ? 'Mode jour' : 'Mode nuit'}
                        onClick={() => {
                            setIsDarkMode(!isDarkMode)
                            document.body.classList.toggle('dark')
                        }
                        }
                    >
                        {isDarkMode ? <Sun /> : <Moon />}
                    </button>
                </Tooltip>
                <Tooltip placement="right" content={'Se déconnecter'} >
                    <button
                        onClick={() => {
                            if (window.confirm('Voulez-vous vous déconnecter ?')) {
                                logout()
                                navigate('/')
                            }
                        }}>
                        < Logout />
                    </button>
                </Tooltip>
            </div>
        </div>
    );
};

export default Navbar;