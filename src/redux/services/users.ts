import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetUsersType } from '../../types/userTypes'
import { API_KEY } from '../../secret'


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_KEY }),
    endpoints: (builder) => ({
        getUsers: builder.query<GetUsersType, number>({
            query: (pageNumber) => `users?page=${pageNumber}`,
        }),
    }),
})

export const { useGetUsersQuery } = usersApi