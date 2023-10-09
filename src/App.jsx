import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalApp from './components/GlobalApp';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Profil from './pages/profil/Profil';
import NotFound from './pages/notFound/NotFound';

import './assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css';
import OrdersAdmin from './pages/ordersAdmin/OrdersAdmin';
import Settings from './pages/settings/Settings';
import Users from './pages/users/Users';
import Shippings from './pages/shippings/Shippings';
import MyShippings from './pages/mySHippings/MyShippings';
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
              element : <MyShippings />
            },
            {
              path : 'shippings',
              element : <Shippings />
            },
            {
              path : 'orders',
              element : <OrdersAdmin />
            },
            {
              path : 'users',
              element : <Users />
            },
            {
              path : 'profil',
              element : <Profil />
            },
            {
              path : 'settings',
              element : <Settings />
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
