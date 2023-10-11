
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
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
import { Card } from '@tremor/react';
import { ThemeContext } from '../../context/ThemeContext';

const Navbar = () => {

    const navigate = useNavigate()

    const { user, logout } = useContext(AuthContext)
    const { theme, setTheme } = useContext(ThemeContext)
    
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
            title: 'Mes envois',
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

useEffect(() => {
    if (window.innerWidth < 768) {
        setIsMenuOpen(false)
    }
}, [])


    return (
        <div className={`bg-tremor-background   dark:bg-dark-tremor-background  dashboard-nav ${!isMenuOpen ? 'close-menu' : ''} `}>
            <Card className='top text-tremor-content dark:text-dark-tremor-content' style={{ flexDirection: !isMenuOpen ? 'column' : 'row', alignItems: 'center', gap: !isMenuOpen ? '1rem' : '' }}>
                <Logo />

                {isMenuOpen &&
                    <div className='titles'>
                        <h2>Stock&apos;Overflow </h2>
                    </div>
                }

                <Tooltip placement="right" content={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} color='foreground' offset={50}>
                    <button onClick={toggleMenu} style={{ alignSelf: !isMenuOpen ? 'center' : '' }}>
                        {isMenuOpen ? <ArrowLeft /> : <ArrowRight />}
                    </button>
                </Tooltip>
            </Card>

            <div className='links' >

                {links.map((link, index) => {
                    return (
                        <Tooltip
                            key={index}
                            placement="right"
                            content={link.title}
                            isDisabled={isMenuOpen}
                            color='foreground'
                            offset={50}
                        >
                            <NavLink to={link.path} end={link.end} style={{ width: !isMenuOpen ? 'fit-content' : '' }} >
                                <link.icon className='text-tremor-content dark:text-dark-tremor-content'/>
                                {isMenuOpen && <p className='text-tremor-content dark:text-dark-tremor-content'>{link.title}</p>}
                            </NavLink>
                        </Tooltip>
                    )
                })}

            </div>
            <Card className={`infos text-tremor-content dark:text-dark-tremor-content`} style={{ justifyContent: !isMenuOpen ? 'flex-start' : '', flexDirection: !isMenuOpen ? 'column' : 'row', gap: '1rem' }}>
                <Tooltip placement={!isMenuOpen ? 'right' : 'top'} content={'Profil'} color='foreground' offset={50}>
                    <button
                        className='infos-btn'
                        onClick={() => {
                            navigate('/dashboard/profil')
                        }}>
                        <User /> {isMenuOpen && user.firstname}
                    </button>
                </Tooltip>
                <Tooltip placement={!isMenuOpen ? 'right' : 'top'} content={theme ==='dark' ? 'Mode jour' : 'Mode nuit'} color='foreground' offset={50}>
                    <button
                     
                        onClick={() => {
                           setTheme(theme === 'light' ? 'dark' : 'light')
                            document.body.classList.toggle('dark')
                            if (theme === 'light') {
                                localStorage.setItem('theme', 'dark')
                            } else {
                                localStorage.setItem('theme', 'light')
                            }
                        }
                        }
                    >
                        {theme === 'dark' ? <Sun /> : <Moon />}
                    </button>
                </Tooltip>
                <Tooltip placement={!isMenuOpen  ? 'right' : 'top'} content={'Se déconnecter'} color='foreground' offset={50}>
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
            </Card>
        </div>
    );
};

export default Navbar;