import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
    
    export const shazamCoreApi = createApi({
        reducerPath: "shazamCoreApi",
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: () => {
                headers.set('X-RapidAPI-Key', 'c21f9797c3mshc39cf614e54c994p159b30jsn31f87ec805d6');

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: '/charts/world'}),
        })
    }); 

    export const {
        useGetTot
    }