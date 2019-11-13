import TaskMap from './components/TaskMap'
import Profile from './components/Profile'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

const routes = [
  {
    path: "/",
    exact: true,
    label: "Map",
    component: TaskMap
  },
  {
    path: "/me",
    exact: true,
    label: "Me",
    component: Profile,
    subRoutes: [
      {
        path: "/login",
        exact: true,
        label: "Login",
        component: Login,
      },
      {
        path: "/signup",
        exact: true,
        label: "Signup",
        component: Signup,
      }
    ]
  }
]

export default routes