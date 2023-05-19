import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {authSlice} from '@/features/auth/auth.slice' 
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
const store = configureStore({
  reducer: {
    [authSlice.name]:authSlice.reducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
//封装的 两个自定义hook
//参考文章https://juejin.cn/post/7143922491629502500
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store