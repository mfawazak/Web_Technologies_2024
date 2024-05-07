import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.scss'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/loginpage.jsx'
import Homepage from './pages/homepage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace/>  
      },

      {
        path: "home",
        element: <Homepage />
      }
    ]
  },
  {
    path: "/auth/login",
    element: <LoginPage/>
  },
  {
    path: "*",
    element: <Navigate to="/" replace/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
