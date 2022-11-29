import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/store'

interface DataState {
    value : string
}

const initialState : DataState = {
    value : "x"
}

export const dataSlice = createSlice({
    name : "data",
    initialState,
    reducers:{
        first: (state,action: PayloadAction<string>)=> {state.value = action.payload},
        second : (state,action: PayloadAction<string>) => {state.value = action.payload},
        third : (state,action: PayloadAction<string>) => {state.value = action.payload}
    }
})
export const {first : f,second:s,third:t} = dataSlice.actions
export const selectData = (state: RootState) => state.data.value

export default dataSlice.reducer