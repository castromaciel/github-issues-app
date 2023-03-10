import { createHashRouter, Navigate } from 'react-router-dom'
import { App } from '../App'

import { IssueView, ListView, ListViewInfinite } from '../issues/views'

export const router = createHashRouter([
  {
    path: '/issues',
    element: <App />,
    children: [
      { path: 'list', element: <ListView /> },
      { path: 'list/infinite', element: <ListViewInfinite /> },
      { path: 'issue/:id', element: <IssueView /> },
      { path: '*', element: <Navigate to="list" /> }
    ]
  },
  {
    path: '/',
    element: <Navigate to="issues/list" />
  },
  {
    path: '*',
    element: <h1>Not found</h1>
  }
])
