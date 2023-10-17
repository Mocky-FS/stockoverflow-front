
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const GlobalApp = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                pauseOnFocusLoss={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover={false}
                theme={theme === 'dark' ? 'dark' : 'light'}
               
            />
            <Outlet />
        </>
    );
};

export default GlobalApp;