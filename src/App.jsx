import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalApp from './components/GlobalApp';
import './assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const routes = [

    {
      path : '/',
      element : <GlobalApp />,
      children : [

        {
          path : '',
          element : ""
        },
      ]

    }

  ]

  const router = createBrowserRouter(routes)

  return (
    <div className='App'>
      <RouterProvider  router={router}/>
    </div>
  )
}

export default App
