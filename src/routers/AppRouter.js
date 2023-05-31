import Landing from '../pages/Landing/Landing'
import List from '../pages/List/List'
import ErrorPage from '../error-page'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div />,
    errorElement: <ErrorPage />
  },
  {
    path: '/landing',
    element: <Landing />
  },
  {
    path: '/list',
    element: <List />
  }
])

export default router
