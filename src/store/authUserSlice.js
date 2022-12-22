import { createSlice } from '@reduxjs/toolkit';

const authUserSlice = createSlice({
    name: 'auth',
    initialState:{
        controlAuth: false
    },

    reducers:{
        activeControlAuth(state, action){
            state.controlAuth = action.payload
        }
    }
})

export const {activeControlAuth} = authUserSlice.actions;
export default authUserSlice.reducer