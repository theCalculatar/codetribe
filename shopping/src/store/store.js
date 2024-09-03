import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counterSlice'
import shoppingReducer from './shoppingSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shopping: shoppingReducer,
  },
})