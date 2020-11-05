import Login from '../components/Login';
import Home from '../container/Dashboard';
import Candidate from '../container/Candidates';
import Admins from '../container/Admins';
import AddRecruitment from '../components/Recruitment/AddRecruitment';
// import SignUp from '../container/SignUp/SignUp';
import DetailRecruitment from '../components/Recruitment/DetailRecruitment';
import EditRecruitment from '../components/Recruitment/EditRecruitment';

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
    exact: false,
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
  {
    path: '/addjob',
    exact: true,
    name: 'add-job',
    component: AddRecruitment,
    privateComponent: true,
  },
  {
    path: '/editjob/:id',
    exact: true,
    name: 'edit-job',
    component: EditRecruitment,
    privateComponent: true,
  },
  {
    path: '/detail-job/:id',
    exact: true,
    name: 'edit-job',
    component: DetailRecruitment,
    privateComponent: true,
  },
];
