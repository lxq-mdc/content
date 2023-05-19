import { Tabs } from "antd"
import React from "react"
import { Link, Navigate } from "react-router-dom"
import PasswordForm,{PasswordFormProps} from "../component/password-form"
import { useLoginMutation } from "../auth.service"
import { Path } from "@/router/constant"
export const Login: React.FC = () => {
  // const [login,{isSuccess,isLoading}]=useLoginMutation()
  const onPasswordLogin: PasswordFormProps['onLogin'] = (email:string,password:string) => {
    // void login({ email, password })
    void null
  }
  return (
    <div>
      <Tabs centered size="large">
        <Tabs.TabPane  tab="账号密码登录" key="password">
          {/* <PasswordForm onLogin={onPasswordLogin} loading={isLoading} /> */}
          <PasswordForm onLogin={onPasswordLogin} loading={false} />
        </Tabs.TabPane>
      </Tabs>
      <div className="flex justify-between pb-4">
        <Link to={Path.Register}>去注册</Link>
      </div>
      {/* {
        isSuccess && (
          <Navigate replace to={'/dashboard'}/>
        )
      } */}
    </div>
  )
}