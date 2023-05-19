import { Role } from './constant'

// rtk
export interface User {
  id: number
  phone: string
  avatar?: string
  username: string
  email: string
  roles: Role[]
}
export interface TokenPayload {
  token: string
  refreshToken: string
}
