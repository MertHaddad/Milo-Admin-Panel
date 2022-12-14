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
        first: (state)=> {state.value = "first name here!ð¦¸ââï¸"},
        second : (state) => {state.value = "second just landed!ð"},
        third : (state) => {state.value = "Look! we got the thirdðµï¸ââï¸"}
    }
})
export const {first,second,third} = nameSlice.actions
export const selectName = (state: RootState) => state.name.value

export default nameSlice.reducer