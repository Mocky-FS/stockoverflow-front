import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const Layout = ({ modules }) => {
    return (
        <div className='layout' style={{ display: 'flex', height: '100vh', }}>
            <Navbar modules={modules} />
            <Outlet />
        </div>
    );
};

export default Layout;