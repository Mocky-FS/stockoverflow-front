
import { Link, NavLink, Outlet } from 'react-router-dom';
import './dashboard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faClockRotateLeft, faFileInvoiceDollar, faTableColumns, faUsers, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/navbar/Navbar';


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <Outlet />
         
        </div>
    );
};

export default Dashboard;