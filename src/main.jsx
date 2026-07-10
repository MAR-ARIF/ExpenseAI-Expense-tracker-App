import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardPage from './Pages/DashboardPage.jsx'
import AuthLayout from './Components/AuthLayout.jsx'
import TransactionPage from './Pages/TransactionPage.jsx'
import AnalyticsPage from './Pages/AnalyticsPage.jsx'
import InsightPage from './Pages/InsightPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SignUpPage from './Pages/SignUpPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : (
          <AuthLayout authentication>
            <DashboardPage />
          </AuthLayout>
        )
      },
      {path: "/transactions",
        element : (
          <AuthLayout authentication >
            <TransactionPage />
          </AuthLayout>
        )
      } ,
      {path:"/analytics",
        element :(
          <AuthLayout authentication>
            <AnalyticsPage />
          </AuthLayout>
        )
      },
      {path:"/ai-insights",
        element: (
          <AuthLayout authentication>
            <InsightPage />
          </AuthLayout>
        )
      },{
        path: "/login",
        element:(
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        )
      },
      {path :"/signup",
        element:(
          <AuthLayout authentication={false}>
            <SignUpPage />
          </AuthLayout>
        )
      }

    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={router}   />


    </Provider>
    
  </StrictMode>,
)
