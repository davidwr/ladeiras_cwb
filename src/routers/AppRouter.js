import Trajeto from '../pages/Trajeto/Trajeto'
import List from '../pages/List/List'
import Terms from '../pages/Terms/Terms'
import PrivacyPolicy from '../pages/Terms/PrivacyPolicy'
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
  },
  {
    path: '/terms',
    element: <Terms />
  },
  {
    path: '/privacy',
    element: <PrivacyPolicy />
  }
])

export default router
