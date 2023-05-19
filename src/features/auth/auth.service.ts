import { message } from "antd"; 
import { createApi} from '@reduxjs/toolkit/query/react'
import { authActions } from "./auth.slice";
import { TokenPayload } from "./type";
export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['Auth'],
  baseQuery: (query) => ({...query, limit: 10 }),
  endpoints: (builder) => ({
    login: builder.mutation<TokenPayload,{email:string,password:string}>({
      query: ({ email, password }) => { 
        return {
          url: '/auth/login',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        }
      },
     async onQueryStarted(_,{queryFulfilled,dispatch}) {
        try {
          const { data } = await queryFulfilled;
          dispatch(authActions.login(data))
          void message.success('登录成功')
        } catch (error) {
          console.log('error', error);
        }
      },
     invalidatesTags:(result)=>result?['Auth']:[]
    })
  })
})


export const {
  useLoginMutation
} =authApi