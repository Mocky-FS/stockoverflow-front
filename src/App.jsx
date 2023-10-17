import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';



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
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { isAdmin, isTokenValid } from './utils/token';


import DashboardIcon from './assets/icons/dashboard.svg?react'
import StockIcon from './assets/icons/stock.svg?react'
import ExportIcon from './assets/icons/exports.svg?react'
import ImportIcon from './assets/icons/import.svg?react'
import UsersIcon from './assets/icons/usersList.svg?react'
import ProfilIcon from './assets/icons/user.svg?react'
import PackageIcon from './assets/icons/package.svg?react'




function App() {

  const { user } = useContext(AuthContext)

  const modules = [
    {
      path: '',
      element: <Dashboard />,
      title: 'Dashboard',
      icon: DashboardIcon,
      navbar: true,
    },
    {
      path: 'stock',
      element: <Stock />,
      title: 'Stock',
      icon: StockIcon,
      navbar: true,
    },
    {
      path: 'my-shyppings',
      element: <MyExports />,
      title: 'Mes envois',
      icon: PackageIcon,
      navbar: true,
    },

    ...(user?.token && isAdmin(user.token) ? [

      {
        path: 'exports',
        element: <AdminExports />,
        title: 'Exports',
        icon: ExportIcon,
        navbar: true,
      },
      {
        path: 'imports',
        element: <AdminImports />,
        title: 'Imports',
        icon : ImportIcon,
        navbar: true,
      },
      {
        path: 'users',
        element: <AdminUsers />,
        title: 'Utilisateurs',
        icon: UsersIcon,
        navbar: true,
      },
    ] : []),

    {
      path: 'profil',
      element: <Profil />,
      title: 'Profil',
      icon: ProfilIcon,
    },
  ]

  const routes = [
    {
      path: '/',
      element: <GlobalApp />,
      children: [
        {
          path: '',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: '/dashboard',
          element: isTokenValid(user.token) ? <Layout modules={modules} /> : <Navigate to='/' />,
          children: modules
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ]

  const router = createBrowserRouter(routes)

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
