
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


const GlobalApp = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1000}
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