import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

export const QueryRouter: React.FC = ({ children }) => {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        {children}
      </QueryParamProvider>
    </Router>
  )
}
