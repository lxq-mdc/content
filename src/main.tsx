import React from 'react'
import ReactDOM from 'react-dom/client'
import AppProvider from './provider'
import { AppRouter, AppRoutes } from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppProvider>
      <AppRouter>
        <AppRoutes></AppRoutes>
      </AppRouter>
    </AppProvider>
  </React.StrictMode>,
)
