import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalApp from './components/GlobalApp';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Profil from './pages/profil/Profil';
import NotFound from './pages/notFound/NotFound';

import './assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css';
import Orders from './pages/orders/Orders';
import OrdersAdmin from './pages/ordersAdmin/OrdersAdmin';
import Settings from './pages/settings/Settings';


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
          element : <Dashboard />,
          children : [
            {
              path : 'stock',
              element : <h2>Les stocks</h2>
            },
            {
              path : 'orders',
              element : <Orders />
            },
            {
              path : 'orders-history',
              element : <OrdersAdmin />
            },
            {
              path : 'users',
              element : <h2>Les utilisateurs</h2>
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
