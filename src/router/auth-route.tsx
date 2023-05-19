import { Role } from "@/features/auth/constant";
import React from "react";
import { Fragment } from "react";
import RouteLoading from "./route-loading";
export interface AuthRouteProps{
  loading?: boolean,
  loadingFullScreen: boolean,
  needAuth: boolean,
  element: React.ReactNode,
  roles:Role
}
const AuthRoute: React.FC<AuthRouteProps> = (props) => {
  const {
    loading: loadingProp,
    loadingFullScreen,
    needAuth
  } = props
  
  console.log(loadingProp);

  if (loadingProp) {
    return <RouteLoading loadingFullScreen={loadingFullScreen} />
  }
  if (needAuth) {
    return null
  }
  return (
    <Fragment>
      
    </Fragment>
  )
}
export default AuthRoute;