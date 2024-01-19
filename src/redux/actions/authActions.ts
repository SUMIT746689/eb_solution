import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { API_KEY } from '../../secret'
import { getCookie } from '../../utils/getCookie'

export type Payload = {
    email: string
    password: string
}

type Error = string;

export const registerUser = createAsyncThunk<void, Payload, { rejectValue: Error }>('auth/register', async (data: Payload, thunkAPI) => {
    try {
        const { email, password } = data;
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        await axios.post(`${API_KEY}/register`, { email, password }, config)
            .then(({ data }) => {
                if (!data?.token) throw new Error("failed to registration")
                document.cookie = "auth=" + data.token
            })
            .catch(({ response }) => {
                const { data } = response || {}
                const { error } = data || {}
                if (error) throw new Error(error);
                throw new Error("registration failed")
            })
    } catch (error:any) {
        // return custom error message from backend if present
        if (error.response && error.response.data.message) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        } else {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
}
)

export const loginUser = createAsyncThunk<void, Payload, { rejectValue: Error }>('auth/register', async (data: Payload, thunkAPI) => {
    try {
        const { email, password } = data;
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        await axios.post(`${API_KEY}/login`, { email, password }, config)
            .then(({ data }) => {
                if (!data?.token) throw new Error("failed to registration")
                document.cookie = "auth=" + data.token
            })
            .catch(({ response }) => {
                const { data } = response || {}
                const { error } = data || {}
                if (error) throw new Error(error);
                throw new Error("login failed")
            })
    } catch (error:any) {
        console.log({ error })
        // return custom error message from backend if present
        if (error.response && error.response.data.message) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        } else {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
}
)

export const authUser = createAsyncThunk<void, void, { rejectValue: Error }>('auth/register', async (data: void, thunkAPI) => {
    try {
        const cookie = getCookie("auth");
        if (!cookie) return thunkAPI.rejectWithValue("unauthenticated user")
    } catch (error:any) {
        // return custom error message from backend if present
        if (error.response && error.response.data.message) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        } else {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
}
)