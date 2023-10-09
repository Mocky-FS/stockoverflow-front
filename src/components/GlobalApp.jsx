
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './header/Header';


const GlobalApp = () => {
    return (
        <>
        {/* <Header /> */}
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
            />
            <Outlet />
        </>
    );
};

export default GlobalApp;