import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const Layout = () => {
    return (
        <div className='layout' style={{ display : 'flex', height : '100vh', }}>
        <Navbar />
        <Outlet />
        </div>
    );
};

export default Layout;