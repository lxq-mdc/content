import { createAction, createSlice } from '@reduxjs/toolkit'
import {createLocalStorage} from '@/utils/local-storage'
import { Role } from './constant'
import { User } from './type'


const { setTokenStorage, getTokenStorage, removeTokenStorage } =
  createLocalStorage('tokenStorage', {
    defaultValue: '',
  })

const {
  setRefreshTokenStorage,
  getRefreshTokenStorage,
  removeRefreshTokenStorage,
} = createLocalStorage('refreshTokenStorage', {
  defaultValue: '',
})


export interface AuthState{
  roles: Role[]
  token: string
  refreshToken: string
  user: User | null
}

const login=createAction('login')

const initialState: AuthState = {
  roles: [Role.User],
  token: '',
  refreshToken: '',
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    [login.type](state, { payload }) {
      const { token, refreshToken } = payload
      state.token = token
      state.refreshToken = refreshToken
      setTokenStorage(token)
      setRefreshTokenStorage(refreshToken)
    }
  }
})
export const {actions:authActions} =authSlice