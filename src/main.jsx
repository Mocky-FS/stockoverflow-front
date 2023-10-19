import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './context/AuthContext.jsx'
import { NextUIProvider } from "@nextui-org/react";
import ThemeProvider from './context/ThemeContext.jsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <NextUIProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <App />
            {/* <ReactQueryDevtools initialIsOpen={false}  /> */}
          </QueryClientProvider>
        </AuthProvider>
      </NextUIProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
