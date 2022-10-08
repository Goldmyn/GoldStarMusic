import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c21f9797c3mshc39cf614e54c994p159b30jsn31f87ec805d6',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    
    export const shazamCoreApi = createApi({
        reducerPath: "shazamCoreApi",
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: () => {

            }
        }),
    }); 