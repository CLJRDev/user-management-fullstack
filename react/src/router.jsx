import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Signup from "./views/Signup";
import Users from "./views/Users";
import Login from "./views/Login";
import Dashboard from './views/Dashboard'
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/users' />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router;