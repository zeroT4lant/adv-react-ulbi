import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../models/IPost'

//RTKQuery
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:7000"}),//https://jsonplaceholder.typicode.com
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        fetchAllPosts: builder.query<IPost[],number>({
            query: (limit : number = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit//прописали параметр
                }
            }),
            providesTags: result => ['Post']//работает с тэгом пост
        }),
        createPost: builder.mutation<IPost,IPost>({
            query: (post) => ({
                url: `/posts`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']//при создании поста данные становятся более не актуальными, надо обновить
        }),
        updatePost: builder.mutation<IPost,IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: builder.mutation<IPost,IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        })
    }),
})