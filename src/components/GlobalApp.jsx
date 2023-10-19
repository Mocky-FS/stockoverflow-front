
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Toaster } from 'react-hot-toast';


const GlobalApp = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    duration : 3000
                }}
                
            />
            {/* <ToastContainer
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
               
            /> */}
            <Outlet />
        </>
    );
};

export default GlobalApp;