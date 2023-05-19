import ForbiddenPage from "@/component/403"
import NotFoundPage from "@/component/404"
import { Role } from "@/features/auth/constant"
import AuthLayout from "@/features/auth/layout"
import { Login } from "@/features/auth/pages/login"
import MainLayout from "@/features/main/layout"
import React from "react"
import { Outlet } from "react-router-dom"
import AuthRoute from "./auth-route"
import LazyRoute from "./lazy-route"

export const accessRoutes = [
  {
    element: <MainLayout/>,
    children: [
      {
        path: "app-center",
        element: (
          <LazyRoute
            component={React.lazy(()=>import('@/features/main/pages/app-center'))}
          />
        )
      }
    ]
  }
]

export const routes = [
  {
    // element: (
    //   <AuthRoute
    //     element={<Outlet />}
    //     needAuth
    //     loadingFullScreen
    //     roles={Role.User}
    //   />
    // ),
    element:<Outlet/>,
    children:accessRoutes
  },
  {
    element: <AuthLayout/>,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element:<></>
      },
    ]
  },
  {
    path: '/403',
    element: <ForbiddenPage />
  },
  {
    path: '*',
    element:<NotFoundPage/>
  }
]