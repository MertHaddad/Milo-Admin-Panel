import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/store'

interface NameState {
    value : string
}

const initialState : NameState = {
    value : "null"
}

export const nameSlice = createSlice({
    name : "name",
    initialState,
    reducers:{
        first: (state)=> {state.value = "first name here!🦸‍♂️"},
        second : (state) => {state.value = "second just landed!🐈"},
        third : (state) => {state.value = "Look! we got the third🕵️‍♀️"}
    }
})
export const {first,second,third} = nameSlice.actions
export const selectName = (state: RootState) => state.name.value

export default nameSlice.reducer