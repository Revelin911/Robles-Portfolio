//import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App.jsx';
//import Header from './components/Header.jsx';
import Portfolio from './pages/PortfolioSection.jsx';
import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Portfolio />,
      },
      {
        path: '/about',
        element: <AboutMe />,
      },
     
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
