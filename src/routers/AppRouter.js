import Trajeto from '../pages/Trajeto/Trajeto'
import List from '../pages/List/List'
import ErrorPage from '../error-page'

import { createHashRouter } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <List />,
    errorElement: <ErrorPage />
  },
  {
    path: '/trajeto/:id',
    element: <Trajeto />
  }
])

export default router
