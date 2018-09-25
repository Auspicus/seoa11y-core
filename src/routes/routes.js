import { Home, Login, Signup, Dashboard, Report, Url } from '../containers';

export default [{
  exact: true,
  path: '/',
  component: Home
}, {
  path: '/login',
  component: Login
}, {
  path: '/signup',
  component: Signup
}, {
  path: '/dashboard',
  component: Dashboard,
  secure: true
}, {
  exact: true,
  path: '/report/:rid',
  component: Report,
  secure: true
}, {
  path: '/report/:rid/:uid',
  component: Url,
  secure: true
}];
