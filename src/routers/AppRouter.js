import Trajeto from '../pages/Trajeto/Trajeto'
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
    path: '/trajeto/:id',
    element: <Trajeto />
  },
  {
    path: '/trajetos',
    element: <List />
  }
])

export default router
