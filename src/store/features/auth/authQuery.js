import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../../utils/constants/api-constants";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    tagTypes: ["Courses"],
    endpoints: (builder) => ({
        getAllCourses: builder.query({
            query: (page) => `/api/courses/list/?${page}`,
        }),
        getFilteredCourses: builder.query({
            query: (params) => `/api/courses/filter/${params}`
        }),
    })
})

export const { useGetAllCoursesQuery, useLazyGetFilteredCoursesQuery, useLazyGetAllCoursesQuery } = authApi;
