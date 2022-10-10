import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./features/auth/authSlice";

// rtk-query apis
import { authApi } from "./features/auth/authQuery";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        
        [authApi.reducerPath]: authApi.reducer
    },
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
        )
})
