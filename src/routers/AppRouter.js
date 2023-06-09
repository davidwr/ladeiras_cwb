import Trajeto from '../pages/Trajeto/Trajeto'
import List from '../pages/List/List'
import ErrorPage from '../error-page'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#fff' }}>
          {'Em construção :), consulte os trajetos disponíveis no menu.'}
        </p>
      </div>
    ),
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
