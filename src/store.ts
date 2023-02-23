import {configureStore} from '@reduxjs/toolkit';
import {vesselsApi} from './services/api' ;

export const store = configureStore({
    reducer: {
        [vesselsApi.reducerPath]: vesselsApi.reducer,        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(vesselsApi.middleware)
})

