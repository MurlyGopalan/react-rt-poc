import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Vessel } from '../models/vessel'


export const vesselsApi = createApi({
    reducerPath: 'vesselsApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:7071/api/"}),   
    endpoints: (builder) => ({
        vessels: builder.query<Vessel[], void>({
            query: ()=> 'vessels',

        })
    }) 

})

export const  {useVesselsQuery}  = vesselsApi;
