import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from '../actions/authActions'

interface authUser {
    loading: boolean
    userInfo: any,
    userToken: null | string
    error: null | string,
    success: boolean,
}

const initialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
} as authUser

const authUserLoginSlice_ = createSlice({
    name: 'authUser/login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true
            state.success = false
            state.error = null
        })
        builder.addCase(loginUser.fulfilled, (state) => {
            state.loading = false
            state.success = true
        })
        builder.addCase(
            loginUser.rejected, (state, { payload }) => {
                state.loading = false
                //@ts-ignore
                state.error = payload
            }
        )
    }
})


export const authUserLoginSlice = authUserLoginSlice_.reducer

