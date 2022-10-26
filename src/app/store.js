import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/Card'

export default configureStore({
  reducer: {
    state: counterReducer,
  },
})