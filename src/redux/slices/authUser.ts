import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from '../actions/authActions'

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

const authUserRegisterSlice_ = createSlice({
    name: 'authUser/register',
    initialState,
    reducers: {
        // authPending(state) {
        //     state.loading = true
        //     state.success = false
        //     state.error = null
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true
            state.success = false
            state.error = null
        })
        builder.addCase(registerUser.fulfilled, (state) => {
            state.loading = false
            state.success = true
        })
        builder.addCase(
            registerUser.rejected, (state, { payload }) => {
                state.loading = false
                // @ts-ignore
                state.error = payload
            }
        )
    }
})

const authUserLoginSlice_ = createSlice({
    name: 'authUser/login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true
            state.success = false
            state.error = null
        })
        builder.addCase(registerUser.fulfilled, (state) => {
            state.loading = false
            state.success = true
        })
        builder.addCase(
            registerUser.rejected, (state, { payload }) => {
                state.loading = false
                //@ts-ignore
                state.error = payload
            }
        )
    }
})

const authUserSlice_ = createSlice({
    name: 'authUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true
            state.success = false
            state.error = null
        })
        builder.addCase(registerUser.fulfilled, (state) => {
            state.loading = false
            state.success = true
        })
        builder.addCase(
            registerUser.rejected, (state, { payload }) => {
                state.loading = false
                //@ts-ignore
                state.error = payload
            }
        )
    }
})


export const authUserRegisterSlice = authUserRegisterSlice_.reducer
export const authUserLoginSlice = authUserLoginSlice_.reducer
export const authUserSlice = authUserSlice_.reducer

