import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login.jsx'
import Register from './pages/signup.jsx'
import Home from './pages/index.jsx'
import UserProfile from './pages/User/[uid].jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'

import './index.css'
import { UserAuthContextProvider } from './context/UserAuthContext.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/User/${uid}",
    element: <ProtectedRoute> <UserProfile /> </ProtectedRoute>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>
);

