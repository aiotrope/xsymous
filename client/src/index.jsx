import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './utils/sass/_index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { CommonProvider } from './contexts/common'
import { AuthProvider } from './contexts/authContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
const queryClient = new QueryClient()

if (process.env.NODE_ENV !== 'production') {
  import('@axe-core/react').then((axe) => {
    axe.default(React, ReactDOM, 1000)
    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <CommonProvider>
            <AuthProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </AuthProvider>
          </CommonProvider>
        </QueryClientProvider>
      </React.StrictMode>
    )
  })
} else {
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <CommonProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </CommonProvider>
      </QueryClientProvider>
    </React.StrictMode>
  )
}

reportWebVitals()
