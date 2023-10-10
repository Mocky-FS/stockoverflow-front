
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './header/Header';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const GlobalApp = () => {

    // const {theme} = useContext(ThemeContext)
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                pauseOnFocusLoss={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover={false}
                // theme={theme === 'dark' ? 'dark' : 'light'}
            />
            <Outlet />
        </>
    );
};

export default GlobalApp;