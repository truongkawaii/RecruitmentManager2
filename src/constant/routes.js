import Login from '../components/Login';
import Home from '../container/Dashboard';
import Candidate from '../container/Candidates';
import Admins from '../container/Admins';
// import SignUp from '../container/SignUp/SignUp';

export const routes = [
  {
    path: '/login',
    exact: true,
    name: 'Login',
    component: Login,
    privateComponent: false,
  },
  {
    path: '/dashboard',
    exact: true,
    name: 'dashboard',
    component: Home,
    privateComponent: true,
  },
  {
    path: '/candidate',
    exact: true,
    name: 'candidate',
    component: Candidate,
    privateComponent: true,
  },
  {
    path: '/admins',
    exact: true,
    name: 'admins',
    component: Admins,
    privateComponent: true,
  },
];
