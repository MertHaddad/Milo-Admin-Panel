import { configureStore } from '@reduxjs/toolkit'
// ...
import counterSlice from '../features/counterSlice'
import nameSlice from '../features/nameSlice'
import dataSlice from '../features/dataSlice'

const store = configureStore({
  reducer: {
    counter : counterSlice,
    name : nameSlice,
    data : dataSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store