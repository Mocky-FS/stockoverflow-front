import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import './assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css';

import GlobalApp from './components/GlobalApp';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Profil from './pages/profil/Profil';
import NotFound from './pages/notFound/NotFound';
import AdminImports from './pages/adminImports/AdminImports';
import AdminUsers from './pages/adminUsers/AdminUsers';
import AdminExports from './pages/adminExports/AdminExports';
import MyExports from './pages/myExports/MyExports';
import Stock from './pages/stock/Stock';
import Layout from './pages/Layout';



function App() {

  const routes = [

    {
      path : '/',
      element : <GlobalApp />,
      children : [

        {
          path : '',
          element : <Login />
        },
        {
          path : 'register',
          element : <Register />
        },
        
        {
          path : '/dashboard',
          element : <Layout />,
          children : [
            {
              path : '',
              element : <Dashboard />
            },
            {
              path : 'stock',
              element : <Stock />
            },
            {
              path : 'my-shippings',
              element : <MyExports />
            },
            {
              path : 'exports',
              element : <AdminExports />
            },
            {
              path : 'imports',
              element : <AdminImports />
            },
            {
              path : 'users',
              element : <AdminUsers />
            },
            {
              path : 'profil',
              element : <Profil />
            },
            
          ]
        },
        {
          path: '*',
          element: <NotFound />
        }
      ],
      

    },

    

  ]

  const router = createBrowserRouter(routes)

  return (
    <div className='App'>
      <RouterProvider  router={router}/>
    </div>
  )
}

export default App
