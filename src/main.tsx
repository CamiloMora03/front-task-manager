import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/login.component.tsx'
import Dashboard from './components/dashboard.component.tsx'
import ProtectedRoute from './utils/ProtectedRoute.tsx'
import { AuthProvider } from './contexts/auth/AuthProvider.tsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <Login />
  },
  {
    path:"/",
    element: <ProtectedRoute />,
    children: [{
      path:"/dashboard",
      element: <Dashboard/>
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
