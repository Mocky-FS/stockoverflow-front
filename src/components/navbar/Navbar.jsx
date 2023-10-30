
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Logo from '../../assets/icons/logo.svg?react'
import Logout from '../../assets/icons/logout.svg?react'
import UserIcon from '../../assets/icons/user.svg?react'
import Moon from '../../assets/icons/moon.svg?react'
import Sun from '../../assets/icons/sun.svg?react'
import ArrowLeft from '../../assets/icons/arrowLeft.svg?react'
import ArrowRight from '../../assets/icons/arrowRight.svg?react'
import { Tooltip } from "@nextui-org/react";
import { Card } from '@tremor/react';
import { ThemeContext } from '../../context/ThemeContext';
import './navbar.scss'
import toast from 'react-hot-toast';

const Navbar = ({ modules }) => {

    const navigate = useNavigate()

    const { user, logout } = useContext(AuthContext)
    const { theme, toggleTheme } = useContext(ThemeContext)

    const [isMenuOpen, setIsMenuOpen] = useState(true)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMenuOpen(false)
        }
    } , [])
       
    return (
        <div className={`bg-tremor-background   dark:bg-dark-tremor-background  dashboard-nav ${!isMenuOpen ? 'close-menu' : ''} `}>
            <Card className='top text-tremor-content dark:text-dark-tremor-content' style={{ flexDirection: !isMenuOpen ? 'column' : 'row', alignItems: 'center', gap: !isMenuOpen ? '1rem' : '' }}>
                <Logo className='w-8 h-8' />
                {isMenuOpen &&
                    <div className='titles'>
                        <h2>Stock&apos;Overflow </h2>
                    </div>
                }

                <Tooltip placement="right" content={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} color='foreground' >
                    <button onClick={toggleMenu} style={{ alignSelf: !isMenuOpen ? 'center' : '' }}>
                        {isMenuOpen ? <ArrowLeft className='w-6 h-6' /> : <ArrowRight className='w-6 h-6' />}
                    </button>
                </Tooltip>
            </Card>

            <div className='links' >
                {modules?.filter(e => e.navbar)?.map((link, index) => {

                    return (
                        <Tooltip
                            key={index}
                            placement="right"
                            content={link.title}
                            isDisabled={isMenuOpen}
                            color='foreground'
                        // offset={30}
                        >
                            <NavLink to={`/dashboard/${link.path}`} end={link.end} style={{ width: !isMenuOpen ? 'fit-content' : '' }}
                                className={({ isActive }) => isActive ?
                                    'bg-tremor-brand text-tremor-content-inverted dark:bg-slate-800 dark:text-tremor-background ' :
                                    '  dark:text-tremor-content-subtle'
                                }
                            >
                                <link.icon className=' w-6 h-6' />
                                {isMenuOpen && <p >{link.title}</p>}
                            </NavLink>
                        </Tooltip>
                    )
                })}

            </div>
            <Card className={`infos text-tremor-content dark:text-dark-tremor-content`} style={{ justifyContent: !isMenuOpen ? 'flex-start' : '', flexDirection: !isMenuOpen ? 'column' : 'row', gap: '1rem' }}>
                <Tooltip placement={!isMenuOpen ? 'right' : 'top'} content={'Profil'} color='foreground' >
                    <button
                        className='infos-btn'
                        onClick={() => {
                            navigate('/dashboard/profil')
                        }}>
                        <UserIcon className='w-7 h-7' /> {isMenuOpen && user.firstname}
                    </button>
                </Tooltip>
                <Tooltip placement={!isMenuOpen ? 'right' : 'top'} content={theme === 'dark' ? 'Mode jour' : 'Mode nuit'} color='foreground' >
                    <button onClick={() => toggleTheme(theme)}> {theme === 'light' ? <Moon /> : <Sun />}</button>
                   
                </Tooltip>
                <Tooltip placement={!isMenuOpen ? 'right' : 'top'} content={'Se déconnecter'} color='foreground' >
                    <button
                        onClick={() => {
                            if (window.confirm('Voulez-vous vous déconnecter ?')) {
                                logout()
                                navigate('/')
                            }
                            toast.dismiss('toast')
                        }}>
                        < Logout className='w-7 h-7' />
                    </button>

                </Tooltip>
            </Card>
        </div>
    );
};

export default Navbar;